import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, selectSort, Sort, SortPropertyEnum } from '../../redux/slices/filterSlice';

import styles from './Sort.module.scss';
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSortNumericDown,
  BsSortNumericUpAlt,
} from 'react-icons/bs';

import { FaSortAmountDown } from 'react-icons/fa';

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortItem = {
  name: string;
  adname: string;
  sortProperty: SortPropertyEnum;
  icon: object;
}
export const sortList: SortItem[] = [
  { name: 'назвою', adname: 'за зростанням', sortProperty: SortPropertyEnum.TITLE_DESC, icon: <BsSortAlphaDown /> },
  { name: 'назвою', adname: 'за спаданням', sortProperty: SortPropertyEnum.TITLE_ASC, icon: <BsSortAlphaUpAlt /> },
  { name: 'ціною', adname: 'за зростанням', sortProperty: SortPropertyEnum.PRICE_DESC, icon: <BsSortNumericDown /> },
  { name: 'ціною', adname: 'за зменьшенням', sortProperty: SortPropertyEnum.PRICE_ASC, icon: <BsSortNumericUpAlt /> },
];

const SortPopup: React.FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);
  

  const onClickItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
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
                {obj.name +' '+ obj.adname}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;