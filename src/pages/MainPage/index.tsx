import React from 'react';
import SearchPanel from '../../common/components/SearchPanel';

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setStatusLoading, GirlItem, fetchGirlsItems } from '../../redux/slices/fetchSlicer';
import MainPageItem from './components/MainPageItem';
import Skeleton from './components/Skeleton';
import Sort from './components/Sort';
import axios from 'axios';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { statusLoading, searchValue, currentPage, items } = useAppSelector((state) => state.fetch);

  // const [items, setItems] = React.useState<GirlItem[]>([]);
  // const [fetching, setFetching] = React.useState(true);
  React.useEffect(() => {
    dispatch(fetchGirlsItems({ currentPage, searchValue }));
  }, [currentPage, searchValue]);

  // React.useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);
  // const scrollHandler = (e: any) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     100
  //   ) {
  //     console.log(1);
  //     setFetching(true);
  //   }
  // };

  const searchArray: GirlItem[] = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const girlsArrays: JSX.Element[] = searchArray.map((item) => <MainPageItem {...item} />);

  return (
    <>
      <SearchPanel />
      <div className="content-wrapper">
        <Sort />
        <div className="profile-list">
          {statusLoading ? girlsArrays : [...new Array<number>(8)].map((i) => <Skeleton />)}
        </div>
      </div>
    </>
  );
};

export default MainPage;
