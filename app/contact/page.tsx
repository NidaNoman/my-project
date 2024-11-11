import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className='bg-black p-6 rounded-xl max-w-[550px] w-full border-2 border-x-pink-900 shadow-lg'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center'>
          Let's <span className='text-pink-600'>Connect</span>
        </h2>
        <p className='text-white mb-6 text-center font-serif text-2xl sm:text-3xl'>
          Send me a message
        </p>
        <form className='space-y-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input
              className='bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 text-white'
              placeholder='First Name'
              type='text'
            />
            <input
              className='bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 text-white'
              placeholder='Last Name'
              type='text'
            />
            <input
              className='bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 text-white'
              placeholder='Email'
              type='email'
            />
            <input
              className='bg-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 text-white'
              placeholder='Phone Number'
              type='tel'
            />
          </div>
          <textarea
            className='bg-black w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-600 text-white'
            placeholder='Your message'
          />
          <button className='bg-pink-500 hover:bg-pink-800 text-white px-6 py-2 w-full font-serif text-xl rounded-xl'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
