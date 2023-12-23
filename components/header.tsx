import React from 'react';
import Image from 'next/image';
interface Props {
  title: string | '';
}

const Header = ({ title = '' }: Props) => {
  return (
    <header className='overflow-hidden rounded-t-2xl'>
      <div
        className='overflow-hidden relative bg-no-repeat bg-cover'
        style={{
          position: 'relative',
          paddingBottom: '75%',
          height: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
      >
        <Image
          src='https://tecdn.b-cdn.net/img/new/slides/146.webp'
          layout='fill'
          objectFit='cover'
          alt='Background Image'
          className='rounded-t-xl opacity-50'
        />
        <div className='overflow-hidden absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-fixed'>
          <div className='flex justify-center items-center h-full'>
            <div className='px-6 text-center text-white md:px-12'>
              <h1 className='mb-6 text-5xl font-bold'>{title}</h1>
              <h3 className='mb-8 text-3xl font-bold'>Subheading</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
