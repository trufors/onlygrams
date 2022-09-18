import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TasksInputs, setTasksData, SaveTasksPayload } from '../../../../redux/slices/profiSlicer';
import classes from './TasksForm.module.css';
import axios from 'axios';

type SavePayload = {
  task: SaveTasksPayload;
};

const TasksForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SaveTasksPayload>({ mode: 'onBlur' });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SaveTasksPayload> = async (data) => {
    dispatch(setTasksData(data));
    await axios
      .post('/api/file/upload', data.image, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data)
      .then(({ filename }) => {
        const payload: SavePayload = {
          task: {
            telegramLink: data.telegramLink,
            subscribersCount: data.subscribersCount,
            category: data.category.toUpperCase(),
            price: data.price,
            description: data.description,
            image: filename,
          },
        };

        axios.post<SaveTasksPayload>('api/task', payload);
      });

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
                  placeholder="Your telegram userName"
                  {...register('telegramLink', {
                    required: 'telegramLink',
                    minLength: {
                      value: 5,
                      message: 'ooops, uncorrect tg format',
                    },
                  })}
                />
                {errors?.telegramLink && (
                  <div className="form-one__error">
                    ooops, uncorrect telegram userName format
                    <span className="form-one__error-small">(for ex. profile without @)</span>
                  </div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your price"
                  {...register('price', {
                    required: 'price',
                    minLength: {
                      value: 1,
                      message: 'ooops, uncorrect price format',
                    },
                  })}
                />
                {errors?.price && (
                  <div className="form-one__error">
                    ooops, uncorrect uncorrect price format
                    <span className="form-one__error-small">(for ex. profile without @)</span>
                  </div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your number of subscribersgit"
                  {...register('subscribersCount', {
                    required: 'subscribersCount',
                    minLength: {
                      value: 1,
                      message: 'ooops, uncorrect subscribers format',
                    },
                  })}
                />
                {errors?.subscribersCount && (
                  <div className="form-one__error">
                    ooops, uncorrect subscribers format
                    <span className="form-one__error-small">(for ex. 370)</span>
                  </div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your description"
                  {...register('description', {
                    required: 'description',
                    minLength: {
                      value: 10,
                      message: 'ooops, minimal length 10 symbols',
                    },
                  })}
                />
                {errors?.description && (
                  <div className="form-one__error">ooops, minimal length 10 symbols</div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  type="file"
                  className="form-one__input form-one__input_set "
                  placeholder="Upload your photo here"
                  {...register('image')}
                />
              </div>

              <div className="form-one__line">
                <select className={classes.select} {...register('category')}>
                  <option value="Promo">Promo</option>
                  <option value="Make a film">Make a film</option>
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
