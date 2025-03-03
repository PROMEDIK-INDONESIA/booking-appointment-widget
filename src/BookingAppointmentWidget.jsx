import React, { useState, useEffect } from "react";

const BookingAppointmentWidget = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser({
          name: data.name,
          email: data.email,
          avatar: `https://i.pravatar.cc/150?u=${data.email}`,
        });
      });
  }, []);

  if (!user) return <p>Loading user...</p>;

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      maxWidth: "250px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    }}>
      <img src={user.avatar} alt="User Avatar" style={{ borderRadius: "50%", marginBottom: "10px" }} />
      <h3 style={{ margin: "5px 0" }}>{user.name}</h3>
      <p style={{ margin: "5px 0", color: "#666" }}>{user.email}</p>
    </div>
  );
};

export default BookingAppointmentWidget;
