import React from 'react';
import style from './Test.module.css';
import Earth from './Earth/Earth';

const Test = () => {
  return (
    <div className={style.test}>
      <Earth></Earth>
    </div>
  );
};

export default Test;
