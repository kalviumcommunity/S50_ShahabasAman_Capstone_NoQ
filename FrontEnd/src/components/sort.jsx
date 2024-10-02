import React, { useState, useEffect } from "react";
import pic from "../assets/carservice.png";
import gps from "../assets/gps.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import API_URI from "../../Env"

function Sort() {
  const { category } = useParams();
  const [filteredItems, setFilteredItems] = useState(null);
  const [cityFilter, setCityFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:2024/profile?category=${category}`)
      .then((response) => {
        const filteredServices = response.data.filter(
          (service) => service.category === category
        );
        setFilteredItems(filteredServices);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, [category]);

  const handleCityChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleSort = () => {
    if (cityFilter !== "" || ratingFilter !== "") {
      const newFilteredItems = filteredItems.filter((service) => {
        const matchesCity =
          cityFilter === "" ||
          service.location.toLowerCase().includes(cityFilter.toLowerCase());
        const matchesRating =
          ratingFilter === "" || service.rating === parseInt(ratingFilter);
        return matchesCity && matchesRating;
      });

      setFilteredItems(newFilteredItems);
    } else {
      axios
        .get(`http://localhost:2024/profile?category=${category}`)
        .then((response) => {
          const filteredServices = response.data.filter(
            (service) => service.category === category
          );
          setFilteredItems(filteredServices);
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
        });
    }
  };

  const renderServices = () => {
    if (!filteredItems || filteredItems.length === 0) {
      return (
        <p className="text-center text-gray-400 mt-8">
          No services available for this category.
        </p>
      );
    }

    return filteredItems.map((service) => (
      <div
        key={service._id}
        className="flex items-center justify-between mx-10 my-4 bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png"
            className="p-4 w-24 h-24 rounded-full object-cover"
            alt="Service"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {service.name}
            </h2>
            <p className="text-gray-500">@{service.username}</p>
            <span className="flex items-center mt-2 text-gray-600">
              <img src={gps} className="w-5 h-5 mr-2" alt="Location" />
              <p>{service.location}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end p-4">
          <div className="flex items-center text-yellow-500">
            <p className="mr-1 text-lg font-semibold">{service.rating}</p>
            <p className="text-sm">/5</p>
          </div>
          <Link
            to={`/profile/${service.username}`}
            className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Check Availability
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="dotbg min-h-screen bg-gray-100">
      <div className="bg-violet-950 ">
      <div className="bg-violet-950 text-white pt-5">
        <a href="/" className="logo text-white pl-6 ">
          NoQ
        </a>
        </div>
        <div className="mt-6 text-center pb-6">
          <h2 className="text-4xl font-bold text-gray-200">{category}</h2>
        </div>
      </div>

      <div className="mt-8 mx-10 p-6 bg-gray-300 rounded-lg shadow-md">
        <div className="flex justify-end gap-20 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">City</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
              value={cityFilter}
              onChange={handleCityChange}
              placeholder="Enter city"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Rating</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
              value={ratingFilter}
              onChange={handleRatingChange}
            >
              <option value="">Select Rating</option>
              <option value="1">1&#9733;</option>
              <option value="2">2&#9733;&#9733;</option>
              <option value="3">3&#9733;&#9733;&#9733;</option>
              <option value="4">4&#9733;&#9733;&#9733;&#9733;</option>
              <option value="5">5&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
          </div>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 mr-20 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 mt-6"
            onClick={handleSort}
          >
            Sort
          </button>
        </div>
      </div>

      <div className="mt-6 mx-10">{renderServices()}</div>
    </div>
  );
}

export default Sort;
