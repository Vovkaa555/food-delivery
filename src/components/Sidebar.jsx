import React from 'react';

function Sidebar({ value, onClickCategory }) {
  const categories = [
    'Все меню',
    'Піца',
    `Бургери`,
    'Гриль',
    'Паста',
    'Суші',
    'Салати',
    'Десерти',
    'Напої',
  ];
  return (
    <div className="fixed-sidebar">
      <ul className="sidebar">
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

/*     <li>
            <GiFullPizza /> Піца
          </li>
          <li className="active">
            <GiHamburger /> Бургери
          </li>
          <li>
            <GiFruitBowl /> Боули
          </li>
          <li>
            <GiNoodles /> Паста
          </li>
          <li>
            <GiSushis /> Суші
          </li>
          <li>
            <GiFallingLeaf /> Салати
          </li>
          <li>
            <GiIceCreamCone /> Десерти
          </li>
          <li>
            <GiBeerBottle /> Напої
          </li>
          */
