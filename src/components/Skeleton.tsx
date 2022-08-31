import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="food-block"
    speed={2}
    width={248}
    height={468}
    viewBox="0 0 248 468"
    backgroundColor="#d6d6d6"
    foregroundColor="#c2c2c2"
    {...props}>
    <rect x="15" y="15" rx="25" ry="25" width="215" height="295" />
    <rect x="10" y="320" rx="10" ry="10" width="225" height="40" />
    <rect x="10" y="370" rx="10" ry="10" width="80" height="40" />
    <rect x="10" y="420" rx="23" ry="23" width="225" height="45" />
  </ContentLoader>
);

export default Skeleton;
