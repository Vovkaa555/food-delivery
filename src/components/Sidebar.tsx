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

const Sidebar: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
