import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route, onChange } from "react-router-dom";
import "./KeyboardCategory.css";
function PageSearch() {
const [allBrand, SetAllbrand] = useState([]);
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");
  const [keyword, setKeyword] = useState("RAZER");
  const [products, setProducts] = useState([
    {
      _id: "",
      key: "",
      name: "",
      category: "",
      advice: [],
      banana: [],
      mercular: [],
    },
  ]);
  
  useEffect(async () => {
    const res = await axios.get(
      `http://localhost:3001/products/?search=${keyword}`
    );
    
    const dataProduct = res.data;

    setProducts(dataProduct);
  }, [keyword]);
  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/Keyboard/`);
    const dataBrand = res.data.allBrand;

    SetAllbrand(dataBrand);
  }, []);
  return (
    <div className="main-content-category">
      <header className="page-header">
      <input
        type="text"
        placeholder="Seach here bro!"
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
        <div className="dropdown">
          <button className="dropbtn">order by</button>

          <div className="dropdown-content">
            <select id="list" onChange={(e) => setSort(e.target.value)}>
              <option value="">--- Select ---</option>
              <option value="&sortByPrice=low">Low - High</option>

              <option value="&sortByPrice=high">High - LOW</option>
              <option value="&sortByAZ=1">A - Z</option>
              <option value="&sortByAZ=-1">Z - A</option>
            </select>
           
          </div>
        </div>
      </header>

      <div className="grid">
        {/* ส่วนของ FILTER ด้านซ้าย */}
        <aside className="page-leftbar">
          <div className="content-filter-category">
            <p className="filter-header">Filter</p>
            <p className="brand-tag-filter">BRAND</p>
            {allBrand.map((brand) => {
              return (
                <label className="filter-checkbox">
                  {brand}
                  {/* <input type="checkbox" checked="checked" /> */}
                  <input
                    type="checkbox"
                    value={`&selectBrand=${brand}`}
                    onClick={(e) => setBrand(e.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
              );
            })}

            <p className="filter-header-category">CATEGORY</p>
            <div className="linkcategory">
              <Link to="/products/Mouse">
                <p>- Mouse</p>
              </Link>
              <Link to="/products/Keyboard">
                <p>- Keyboard</p>
              </Link>
              <Link to="/products/Headset">
                <p>- Headset</p>
              </Link>
              <Link to="/products/Mousepad">
                <p>- Mousepad</p>
              </Link>
              <Link to="/products/Microphone">
                <p>- Microphone</p>
              </Link>
            </div>
          </div>
        </aside>

        

        {/* ส่วนของ Maincontent Mouse */}

        
          <main className="page-main">
           
            
            
         

      <div className="content-data-category">
        <div className="grid-category-filter">
          {products.map((item, index) => {
            if (index <= 10) {
              return (
                <div className="item" key={item._id}>
                  <Link to={`/products/${item.category}/${item.key}`}>
                  <div className="card-content">
                    <img
                      className="card-img"
                      src={
                        (item.advice[0] && item.advice[0].data[0].image) ||
                        (item.banana[0] && item.banana[0].data[0].image) ||
                        (item.mercular[0] && item.mercular[0].data[0].image)
                      }
                      height="250"
                      width="10"
                    ></img>
                    <p className="category-box">{item.name}</p>
                    <div className="container">
                      <table className="card-box">
                        <tr>
                          <td>
                            <img
                              className="img-recommend"
                              src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                              width="110"
                              height="40"
                            />
                          </td>
                          <td>
                            {item.advice[0]
                              ? item.advice[0].data[0].price
                              : "N/A"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="img-recommend"
                              src="https://notebookspec.com/laravel/public//images/component-shop-jib.jpg"
                              width="110"
                              height="40"
                            />
                          </td>
                          <td>
                            {item.mercular[0]
                              ? item.mercular[0].data[0].price
                              : "N/A"}
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              className="img-recommend"
                              src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                              width="110"
                              height="40"
                            />
                          </td>

                          <td>
                            {item.banana[0]
                              ? item.banana[0].data[0].price
                              : "N/A"}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
          </main>
        
        {/* ปิดส่วนของ Maincontent Mouse */}
        
      </div>
    </div>
  );
}

export default PageSearch;
