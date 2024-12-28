import { useContext } from 'react';
import { UserContext } from '../Context/CreateContext';
import React from 'react';
import imgcoffee from '../assets/coffe.webp';
import imgtea from '../assets/Tea.webp';
import imgburger from '../assets/Burger.jpeg'

const projects = [
  { id: 1, img: imgcoffee, name: "Coffee", price: 10 },
  { id: 2, img: imgtea, name: "Tea", price: 5 },
  { id: 3, img: imgburger, name: "Chicken Burger", price: 25 },
];

const Main = () => {
  const { user, setUser } = useContext(UserContext);

  const handleOrder = (item) => {
    // Add the selected item and update the total
    setUser((prev) => ({
      items: [...prev.items, item],
      total: prev.total + item.price,
    }));
  };

  return (
    <div className=" text-black py-20" id="menu">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl text-gray-800 font-bold text-center mb-12">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg ">
              <img
                src={project.img}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl text-white font-bold mb-2">{project.name}</h3>
              <p className="text-white font-bold mb-4">${project.price}</p>
              <button
                onClick={() => handleOrder(project)}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
