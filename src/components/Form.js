import React, { useState } from 'react';
import UserService from '../service/UserService';

function Form() {
  const [createUser, setCreateUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCreateUser({ ...createUser, [e.target.name]: value });
  }

  const saveUser = (e) => {
    e.preventDefault();
    UserService.saveUser(createUser)
      .then((response) => {
        console.log(response);
        // Reset form fields after successful save
        setCreateUser({
          id: "",
          name: "",
          email: "",
        });
      })
      .catch((error) => {
        console.log('Error saving user', error);
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full" onSubmit={saveUser}>
        <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">User Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='id'
            type="number"
            value={createUser.id}
            onChange={handleChange}
            placeholder="Enter your ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='name'
            type="text"
            value={createUser.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='email'
            type="email"
            value={createUser.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
