import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './SimpleMap.module.scss';

const AnyReactComponent = ({ text }) => (
  <div className={styles.root}>
    <p>FD</p>
    <div className={styles.address}>{text}</div>
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 50.45912440538863,
      lng: 30.556235786419226,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '80vh', width: '500px', padding: '10px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent lat={50.395480507731754} lng={30.6241532472306} text="пр. Бажана, 14" />
        <AnyReactComponent
          lat={50.44518527578026}
          lng={30.446041776607476}
          text="вул. Борщагівська, 152"
        />
        <AnyReactComponent
          lat={50.403971252591965}
          lng={30.530239052993227}
          text="вул. Саперно-Слобідська, 8"
        />
        <AnyReactComponent lat={50.50995121496474} lng={30.418315597196113} text="пр. Порика, 9" />
        <AnyReactComponent
          lat={50.457032026911605}
          lng={30.614261352739046}
          text="пр-т. Броварський, 29А"
        />
      </GoogleMapReact>
    </div>
  );
}
