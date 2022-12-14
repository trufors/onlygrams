import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { SubmitHandler, useForm } from "react-hook-form"
import { PromoteInput, setData } from "../../redux/slices/promoteSlicer"
import axios from "axios"

type SavePersonPayload = {
  person: {
    email: string
    name: string
    description: string
    image: string
    links: {
      onlyFans: string
      tiktok: string
      instagram: string
    }
  }
}

const PromotePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<PromoteInput>({ mode: "onBlur" })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<PromoteInput> = async (data) => {
    dispatch(setData(data))

    console.log(data, "DATA??")

    await axios
      .post("/api/file/upload", data.file, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((res) => res.data)
      .then(({ filename }) => {
        const payload: SavePersonPayload = {
          person: {
            email: data.email,
            name: data.name,
            description: data.description,
            image: filename,
            links: {
              onlyFans: data.link,
              tiktok: data.tiktok,
              instagram: data.inst
            }
          }
        }

        axios.post<SavePersonPayload>("api/person", payload)
      })

    navigate("/offers")
  }

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
                  {...register("email", {
                    required: "Email is required field!",
                    pattern: {
                      value:
                        /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9??-????-??]{1}[-0-9??-??.]{1,}[0-9??-????-??]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
                      message: "ooops, uncorrect e-mail format"
                    }
                  })}
                />
                {errors?.email && (
                  <div className="form-one__error">
                    ooops, uncorrect e-mail format{" "}
                    <span className="form-one__error-small">(for ex. onlygram@gmail.com)</span>
                  </div>
                )}
              </div>

              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your onlyfans link"
                  {...register("link", {
                    required: "link",

                    pattern: {
                      value: /^(https?:\/\/onlyfans?)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]/u,
                      message: "ooops, uncorrect onlyfans format"
                    }
                  })}
                />
                {errors?.link && (
                  <div className="form-one__error">
                    ooops, uncorrect onlyfans link format
                    <span className="form-one__error-small">
                      (for ex. https://onlyfans.com/profile)
                    </span>
                  </div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your tiktok link"
                  {...register("tiktok", {
                    required: "tiktok",
                    minLength: {
                      value: 24,
                      message: "ooops, uncorrect tiktok format"
                    }
                  })}
                />
                {errors?.tiktok && (
                  <div className="form-one__error">
                    ooops, uncorrect tiktok link format
                    <span className="form-one__error-small">
                      (for ex. https://www.tiktok.com/@yourtt)
                    </span>
                  </div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your instagram link"
                  {...register("inst", {
                    required: "inst",
                    minLength: {
                      value: 26,
                      message: "ooops, uncorrect tiktok format"
                    }
                  })}
                />
                {errors?.inst && (
                  <div className="form-one__error">
                    ooops, uncorrect instagram link format
                    <span className="form-one__error-small">
                      (for ex. https://www.instagram.com/yourinst)
                    </span>
                  </div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your Name"
                  {...register("name", {
                    required: "name",
                    minLength: {
                      value: 3,
                      message: "ooops, uncorrect tagName format"
                    }
                  })}
                />
                {errors?.name && (
                  <div className="form-one__error">ooops, uncorrect name format</div>
                )}
              </div>
              <div className="form-one__line">
                <input
                  className="form-one__input form-one__input_set "
                  placeholder="Your description"
                  {...register("description", {
                    required: "description",
                    minLength: {
                      value: 10,
                      message: "ooops, minimal length 10 symbols"
                    }
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
                  {...register("file")}
                />
                {/* {errors?.photo && (
                  <div className="form-one__error">
                    ooops, uncorrect instagram link format
                    <span className="form-one__error-small">
                      (for ex. https://www.instagram.com/yourinst)
                    </span>
                  </div>
                )} */}
              </div>

              {/* form-one__input_success */}
              {/* <svg className="form-one__icon form-one__icon_success">
                  <use xlinkHref="img/sprite.svg#input-success"></use>
                </svg> */}

              <button
                className="btn btn-one btn-lg btn-full-width"
                type="submit"
                disabled={!isValid}
              >
                {" "}
                CONFIRM
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PromotePage
{
  /* form-one__input_error */
}

{
  /* <div className="form-one__error">
                  ooops, uncorrect e-mail format{' '}
                  <span className="form-one__error-small">(for ex. jimmyneytron@gmail.com)</span>
                </div>
                <svg className="form-one__icon form-one__icon_error">
                  <use xlinkHref="img/sprite.svg#input-error"></use>
                </svg> */
}
