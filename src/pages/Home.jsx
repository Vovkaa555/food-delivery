import React from 'react';

import Sidebar from '../components/Sidebar';
import Skeleton from '../components//Skeleton';
import FoodBlock from '../components/FoodBlock';
import Pagination from '../components/Pagination/Pagination.jsx';

function Home({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);
    const search = searchValue ? `&search=${searchValue}` : ``;
    const category = categoryId > 0 ? `category=${categoryId}` : ``;

    fetch(
      `https://62cc4d598042b16aa7cd0883.mockapi.io/food?${category}&page=${currentPage}&limit=8${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(30, 0);
  }, [categoryId, searchValue, currentPage]);

  const foods = items.map((obj) => <FoodBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div>
      <div className="home">
        <Sidebar value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <div className="main-content">{isLoading ? skeletons : foods}</div>
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

export default Home;
