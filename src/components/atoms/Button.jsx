import React from 'react';

const Button = ({title='',className=''}) => {
 
  return (
    <button type='button' className={`rounded-[4px] font-medium text-sm leading-[18px] text-center px-4 sm:px-8 py-3 ${className}`}>{title}</button>
  );
};

export default Button;