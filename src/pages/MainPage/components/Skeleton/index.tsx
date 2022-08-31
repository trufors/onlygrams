import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="profile-list-item"
    speed={1}
    width={390}
    height={380}
    viewBox="0 0 390 380"
    backgroundColor="#ffffff"
    foregroundColor="#9ee7ff">
    <rect x="2" y="-3" rx="35" ry="35" width="360" height="350" />
  </ContentLoader>
);

export default Skeleton;
