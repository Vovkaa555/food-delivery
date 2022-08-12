import React from 'react';

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

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
  selectFilter,
} from '../redux/slices/filterSlice';
import { fetchFoods, selectFoodData } from '../redux/slices/foodsSlice';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectFoodData);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const getFoods = async () => {
    const search = searchValue ? `&search=${searchValue}` : ``;
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(fetchFoods({ search, category, sortBy, order, currentPage }));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      if (sort) {
        params.sort = sort;
      }
      dispatch(setFilters(params));
    }
    isMounted.current = true;
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getFoods();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        categoryId: categoryId > 0 ? categoryId : null,
        sortProperty: sort.sortProperty,
        currentPage,
      };

      const queryString = qs.stringify(params, { skipNulls: true });

      navigate(`/?${queryString}`);
    }

    if (!window.location.search) {
      getFoods();
    }
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
      {status === 'error' ? (
        <div className="main-content__error">
          <h2>Помилка:( Спробуйте пізніше.</h2>
        </div>
      ) : (
        <div className="main-content">{status === 'loading' ? skeletons : foods}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
