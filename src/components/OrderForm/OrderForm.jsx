import toast from "react-hot-toast";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { orderSchema } from "../../utils/validationSchemas.js";
import { getUserCart, sendOrder } from "../../redux/cart/operations.js";

import InputField from "../InputField/InputField.jsx";
import FormButton from "../FormButton/FormButton.jsx";
import CheckoutStep from "../CheckoutStep/CheckoutStep.jsx";
import OrderTotal from "../OrderTotal/OrderTotal.jsx";
import RadioField from "../RadioField/RadioField.jsx";

import css from "./OrderForm.module.css";

export default function OrderForm({ totalPrice }) {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(orderSchema),
    mode: "onBlur", // Валідація при зміні фокусу
    reValidateMode: "onSubmit", // Повторна валідація при сабміті
    defaultValues: {
      payment: "cash",
    },
  });

  const onSubmit = (orderData) => {
    dispatch(sendOrder(orderData))
      .unwrap()
      .then((response) => {
        dispatch(getUserCart());
        methods.reset();
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <FormProvider {...methods}>
      <form className={css.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <CheckoutStep
          stepName={"Enter shipping info "}
          stepDescription={
            "Enter your delivery address where you get the product. You can also send any other location where you send the products."
          }
        />
        <div className={css.imputContainer}>
          <InputField name="name" label="Name" placeholder="Enter text" />
          <InputField name="email" label="Email" type="email" placeholder="Enter text" />
          <InputField name="phone" label="Phone" type="tel" placeholder="Enter number" setValue={methods.setValue} />
          <InputField name="address" label="Address" placeholder="Enter text" />
        </div>
        <CheckoutStep
          stepName={"Payment method"}
          stepDescription={"You can pay us in a multiple way in our payment gateway system."}
        />
        <div className={css.radioContainer}>
          <RadioField name="payment" label="Payment" />
        </div>
        <CheckoutStep
          stepName={"Order details"}
          stepDescription={"Shipping and additionnal costs are calculated based on values you have entered."}
        />
        <OrderTotal totalPrice={totalPrice} />
        <div className={css.actionContainer}>
          <FormButton>Place order</FormButton>
        </div>
      </form>
    </FormProvider>
  );
}
