import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TasksInputs, setTasksData } from '../../../../redux/slices/profiSlicer';
import classes from './TasksForm.module.css';

const TasksForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TasksInputs>({ mode: 'onBlur' });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TasksInputs> = (data) => {
    dispatch(setTasksData(data));
    console.log(data);
    navigate('/thanks');
  };
  return (
    <>
      <div className="promoting-start">
        <div className="promoting-start__title">
          Start promoting your profile to 70,000 people every day!
        </div>

        <div className="promoting-start__form">
          <div className="form-one">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="E-mail"
                  {...register('email', {
                    required: 'Email is required field!',
                    pattern: {
                      value:
                        /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
                      message: 'ooops, uncorrect e-mail format',
                    },
                  })}
                />
                {errors?.email && (
                  <div className="form-one__error">
                    ooops, uncorrect e-mail format{' '}
                    <span className="form-one__error-small">(for ex. onlygram@gmail.com)</span>
                  </div>
                )}
              </div>

              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your telegram userName"
                  {...register('tg', {
                    required: 'tg',
                    minLength: {
                      value: 5,
                      message: 'ooops, uncorrect tg format',
                    },
                  })}
                />
                {errors?.tg && (
                  <div className="form-one__error">
                    ooops, uncorrect telegram userName format
                    <span className="form-one__error-small">(for ex. @profile)</span>
                  </div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your description"
                  {...register('descr', {
                    required: 'descr',
                    minLength: {
                      value: 10,
                      message: 'ooops, minimal length 10 symbols',
                    },
                  })}
                />
                {errors?.descr && (
                  <div className="form-one__error">ooops, minimal length 10 symbols</div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  type="file"
                  className="form-one__input form-one__input_set "
                  placeholder="Upload your photo here"
                  {...register('file')}
                />
              </div>

              <div className="form-one__line">
                <select className={classes.select} {...register('category')}>
                  <option value="Porno">Porno</option>
                  <option value="Photo">Photo</option>
                  <option selected value="Escort">
                    Escort
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                className="btn btn-one btn-lg btn-full-width"
                type="submit"
                disabled={!isValid}>
                CONFIRM
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksForm;
