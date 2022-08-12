import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, selectSort } from '../../redux/slices/filterSlice.js';

import styles from './Sort.module.scss';
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSortNumericDown,
  BsSortNumericUpAlt,
} from 'react-icons/bs';

import { FaSortAmountDown } from 'react-icons/fa';

export const sortList = [
  { name: 'назвою', adname: 'за зростанням', sortProperty: '-title', icon: <BsSortAlphaDown /> },
  { name: 'назвою', adname: 'за спаданням', sortProperty: 'title', icon: <BsSortAlphaUpAlt /> },
  { name: 'ціною', adname: 'за зростанням', sortProperty: '-price', icon: <BsSortNumericDown /> },
  { name: 'ціною', adname: 'за зменьшенням', sortProperty: 'price', icon: <BsSortNumericUpAlt /> },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const sortRef = React.useRef();

  const [open, setOpen] = React.useState(false);

  const onClickItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const clickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', clickOutside);
    return () => document.body.removeEventListener('click', clickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.root} onClick={() => setOpen(!open)}>
      <div>
        <FaSortAmountDown />
        <b>Сортування за:</b>
        <span>{sort.name}</span>
      </div>
      {open && (
        <div className={styles.popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? `active` : ``}>
                {obj.name} {obj.adname}
                {obj.icon}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;

/*

export const sortList = [
  { name: 'назвою', sortProperty: 'title' },
  { name: 'назвою', sortProperty: '-title' },
  { name: 'ціною', sortProperty: 'price' },
  { name: 'ціною', sortProperty: '-price' },
];

*/
