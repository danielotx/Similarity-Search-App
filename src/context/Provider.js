import PropTypes from 'prop-types';
import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [chosenId, setChosenId ] = useState()
  const [topK, setTopK] = useState('')
  const [similarIds, setSimilarIds] = useState([])


  const contextValue = {
    data,
    setData,
    chosenId,
    setChosenId,
    topK,
    setTopK,
    similarIds,
    setSimilarIds
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Provider;