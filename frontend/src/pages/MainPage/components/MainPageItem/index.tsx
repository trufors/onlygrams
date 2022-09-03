import React from 'react';
import { Link } from 'react-router-dom';
import { GirlItem } from '../../../../redux/slices/fetchSlicer';
const MainPageItem: React.FC<GirlItem> = ({ imageMaxUrl, link, description, title, tagName }) => {
  return (
    <>
      <a target="_blank" href={link} className="profile-list-item">
        <img src={imageMaxUrl} alt="" className="profile-list-item__img" />
        <div className="profile-list-item__block">
          <div className="profile-list-item__name">
            {title}
            <br />
            {tagName}
          </div>
          <div className="profile-list-item__text">{description}</div>
        </div>
      </a>
    </>
  );
};

export default MainPageItem;
