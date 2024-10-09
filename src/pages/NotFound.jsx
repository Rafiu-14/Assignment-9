import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
