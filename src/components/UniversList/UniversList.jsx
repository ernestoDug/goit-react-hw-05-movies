import PropTypes from 'prop-types';

// список за потреби
export const UniversList = ({ name, id }) => {
  return (
    <>
      <li key={id} className="ganreListITM">
        {name}
      </li>
    </>
  );
};

// проптайпи
UniversList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};
