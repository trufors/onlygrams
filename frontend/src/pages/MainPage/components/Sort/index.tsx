import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { changePage, ITEMS_PER_PAGE, setCategoryTag } from '../../../../redux/slices/fetchSlicer';
import classes from './Sort.module.css';

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [close, setClose] = React.useState<boolean>(true);
  const setOpen = () => {
    setClose(!close);
  };
  const { categoryTag, currentPage } = useAppSelector((state) => state.fetch);
  const total = useAppSelector((state) => state.fetch.total);
  const category: string[] = [
    'New',
    'Free',
    'TikTok',
    'Instagram',
    'Hottest',
    'Teens 18+',
    'Pornstars',
    'Onlyfans',
    'Best in Russia',
  ];
  const categoryArray = category.map((categ) => (
    <a
      onClick={() => dispatch(setCategoryTag(categ))}
      className={`tag-item ${categ === categoryTag ? 'tag-item_active' : ''}`}>
      {categ}
    </a>
  ));
  const pages = new Array(total ? Math.ceil(total / ITEMS_PER_PAGE) :  1).fill(null).map((_, index) => index + 1 )

  return (
    <div className={`tag-items ${close ? 'tag-items_close' : ''}`}>
      {categoryArray}

      {pages.map((page) => (
        <span
          onClick={(e) => dispatch(changePage({page }))}
          className={`tag-item tag-item_all ${classes.page} ${
            currentPage !== Number(page) ? '' : classes.active
          }`}>
          {page}
        </span>
      ))}
    </div>
  );
};

export default Sort;
