import { createContext, useState } from 'react';
const Context = createContext();
export const Provider = ({ children }) => {
  const [imageModal, setImageModal] = useState(null);
  const [priceModal, setPriceModal] = useState(null);
  const [sellTypeModal, setSellTypeModal] = useState(null);
  const [textModal, setTextModal] = useState(null);
  const [listPrices, setListPrices] = useState([]);
  const [totalPriceSummary, setTotalPriceSummary] = useState(0);
  return (
    <Context.Provider value={{ imageModal, setImageModal, priceModal, setPriceModal, sellTypeModal, setSellTypeModal, listPrices, setListPrices, textModal, setTextModal, totalPriceSummary, setTotalPriceSummary }}>
      {children}
    </Context.Provider>
  );
};
export default Context;
