import { FunctionComponent, MouseEvent } from "react";

import "../styles/Paginator.css";

interface Props {
  totalPages: number;
  pageNumber: number;
  handlePagination: (event: MouseEvent<HTMLDivElement>) => void;
}

const Paginator: FunctionComponent<Props> = ({
  totalPages,
  handlePagination,
  pageNumber,
}) => {
  return (
    <div className="paginator">
      {totalPages > 0
        ? Array.from(Array(totalPages).keys()).map((page) => {
            return (
              <div
                className={`paginator--btn ${
                  +pageNumber === page + 1 ? "paginator--btn-active" : ""
                }`}
                data-index={page + 1}
                onClick={handlePagination}
                style={{ padding: "10px", border: "1px solid #000" }}
              >
                {page + 1}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Paginator;
