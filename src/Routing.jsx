import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/product/Product'
import Detail from './components/detail/Detail'
import Navbarcomp from './components/header/Navbar'


const productcontext = createContext()
// const Routing = () => {
//   const [product, setproduct] = useState([])
//   const [selectedproduct, setselectedproduct] = useState({})
//   const [filterdata, setfilterdata] = useState(null)
//      const [navbar, setnavbar] = useState(true)
//   const [allProducts, setallProducts] = useState([])
//   return (
//     <div>
//       <productcontext.Provider value={{product, setproduct,selectedproduct, setselectedproduct, filterdata, setfilterdata, allProducts, setallProducts}}>
//       <BrowserRouter>
//        {navbar ? <Navbarcomp /> : null}
//         <Routes>
//             <Route path="/detail" element={<Detail />} />
//           <Route path="/" element={<Product />} />
//         </Routes>
//       </BrowserRouter>
//       </productcontext.Provider>
//     </div>
//   )
// }

// export default Routing
// export { productcontext } // Export the context for use in other components
const Routing = () => {
  const [product, setproduct] = useState([]);
  const [selectedproduct, setselectedproduct] = useState({});
  const [searchdata, setsearchdata] = useState(""); // ✅ Replace filterdata
  const [navbar, setnavbar] = useState(true);
  const [allProducts, setallProducts] = useState([]);

  return (
    <div>
      <productcontext.Provider
        value={{
          product,
          setproduct,
          selectedproduct,
          setselectedproduct,
          searchdata,
          setsearchdata,
          allProducts,
          setallProducts,
        }}
      >
        <BrowserRouter>
          {navbar ? <Navbarcomp /> : null}
          <Routes>
            <Route path="/detail" element={<Detail />} />
            <Route path="/" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </productcontext.Provider>
    </div>
  );
};

 export default Routing
export { productcontext } 