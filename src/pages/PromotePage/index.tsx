import React from 'react';
import { Link } from 'react-router-dom';
import ReviewList from '../../common/components/ReviewList';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setLinkOnlyfans, setMail } from '../../redux/slices/promoteSlicer';

const PromotePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mail, linkOnlyfans } = useAppSelector((state) => state.promote);
  const inputLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    dispatch(setLinkOnlyfans(enteredName));
  };
  const inputMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    dispatch(setMail(enteredName));
  };
  const useInput = (initialValue: string) => {
    const [value, setValue] = React.useState<string>(initialValue);
    const [dirty, setDirty] = React.useState<boolean>(false);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDirty(true);
    };
    return {
      value,
      onBlur,
      onChange,
    };
  };
  const email = useInput('');

  return (
    <div>
      <div className="promoting-start">
        <div className="promoting-start__title">
          Start promoting your profile to 70,000 people every day!
        </div>

        <div className="promoting-start__form">
          <div className="form-one">
            <form>
              <div className="form-one__line">
                <input
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  id="profile"
                  type="text"
                  className="form-one__input form-one__input_set "
                  placeholder="Your profile link"
                />
                {/* form-one__input_success */}
                {/* <svg className="form-one__icon form-one__icon_success">
                  <use xlinkHref="img/sprite.svg#input-success"></use>
                </svg> */}
              </div>
              <div className="form-one__line">
                <input
                  id="email"
                  type="email"
                  className="form-one__input form-one__input_set "
                  placeholder="E-mail"
                />
                {/* form-one__input_error */}

                {/* <div className="form-one__error">
                  ooops, uncorrect e-mail format{' '}
                  <span className="form-one__error-small">(for ex. jimmyneytron@gmail.com)</span>
                </div>
                <svg className="form-one__icon form-one__icon_error">
                  <use xlinkHref="img/sprite.svg#input-error"></use>
                </svg> */}
              </div>
              <div className="form-one__line">
                <input
                  id="email"
                  type="email"
                  className="form-one__input form-one__input_set "
                  placeholder="E-mail"
                />
              </div>
              <div className="form-one__line">
                <input
                  id="email"
                  type="email"
                  className="form-one__input form-one__input_set "
                  placeholder="E-mail"
                />
              </div>
              <div className="form-one__line">
                <input
                  id="email"
                  type="email"
                  className="form-one__input form-one__input_set "
                  placeholder="E-mail"
                />
              </div>
              <div className="form-one__line">
                <input
                  id="email"
                  type="email"
                  className="form-one__input form-one__input_set "
                  placeholder="E-mail"
                />
              </div>
              <div className="form-one__line">
                <input
                  id="email"
                  type="email"
                  className="form-one__input form-one__input_set "
                  placeholder="E-mail"
                />
              </div>
              <Link to="/offers">
                <button className="btn btn-one btn-lg btn-full-width" type="submit">
                  CONFIRM
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotePage;
