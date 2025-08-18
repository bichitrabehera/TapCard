import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaGlobe,
} from "react-icons/fa"; // social icons
import { MdCalendarToday } from "react-icons/md";

function UserProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(
          `https://tapcard-backend.onrender.com/api/user/api/user/profile/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error(err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-600">Loading...</h2>
      </div>
    );

  if (!profile)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-red-500">Profile not found</h2>
      </div>
    );

  // format join date (example: Aug 2025)
  const joinedDate = profile.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : null;

  // map icons dynamically
  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <FaInstagram className="text-pink-500" />;
      case "facebook":
        return <FaFacebook className="text-blue-600" />;
      case "github":
        return <FaGithub className="text-gray-800" />;
      default:
        return <FaGlobe className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10">
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
        {profile.username?.charAt(0).toUpperCase()}
      </div>

      {/* Username */}
      <h1 className="mt-4 text-2xl font-bold text-gray-900">
        @{profile.username}
      </h1>

      {/* Email */}
      <p className="text-gray-500">{profile.email}</p>

      {/* Bio */}
      {profile.bio && (
        <p className="mt-3 text-center text-gray-700 max-w-md">{profile.bio}</p>
      )}

      {/* Joined Date */}
      {joinedDate && (
        <div className="flex items-center gap-2 mt-4 text-gray-500">
          <MdCalendarToday className="text-gray-400" />
          <span>Joined {joinedDate}</span>
        </div>
      )}

      {/* Divider */}
      <div className="w-full max-w-md border-t border-gray-200 mt-6 mb-4"></div>

      {/* Social Links */}
      {profile.social_links?.length > 0 && (
        <div className="w-full max-w-md">
          <h3 className="uppercase text-gray-400 text-xs font-semibold mb-3">
            Connect
          </h3>
          <div className="space-y-3">
            {profile.social_links.map((link, i) => (
              <a
                key={i}
                href={link.link_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-3">
                  {getIcon(link.platform_name)}
                  <span className="capitalize text-gray-800 font-medium">
                    {link.platform_name}
                  </span>
                </div>
                <span className="text-gray-400">{">"}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
