// import PropTypes from 'prop-types';
import styled from "styled-components";

import css from './Headers.module.css';
import {  NavLink } from 'react-router-dom';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
 background-color: #009A63;
;
  }
`



const Header = ({ children }) => {
  return (
    <div className={css.headers}>
      {children}
      <nav className="menuItem">
        <StyledLink className={css.Link} to="/">
          {' '}
          Home{' '}
        </StyledLink>{' '}
      </nav>
      <nav>
        {' '}
        <StyledLink  className={css.Link} to="/Movies">
          {' '}
          Movies{' '}
        </StyledLink>{' '}
      </nav>
    </div>
  );
};

// проптайпи
// Button.propTypes = {
//   givMeMore: PropTypes.func.isRequired,
// };

export default Header;
