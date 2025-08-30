import React from "react";
import Button from "./Button";
import { Mail, Phone, User, MessageSquare, AlertCircle } from "lucide-react";

function Contact() {
  return (
    <div className="mx-auto w-full p-6 bg-white rounded-lg shadow-sm border border-gray-100 font-inter">
      <div className="mb-6">
        <h1 className="text-xl font-medium text-gray-800 mb-1">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you! Please fill out this form.
        </p>
      </div>

      <form className="space-y-5">
        {/* Full Name */}
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
              placeholder="+91 1234567890"
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AlertCircle className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="subject"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
              placeholder="Brief description of your query"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="message"
              rows={4}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
              placeholder="Please describe your issue in detail..."
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-max py-3 px-6 bg-black text-white font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>We typically respond within 24 hours</p>
      </div>
    </div>
  );
}

export default Contact;
