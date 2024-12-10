import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AdminTable from "./AdminTable";
import AdminEditModal from "./AdminEditModal";
import AdminAddModal from "./AdminAddModal";

const AdminsListView = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newAdminData, setNewAdminData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const getAdmins = async () => {
    try {
      const response = await axios.get("https://localhost:7081/alladmin", {
        withCredentials: true,
      });
      setAdmins(response.data);
    } catch (error) {
      setError(error.message);
      console.error("There was an error fetching the admin data!", error);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`https://localhost:7081/deleteadmin?id=${id}`, {
        withCredentials: true,
      });
      setAdmins(admins.filter((admin) => admin.id !== id));
    } catch (error) {
      setError(error.message);
      console.error("There was an error deleting the admin!", error);
    }
  };

  const addAdmin = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7081/addadmin",
        newAdminData,
        {
          withCredentials: true,
        }
      );
      setAdmins([...admins, response.data]);
      setShowAddModal(false);
      setNewAdminData({
        username: "",
        email: "",
        password: "",
        phone: "",
      });
    } catch (error) {
      setError(error.message);
      console.error("There was an error adding the admin!", error);
    }
  };

  const updateAdmin = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7081/updateadmin`,
        selectedAdmin,
        {
          withCredentials: true,
        }
      );
      setAdmins(admins.map(admin => (admin.id === selectedAdmin.id ? response.data : admin)));
      setShowEditModal(false);
      setSelectedAdmin(null);
    } catch (error) {
      setError(error.message);
      console.error("There was an error updating the admin!", error);
    }
  };

  useEffect(() => {
    getAdmins();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (showEditModal) {
      setSelectedAdmin({ ...selectedAdmin, [name]: value });
    } else {
      setNewAdminData({ ...newAdminData, [name]: value });
    }
  };

  const handleEditClick = (admin) => {
    setSelectedAdmin(admin);
    setShowEditModal(true);
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h2 style={{ color: "blue", textAlign: "center" }}>Admins List</h2>
      
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          Add Admin
        </Button>
      </div>
      
      <AdminTable admins={admins} onDelete={deleteAdmin} onEdit={handleEditClick} />

      <AdminAddModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        admin={newAdminData}
        onChange={handleInputChange}
        onSubmit={addAdmin}
      />

      <AdminEditModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        admin={selectedAdmin}
        onChange={handleInputChange}
        onSubmit={updateAdmin}
      />
    </div>
  );
};

export default AdminsListView;
