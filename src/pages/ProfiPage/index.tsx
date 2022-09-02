import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setCurrentPage } from '../../redux/slices/profiSlicer';
import classes from './ProfiPage.module.css';

const ProfiPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.profi);
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const category: string[] = ['All', 'Porn', 'Photo', 'Escort', 'Film a video', 'Other'];
  const categoryArray = category.map((categ) => (
    <a
      onClick={() => {
        setActiveCategory(categ);
      }}
      className={`tag-item ${categ === activeCategory ? 'tag-item_active' : ''}`}>
      {categ}
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
              <Link to="/tasks">
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

        <div className="profile-list"></div>
      </div>
    </>
  );
};

export default ProfiPage;
