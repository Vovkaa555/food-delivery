import React from 'react';

import styles from './About.module.scss';
import ButtonBack from '../../components/ButtonBack/ButtonBack.jsx';
import SimpleMap from '../../components/SimpleMap/SimpleMap.jsx';

const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <SimpleMap />
        </div>
        <div className={styles.about}>
          <h4>Наші адреси:</h4>
          <div className={styles.addresses}>
            <div className={styles.address}>
              <h6>пр-т. Броварський,29А (м.Дарниця)</h6>
              <span>Розклад роботи піцерії: Пн-Нд: 10:00-20:00</span>
              <h5>Телефон: 093 263 79 66</h5>
            </div>
            <div className={styles.address}>
              <h6>пр. Бажана, 14 </h6>
              <span>Розклад роботи піцерії: Пн-Нд: 10:00-20:00</span>
              <h5>Телефон: 063 722 45 17</h5>
            </div>
            <div className={styles.address}>
              <h6>вул. Борщагівська, 152 </h6>
              <span>Розклад роботи піцерії: Пн-Нд: 10:00-20:00</span>
              <h5>Телефон: 093 312 14 05</h5>
            </div>
            <div className={styles.address}>
              <h6>вул. Саперно-Слобідська, 8 </h6>
              <span>Розклад роботи піцерії: Пн-Нд: 10:00-20:00</span>
              <h5>Телефон: 050 358 21 43</h5>
            </div>
            <div className={styles.address}>
              <h6>пр. Порика, 9 </h6>
              <span>Розклад роботи піцерії: Пн-Нд: 10:00-20:00</span>
              <h5>Телефон: 097 477 37 22</h5>
            </div>
          </div>
          <div className={styles.info}>
            <p>
              *Сайт створено для некомерційних цілей. Використано зображення, опис продукції, адреси
              та номери телефонів із сайту https://pizzahouse.ua/
            </p>
          </div>
        </div>
      </div>
      <ButtonBack />
    </div>
  );
};

export default About;
