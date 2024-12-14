import React from 'react';

const Navbar = () => {
  return (
    <section className="fixed left-0 top-0 z-30 flex h-14 w-screen items-center justify-center bg-black/50 backdrop-blur-md">
      <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text px-4  py-2 font-bold text-transparent">
        Knowledge Assessment
      </span>
    </section>
  );
};

export default Navbar;
