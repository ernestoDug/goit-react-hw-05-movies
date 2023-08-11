import PropTypes from 'prop-types';

export const RewievsList = ({ id, author, content }) => {
  return (
    <>
      <li id={id} className="rewieItm">
        <h4 className="rewieName">Author: {author}</h4>
        <p>{content}</p>
      </li>
    </>
  );
};

// проптайпи
RewievsList.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
