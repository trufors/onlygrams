import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { setCategoryTag } from '../../../../redux/slices/fetchSlicer';

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [close, setClose] = React.useState<boolean>(true);
  const setOpen = () => {
    setClose(!close);
  };
  const { categoryTag } = useAppSelector((state) => state.fetch);
  const category: string[] = [
    'Free trial',
    'New',
    'Free',
    'TikTok',
    'Sale',
    'Top',
    'Instagram',
    'Hottest',
    'Near you',
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

  return (
    <div className={`tag-items ${close ? 'tag-items_close' : ''}`}>
      <div onClick={setOpen} className="tag-item tag-item_all">
        <svg className="tag-item__icon">
          <use xlinkHref="img/sprite.svg#str-all"></use>
        </svg>
      </div>
      {categoryArray}
    </div>
  );
};

export default Sort;
