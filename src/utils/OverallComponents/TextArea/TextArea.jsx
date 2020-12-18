import React, { forwardRef } from 'react';
import style from '../TextArea/TextArea.module.css';

const TextArea = React.forwardRef((props, ref) => (
  <textarea
    className={style.wall__form__txtr}
    placeholder={`Введите текст ${props.place}...`}
    ref={ref}
    cols='40'
    rows='3'
  ></textarea>
));

export default TextArea;
