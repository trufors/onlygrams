import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [active, setActive] = React.useState<string>('home');
  // const svgArrays: JSX.Element[] = ['home', 'alarm', 'message', 'shop', 'chz'].map((item) => (
  //   <Link
  //     to=""
  //     onClick={() => setActive(item)}
  //     className={`action-panel__link ${active === item ? 'action-panel__link_active' : ''}`}>
  //     <svg className="action-panel__icon">
  //       <use xlinkHref={`img/sprite.svg#${item}`}></use>
  //     </svg>
  //   </Link>
  // ));

  return (
    <div className="action-panel">
      <Link to="/" className="action-panel__logo">
        <img src="img/logo.svg" alt="" />
      </Link>
      {/* <div className="action-panel__links">
        {svgArrays}
       
      </div>
      <a href="javascript:;" className="action-panel__exit">
        <svg className="action-panel__exit-icon">
          <use xlinkHref="img/sprite.svg#shutdown"></use>
        </svg>
      </a> */}
    </div>
  );
};

export default Header;
