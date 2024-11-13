import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


const Card = ({ name, imageSrc, designation, description, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-6">
      <img
        src={imageSrc}
        alt={name}
        className="w-40 h-40 object-cover rounded-full mx-auto cursor-pointer transition-transform duration-300 transform hover:scale-105"
        onClick={handleOpen}
      />
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center">
        {name}
      </h2>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
          onClick={handleClose}
        >
          <div
            className="bg-white p-8 rounded-lg relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={imageSrc}
                alt={name}
                className="w-48 h-48 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
                <p className="text-xl text-gray-600 mt-2">{designation}</p>
                <p className="mt-4 text-gray-700">{description}</p>
                <div className="mt-6 flex gap-4">
                  {links.twitter && (
                    <a
                      href={links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FaTwitter size={24} />
                    </a>
                  )}
                  {links.linkedin && (
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {links.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
