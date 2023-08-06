// import PropTypes from 'prop-types';
import css from './Headers.module.css';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <div className={css.headers}>
      {children}
      <nav className="menuItem">
        <Link className={css.Link} to="/">
          {' '}
          Home{' '}
        </Link>{' '}
      </nav>
      <nav>
        {' '}
        <Link className={css.Link} to="/Movies">
          {' '}
          Movies{' '}
        </Link>{' '}
      </nav>
    </div>
  );
};

// проптайпи
// Button.propTypes = {
//   givMeMore: PropTypes.func.isRequired,
// };

export default Header;
