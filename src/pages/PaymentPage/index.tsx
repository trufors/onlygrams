import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
const PaymentPage: React.FC = () => {
  const { mail, linkOnlyfans } = useAppSelector((state) => state.promote);
  return (
    <div className="pay-form-block">
      <div className="pay-form-block__inner">
        <div className="pay-form-block__top">
          <Link to="/" className="pay-form-block__link">
            <svg className="pay-form-block__link-icon">
              <use xlinkHref="img/sprite.svg#str"></use>
            </svg>
            Back
          </Link>
        </div>

        <div className="pay-form">
          <div className="pay-form__head">Complete your Promotion order</div>
          <div className="pay-form__body">
            <div className="pay-form-item">
              {/* <div className="pay-form-item__pict">
                <img src="img/upload/oleg.png" alt="" className="pay-form-item__img" />
              </div> */}
              <div className="pay-form-item__block">
                <div className="pay-form-item__name">
                  15-day promo ({linkOnlyfans},{mail})
                </div>
                <div className="pay-form-item__desc">
                  Your profile will be promoted for 15 days
                  <br />
                  to ~900,000 potential fans
                </div>
              </div>
              <div className="pay-form-item__price">
                <div className="pay-form-item__price-old">$899.00</div>
                <div className="pay-form-item__price-set">$599.00</div>
              </div>
            </div>

            <div className="pay-form-code form-one">
              <form action="">
                <div className="pay-form-code__inner">
                  <div className="pay-form-code__input form-one__line">
                    <input
                      id="profile"
                      type="text"
                      className="form-one__input form-one__input_sm"
                    />
                    <label className="form-one__label">Your profile link</label>
                  </div>
                  <div className="pay-form-code__btn">
                    <button
                      className="btn btn-one btn-50 btn-border-15 btn-full-width"
                      type="submit">
                      Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="pay-form-tabs">
              <a
                href="javascript:;"
                className="pay-form-tabs__tab pay-form-tabs__tab_active"
                data-id="tab1">
                <img src="img/pay/card.png" alt="" className="pay-form-tabs__img" />
                Credit Card
              </a>
              <a href="javascript:;" className="pay-form-tabs__tab" data-id="tab2">
                <img src="img/pay/cripto.png" alt="" className="pay-form-tabs__img" />
                Crypto
              </a>
            </div>

            <div className="pay-form-tabs-block">
              <div className="pay-form-tabs-block__item pay-form-tabs-block__item_active" id="tab1">
                <div className="pay-form-card">
                  <a
                    href="javascript:;"
                    className="btn btn-black btn-50 btn-border-15 btn-full-width"
                    type="submit">
                    <img src="img/pay/apple.png" alt="" />
                  </a>
                  <form action="">
                    <div className="pay-form-card__input-block">
                      <div className="pay-form-card__input-icon">
                        <img src="img/pay/clear.png" alt="" />
                      </div>
                      <input
                        className="pay-form-card__input pay-form-card__input_card"
                        type="text"
                        value=""
                        placeholder="Card Number"
                      />
                      <input
                        className="pay-form-card__input pay-form-card__input_date pay-form-card__input_left"
                        type="text"
                        value=""
                        placeholder="MM"
                      />
                      <span className="pay-form-card__input-sep"> / </span>
                      <input
                        className="pay-form-card__input pay-form-card__input_date"
                        type="text"
                        value=""
                        placeholder="YY"
                      />
                      <input
                        className="pay-form-card__input pay-form-card__input_cvc"
                        type="text"
                        value=""
                        placeholder="CVC"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-one btn-50 btn-border-15 btn-full-width"
                      disabled>
                      Pay $599.00
                    </button>
                  </form>
                  <div className="pay-form-card__comment">Secure checkout powered by</div>
                </div>
              </div>
              <div className="pay-form-tabs-block__item" id="tab2">
                <a
                  href="javascript:;"
                  className="btn btn-one btn-50 btn-border-15 btn-full-width"
                  type="submit">
                  Pay securely by Crypto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
