import React from 'react';
import SearchPanel from '../../common/components/SearchPanel';

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import {
  setStatusLoading,
  GirlItem,
  fetchGirlsItems,
  setComponentDidMount,
} from '../../redux/slices/fetchSlicer';
import MainPageItem from './components/MainPageItem';
import Skeleton from './components/Skeleton';
import Sort from './components/Sort';
import axios from 'axios';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { statusLoading, searchValue, currentPage, items } = useAppSelector((state) => state.fetch);

  React.useEffect(() => {
    dispatch(fetchGirlsItems({ currentPage, searchValue }));
    return () => {
      dispatch(setComponentDidMount({ currentPage: 1, searchValue: '' }));
    };
  }, [currentPage, searchValue]);

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
