import React from "react"
import SearchPanel from "../../common/components/SearchPanel"

import { useAppDispatch, useAppSelector } from "../../hooks/store"
import {
  setStatusLoading,
  GirlItem,
  fetchGirlsItems,
} from "../../redux/slices/fetchSlicer"
import MainPageItem from "./components/MainPageItem"
import Skeleton from "./components/Skeleton"
import Sort from "./components/Sort"
import axios from "axios"

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { statusLoading, searchValue, items } = useAppSelector((state) => state.fetch)

  React.useEffect(() => {
    dispatch(fetchGirlsItems({ searchValue }))

  }, [searchValue])

  return (
    <>
      <SearchPanel />
      <div className="content-wrapper">
        <Sort />
        <div className="profile-list">
          {statusLoading
            ? items.map((item) => <MainPageItem {...item} />)
            : [...new Array<number>(8)].map((i) => <Skeleton />)}
        </div>
      </div>
    </>
  )
}

export default MainPage
