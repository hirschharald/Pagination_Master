import React, { useState, useEffect } from "react";

const pagination = props => {
  var { items, onChangePage, itemsPerPage } = props;
  
  const [pager, setPager] = useState({
    currentPage: 1,
    startIndex: 0,
    endIndex: 10
  });

  useEffect(() => {
    // Calculate Items and call function
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    onChangePage(pageOfItems);
    //console.log(pageOfItems)
  }, [pager]);

  const totalItems = items.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const setPage = page => {
    //console.log(page);
    const newCurrentPage = page;

    var startIndex = (newCurrentPage - 1) * itemsPerPage;
    var endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
    setPager({
      ...pager,
      startIndex: startIndex,
      endIndex: endIndex,
      currentPage: newCurrentPage
    });
  };

  return (
    <ul className="pagination">
      <p>total Items:{totalItems}</p>
      <p>Items per Page: {itemsPerPage}</p>
      <p>totalPages: {totalPages} </p>
      <p>CurrentPage: {pager.currentPage} </p>
      <p>StartIndex: {pager.startIndex} </p>
      <p>EndIndex: {pager.endIndex} </p>

      <li className={pager.currentPage === 1 ? "disabled" : ""}>
      <a onClick={() => setPage(1)}>Erste</a>      
      </li>

      <li className={pager.currentPage === 1 ? "disabled" : ""}>
      {pager.currentPage !== 1 ?
        <a onClick={() => setPage(pager.currentPage - 1)}>Zurück</a>:""}
      </li>

      <li className={pager.currentPage === totalPages ? "disabled" : ""}>
      {pager.currentPage !== totalPages?
        <a onClick={() => setPage(pager.currentPage + 1)}>Vor</a>:""}
      </li>

      <li className={pager.currentPage === totalPages ? "disabled" : ""}>
        <a onClick={() => setPage(totalPages)}>Letze</a>
      </li>
      <p className="">Seite: {pager.currentPage} von {totalPages}</p>
    </ul>
  );
};
export default pagination;
