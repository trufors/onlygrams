import React from 'react';
import { Link } from 'react-router-dom';
import { GirlItem } from '../../../../redux/slices/fetchSlicer';
const MainPageItem: React.FC<GirlItem> = ({
  imageMaxUrl,
  imageMinUrl,
  id,
  description,
  title,
  tagName,
}) => {
  return (
    <>
      <Link to={`/${id}`} className="profile-list-item">
        <img src={imageMaxUrl} alt="" className="profile-list-item__img" />
        <div className="profile-list-item__block">
          <div className="profile-list-item__name">
            {title}
            <br />
            {tagName}
          </div>
          <div className="profile-list-item__text">{description}</div>
        </div>
      </Link>
    </>
  );
};

export default MainPageItem;
