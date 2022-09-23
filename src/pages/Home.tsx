import React from 'react';

import qs from 'qs';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from '../components/Sidebar';
import Search from '../components/Search/Search';
import Sort from '../components/Sort/SortPopup';
import { sortList } from '../components/Sort/SortPopup';
import Skeleton from '../components/Skeleton';
import FoodBlock from '../components/FoodBlock';
import Pagination from '../components/Pagination/Pagination';

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/filter/slice';
import { fetchFoods} from '../redux/foods/asyncActions';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectFoodData } from '../redux/foods/selectors';
import { SearchFoodsParams } from '../redux/foods/types';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectFoodData);
  const onChangeCategory = React.useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);
  const onChangePage = (value: number) => {
    dispatch(setCurrentPage(value));
  };
  const getFoods = async () => {
    const search = searchValue ? `&search=${searchValue}` : ``;
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(
      fetchFoods({ search, category, sortBy, order, currentPage: String(currentPage) }));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as SearchFoodsParams;
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(setFilters({
        searchValue: params.search,
        categoryId: Number(params.category),
        currentPage: Number(params.currentPage),
        sort: sort || sortList[0], 
      }));
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
      dispatch(fetchFoods({} as SearchFoodsParams));
    }
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
 

  const foods = items.map((obj: any) => <FoodBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  console.log(foods.length)

  return (
    <div className="home">
      <Sidebar value={categoryId} onChangeCategory={onChangeCategory} />
      <div className="searchSort">
      <Sort value ={sort}/>
        <Search />
      </div>
      {status === 'error' ? (
        <div className="main-content__error">
          <h2>Помилка:( Спробуйте пізніше.</h2>
        </div>
      ) : (
        <div className="main-content">{status === 'loading' ? skeletons : foods}</div>
      )}
      {(!searchValue && foods.length > 9) && <Pagination currentPage={currentPage} onChangePage={onChangePage} />}
    </div>
  );
}

export default Home;
