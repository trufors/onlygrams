import React from 'react';
import ReviewList from '../../common/components/ReviewList';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setOffer } from '../../redux/slices/promoteSlicer';

const OffersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.promote);
  console.log(data);

  return (
    <div>
      <div className="promoting-tariff">
        {/* <div className="promoting-tariff__title">Start promoting right now!</div> */}
        <div className="promoting-tariff__items">
          <div className="promoting-tariff-item">
            <div className="promoting-tariff-item__inner">
              <div className="promoting-tariff-item__head">5-day promo</div>
              <div className="promoting-tariff-item__body">
                <div className="promoting-tariff-item__points">
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/fire.svg" alt="" />
                    </div>
                    Your profile will be promoted for 5 days
                  </div>
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/like.svg" alt="" />
                    </div>
                    300.000 fans will see your advertisement
                  </div>
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/money.svg" alt="" />
                    </div>
                    High-quality (big tippers) fans from USA,
                    <br />
                    Europe and Russia will visit your profile!
                  </div>
                </div>
                <div className="promoting-tariff-item__block">
                  <div className="promoting-tariff-item__old-price">$349.00</div>
                  <div className="promoting-tariff-item__price">FREE</div>
                  <Link
                    onClick={(e) => {
                      dispatch(
                        setOffer([
                          '$349.00',
                          'FREE',
                          '5-day promo',
                          'Your profile will be promoted for 5 days',
                          '300.000 fans will see your advertisement',
                        ]),
                      );
                    }}
                    to="/thanks"
                    className="promoting-tariff-item__btn btn btn-one btn-full-width">
                    Checkout & start promotion
                  </Link>
                  <div className="promoting-tariff-item__comment">100% money-back guarantee.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="promoting-tariff-item">
            <div className="promoting-tariff-item__inner">
              <div className="promoting-tariff-item__head">15-day promo</div>
              <div className="promoting-tariff-item__body">
                <div className="promoting-tariff-item__points">
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/fire.svg" alt="" />
                    </div>
                    Your profile will be promoted for 15 days
                  </div>
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/like.svg" alt="" />
                    </div>
                    900.000 fans will see your advertisement
                  </div>
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/money.svg" alt="" />
                    </div>
                    High-quality (big tippers) fans from USA,
                    <br />
                    Europe and Russia will visit your profile!
                  </div>
                </div>
                <div className="promoting-tariff-item__block">
                  <div className="promoting-tariff-item__old-price">$899.00</div>
                  <div className="promoting-tariff-item__price">FREE</div>
                  <Link
                    onClick={(e) => {
                      dispatch(
                        setOffer([
                          '$899.00',
                          '$599.00',
                          '15-day promo',
                          'Your profile will be promoted for 15 days',
                          '900.000 fans will see your advertisement',
                        ]),
                      );
                    }}
                    to="/thanks"
                    className="promoting-tariff-item__btn btn btn-one btn-full-width">
                    Checkout & start promotion
                  </Link>
                  <div className="promoting-tariff-item__comment">100% money-back guarantee.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="promoting-tariff-item">
            <div className="promoting-tariff-item__inner">
              <div className="promoting-tariff-item__head">30-day promo</div>
              <div className="promoting-tariff-item__body">
                <div className="promoting-tariff-item__points">
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/fire.svg" alt="" />
                    </div>
                    Your profile will be promoted for 30 days
                  </div>
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/like.svg" alt="" />
                    </div>
                    900.000 fans will see your advertisement
                  </div>
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/money.svg" alt="" />
                    </div>
                    High-quality (big tippers) fans from USA,
                    <br />
                    Europe and Russia will visit your profile!
                  </div>
                  <div className="promoting-tariff-item__point">
                    <div className="promoting-tariff-item__icon">
                      <img src="img/promotion/crown.svg" alt="" />
                    </div>
                    You will be featured in our Best Accounts
                    <br />
                    recomendations read by 10.000 fans every day
                  </div>
                </div>
                <div className="promoting-tariff-item__block">
                  <div className="promoting-tariff-item__old-price">$1749.00</div>
                  <div className="promoting-tariff-item__price">FREE</div>
                  <Link
                    onClick={(e) => {
                      dispatch(
                        setOffer([
                          '$1749.00',
                          '$1199.00',
                          '30-day promo',
                          'Your profile will be promoted for 30 days',
                          '900.000 fans will see your advertisement',
                        ]),
                      );
                    }}
                    to="/thanks"
                    className="promoting-tariff-item__btn btn btn-one btn-full-width">
                    Checkout & start promotion
                  </Link>
                  <div className="promoting-tariff-item__comment">100% money-back guarantee.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewList />
    </div>
  );
};

export default OffersPage;
