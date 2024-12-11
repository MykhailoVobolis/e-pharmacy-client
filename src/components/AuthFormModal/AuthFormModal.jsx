import toast from "react-hot-toast";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema, singInSchema } from "../../utils/validationSchemas.js";
import { useDispatch } from "react-redux";
import { logIn, register } from "../../redux/auth/operations.js";
import { getUserCart } from "../../redux/cart/operations.js";
import { closeModal, openModal } from "../../redux/modal/slice.js";

import InputField from "../InputField/InputField.jsx";
import FormButton from "../FormButton/FormButton.jsx";
import AuthPromptModal from "../AuthPromptModal/AuthPromptModal.jsx";

import css from "./AuthFormModal.module.css";

export default function AuthFormModal({ authPromt, type, title }) {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(type === "register" ? signUpSchema : singInSchema),
    mode: "onBlur", // Валідація при зміні фокусу
    reValidateMode: "onSubmit", // Повторна валідація при сабміті
  });

  const onSubmit = (userData) => {
    dispatch(type === "register" ? register(userData) : logIn(userData))
      .unwrap()
      .then((response) => {
        dispatch(getUserCart());
        methods.reset();
        dispatch(closeModal());
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const toggleButtonClick = () => {
    type === "login" ? dispatch(openModal("register")) : dispatch(openModal("login"));
  };

  return (
    <div className={clsx(css.wrapper, { [css.loginWrapper]: type === "login" })}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={clsx(css.imputContainer, { [css.loginInputContainer]: type === "login" })}>
            {type === "register" && <InputField name="name" label="Name" placeholder="User Name" />}
            <InputField variant={type} name="email" label="Email" type="email" placeholder="Email address" />
            {type === "register" && (
              <InputField
                name="phone"
                label="Phone"
                type="tel"
                placeholder="Phone number"
                setValue={methods.setValue}
              />
            )}
            <InputField variant={type} name="password" label="Password" type="password" placeholder="Password" />
          </div>
          <div className={css.actionContainer}>
            <FormButton variant={type}>{title}</FormButton>
            <AuthPromptModal variant={type} onClick={toggleButtonClick}>
              {authPromt}
            </AuthPromptModal>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
