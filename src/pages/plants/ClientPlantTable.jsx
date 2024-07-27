import React, { useState, useEffect, useCallback } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { debounce } from 'lodash';

const clients = [
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Shinde',
    contact: '234567890',
    email: 'client1@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'ruturajrao@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
  {
    id: '#PVC123',
    name: 'Ruturaj Deshmukh',
    contact: '234567890',
    email: 'client@example.com',
    adminReference: 'admin@example.com',
    noOfPlants: 4,
    imageUrl: 'https://via.placeholder.com/150'
  },
  
];

const ClientPlantTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((query) => {
      setDebouncedQuery(query);
    }, 300),
    []
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
    client.contact.includes(debouncedQuery) ||
    client.email.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
    client.adminReference.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-white rounded-lg ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
        <h2 className="text-xl font-bold mb-4 lg:mb-0">Client/Plant Table</h2>
        <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            + New Clients
          </button>
          <div className="relative w-full lg:w-64">
            <input
              type="text"
              placeholder="Search here"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full lg:w-auto focus:outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-400">
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Client ID</th>
              <th className="py-2 px-4 border-b text-left">Client Name</th>
              <th className="py-2 px-4 border-b text-left">Contact</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Admin Reference</th>
              <th className="py-2 px-4 border-b text-left">No of plants</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{client.id}</td>
                <td className="py-2 px-4 border-b flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={client.imageUrl}
                    alt="Client"
                  />
                  {client.name}
                </td>
                <td className="py-2 px-4 border-b">{client.contact}</td>
                <td className="py-2 px-4 border-b">{client.email}</td>
                <td className="py-2 px-4 border-b">{client.adminReference}</td>
                <td className="py-2 px-4 border-b">{client.noOfPlants}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button className="text-blue-500">
                    <FiEdit />
                  </button>
                  <button className="text-red-500">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredClients.length === 0 && (
          <div className="text-center py-4">
            No clients found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPlantTable;
