import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import { SearchContext } from '../../App';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.searchLogo} />
      <input ref={inputRef} value={value} onChange={onChangeInput} placeholder="Пошук" />
      {value && <AiFillCloseCircle onClick={onClickClear} className={styles.closeLogo} />}
    </div>
  );
};

export default Search;
