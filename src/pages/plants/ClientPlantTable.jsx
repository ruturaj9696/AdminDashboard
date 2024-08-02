import React, { useState, useEffect, useCallback } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { debounce } from "lodash";
import { FaSolarPanel } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import profile from "../../assets/profile.svg";
import CrateClientForm from "../../components/plant/CrateClientForm";
import { useNavigate } from "react-router-dom";
import UpdateClientInformation from "../../components/plant/UpdateClientInformation";
import PlantInformationpopup from "../../components/plant/PlantInformationpopup";

const clients = [
  {
    id: "#PVC123",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID1",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID2",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID3",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID4",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID5",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Shrinivas Deshmukh",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Shrinivas Deshmukh",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Swapnil borude",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Swapnil borude",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Swapnil borude",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Swapnil borude",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Swapnil borude",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC98",
    name: "Swapnil borude",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
  {
    id: "#PVC123",
    name: "Swapnil ",
    contact: "234567890",
    email: "Shrinivas@example.com",
    adminReference: "admin@example.com",
    noOfPlants: 4,
    imageUrl: "https://via.placeholder.com/150",
    plants: [
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
      {
        id: "PID123",
        name: "Plant_123",
        location: "Pune",
        capacity: 2000,
        inverterCapacity: 2000,
        shrinvas: "demon",
      },
    ],
  },
];

const ClientPlantTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [visibleClient, setVisibleClient] = useState(null);
  const [isCreateclientOpen, setIsCreateclientOpen] = useState(false);
  const [isEditOpen, setIsisEditOpenOpen] = useState(false);
  const [isPlantInformationOpen, setIsPlantInformationOpen] = useState(false);
  const toggleDropdown = (clientId) => {
    setVisibleClient(visibleClient === clientId ? null : clientId);
  };

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

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      client.contact.includes(debouncedQuery) ||
      client.email.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      client.adminReference.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const openModal = () => {
    setIsCreateclientOpen(true);
  };
  const closeModal = () => {
    setIsCreateclientOpen(false);
  };

  const openModaledit = () => {
    setIsisEditOpenOpen(true);
  };
  const closeModaledit = () => {
    setIsisEditOpenOpen(false);
  };

  const openplantInformation = () => {
    setIsPlantInformationOpen(true);
  };
  const closeplantInformation = () => {
    setIsPlantInformationOpen(false);
  };
  const Navigate = useNavigate();
  return (
    <div className="px-8 bg-white rounded-lg ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
        <h2 className="text-xl font-bold mb-4 lg:mb-0">Client/Plant Table</h2>
        <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-2"></div>
      </div>
      <div className="flex justify-between my-2 mb-5">
        <button
          onClick={openModal}
          className="  text-[#56BA28] border border-[#56BA28] px-4 py-2 rounded-lg"
        >
          + New Clients
        </button>
        <div className=" bg-red-50 w-full lg:w-64">
          <input
            type="text"
            placeholder="Search here"
            className="border border-[#56BA28] rounded-lg px-4 py-2 w-full focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <IoIosSearch />
          </button>
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
              <th className="py-2 px-4 border-b text-center">No of plants</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, index) => (
              <React.Fragment key={index}>
                <tr
                  className="hover:bg-gray-100"
                  onClick={() => toggleDropdown(client.id)}
                >
                  <td className="py-2 px-4 border-b">{client.id}</td>
                  <td className="py-2 px-4 border-b flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src={profile}
                      alt="Client"
                    />
                    {client.name}
                  </td>
                  <td className="py-2 px-4 border-b">{client.contact}</td>
                  <td className="py-2 px-4 border-b">{client.email}</td>
                  <td className="py-2 px-4 border-b">
                    {client.adminReference}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {client.noOfPlants}
                  </td>
                  <td className="py-2 px-4 border-b flex space-x-2 justify-center">
                    <button
                      onClick={() => {
                        openModaledit();
                      }}
                    >
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                {visibleClient === client.id && (
                  <tr>
                    <td colSpan="7" className="p-0">
                      <table className="min-w-full bg-gray-50">
                        <thead>
                          <tr>
                            <th className="py-2 px-4 bg-gray-200 border text-start">
                              Plant ID
                            </th>
                            <th className="py-2 px-4 bg-gray-200 border text-start">
                              Plant Name
                            </th>
                            <th className="py-2 px-4 bg-gray-200 border text-start">
                              Location
                            </th>
                            <th className="py-2 px-4 bg-gray-200 border text-start">
                              Plant Capacity
                            </th>
                            <th className="py-2 px-4 bg-gray-200 border text-start">
                              Inverter Capacity
                            </th>
                            <th className="py-2 px-4 bg-gray-200 border text-start">
                              Plant Layout
                            </th>
                            <th className="py-2 px-4 bg-gray-200 border text-start">
                              Plant Layout
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {client.plants.map((plant) => (
                            <tr key={plant.id}>
                              <td className="py-2 px-4 border">{plant.id}</td>
                              <td className="py-2 px-4 border  flex ">
                                <FaSolarPanel className="text-[#56BA28] mt-1 m-1" />
                                {plant.name}
                              </td>
                              <td className="py-2 px-4 border">
                                {plant.location}
                              </td>
                              <td className="py-2 px-4 border">
                                {plant.capacity}
                              </td>
                              <td className="py-2 px-4 border">
                                {plant.inverterCapacity}
                              </td>
                              <td
                                className="py-2 px-4 border cursor-pointer"
                                onClick={() => {
                                  Navigate("/plant-layout");
                                }}
                              >
                                View Layout
                              </td>
                              <td className="py-2 px-4 flex justify-center">
                                <button
                                  className=" mx-2 cursor-pointer"
                                  onClick={openplantInformation}
                                >
                                  <BsThreeDotsVertical />
                                </button>
                                <button className=" mx-2 cursor-pointer">
                                  <CiEdit />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {filteredClients.length === 0 && (
          <div className="text-center py-4">No clients found.</div>
        )}
      </div>
      <div>
        {isCreateclientOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-md  mx-auto">
              <div className="flex justify-end font-bold">
                <button onClick={closeModal} className="text-gray-500">
                  &times;
                </button>
              </div>
              <CrateClientForm />
            </div>
          </div>
        )}
        {isEditOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-md  mx-auto">
              <div className="flex justify-end font-bold">
                <button onClick={closeModaledit} className="text-gray-500">
                  &times;
                </button>
              </div>
              <UpdateClientInformation />
            </div>
          </div>
        )}
        {isPlantInformationOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-md  mx-auto">
              <div className="flex justify-end font-bold">
                <button onClick={closeplantInformation} className="text-gray-500">
                  &times;
                </button>
              </div>
              <PlantInformationpopup />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPlantTable;
