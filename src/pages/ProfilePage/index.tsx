import React from 'react';
import ProfilePanel from './ProfilePanel';
import SearchPanel from '../../common/components/SearchPanel';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchGirl, clearGirl } from '../../redux/slices/fetchSlicer';
import styles from './ProfilePage.module.css';

const ProfilePage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchGirl(Number(id)));
    return () => {
      dispatch(clearGirl());
    };
  }, [dispatch]);
  const { girl } = useAppSelector((state) => state.fetch);

  if (girl) {
    return (
      <>
        {/* <SearchPanel /> */}
        <div className="profile-page">
          <ProfilePanel {...girl} />
          <div className="profile-page__center">
            <div className="news-wall">
              <div className="news-wall-paper">
                <img className="news-wall-paper__img" src={girl.imageMaxUrl} alt="" />
              </div>

              <div className="news-wall-item">
                <div className="news-wall-item__head">
                  <div className="news-wall-item__ava">
                    <img className={styles.images} src={girl.imageMinUrl} alt="" />
                  </div>
                  <div className="news-wall-item__info">
                    <div className="news-wall-item__name">{girl.title}</div>
                    <div className="news-wall-item__time">12:43</div>
                  </div>
                  <a href="javascript:;" className="news-wall-item__open">
                    <svg className="news-wall-item__open-icon">
                      <use xlinkHref="img/sprite.svg#open-wall"></use>
                    </svg>
                  </a>
                </div>
                <div className="news-wall-item__body ">
                  <div className="news-wall-item__inner">
                    <div className="news-wall-item__picts">
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img1.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img2.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img3.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="news-wall-item__text">
                      Thanks to <a href="javascript:;">@kimmy.k</a> for this cool day.
                      <br />
                      For more my adventures, watch me on OFTV:{' '}
                      <a href="javascript:;">https://of.tv/creators/wetaja</a>
                    </div>
                  </div>
                  {/* <div className="news-wall-item__lock">
                    <svg className="news-wall-item__lock-icon">
                      <use xlinkHref="img/sprite.svg#lock"></use>
                    </svg>
                    <a href="javascript:;" className="btn btn-one btn-md">
                      Get OnlyFans <span className="btn__comment">($10.99)</span>
                    </a>
                  </div> */}
                </div>
              </div>

              <div className="news-wall-item">
                <div className="news-wall-item__head">
                  <div className="news-wall-item__ava">
                    <img className={styles.images} src={girl.imageMinUrl} alt="" />
                  </div>
                  <div className="news-wall-item__info">
                    <div className="news-wall-item__name">{girl.title}</div>
                    <div className="news-wall-item__time">yesterday</div>
                  </div>
                  <a href="javascript:;" className="news-wall-item__open">
                    <svg className="news-wall-item__open-icon">
                      <use xlinkHref="img/sprite.svg#open-wall"></use>
                    </svg>
                  </a>
                </div>
                <div className="news-wall-item__body news-wall-item__body_close">
                  <div className="news-wall-item__inner">
                    <div className="news-wall-item__picts">
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img1.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img2.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img3.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="news-wall-item__text">
                      Thanks to <a href="javascript:;">@kimmy.k</a> for this cool day.
                      <br />
                      For more my adventures, watch me on OFTV:{' '}
                      <a href="javascript:;">https://of.tv/creators/wetaja</a>
                    </div>
                  </div>
                  <div className="news-wall-item__lock">
                    <svg className="news-wall-item__lock-icon">
                      <use xlinkHref="img/sprite.svg#lock"></use>
                    </svg>
                    <a href="javascript:;" className="btn btn-one btn-md">
                      Get OnlyFans <span className="btn__comment">($10.99)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news-wall-item news-wall-item_close">
                <div className="news-wall-item__head">
                  <div className="news-wall-item__ava">
                    <img className={styles.images} src={girl.imageMinUrl} alt="" />
                  </div>
                  <div className="news-wall-item__info">
                    <div className="news-wall-item__name">{girl.title}</div>
                    <div className="news-wall-item__time">26 june</div>
                  </div>
                  <a href="javascript:;" className="news-wall-item__open">
                    <svg className="news-wall-item__open-icon">
                      <use xlinkHref="img/sprite.svg#open-wall"></use>
                    </svg>
                  </a>
                </div>
                <div className="news-wall-item__body news-wall-item__body_close">
                  <div className="news-wall-item__inner">
                    <div className="news-wall-item__picts">
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img1.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img2.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img3.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="news-wall-item__text">
                      Thanks to <a href="javascript:;">@kimmy.k</a> for this cool day.
                      <br />
                      For more my adventures, watch me on OFTV:{' '}
                      <a href="javascript:;">https://of.tv/creators/wetaja</a>
                    </div>
                  </div>
                  <div className="news-wall-item__lock">
                    <svg className="news-wall-item__lock-icon">
                      <use xlinkHref="img/sprite.svg#lock"></use>
                    </svg>
                    <a href="javascript:;" className="btn btn-one btn-md">
                      Get OnlyFans <span className="btn__comment">($10.99)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news-wall-item">
                <div className="news-wall-item__head">
                  <div className="news-wall-item__ava">
                    <img className={styles.images} src={girl.imageMinUrl} alt="" />
                  </div>
                  <div className="news-wall-item__info">
                    <div className="news-wall-item__name">{girl.title}</div>
                    <div className="news-wall-item__time">25 june</div>
                  </div>
                  <a href="javascript:;" className="news-wall-item__open">
                    <svg className="news-wall-item__open-icon">
                      <use xlinkHref="img/sprite.svg#open-wall"></use>
                    </svg>
                  </a>
                </div>
                <div className="news-wall-item__body news-wall-item__body_close">
                  <div className="news-wall-item__inner">
                    <div className="news-wall-item__picts">
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img1.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img2.png"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className="news-wall-item__pict">
                        <img
                          className="news-wall-item__img"
                          src="img/upload/wall.img3.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="news-wall-item__text">
                      Thanks to <a href="javascript:;">@kimmy.k</a> for this cool day.
                      <br />
                      For more my adventures, watch me on OFTV:{' '}
                      <a href="javascript:;">https://of.tv/creators/wetaja</a>
                    </div>
                  </div>
                  <div className="news-wall-item__lock">
                    <svg className="news-wall-item__lock-icon">
                      <use xlinkHref="img/sprite.svg#lock"></use>
                    </svg>
                    <a href="javascript:;" className="btn btn-one btn-md">
                      Get OnlyFans <span className="btn__comment">($10.99)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="profile-page__right">
            <div className="tag-aside">
              <a href="javascript:;" className="tag-aside__link">
                us USA
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #tattoo
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #instagram
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #pornostar
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #twitter
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #tiktok
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #youtube
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #3+
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #onlyfans
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #kitty
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #coconutkitty
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #famous
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #fansly
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #patreon
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #privatechat
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #nudes
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #erotic
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #video
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #free
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #trial
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #webcammodel
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #homevideo
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #porn
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #bigboobs
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #student
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #young
              </a>
              <a href="javascript:;" className="tag-aside__link">
                #best
              </a>
            </div>
          </aside>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default ProfilePage;
