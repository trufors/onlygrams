import React from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';

import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { setSearchValue } from '../../../redux/slices/fetchSlicer';
import styles from './SearchPanel.module.css';

const SearchPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const { searchValue } = useAppSelector((state) => state.fetch);
  console.log(searchValue);

  /**
   * локальный стейт без lodash для быстрого отображения
   */
  const [value, setValue] = React.useState('');

  /**
   * в стор записываем только после паузы в пол секунды (т.е. не перезаписываем каждый символ)
   */
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setValue(enteredName);
    updateSearchValue(enteredName);
  };

  return (
    <div className="search-user-panel">
      <div className="search-user-panel__search">
        <div className="search-panel">
          <div className="search-panel__search">
            <div className="search-form">
              {/* <form> */}
              <input
                type="text"
                className="search-form__input"
                onChange={inputHandler}
                value={value}
                placeholder="Search..."
              />
              {/* <button onClick={search} className="search-form__btn">
                  <svg className="search-form__btn-icon">
                    <use xlinkHref="img/sprite.svg#search"></use>
                  </svg>
                </button> */}
              {/* </form> */}
            </div>
          </div>
          <div className="search-panel__btn">
            <Link to="/promote">
              <button type="button" className="btn btn-one">
                <svg className="btn__icon btn__icon_plus">
                  <use xlinkHref="img/sprite.svg#plus"></use>
                </svg>
                Promote
              </button>
            </Link>
          </div>
          <div className={`${styles.btn} search-panel__btn`}>
            <Link to="/">
              <button type="button" className="btn btn-one">
                <span>Create Your Task</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="search-user-panel__user">
        <div className="user-panel">
          <div className="user-panel__user-name">Hi, Oleg!</div>
          <a href="javascript:;" className="user-panel__link">
            <svg className="user-panel__icon">
              <use xlinkHref="img/sprite.svg#lines"></use>
            </svg>
          </a>
          <a href="javascript:;" className="user-panel__link">
            <svg className="user-panel__icon">
              <use xlinkHref="img/sprite.svg#settings"></use>
            </svg>
          </a>
          <a href="javascript:;" className="user-panel__avatar">
            <img src="img/upload/oleg.png" alt="" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default SearchPanel;
