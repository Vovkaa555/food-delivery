import React from 'react';
import axios from 'axios';
import qs from 'qs';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from '../components/Sidebar';
import Search from '../components/Search/Search.jsx';
import Sort from '../components/Sort/Sort.jsx';
import { sortList } from '../components/Sort/Sort.jsx';
import Skeleton from '../components//Skeleton';
import FoodBlock from '../components/FoodBlock';
import Pagination from '../components/Pagination/Pagination.jsx';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

function Home({ searchValue }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const fetchFoods = () => {
    setIsLoading(true);
    const search = searchValue ? `&search=${searchValue}` : ``;
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://62cc4d598042b16aa7cd0883.mockapi.io/food?${category}&page=${currentPage}&limit=10${search}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(setFilters({ ...params, sort }));
    }
    isSearch.current = true;
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchFoods();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const foods = items.map((obj) => <FoodBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="home">
      <Sidebar value={categoryId} onChangeCategory={onChangeCategory} />
      <div className="searchSort">
        <Search />
        <Sort />
      </div>
      <div className="main-content">{isLoading ? skeletons : foods}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
