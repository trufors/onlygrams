import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchTasksItems, setCurrentPage } from '../../redux/slices/profiSlicer';
import classes from './ProfiPage.module.css';

const ProfiPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, activeCategory } = useAppSelector((state) => state.profi);

  const category: { label: string; value: string }[] = [
    { label: 'All', value: 'all' },
    { label: 'Photo', value: 'photo' },
    { label: 'Escort', value: 'Escort' },
    { label: 'Make a video', value: 'film' },
    { label: 'Promo', value: 'Promo' },
    { label: 'Other', value: 'Other' },
  ];
  React.useEffect(() => {
    dispatch(fetchTasksItems({ activeCategory }));
  }, []);

  const categoryArray = category.map(({ label, value }) => (
    <a
      onClick={() => dispatch(fetchTasksItems({ activeCategory: value }))}
      className={`tag-item ${value === activeCategory ? 'tag-item_active' : ''}`}>
      {label}
    </a>
  ));
  const pages = [4, 3, 2, 1];
  return (
    <>
      <div className="search-user-panel">
        <div className="search-user-panel__search">
          <div className="search-panel">
            <div className="search-panel__btn">
              <Link to="/">
                <button type="button" className="btn btn-one">
                  Promote page
                </button>
              </Link>
            </div>
            <div className={` search-panel__btn`}>
              <Link to="/create">
                <button type="button" className="btn btn-one">
                  <span>Create Your Task</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className={`tag-items`}>
          {categoryArray}
          {pages.map((p) => (
            <span
              onClick={(e) => dispatch(setCurrentPage(p))}
              className={`tag-item tag-item_all ${classes.page} ${
                currentPage !== Number(p) ? '' : 'tag-item_active'
              }`}>
              {p}
            </span>
          ))}
        </div>

        <div className="profile-list">
          <Link to={`/`} className={`${classes.item} profile-list-item`}>
            <div className={`${classes.block} profile-list-item__block`}>
              <div className="profile-list-item__name">
                Снять порно
                <br />
                предпочтительный способ связи
              </div>
              <div className="profile-list-item__text">Здесь будет описание</div>
            </div>
          </Link>
          <Link to={`/`} className={`${classes.item} profile-list-item`}>
            <div className={`${classes.block} profile-list-item__block`}>
              <div className="profile-list-item__name">
                Снять порно
                <br />
                предпочтительный способ связи
              </div>
              <div className="profile-list-item__text">Здесь будет описание</div>
            </div>
          </Link>
          <Link to={`/`} className={`${classes.item} profile-list-item`}>
            <div className={`${classes.block} profile-list-item__block`}>
              <div className="profile-list-item__name">
                Снять порно
                <br />
                предпочтительный способ связи
              </div>
              <div className="profile-list-item__text">Здесь будет описание</div>
            </div>
          </Link>
          <Link to={`/`} className={`${classes.item} profile-list-item`}>
            <div className={`${classes.block} profile-list-item__block`}>
              <div className="profile-list-item__name">
                Снять порно
                <br />
                предпочтительный способ связи
              </div>
              <div className="profile-list-item__text">Здесь будет описание</div>
            </div>
          </Link>
          <Link to={`/`} className={`${classes.item} profile-list-item`}>
            <div className={`${classes.block} profile-list-item__block`}>
              <div className="profile-list-item__name">
                Снять порно
                <br />
                предпочтительный способ связи
              </div>
              <div className="profile-list-item__text">Здесь будет описание</div>
            </div>
          </Link>
          <Link to={`/`} className={`${classes.item} profile-list-item`}>
            <div className={`${classes.block} profile-list-item__block`}>
              <div className="profile-list-item__name">
                Снять порно
                <br />
                предпочтительный способ связи
              </div>
              <div className="profile-list-item__text">Здесь будет описание</div>
            </div>
          </Link>
          <Link to={`/`} className={`${classes.item} profile-list-item`}>
            <div className={`${classes.block} profile-list-item__block`}>
              <div className="profile-list-item__name">
                Снять порно
                <br />
                предпочтительный способ связи
              </div>
              <div className="profile-list-item__text">Здесь будет описание</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfiPage;
