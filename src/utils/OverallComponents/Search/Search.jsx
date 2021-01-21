import React from 'react';
import style from './Search.module.css';
import { Field, reduxForm } from 'redux-form';
import searchIcon from '../../../assets/search.png';

const Search = (props) => {
  return (
    <div className={style.search__container}>
      <div className={style.search__container__elements}>
        <img src={searchIcon} alt='searchIcon' />
        <form onSubmit={props.handleSubmit}>
          <Field
            className={style.search__input}
            placeholder='Введите имя для поиска...'
            name='searchName'
            component='input'
            type='text'
          />
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'search',
})(Search);
