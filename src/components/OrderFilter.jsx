import React, { useState } from "react";

function OrderFilter({ onFilterChange, setStatus, status, setTime }) {
  const [filters, setFilters] = useState({
    status: {
      onTheWay: false,
      delivered: false,
      cancelled: false,
      returned: false,
    },
    time: {
      last30Days: false,
      year2025: false,
      year2024: false,
      year2023: false,
      older: false,
    },
  });

  const handleCheckboxChange = (category, filterName) => {
    const updatedFilters = {
      ...filters,
      [category]: {
        ...filters[category],
        [filterName]: !filters[category][filterName],
      },
    };
    setFilters(updatedFilters);
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  return (
    <div className="w-[280px] bg-white rounded-lg shadow-sm p-5 h-max sticky top-4 ">
      <h1 className="font-bold text-xl pb-4 border-b border-gray-200">
        Filters
      </h1>

      {/* Order Status Filter */}
      <div className="py-4 border-b border-gray-200">
        <h2 className="text-gray-800 font-semibold mb-3 flex items-center justify-between">
          ORDER STATUS
          {status != "" && (
            <button
              onClick={() => {
                const resetFilters = {
                  ...filters,
                  status: {
                    onTheWay: false,
                    delivered: false,
                    cancelled: false,
                    returned: false,
                  },
                };
                setFilters(resetFilters);
                if (onFilterChange) onFilterChange(resetFilters);
                setStatus("")
              }}
              className="text-xs text-blue-600 font-normal hover:underline"
            >
              Reset
            </button>
          )}
        </h2>

        <div className="space-y-3">
          {[
            { id: "onTheWay", label: "Out for Delivery" },
            { id: "delivered", label: "Delivered" },
            { id: "cancelled", label: "Cancelled" },
            { id: "returned", label: "Returned" },
          ].map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                type="checkbox"
                id={`status-${item.id}`}
                checked={status === item.label ? true : false}
                onChange={() => {
                  setStatus(item.label);
                }}
                // onChange={() => setStatus(item.label)}
                className="w-4 h-4 text-[#EBB100] rounded border-gray-300 focus:ring-[#EBB100]"
              />
              <label
                htmlFor={`status-${item.id}`}
                className={`ml-2 text-sm ${
                  filters.status[item.id] ? "text-gray-800" : "text-gray-600"
                }`}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Order Time Filter */}
      <div className="py-4">
        <h2 className="text-gray-800 font-semibold mb-3 flex items-center justify-between">
          ORDER TIME
          {Object.values(filters.time).some(Boolean) && (
            <button
              onClick={() => {
                const resetFilters = {
                  ...filters,
                  time: {
                    last30Days: false,
                    year2025: false,
                    year2024: false,
                    year2023: false,
                    older: false,
                  },
                };
                setFilters(resetFilters);
                if (onFilterChange) onFilterChange(resetFilters);
              }}
              className="text-xs text-blue-600 font-normal hover:underline"
            >
              Reset
            </button>
          )}
        </h2>

        <div className="space-y-3">
          {[
            { id: "last30Days", label: "Last 30 days" },
            { id: "year2025", label: "2025" },
            { id: "year2024", label: "2024" },
            { id: "year2023", label: "2023" },
            { id: "older", label: "Older" },
          ].map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                type="checkbox"
                id={`time-${item.id}`}
                checked={filters.time[item.id]}
                onChange={() => handleCheckboxChange("time", item.id)}
                className="w-4 h-4 text-[#EBB100] rounded border-gray-300 focus:ring-[#EBB100]"
              />
              <label
                htmlFor={`time-${item.id}`}
                className={`ml-2 text-sm ${
                  filters.time[item.id] ? "text-gray-800" : "text-gray-600"
                }`}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear All Button */}
      {(status != "" ||
        Object.values(filters.time).some(Boolean)) && (
        <button
          onClick={() => {
            const resetFilters = {
              status: {
                onTheWay: false,
                delivered: false,
                cancelled: false,
                returned: false,
              },
              time: {
                last30Days: false,
                year2025: false,
                year2024: false,
                year2023: false,
                older: false,
              },
            };
            setFilters(resetFilters);
            if (onFilterChange) onFilterChange(resetFilters);
          }}
          className="w-full mt-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}

export default OrderFilter;
