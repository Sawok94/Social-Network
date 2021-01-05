import React, { createRef } from 'react';
import Button from '../../../../../utils/OverallComponents/Button/Button';
import TextArea from '../../../../../utils/OverallComponents/TextArea/TextArea';
import style from '../AddMessage/AddMessage.module.css';

const AddMessage = (props) => {
  const ref = React.createRef();

  return (
    <div className={style.wall__form}>
      <TextArea
        place='сообщения'
        ref={ref}
        textMessage={props.textMessage}
        addChar={props.addChar}
      />
      <Button btn='Отправить' value={ref} addMessage={props.addMessage} />
    </div>
  );
};

export default AddMessage;
