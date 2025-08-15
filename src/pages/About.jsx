import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
    <main className="w-full">
      {/* Hero */}
      <section className="bg-black text-white py-24 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center py-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
            Our Story & The People Behind Synapse
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mt-6">
            From a small idea to a big mission—meet the team making it happen.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light">Our Mission</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We built Synapse to simplify connections. In a world full of noise,
            we believe networking should be as simple as a single scan.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-16">
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 object-cover mx-auto border border-gray-200"
                />
                <h3 className="text-xl font-semibold mt-6">{member.name}</h3>
                <p className="text-cyan-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
                <div className="flex justify-center gap-4 mt-4 text-lg text-gray-500">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="hover:text-cyan-600" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="hover:text-cyan-600" />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="hover:text-cyan-600" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Timeline */}
      <section className="bg-black text-white py-20 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-16">
            Our Journey
          </h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-xl font-semibold">2025 - July</h3>
              <p className="text-gray-400 mt-2">
                Synapse was founded with the idea of replacing business cards
                forever.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">2025 - September</h3>
              <p className="text-gray-400 mt-2">
                Released first beta, onboarded 500+ early users, and refined the
                product.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">2025 - December</h3>
              <p className="text-gray-400 mt-2">
                Expanded features, launched public version, and started global
                roll-out.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-24 sm:py-28 px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-light">
          Join Us On This Journey
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          TapCard is just getting started—be part of the future of networking.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-cyan-600 hover:bg-blue-500 transition-colors duration-300 font-semibold text-white"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default AboutPage;
