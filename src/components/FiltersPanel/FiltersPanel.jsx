import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsCategories } from "../../redux/products/selectors.js";
import { changeFilterProducts } from "../../redux/filters/slice.js";
import { selectFilterProducts } from "../../redux/filters/selectors.js";
import { HiOutlineFilter } from "react-icons/hi";

import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import SearchInputField from "../SearchInputField/SearchInputField.jsx";

import css from "./FiltersPanel.module.css";

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const categories = useSelector(selectProductsCategories);

  const filterParams = useSelector(selectFilterProducts);
  const { category: categoryValue } = filterParams;

  const methods = useForm({
    defaultValues: {
      keyword: "",
      category: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    const filterData = {
      name: data.keyword?.trim(),
      category: data.category,
      page: 1,
      discount: "",
    };

    dispatch(changeFilterProducts(filterData));
  };

  return (
    <FormProvider {...methods}>
      <form className={css.searchForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputContainer}>
          <CustomSelect name="category" label="Category" options={categories} categoryValue={categoryValue} />
          <SearchInputField name="keyword" label="Keyword" placeholder="Search medicine" />
        </div>
        <button className={css.submitButton} type="submit">
          <HiOutlineFilter size={14} />
          Filter
        </button>
      </form>
    </FormProvider>
  );
}
