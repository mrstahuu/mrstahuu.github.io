import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="stahuu_03.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover shadow-lg"
        />
        <div className="text-gray-400">
          <p className="text-lg mb-4">
            Hi! My name is Stanisław. I'm a front-end developer passionate about creating clean, user-friendly web interfaces using HTML, CSS, JS, PHP. I'm currently learning React, Express and Tailwind, I know Bootstrap well.
          </p>
          <p className="text-lg mb-4">
            I have strong experience working with databases (MySQL, PostgreSQL, MongoDB) and various content management systems (WordPress, Moodle, Joomla). I enjoy building efficient backends to support intuitive front-end experiences.
          </p>
          <p className="text-lg mb-4">
            I love combining beautiful design with practical functionality.  In my free time, I sail on my yacht.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/mrstahuu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
