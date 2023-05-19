import React, { useEffect, useState } from "react";
import RdsIcon from "../rds-icon";
import "./rds-pagination.css";
export interface RdsPaginationProps {
  totalRecords: number;
  recordsPerPage?: any;
  paginationType?: string;
  alignmentType?: string;
  size?: string;
  onPageChange?: (currentPage: number, recordsPerPage: number) => void;
  currentPage?: number;

}
const RdsPagination = (props: RdsPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(props.recordsPerPage);
  let paginType = props.paginationType || "default";
  const setItemsPerPage = (e: any, current: any) => {
    if (e.target.value > props.totalRecords || e.target.value == "All") {
      setRecordsPerPage(props.totalRecords);
    } else {
      setRecordsPerPage(e.target.value);
    }
  };
  const PageNumbers = [];
  const continued = [];
  const previous = [];
  let int: any;


  if (paginType == "default") {
    int = Math.ceil(props.totalRecords / props.recordsPerPage);
    for (let i = 1; i <= int; i++) {
      PageNumbers.push(i);
    }
  } else {
    int = Math.ceil(props.totalRecords / recordsPerPage);
    for (let i = 1; i <= int; i++) {
      PageNumbers.push(i);
    }
  }

  const onNext = (current: any) => {
    setCurrentPage(current + 1);

  };
  const onPage = (current: any) => {
    setCurrentPage(current);

  };
  const onPrevious = (current: any) => {
    setCurrentPage(current - 1);

  };
  const startIndex = Math.max(currentPage - 5, 0);

  const endIndex = Math.min(startIndex + 5, PageNumbers.length);

  const displayedPages = PageNumbers.slice(startIndex, endIndex);


  let leftBound = currentPage - 2;
  let rightBound = currentPage + 1;

  if (leftBound <= 1) {
    leftBound = 1;
    rightBound = 5;
  }

  if (rightBound >= int) {
    rightBound = int;
    leftBound = int - 4;
  }
  if (rightBound < int) {
    continued.push("...");
    continued.push(int);
  }
  if (rightBound >= int && int > 5) {
    previous.push(1);
    previous.push("...");

  }


  useEffect(() => {
    props.onPageChange != undefined &&
      props.onPageChange(currentPage, recordsPerPage);
  }, [currentPage, recordsPerPage]);

  const size = " pagination-" + `${props.size || "sm"}`;
  const align =
    " pagination justify-content-" + `${props.alignmentType || "start"}`;
  return (
    <div data-testid="page-link">
      {paginType == "default" && (
        <nav aria-label="Page navigation example">
          <ul
            className={"pagination rounded align-items-center" + `${size}` + `${align}`}
          >
            <li
              className={
                "m-1 page-item " + `${currentPage == 1 ? "disabled" : " "}`
              }
            >
              <a
                className="page-link b"
                onClick={() => onPrevious(currentPage)}
              >
                <RdsIcon
                  name="chevron_left"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
                <span className="ms-1 pagination-prev">Prev</span>
              </a>
            </li>
            {displayedPages.map((number) => (
              <li
                key={number}
                className={`${number === currentPage
                  ? "page-item m-1 default-li active"
                  : "page-item m-1 default-li "
                  }`}
              >
                <a
                  onClick={() => {
                    onPage(number);
                  }}
                  className="page-link pe-auto"
                >
                  {number}
                </a>
              </li>
            ))}
            <li
              className={
                "page-item m-1 " + `${currentPage == int ? "disabled" : " "}`
              }
            >
              <a className="page-link" onClick={() => onNext(currentPage)}>
                <span className="pagination-next me-1">Next</span>
                <RdsIcon
                  name="chevron_right"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </a>
            </li>
          </ul>
        </nav>
      )}
      {paginType == "advance" && (
        <nav aria-label="page navigation">
          <ul
            className={
              "pagination rounded align-items-center " + `${size}` + `${align}`
            }
          >
            <li
              className={
                "m-1 page-item " + `${currentPage == 1 ? "disabled" : " "}`
              }
            >
              <a
                // className="page-link rounds"
                onClick={() => onPrevious(currentPage)}
              >
                <RdsIcon
                  name="chevron_left"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </a>
            </li>
            {previous.map((number) => (
              <li
                key={number}
                className={`${number === currentPage
                  ? "page-item m-1 default-li active"
                  : "page-item m-1 default-li "
                  }`}
              >
                <a href="#"
                  onClick={() => onPage(number)}
                  className={`${number === 1 ? "page-link roundeds" : ""}`}
                >
                  {number}
                </a>
              </li>
            ))}
            {displayedPages.map((number) => (
              <li
                key={number}
                className={`${number === currentPage
                  ? "page-item m-1 default-li active"
                  : "page-item m-1 default-li "
                  }`}
              >
                <a href="#"
                  onClick={() => onPage(number)}
                  className="page-link roundeds pe-auto"
                >
                  {number}
                </a>
              </li>
            ))}

            {continued.map((number) => (
              <li
                key={number}
                className={`${number === currentPage
                  ? "page-item m-1 default-li active"
                  : "page-item m-1 default-li "
                  }`}
              >
                <a href="#"
                  onClick={() => onPage(number)}
                  className={`${number === int ? "page-link roundeds" : ""}`}
                >
                  {number}
                </a>
              </li>
            ))}

            <li
              className={
                "page-item m-1 " + `${currentPage == int ? "disabled" : " "}`
              }
            >
              <a
                // className="page-link rounds "
                onClick={() => onNext(currentPage)}
              >
                <RdsIcon
                  name="chevron_right"
                  width="15px"
                  height="15px"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </a>
            </li>
            <li className="page-item">
              <div className="btn-group dropdown page-counter">
                <select
                  className="form-select form-select-sm custom-select py-2"
                  onChange={(e) => setItemsPerPage(e, currentPage)}
                >
                  <option value="All">All</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default RdsPagination;

