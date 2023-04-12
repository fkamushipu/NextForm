import { useState } from 'react';
import { submitForm } from '@/pages/api/_formsubmission';

const NextForm = () => {

  // Set the values from the form to their respective fields.
  
  const [fullName, setFullName] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // SubmitForm function in _formsubmission
    await submitForm(fullName, cellNumber, email, password);

  };

  return (
    <div className="flex justify-center">
    <form onSubmit={handleSubmit} className=" rounded-sm shadow-lg w-96  px-8 py-3">
      <div className="mb-6">
        <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2 text-xs">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="cellNumber" className="block text-gray-700 font-semibold mb-2 text-xs">
          Cell Number
        </label>
        <input
          type="tel"
          id="cellNumber"
          name="cellNumber"
          value={cellNumber}
          onChange={(e) => setCellNumber(e.target.value)}
          className="shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-xs">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 text-xs">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
        </form>
      </div>
);
};

export default NextForm;        
