import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// для повертання
const StyledLink = styled(Link)`
  box-shadow: 1px 1px #53eaae, 2px 2px #53eac4, 3px 3px #53eaea;
  background-color: #22ae8b;
  color: #fff1eb;
  outline: none;
  border: none;
  transition: all 0.1s ease-in;
  padding: 5px 10px;
  border-radius: 20px/60px;
  margin-bottom: 10px;
  width: 150px;

  &:hover {
    background-color: #88d122;
    transform: rotate(-10deg);
    color: #320960;
  }
`;

export const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

// проптайпи
BackLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};
