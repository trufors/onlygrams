import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProfiPageItem.module.css';

import { TasksInputs } from '../../../../redux/slices/profiSlicer';
const ProfiPageItem: React.FC<TasksInputs> = ({}) => {
  return (
    <>
      <Link to={`/`} className={`${classes.item} profile-list-item`}>
        <div className={`${classes.block} profile-list-item__block`}>
          <div className="profile-list-item__name">
            
            <br />
            предпочтительный способ связи
          </div>
          <div className="profile-list-item__text">Здесь будет описание</div>
        </div>
      </Link>
    </>
  );
};

export default ProfiPageItem;
