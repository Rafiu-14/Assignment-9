import { Link, useParams } from 'react-router-dom';
import { estatesData } from '../Data/estatesData'; 
import Navbar from '../components/Navbar';

const EstateDetails = () => {
  const { id } = useParams();
  const estate = estatesData.find((estate) => estate.id === parseInt(id)); 

  if (!estate) {
    return <div>
        <h1 className='font-extrabold text-9xl text-center '>Estate Not Found</h1>
        <p className='text-center '>The property that you have find us in site, It already have Sale/Rent.</p>
        <Link to="/" className="text-blue-500 text-center">Go back to Home</Link>
    </div>; 
  }

  return (
    <div className="container mx-auto p-8">
    <Navbar></Navbar>
      <div>
      <h1 className="text-4xl text-center font-bold mb-4">{estate.estate_title}</h1>
      <img src={estate.image} alt={estate.estate_title} className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="text-gray-700 mb-4">{estate.description}</p>
      <p className="text-xl font-bold text-green-800">Price: {estate.price}</p>
      <p className="text-md text-gray-600"><span className='font-bold'>Location:</span> {estate.location}</p>
      <p className="text-md text-gray-600"><span className='font-bold'>Area:</span> {estate.area}</p>
      <p className="text-md text-gray-600"><span className='font-bold'>Status:</span> {estate.status}</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Facilities</h3>
        <ul className="list-disc ml-5">
          {estate.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default EstateDetails;
