import { PaginationItem } from "@mui/material";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useMedia } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalPages } from "../../redux/products/selectors.js";
import { changeProductPage } from "../../redux/filters/slice.js";

import Pagination from "@mui/material/Pagination";

import css from "./ProductsPagination.module.css";
import { selectFilterProducts } from "../../redux/filters/selectors.js";

export default function ProductsPagination() {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const { page } = useSelector(selectFilterProducts);

  const isMobile = useMedia("(max-width: 767px)");

  // Функція обробки зміни сторінки
  const handlePageChange = (event, value) => {
    dispatch(changeProductPage(value));
  };

  return (
    <div className={css.paginationWrapper}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange} // Обробник зміни сторінки
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: MdKeyboardArrowLeft,
              next: MdKeyboardArrowRight,
              first: MdKeyboardDoubleArrowLeft,
              last: MdKeyboardDoubleArrowRight,
            }}
            {...item}
          />
        )}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        siblingCount={isMobile ? 0 : 1}
        sx={{
          // Стилізація всіх єлементів
          "& .MuiPaginationItem-root": {
            margin: isMobile ? "0 2px" : "0 5px", // Змінює горизонтальний проміжок між елементами
            width: isMobile ? "35px" : "44px",
            height: isMobile ? "35px" : "44px",
            fontSize: isMobile ? "14px" : "18px",
            fontWeight: "700",
            fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            color: "var(--black)",
            border: "solid 1px rgba(29, 30, 33, 0.05)",
            borderRadius: "100px",
            "&:hover": {
              color: "var(--black)",
            },
            // Стилізація активного, обраного елемента
            "&.Mui-selected": {
              backgroundColor: "var(--green)",
              color: "var(--white)",
              border: "none",
              "&:hover": {
                // Задаємо відсутність зміни стилів на ховер для активного елемента
                backgroundColor: "var(--green-hover)",
                border: "none",
              },
            },
          },
          // Стилізація тексту "..."
          "& .MuiPaginationItem-ellipsis": {
            color: "var(--black)",
            border: "none",
            padding: "6px 8px",
            margin: "0 5px",
            fontSize: isMobile ? "14px" : "18px",
            fontWeight: "700",
            "&:hover": {
              color: "var(--black)",
            },
          },
        }}
      />
    </div>
  );
}
