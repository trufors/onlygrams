import React from 'react';
import SearchPanel from '../../common/components/SearchPanel';

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setStatusLoading, GirlItem } from '../../redux/slices/fetchSlicer';
import MainPageItem from './components/MainPageItem';
import Skeleton from './components/Skeleton';
import Sort from './components/Sort';
import axios from 'axios';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { statusLoading, searchValue, categoryTag } = useAppSelector((state) => state.fetch);
  // const category = categoryTag.toLowerCase().replace(/\s+/g, '');
  const [currentPage, setCurrentPage] = React.useState(1);

  const [items, setItems] = React.useState<GirlItem[]>([]);
  const [fetching, setFetching] = React.useState(true);
  React.useEffect(() => {
    if (fetching) {
      axios
        .get(`https://62ebbb5255d2bd170e74e421.mockapi.io/items?page=${currentPage}&limit=8`)
        .then((response) => {
          setCurrentPage((prev) => prev + 1);
          setItems([...items, ...response.data]);
          dispatch(setStatusLoading(true));
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log(1);
      setFetching(true);
    }
  };

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
          {/* {!statusLoading ? girlsArrays : [...new Array<number>(8)].map((i) => <Skeleton />)} */}
          {girlsArrays}
        </div>
      </div>
    </>
  );
};

export default MainPage;
