import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileDetail = () => {
  const { id } = useParams(); 
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://api.eduquest.com/profile/${id}`);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-detail container">
      <h1>{profile.name}</h1>
      <p>{profile.role === "student" ? "Student Profile" : "Teacher Profile"}</p>
      <div className="profile-info">
        <img
          src={profile.profilePicture}
          alt={`${profile.name}'s profile`}
          className="profile-img"
        />
        <div className="profile-description">
          <h3>About</h3>
          <p>{profile.bio}</p>
          <h3>Contact Information</h3>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>

          {profile.role === "teacher" && (
            <>
              <h3>Courses Taught</h3>
              <ul>
                {profile.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </>
          )}

          {profile.role === "student" && (
            <>
              <h3>Enrolled Courses</h3>
              <ul>
                {profile.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
