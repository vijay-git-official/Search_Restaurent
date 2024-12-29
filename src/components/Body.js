// src/components/Body.js

import React, { useState } from 'react';
import dummyRestaurants from './dummyRestaurants';

const Body = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(dummyRestaurants);



    const handleSearch = () => {
        const results = dummyRestaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredRestaurants(results);
        setSearchQuery('')
    };

    return (
        <div className="p-4 bg-yellow-200 font-bold">
            Restaurants:
            <div className="flex items-center space-x-4 mt-5">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    className="bg-black text-white rounded-lg px-4 py-1 hover:bg-green-600 transition"
                >
                    Search
                </button>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredRestaurants.map((restaurant) => (
                    <div key={restaurant.id} className="border border-gray-300 rounded-lg p-4 bg-white">
                        <img src={restaurant.image} alt={restaurant.name} className="rounded-lg mb-2 h-60 w-full" />
                        <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
