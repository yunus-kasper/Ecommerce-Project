import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AddressForm = ({ initialData, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    zip: '',
    state: '',
    street: '',
    city: '',
    tag: 'Home'
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl">
          <h1 className="text-xl font-bold text-gray-800">
            {initialData ? "Edit Address" : "Add New Address"}
          </h1>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                autoFocus
                type="text"
                id="name"
                name="name"
                value={form.name}
                placeholder="Enter full name"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                placeholder="Enter mobile number"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Zip Code Field */}
            <div className="space-y-2">
              <label htmlFor="zip" className="text-sm font-medium text-gray-700">
                Pincode *
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={form.zip}
                placeholder="Enter pincode"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* State Field */}
            <div className="space-y-2">
              <label htmlFor="state" className="text-sm font-medium text-gray-700">
                State *
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={form.state}
                placeholder="Enter state"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Address Field (Full width) */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="street" className="text-sm font-medium text-gray-700">
                Address (House No. Building, Street, Area) *
              </label>
              <textarea
                id="street"
                name="street"
                value={form.street}
                placeholder="Enter your complete address"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                rows={3}
                required
              />
            </div>

            {/* City Field (Full width) */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="city" className="text-sm font-medium text-gray-700">
                City/District *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.city}
                placeholder="Enter city or district"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>

          {/* Address Type */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gray-700">Type of Address *</h2>
            <div className="flex flex-wrap gap-4">
              {["Home", "Office", "Other"].map((type) => (
                <label 
                  key={type} 
                  className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex-1 min-w-[120px]"
                >
                  <input
                    type="radio"
                    name="tag"
                    value={type}
                    checked={form.tag === type}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {initialData ? "Update Address" : "Save Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;