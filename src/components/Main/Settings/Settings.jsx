import React from 'react';
import style from '../Settings/Settings.module.css';
import border from '../Main.module.css';

const Settings = (props) => {
  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <div>Загрузить аватарку</div>
      <div>Обо мне</div>
      <div>Социальные сети</div>
    </div>
  );
};

export default Settings;
