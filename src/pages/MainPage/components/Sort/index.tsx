import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { setCategoryTag, setPage } from '../../../../redux/slices/fetchSlicer';
import classes from './Sort.module.css';

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [close, setClose] = React.useState<boolean>(true);
  const setOpen = () => {
    setClose(!close);
  };
  const { categoryTag, currentPage } = useAppSelector((state) => state.fetch);
  const category: string[] = [
    'New',
    'Free',
    'TikTok',
    'Instagram',
    'Hottest',
    'Teens 18+',
    'Pornstars',
    'Milf',
    'Latin',
    'Onlyfans',
    'Best in Russia',
    'Blonde',
  ];
  const categoryArray = category.map((categ) => (
    <a
      onClick={() => dispatch(setCategoryTag(categ))}
      className={`tag-item ${categ === categoryTag ? 'tag-item_active' : ''}`}>
      {categ}
    </a>
  ));
  const pages = [4, 3, 2, 1];

  return (
    <div className={`tag-items ${close ? 'tag-items_close' : ''}`}>
      <div>
        {pages.map((p) => (
          <span
            onClick={(e) => dispatch(setPage(p))}
            className={`tag-item tag-item_all ${classes.page} ${
              currentPage !== Number(p) ? '' : classes.active
            }`}>
            {p}
          </span>
        ))}
      </div>
      {categoryArray}
    </div>
  );
};

export default Sort;
