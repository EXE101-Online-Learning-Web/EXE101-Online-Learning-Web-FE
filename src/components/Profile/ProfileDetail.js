import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../public/assets/css/profile.css";
import PageLayout from "../Common/Page/PageLayout";

const ProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("courses"); // Tab mặc định

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://localhost:7091/api/Auth/profile/${id}`);
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
  if (!profile) return <div className="profile-container">Profile not found</div>;

  return (
    <PageLayout>
      <div className="profile-container">
        {/* Cover Photo */}
        <div className="cover-photo">
          <div className="cover-overlay"></div>
          <img src={profile.profilePicture || "../img/client-Avatar/clientAvatar-1.jpg"} alt="Profile" className="profile-avatar" />
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <h1 className="profile-name">{profile.name}</h1>
          <div className="profile-info">
            <p>Email: {profile.email || "Not provided"}</p>
            <p>Phone: {profile.phone || "Not provided"}</p>
            <p>{profile.bio || "No bio available"}</p>
          </div>
          <button className="btn-edit">Edit Profile</button>
        </div>

        {/* Navigation Tabs */}
        <div className="profile-tabs">
          <div className={`profile-tab ${activeTab === "courses" ? "active" : ""}`} onClick={() => setActiveTab("courses")}>
            Courses
          </div>
          <div className={`profile-tab ${activeTab === "certificates" ? "active" : ""}`} onClick={() => setActiveTab("certificates")}>
            Certificates
          </div>
          <div className={`profile-tab ${activeTab === "activity" ? "active" : ""}`} onClick={() => setActiveTab("activity")}>
            Recent Activity
          </div>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "certificates" && <div>📜 Certificates List (Coming soon...)</div>}

          {activeTab === "courses" && (
            <div>
              <h3>📚 Enrolled Courses</h3>
              <ul>
                {profile.courses && profile.courses.length > 0 ? (
                  profile.courses.map((course, index) => <li key={index}>{course}</li>)
                ) : (
                  <p>No courses enrolled</p>
                )}
              </ul>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="recent-activity">
              <h3>📌 Recent Activity</h3>
              <p>🎓 Completed "JavaScript Basics" Course</p>
              <p>📜 Earned "React Developer" Certificate</p>
              <p>📝 Enrolled in "Advanced Python Programming"</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfileDetail;
