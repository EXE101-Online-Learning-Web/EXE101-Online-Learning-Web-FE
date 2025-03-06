import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../../public/assets/css/profile.css";
import PageLayout from "../../Common/Page/PageLayout";
import { auth } from "../../../config/firebaseConfig";
import SweetAlert from "sweetalert";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { FaCamera } from "react-icons/fa";

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("courses"); // Tab mặc định
  const [role, setRole] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImage(file);
    uploadFile(file);
  };

  const uploadFile = (file) => {
    setUploading(true);
    const storage = getStorage();
    const storageRef = ref(storage, `profile-images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.error("Upload failed:", error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setDownloadURL(downloadURL);
        setUploading(false);
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: downloadURL,
        }));

        try {
          const response = await fetch(
            "https://localhost:7091/api/Auth/profile",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                AccountId: id,
                avatar: downloadURL,
              }),
            }
          );

          localStorage.setItem("avatar", downloadURL);

          if (!response.ok) {
            throw new Error("Failed to update avatar");
          }

          window.dispatchEvent(new Event("avatarUpdated"));

          setTimeout(() => {
            SweetAlert(
              "Updating avatar successfully!",
              "Your avatar has been updated.",
              "success"
            );
          }, 500);
        } catch (error) {
          console.error("Error updating profile:", error);
        }
      }
    );
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role) {
      setRole(role);
    }
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://localhost:7091/api/Auth/profile/${id}`
        );
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) return <div className="profile-container">Loading...</div>;
  if (!profile)
    return <div className="profile-container">Profile not found</div>;

  return (
    <PageLayout>
      <div className="profile-container">
        {/* Cover Photo */}
        <div className="cover-photo">
          <div className="cover-overlay"></div>
          <img
            src={
              downloadURL ||
              profile.avatar ||
              "../img/client-Avatar/clientAvatar-1.jpg"
            }
            alt="Profile"
            className="profile-avatar"
            onClick={() => document.getElementById("fileInput").click()}
          />
          <label htmlFor="fileInput" className="profile-avatar-upload">
            <FaCamera className="camera-icon" />
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <h1 className="profile-name">{profile.name}</h1>
          <div className="profile-info">
            <p>Email: {profile.email || "Not provided"}</p>
            <p>Phone: {profile.phone || "Not provided"}</p>
            <p>{profile.bio || "No bio available"}</p>
          </div>

          {/* Hiển thị nút "Create Course" nếu là giáo viên */}
          {role === "Teacher" && (
            <button
              className="btn-create-course"
              onClick={() => navigate("/course/create")}
            >
              Create Course
            </button>
          )}
        </div>

        {/* Nếu role là "student", hiển thị tabs */}
        {role === "Student" && (
          <>
            {/* Navigation Tabs */}
            <div className="profile-tabs">
              <div
                className={`profile-tab ${
                  activeTab === "courses" ? "active" : ""
                }`}
                onClick={() => setActiveTab("courses")}
              >
                Courses Enrolled
              </div>
              <div
                className={`profile-tab ${
                  activeTab === "certificates" ? "active" : ""
                }`}
                onClick={() => setActiveTab("certificates")}
              >
                Certificates
              </div>
            </div>

            {/* Tab Content */}
            <div className="profile-content">
              {activeTab === "certificates" && (
                <div>📜 Certificates List (Coming soon...)</div>
              )}

              {activeTab === "courses" && (
                <div>
                  <h3>📚 Enrolled Courses</h3>
                  <ul>
                    {profile.courses && profile.courses.length > 0 ? (
                      profile.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))
                    ) : (
                      <p>No courses enrolled</p>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default ProfileDetail;
