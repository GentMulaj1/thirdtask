import React, { useRef } from 'react';
import './FormColor.css';

const FormColor = ({ name, value, onChange, id }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <form className='formColor' onClick={handleClick}>
      <label className='name'>{name}</label>
      <div className='left__formColor'>
        <label htmlFor={id}>{value}</label>
        <input
          ref={inputRef}
          id={id}
          type="color"
          value={value}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default FormColor;
