import PropTypes from 'prop-types';
import css from 'components/CastList/CastList.module.css';

const CastList = ({ character, id, profile_path, name }) => {
  return (
    <li className={css.actorItm} key={id}>
      <div className={css.actorWr}>
        <img
          className={css.actorImg}
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt="actor"
        />
        {name}
        <span>{character}</span>
      </div>
    </li>
  );
};

// протайпи
CastList.propTypes = {
  character: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CastList;
