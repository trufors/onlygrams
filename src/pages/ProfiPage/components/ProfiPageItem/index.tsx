import React from 'react';
import { Link } from 'react-router-dom';

import { TasksItem } from '../../../../redux/slices/profiSlicer';
const ProfiPageItem: React.FC<TasksItem> = ({}) => {
  return (
    <>
      <Link to={`/`} className="profile-list-item">
        <img src={''} alt="" className="profile-list-item__img" />
        <div className="profile-list-item__block">
          <div className="profile-list-item__name">
            {}
            <br />
            {}
          </div>
          <div className="profile-list-item__text">{}</div>
        </div>
      </Link>
    </>
  );
};

export default ProfiPageItem;
