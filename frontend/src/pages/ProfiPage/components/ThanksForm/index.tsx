import React from 'react';
import { Link } from 'react-router-dom';

const ThanksForm: React.FC = () => {
  return (
    <div className="pay-form-block">
      <div className="pay-form-block__inner">
        <div className="pay-form-block__top">
          <Link to="/tasks" className="pay-form-block__link">
            <svg className="pay-form-block__link-icon">
              <use xlinkHref="img/sprite.svg#str"></use>
            </svg>
            Back
          </Link>
        </div>

        <div className="pay-form">
          <div className="pay-form__head">Thanks for choosing us! </div>
          <div className="pay-form__body">Your task will soon appear on the main page</div>
        </div>
      </div>
    </div>
  );
};

export default ThanksForm;
