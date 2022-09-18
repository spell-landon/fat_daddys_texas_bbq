import React from 'react';

export const About = () => {
  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto px-4 mb-20'>
      <h3 className='font-light text-5xl my-12 text-center'>About Us</h3>
      <div className='bg-myOrangeText w-full h-[0.5px]'></div>
      <img
        src='https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        alt='Family portrait'
        className='w-full max-w-4xl mx-auto my-10 object-cover'
      />
      <div className='w-full max-w-4xl mx-auto space-y-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus ad incidunt totam, dolore animi, quae porro dolores
          odio hic maiores ex aliquam voluptatem debitis provident excepturi
          perferendis rem saepe nemo iusto, iste impedit? Dolorum aperiam
          provident dolor modi. Est et dolor beatae quo dignissimos optio
          numquam obcaecati alias non aperiam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus ad incidunt totam, dolore animi, quae porro dolores
          odio hic maiores ex aliquam voluptatem debitis provident excepturi
          perferendis rem saepe nemo iusto, iste impedit? Dolorum aperiam
          provident dolor modi. Est et dolor beatae quo dignissimos optio
          numquam obcaecati alias non aperiam.
        </p>
      </div>
    </div>
  );
};
