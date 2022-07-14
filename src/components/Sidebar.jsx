import React from 'react';

function Sidebar() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categories = ['Піца', 'Бургери', 'Гриль', 'Паста', 'Суші', 'Салати', 'Десерти', 'Напої'];
  return (
    <div className="fixed-sidebar">
      <ul className="sidebar">
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}>
            {value}
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
