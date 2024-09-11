import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi alias
        harum enim qui, impedit dignissimos corrupti quos quia cum ducimus atque
        sapiente adipisci, ex vitae maiores est ad eaque voluptas!
      </p>
      <Link
        href={'/home'}
        className="m-auto block w-fit rounded bg-gradient-to-r from-fuchsia-600 to-purple-600 p-2 text-white"
      >
        Get Started
      </Link>
    </section>
  );
};

export default LandingPage;
