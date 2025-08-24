import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="*" element={<p>Select a section</p>} />
      </Routes>
    </div>
  );
};

export default Profile;
