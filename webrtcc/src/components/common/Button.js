import React from "react";

export default function Button(props) {
  return (
    <button className="py-4 px-9 bg-green-700 rounded-2xl border-none text-lg text-white cursor">
      {props.Text} {/* Accessing the Text prop */}
    </button>
  );
}
