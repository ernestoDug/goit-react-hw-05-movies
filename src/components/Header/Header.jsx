import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import css from './Headers.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    background-color: #009a63;
  }
`;

const Header = ({ children }) => {
  return (
    <div className={css.headers}>
      {children}
      <nav className="menuItem">
        <StyledLink className={css.Link} to="/">
          {' '}
          Home 🏰{' '}
        </StyledLink>{' '}
      </nav>
      <nav>
        {' '}
        <StyledLink className={css.Link} to="/movies">
          {' '}
          Movies 📺{' '}
        </StyledLink>{' '}
      </nav>
    </div>
  );
};

// проптайпи
StyledLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
