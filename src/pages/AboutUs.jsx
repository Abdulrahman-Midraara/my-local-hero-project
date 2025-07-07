import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const team = [
    {
      name: "Maria Yusuf",
      email: "maria@example.com",
      role: "Team Leader & Frontend",
      img: "/public/default-user.jpg"
    },
    {
      name: "Abdulrahman Ali",
      email: "sabrihse1@hotmail.com",
      role: "Backend & DevOps",
      img: "/public/Abdulrahman Ali - Image.jpg"
    },
    {
      name: "Abdifatah Omar",
      email: "abdfatahumer@gmail.com",
      role: "API Integration",
      img: "/public/default-user.jpg"
    },
    {
      name: "Abdullahi Mohamed",
      email: "abdullahi@example.com",
      role: "Testing & QA",
      img: "/public/default-user.jpg"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-orange-600">
        About Local Heroes Project
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Local Heroes is a community recognition platform built by passionate developers during our bootcamp.
        Our mission is to highlight everyday people making a positive difference in their communities.
      </p>

      <h2 className="text-2xl font-semibold mb-6 text-center">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{member.role}</p>
            <a href={`mailto:${member.email}`} className="text-xs text-orange-500 hover:underline">
              {member.email}
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/" className="text-orange-600 hover:underline">
          ← Back to Heroes Page 
        </Link>
      </div>
    </div>
  );
};

export default AboutUs; 