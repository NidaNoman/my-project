import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8 " >
      <div className="max-w-md w-full bg-black p-8 rounded-xl shadow-lg border-2 border-pink-600 ">
        <h2 className="text-3xl font-bold text-center text-white mb-6 font-serif">Contact<span className="text-pink-600"> Us </span></h2>
        
        <form className="space-y-4 ">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white font-sans ">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 mt-1 text-white bg-black  border border-pink-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white font-sans">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 mt-1 text-white bg-black border border-pink-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 font-sans"  
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white font-sans">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 mt-1 text-white bg-black border border-pink-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg focus:outline-none hover:bg-pink-700 font-sans"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
