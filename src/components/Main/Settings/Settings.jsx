import React from 'react';
import style from '../Settings/Settings.module.css';
import border from '../Main.module.css';

const Settings = (props) => {
  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <table className={style.table}>
        <tr className={style.table_tr}>
          <td className={style.table_td}>Загрузить аватарку</td>
          <td className={style.table_td}>13</td>
        </tr>
        <tr className={style.table_tr}>
          <td className={style.table_td}>Обо мне</td>
          <td className={style.table_td}>123</td>
        </tr>
        <tr className={style.table_tr}>
          <td className={style.table_td}>Социальные сети</td>
          <td className={style.table_td}>123</td>
        </tr>
      </table>
      {/* <div>Загрузить аватарку</div>
        <div>Обо мне</div>
        <div>Социальные сети</div> */}
    </div>
  );
};

export default Settings;
