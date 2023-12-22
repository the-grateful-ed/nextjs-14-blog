import React from 'react';

interface Props {
  title: string | '';
}

const Header = ({ title = '' }: Props) => {
  return (
    <header>
      <div className='bg-card px-6 py-20 text-center'>
        <h1 className='mb-6 text-5xl font-bold uppercase font-kalam'>{title}</h1>
        <h3 className='mb-8 text-3xl font-bold'>Subeading</h3>
      <hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
      </div>
    </header>
  );
};

export default Header;
