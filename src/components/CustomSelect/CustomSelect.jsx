import { useFormContext } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter.js";

import css from "./CustomSelect.module.css";

export default function CustomSelect({ name, options, categoryValue = "Product category" }) {
  const {
    register,
    setValue,
    formState: { errors },
    trigger,
  } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Product category");
  const selectRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option === "" ? "All" : option);
    setValue(name, option); // Передаємо значення у форму
    trigger(name); // Запускаємо валідацію для поля `name`
    setIsOpen(false);
  };

  // Синхронізація categoryValue з внутрішнім станом
  useEffect(() => {
    setSelectedOption(categoryValue || "Product category");
  }, [categoryValue]);

  // Закриття OptionsList при кліку у будь-яке місце екрану
  useEffect(() => {
    function handleClickOutside(event) {
      // Перевіряємо, чи клік був за межами компонента
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${css.customSelect} ${errors[name] ? css.inputError : ""}`}
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}>
      <div className={css.selectedOption}>
        <p className={css.selectPlaceholder}>
          {/* Відображаємо вибрану категорію або дефолтний плейсхолдер */}
          {capitalizeFirstLetter(selectedOption)}
        </p>
        <IoChevronDown className={`${css.selectIcon} ${isOpen ? css.isOpen : ""}`} size={16} />
      </div>
      {isOpen && (
        <ul className={css.optionsList}>
          <li className={css.optionItem} onClick={() => handleOptionClick("")}>
            All
          </li>
          {options.map((option, index) => (
            <li key={index} className={css.optionItem} onClick={() => handleOptionClick(option)}>
              {capitalizeFirstLetter(option)}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" {...register(name)} value={selectedOption} />
      {errors[name] && (
        <p className={css.errorMessage}>
          <MdError size={16} /> {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
