import React from "react";

export const List = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace("/");
  };
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={handleSubmit}>Logout</button>
      </nav>
      <main>list has nothing values here.</main>
    </div>
  );
};
