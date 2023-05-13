import React from "react";

const Gallery = () => {
  return (
    <div id='gallery' className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lbKGllWihj1X0C8jf0G_fgHaE8%26pid%3DApi&f=1&ipt=ab9f0760c987b361c77c10ab238094eb59dddb31cf7ac019b02d94aa64c83989&ipo=images" alt="/" />
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qBnTCOQy-sSaCtWMACpqxAHaEo%26pid%3DApi&f=1&ipt=a53ee0b331de51541943734bf95c38d9d5918e1d38421e00d2512e274082dbd4&ipo=images" alt="/" />
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GJPmkDXdLBCmDQW1S8duSAHaE8%26pid%3DApi&f=1&ipt=d9dd2fba1c90e7bb2907702f8f34d3e82c394c51879386fce60b98a35e6ddbd7&ipo=images" alt="/" />
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8aZ8a-3wzXzWNUU-u9Ik8AHaFJ%26pid%3DApi&f=1&ipt=f50a98eefa694756d5005eb669fd8daa55d5f0400e15630ebcad30542509c1f4&ipo=images" alt="/" />
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bnCZfGzvay61KAheL7XfBAHaEk%26pid%3DApi&f=1&ipt=70f78c636dce4b6f2a954d94a96d3ee5f44d0d18a7b8a0e68428fc3a7bcd0503&ipo=images" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
