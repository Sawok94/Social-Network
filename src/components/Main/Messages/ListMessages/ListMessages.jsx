import React from 'react';
import style from '../../Messages/ListMessages/ListMessages.module.css';
import border from '../../Main.module.css';
import TextArea from '../../../../utils/OverallComponents/TextArea/TextArea';
import Avatar from '../../../../utils/OverallComponents/Avatar/Avatar';
import Button from '../../../../utils/OverallComponents/Button/Button';

const ListMessages = (props) => {
  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <div className={style.wall__form}>
        <Avatar style='avatar__small'/>
        <TextArea place='сообщения'/>
        <Button btn='Отправить' />
      </div>
    </div>
  );
};

export default ListMessages;
