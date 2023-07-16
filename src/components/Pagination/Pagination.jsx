import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../../redux/actions";
import { PaginationContainer, PaginationButton } from './Styles'

export default function Pagination({ totalPages, countries }) {
  const { currentPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const goToPreviousPage = () => {
    dispatch(changeCurrentPage("previous"));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToNextPage = () => {
    dispatch(changeCurrentPage("next"));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(changeCurrentPage("reset"));
  }, [countries]);

  if (totalPages > 1) {
    return (
      <PaginationContainer>
        <PaginationButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <p>
          {currentPage} of {totalPages}
        </p>
        <PaginationButton onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </PaginationButton>
      </PaginationContainer>
    );
  }
}
