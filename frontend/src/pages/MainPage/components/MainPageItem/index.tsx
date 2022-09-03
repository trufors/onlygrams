import React from "react"
import { Link } from "react-router-dom"
import { GirlItem } from "../../../../redux/slices/fetchSlicer"

const MainPageItem: React.FC<GirlItem> = ({ links, description, name, email, imageUrl }) => {
  return (
    <>
      <a target="_blank" href={links.onlyFans} className="profile-list-item">
        <img src={"/api" + imageUrl} alt="" className="profile-list-item__img" />
        <div className="profile-list-item__block">
          <div className="profile-list-item__name">
            {name}
            <br />
            {email}
          </div>
          <div className="profile-list-item__text">{description}</div>
        </div>
      </a>
    </>
  )
}

export default MainPageItem
