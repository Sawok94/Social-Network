import React from 'react';
import style from './Search.module.css';
import { Field, reduxForm } from 'redux-form';
import searchIcon from '../../../assets/search.png';

const Search = (props) => {
  return (
    <article className={style.search__container}>
      <section className={style.search__container__elements}>
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
      </section>
    </article>
  );
};

export default reduxForm({
  form: 'search',
})(Search);
