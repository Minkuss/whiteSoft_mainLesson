import { FC, useContext, useEffect, useState } from "react";
import "./FormSection.scss";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostData } from "../../hooks/usePostData";
import { ApiContext } from "../../context/apiContext";

const formSchema = object({
  subject: string()
    .required("Please, fill the field!")
    .min(5, "Subject must be at least 5 characters!"),
  name: string().required("Please, fill the field!"),
  phone: string()
    .required("Please, fill the field!")
    .matches(/^\+\d\d{6}\d{2}\d{2}$/, "Incorrect phone number!"),
  description: string(),
});

export const FormSection: FC = () => {
  const api = useContext(ApiContext).api;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const watchFields = watch(["name", "phone", "subject"]);

  const onSubmit = (data) => {
    const requestData: SendRequestData = {
      subject: data.subject,
      name: data.name,
      phone: data.phone,
      descrition: data.descrition,
    };

    usePostData(requestData, api);
  };

  return (
    <section id="contacts" className="contacts container">
      <div className="contacts__content">
        <div className="content__text">
          <h2 className="text__heading heading-1--bold">Contact Capibarara</h2>
          <p className="text__p subtitle--normal">
            Do you wanna chat with Capibarara? Then send the request!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="content__form shadow--lg"
          action=""
        >
          <div className="field-wrapper">
            <label
              htmlFor="subject"
              className={`field__label${
                errors.subject ? "--error" : ""
              } body-3--normal`}
            >
              Subject*
            </label>
            <input
              {...register("subject")}
              required
              className={`field__input input${
                errors.subject ? "--error" : ""
              } body-1--normal`}
              id="subject"
              type="text"
            />
            {errors.subject && (
              <span className="body-2--normal field__label--error">
                {errors.subject.message}
              </span>
            )}
          </div>
          <div className="field-wrapper">
            <label
              htmlFor="name"
              className={`field__label${
                errors.name ? "--error" : ""
              } body-3--normal`}
            >
              Name*
            </label>
            <input
              {...register("name")}
              required
              className={`field__input input${
                errors.name ? "--error" : ""
              } body-1--normal`}
              id="name"
              type="text"
            />
            {errors.name && (
              <span className="body-1--normal field__label--error">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="field-wrapper">
            <label
              htmlFor="phone"
              className={`field__label${
                errors.phone ? "--error" : ""
              } body-3--normal`}
            >
              Phone*
            </label>
            <input
              {...register("phone")}
              required
              className={`field__input input${
                errors.phone ? "--error" : ""
              } body-1--normal`}
              id="phone"
              type="tel"
              placeholder="+7__________"
            />
            {errors.phone && (
              <span className="body-1--normal field__label--error">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="field-wrapper">
            <label
              htmlFor="description"
              className="field__label body-3--normal"
            >
              Description
            </label>
            <textarea
              {...register("description")}
              className="field__textarea textarea body-1--normal"
              id="description"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={
              !watchFields[0] ||
              !watchFields[1] ||
              !watchFields[2] ||
              Object.keys(errors).length > 0
            }
            className="field__button button"
          >
            Send it!
          </button>
        </form>
      </div>
    </section>
  );
};
