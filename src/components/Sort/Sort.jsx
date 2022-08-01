import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice.js';

import styles from './Sort.module.scss';

import { FaSortAmountDown } from 'react-icons/fa';

export const sortList = [
  { name: 'назвою', sortProperty: 'title' },
  { name: 'назвою', sortProperty: '-title' },
  { name: 'ціною', sortProperty: 'price' },
  { name: 'ціною', sortProperty: '-price' },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
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
      <FaSortAmountDown />
      <b>Сортування за:</b>
      <span>{sort.name}</span>
      {open && (
        <div className={styles.popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? `active` : ``}>
                {obj.name}
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
