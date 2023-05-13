import React from "react";

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img
          className=' w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cI5AP6S1zFsBOrxn0LxXagHaE8%26pid%3DApi&f=1&ipt=5ffb07240ef7427c874e53f0d0d14f198af7988ec8e59f7f222f701d2f4f9865&ipo=images'
          alt='/'
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type='text' placeholder='First' />
            <input className="border m-2 p-2" type='text' placeholder='Last' />
            <input className="border m-2 p-2" type='email' placeholder='Email' />
            <input className="border m-2 p-2" type='tel' placeholder='Phone' />
            <input className="border col-span-2 p-2 m-2" type='text' placeholder='Address' />
            <textarea className="border col-span-2 m-2 p-2" cols='30' rows='10'></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
