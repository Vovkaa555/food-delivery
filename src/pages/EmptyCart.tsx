import ButtonBack from '../components/ButtonBack/ButtonBack';

const EmptyCart: React.FC = () => {
  return (
    <div className="empty-cart">
      <h1>Порожньо:(</h1>
      <ButtonBack />
    </div>
  );
};

export default EmptyCart;
