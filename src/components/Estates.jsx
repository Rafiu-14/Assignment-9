// src/components/Estates.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { estatesData } from '../Data/estatesData';

const Estates = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  const handleViewProperty = (id) => {
    navigate(`/estate/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mt-10 mb-4 underline">Featured Estates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {estatesData.map((estate, index) => (
          <div
            key={estate.id}
            className="border rounded shadow-lg p-4"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={estate.image}
              alt={estate.estate_title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{estate.estate_title}</h3>
            <p>{estate.description}</p>
            <p className="font-bold">{estate.price}</p>
            <button
              onClick={() => handleViewProperty(estate.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 hover:font-bold transition-all"
            >
              View Property
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estates;
