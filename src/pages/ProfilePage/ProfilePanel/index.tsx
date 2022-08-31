import React from 'react';
import { GirlItem } from '../../../redux/slices/fetchSlicer';
import styles from './ProfilePanel.module.css';

const ProfilePanel: React.FC<GirlItem> = ({ imageMinUrl, title, tagName, link }) => {
  return (
    <aside className="profile-page__left">
      <div className="tag-aside">
        <div className="account-short">
          <div className="account-short__pict">
            <img className={styles.images} src={imageMinUrl} alt="" />
          </div>
          <div className="account-short__name">
            {title}
            <img src="img/verification.icon.png" alt="" className="account-short__verification" />
          </div>
          <div className="account-short__login">{tagName}</div>
          <div className="account-short__items">
            <div className="account-short__item">
              <div className="account-short__num">10,3K</div>
              <div className="account-short__desc">Posts</div>
            </div>
            <div className="account-short__item">
              <div className="account-short__num">4,132</div>
              <div className="account-short__desc">Photos</div>
            </div>
            <div className="account-short__item">
              <div className="account-short__num">1,6M</div>
              <div className="account-short__desc">Likes</div>
            </div>
            <div className="account-short__item">
              <a href="javascript:;" className="account-short__more">
                <svg className="account-short__more-icon account-short__more-icon_open">
                  <use xlinkHref="img/sprite.svg#plus-circle"></use>
                </svg>
                <svg className="account-short__more-icon account-short__more-icon_close">
                  <use xlinkHref="img/sprite.svg#close-circle"></use>
                </svg>
              </a>
            </div>
            <div className="account-short__item">
              <div className="account-short__num">290</div>
              <div className="account-short__desc">Videos</div>
            </div>
            <div className="account-short__item">
              <div className="account-short__num">~$51.7k</div>
              <div className="account-short__desc">Earns</div>
            </div>
            <div className="account-short__item">
              <div className="account-short__num">132k</div>
              <div className="account-short__desc">Comments</div>
            </div>
            <div className="account-short__item">
              <div className="account-short__num">9,3k</div>
              <div className="account-short__desc">Fans</div>
            </div>
          </div>
          <a href={link} className="btn btn-one btn-md">
            Get OnlyFans <span className="btn__comment">($10.99)</span>
          </a>
        </div>
        {/* <div className="fans-list-short">
          <div className="fans-list-short__title">
            Fans
            <span className="fans-list-short__count">2,564</span>
            <a href="javascript:;" className="fans-list-short__link">
              See all
            </a>
          </div>
          <div className="fans-list-short__items">
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img1.png" alt="" />
            </a>
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img2.png" alt="" />
            </a>
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img3.png" alt="" />
            </a>
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img4.png" alt="" />
            </a>
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img5.png" alt="" />
            </a>
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img6.png" alt="" />
            </a>
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img7.png" alt="" />
            </a>
            <a href="javascript:;" className="fans-list-short__item">
              <img src="img/upload/fans.img8.png" alt="" />
            </a>
          </div>
        </div> */}
        <div className="services-short">
          <div className="services-short__title">
            Services
            <a href="javascript:;" className="services-short__link">
              See all
            </a>
          </div>
          <div className="services-short__items">
            <div className="services-short__item">
              <svg className="services-short__icon services-short__icon_red">
                <use xlinkHref="img/sprite.svg#heart"></use>
              </svg>
              <div className="services-short__info">
                <div className="services-short__name">Private chat</div>
                <div className="services-short__price">$15/hour</div>
              </div>
              <div className="services-short__btn">
                <a href="javascript:;" className="btn btn-one btn-sm">
                  Buy
                </a>
              </div>
            </div>
            <div className="services-short__item">
              <svg className="services-short__icon services-short__icon_blue">
                <use xlinkHref="img/sprite.svg#heart"></use>
              </svg>
              <div className="services-short__info">
                <div className="services-short__name">Virtual sex</div>
                <div className="services-short__price">$120/hour</div>
              </div>
              <div className="services-short__btn">
                <a href="javascript:;" className="btn btn-one btn-sm">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfilePanel;
