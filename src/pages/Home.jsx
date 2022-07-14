import React from 'react';
import FoodBlock from '../components/FoodBlock';

function Home() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://62cc4d598042b16aa7cd0883.mockapi.io/food')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="main-content">
      {items.map((obj) => (
        <FoodBlock key={obj.id} {...obj} />
      ))}
    </div>
  );
}

export default Home;
