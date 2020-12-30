import React, { forwardRef } from 'react';
import style from '../TextArea/TextArea.module.css';

const TextArea = React.forwardRef((props, ref) => {
  const addCharOfText = () => {
    props.addChar(ref.current.value);
  };

  return (
    <textarea
      className={style.wall__form__txtr}
      placeholder={`Введите текст ${props.place}...`}
      value={props.textPost}
      onChange={addCharOfText}
      ref={ref}
      cols='40'
      rows='3'
    />
  );
});

export default TextArea;
