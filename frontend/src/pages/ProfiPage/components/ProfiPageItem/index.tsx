import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProfiPageItem.module.css';

import { TasksInputs } from '../../../../redux/slices/profiSlicer';
const ProfiPageItem: React.FC<TasksInputs> = ({
  telegramLink,
  subscribersCount,
  category,
  price,
  description,
  image,
}) => {
  return (
    <>
      <a href={`t.me/${telegramLink}`} className={`${classes.item} profile-list-item`}>
        <div className={`${classes.block} profile-list-item__block`}>
          <div className="profile-list-item__name">
            <br />
            {category}
            <br />
            {price}//{subscribersCount}
          </div>
          <div className="profile-list-item__text">{description}</div>
        </div>
      </a>
    </>
  );
};

export default ProfiPageItem;
