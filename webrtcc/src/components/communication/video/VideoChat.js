import { useRef, useState } from "react";
import { firestore } from "../../../FirebaseConfig";
import "./VideoChat.css";

function Videos({ mode, callId, setPage }) {
  const [webcamActive, setWebcamActive] = useState(false);
  const [roomId, setRoomId] = useState(callId);

  const localRef = useRef();
  const remoteRef = useRef();

  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  const setupSources = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const pc = new RTCPeerConnection(servers);
      const localStream = new MediaStream();

      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream);
        localStream.addTrack(track);
      });

      localRef.current.srcObject = localStream;
      remoteRef.current.srcObject = new MediaStream();

      setWebcamActive(true);

      const callDoc =
        mode === "create"
          ? firestore.collection("calls").doc()
          : firestore.collection("calls").doc(callId);

      const offerCandidates = callDoc.collection("offerCandidates");
      const answerCandidates = callDoc.collection("answerCandidates");

      if (mode === "create") {
        setRoomId(callDoc.id);

        pc.onicecandidate = (event) => {
          event.candidate && offerCandidates.add(event.candidate.toJSON());
        };

        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);

        const offer = {
          sdp: offerDescription.sdp,
          type: offerDescription.type,
        };

        await callDoc.set({ offer });

        callDoc.onSnapshot((snapshot) => {
          const data = snapshot.data();
          if (!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
          }
        });

        answerCandidates.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const candidate = new RTCIceCandidate(change.doc.data());
              pc.addIceCandidate(candidate);
            }
          });
        });
      } else if (mode === "join") {
        pc.onicecandidate = (event) => {
          event.candidate && answerCandidates.add(event.candidate.toJSON());
        };

        const callData = (await callDoc.get()).data();
        const offerDescription = callData.offer;

        await pc.setRemoteDescription(
          new RTCSessionDescription(offerDescription)
        );

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
          type: answerDescription.type,
          sdp: answerDescription.sdp,
        };

        await callDoc.update({ answer });

        offerCandidates.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const data = change.doc.data();
              pc.addIceCandidate(new RTCIceCandidate(data));
            }
          });
        });
      }

      pc.onconnectionstatechange = (event) => {
        if (pc.connectionState === "disconnected") {
          hangUp();
        }
      };
    } catch (error) {
      console.error("Error setting up sources:", error);
    }
  };

  const hangUp = async () => {
    try {
      const pc = new RTCPeerConnection(servers);
      pc.close();

      if (roomId) {
        const roomRef = firestore.collection("calls").doc(roomId);

        const deleteCollection = async (collection) => {
          const querySnapshot = await collection.get();
          querySnapshot.forEach((doc) => doc.ref.delete());
        };

        await deleteCollection(roomRef.collection("answerCandidates"));
        await deleteCollection(roomRef.collection("offerCandidates"));

        await roomRef.delete();
      }

      window.location.reload();
    } catch (error) {
      console.error("Error hanging up:", error);
    }
  };

  return (
    <div className="videos">
      <div className="buttonsContainer">
        <button onClick={setupSources} className="start button">
          <p>Start</p>
        </button>
        <button
          onClick={hangUp}
          disabled={!webcamActive}
          className="hangup button"
        >
          <p>Hangup</p>
        </button>
        <div tabIndex={0} role="button" className="more button">
          <p>More</p>
        </div>
      </div>

      <video ref={localRef} autoPlay playsInline className="local" muted />
      <video ref={remoteRef} autoPlay playsInline className="remote" />
    </div>
  );
}

export default Videos;
