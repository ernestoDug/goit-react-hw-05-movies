import React, { useContext, useState } from 'react';

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

export default Context