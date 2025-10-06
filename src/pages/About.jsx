import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Navbar from "../Components/common/Navbar";

const team = [
  {
    name: "Chetan Chowdary",
    role: "Founder & CEO",
    bio: "Leads Synapse’s vision, strategy, and product innovation to revolutionize digital networking.",
    img: "/images/john.jpg",
    socials: { linkedin: "#", github: "#", instagram: "#" },
  },
  {
    name: "Chetas Matkhal",
    role: "Chief Marketing Officer (CMO)",
    bio: "Drives brand growth and marketing strategies to connect Synapse with a global audience.",
    img: "/images/john.jpg",
    socials: { linkedin: "#", github: "#", instagram: "#" },
  },
  {
    name: "Bichitra Behera",
    role: "Website & App Developer",
    bio: "Builds and optimizes Synapse’s high-performance website and mobile applications.",
    img: "/images/jane.jpg",
    socials: { linkedin: "#", github: "#", instagram: "#" },
  },
  {
    name: "Matharishwa S",
    role: "App Backend Designer",
    bio: "Designs and develops the backend systems powering Synapse’s mobile applications.",
    img: "/images/michael.jpg",
    socials: { linkedin: "#", github: "#", instagram: "#" },
  },
  {
    name: "Tisha",
    role: "UI/UX Designer",
    bio: "Crafts sleek, user-friendly designs to deliver an intuitive and engaging user experience.",
    img: "/images/michael.jpg",
    socials: { linkedin: "#", github: "#", instagram: "#" },
  },
];

const AboutPage = () => {
  return (
    <main className="bg-black text-white  flex flex-col">

      <div className="py-10 md:py-20 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col max-w-5xl mx-auto items-center justify-center text-center py-32 px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Our Story & The People Behind Synapse
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl">
            From a small idea to a big mission – meet the team making it happen.
          </p>
        </section>
      </div>

      {/* Mission Section */}
      <section className="bg-[#0A0A0A] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            We built Synapse to simplify connections. In a world full of noise,
            networking should be as simple as a single scan.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#030303] p-8 border border-[#ffffff40] shadow transition-transform transform hover:-translate-y-2"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 object-cover mx-auto border-1 border-cyan-500/60"
                />
                <h3 className="text-2xl font-bold mt-6">{member.name}</h3>
                <p className="text-cyan-400 font-medium mt-1">{member.role}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-6 mt-5 text-xl text-gray-400">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                      <FaLinkedin className="hover:text-cyan-400 transition-colors" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noreferrer">
                      <FaGithub className="hover:text-cyan-400 transition-colors" />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                      <FaInstagram className="hover:text-cyan-400 transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline Section */}
      <section className="bg-[#0A0A0A] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <ul className="space-y-12 border-l-2 border-cyan-500 pl-8">
            {[
              { date: "2025 - July", text: "Synapse was founded with the idea of replacing business cards forever." },
              { date: "2025 - September", text: "Coming Soon." },
              { date: "2025 - December", text: "Coming Soon." },
            ].map((item, idx) => (
              <li key={idx} className="relative">
                <span className="absolute -left-4 top-3 w-2 h-2 bg-cyan-500 rounded-full"></span>
                <h3 className="text-2xl font-semibold">{item.date}</h3>
                <p className="text-gray-400 mt-2">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
