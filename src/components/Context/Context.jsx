import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

// зберігання стану пошуку за ім'ям в контексті
const MovsNameCont = React.createContext();

export const UsecustomCont = () => {
  return useContext(MovsNameCont);
};

const Context = ({ children }) => {
  const [responseMovsName, setResponseMovsName] = useState([]);
  return (
    <MovsNameCont.Provider
      value={{
        responseMovsName: responseMovsName,
        setResponseMovsName: setResponseMovsName,
      }}
    >
      {children}
    </MovsNameCont.Provider>
  );
};

// проптайпи
UsecustomCont.propTypes = {
  children: PropTypes.node,
};

export default Context;
