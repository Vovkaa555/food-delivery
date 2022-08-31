import ButtonBack from '../components/ButtonBack/ButtonBack';

const NotFound: React.FC = () => {
  return (
    <div className="empty-cart">
      <h1>Сторінку не знайдено:(</h1>
      <ButtonBack />
    </div>
  );
};

export default NotFound;
