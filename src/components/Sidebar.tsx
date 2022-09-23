import React from 'react';
import {
  GiHamburgerMenu,
  GiFullPizza,
  GiHamburger,
  GiCampfire,
  GiNoodles,
  GiSushis,
  GiFruitBowl,
  GiIceCreamCone,
  GiBeerBottle,
} from 'react-icons/gi';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i:number) => void;
};

const categories = [
  <GiHamburgerMenu />,
  <GiFullPizza />,
  <GiHamburger />,
  <GiCampfire />,
  <GiNoodles />,
  <GiSushis />,
  <GiFruitBowl />,
  <GiIceCreamCone />,
  <GiBeerBottle />,
];

const Sidebar: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {

  return (
    <div className="fixed-sidebar">
      <ul className="sidebar">
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Sidebar;