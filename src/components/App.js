import React, { useState } from "react";
import Pagination from "./Pagination";

var exampleItems = [...Array(151).keys()].map(i => ({
  id: i + 1,
  name: "Item " + (i + 1)
}));

const App = () => {
  // an example array of items to be paged
  const [{ pageOfItems }, setPageOfItems] = useState({
    pageOfItems: []
  });
  // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
  //this.onChangePage = this.onChangePage.bind(this);
  const onChangePage = pageOfItems => {
    // update state with new page of items
    setPageOfItems({ ...pageOfItems, pageOfItems: pageOfItems });
  };

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h1>React - Pagination Example with logic like Google</h1>
          {pageOfItems.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
          <Pagination items={exampleItems} onChangePage={onChangePage} itemsPerPage={10} />
        </div>
      </div>
    </div>
  );
};

export default App;
