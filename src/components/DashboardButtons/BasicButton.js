import React from 'react';


function BasicButton({ name, icon1, className, onClick }) {
  

  return (
    <button className={className} onClick={onClick}>
      {icon1}
      {name}
    </button>
  );
}

export default BasicButton;
