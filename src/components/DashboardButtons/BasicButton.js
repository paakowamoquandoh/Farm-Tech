import React from 'react';


function BasicButton({ name, icon1, className, onClick }) {
  

  return (
    <label className={className} onClick={onClick}>
      {icon1}
      {name}
    </label>
  );
}

export default BasicButton;
