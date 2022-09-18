import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchTasksItems, setCurrentPage, TASKS_PER_PAGE } from '../../redux/slices/profiSlicer';
import Skeleton from '../MainPage/components/Skeleton';
import ProfiPageItem from './components/ProfiPageItem';
import TasksForm from './components/TasksForm';
import classes from './ProfiPage.module.css';

const ProfiPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, activeCategory, statusLoading, tasks } = useAppSelector(
    (state) => state.profi,
  );
  const total = useAppSelector((state) => state.profi.total);

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
  const pages = new Array(total ? Math.ceil(total / TASKS_PER_PAGE) : 1)
    .fill(null)
    .map((_, index) => index + 1);

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
          {statusLoading
            ? tasks.map((item) => <ProfiPageItem {...item} />)
            : [...new Array<number>(8)].map((i) => <Skeleton />)}
        </div>
      </div>
    </>
  );
};

export default ProfiPage;
