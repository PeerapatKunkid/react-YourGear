import "./KeyboardCategory.css";

import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route, onChange } from "react-router-dom";

function KeyboardCategory({ cate, url }) {
  const [allBrand, SetAllbrand] = useState([]);
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");
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
  const [page, setPage] = useState([]);
  const allPage = [1, 2, 3, 4, 5, 6, 7,8,9,10];
  const [chagePage, setChangePage] = useState();

  let currentPage = chagePage || 1;

  useEffect(async () => {
    const res = await axios.get(
      `http://localhost:3001/products/${url}/?page=${currentPage}${sort}${brand}`
    );
    const dataBrand = res.data.allBrand;
    const dataProduct = res.data.data;
    const dataPage = {
      totalPage: res.data.totalPage,
      currentPage: res.data.currentPage,
    };

    setProducts(dataProduct);
    setPage(dataPage);
  }, [sort, brand,currentPage,url]);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/${url}/`);
    const dataBrand = res.data.allBrand;

    SetAllbrand(dataBrand);
  }, []);
  console.log(products)
  
  return (
    <div className="main-content-category">
      <header className="page-header">
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

        {/* <div className="contanier">
          {products.map((item) => {
            return (
              <div key={item.key}>
                {item.name}
                
              </div>
            );
          })}
        </div> */}

        {/* ส่วนของ Maincontent Mouse */}

        <Route path="/products/Mouse/">
          <main className="page-main">
            <div className="page-number">
            <table>
              <tr><button type="button" onClick={(e) => setChangePage(currentPage-1)} >Previous</button>
           {allPage.map((page)=>{
             return(
               <td>
              <div key={Math.random()}>
              
              <button type="button" onClick={(e) => setChangePage(page)} value={page}>
                {page}
              </button>
            </div>
            </td>
             )
           })}
           <button type="button" onClick={(e) => setChangePage(currentPage+1)}>Next</button>
           </tr>
           
            </table>
            </div>
            <div className="content-data-category">
              <div className="grid-category-filter">
                {products.map((item) => {
                  return (
                    <div className="item" key={item._id}>
                      <Link to={`/products/${cate}/${item.key}`}>
                       
                        <div className="card-content-mp">
                          <img
                            className="card-img"
                            src={
                              (item.advice[0] &&
                                item.advice[0].data[0].image) ||
                              (item.banana[0] &&
                                item.banana[0].data[0].image) ||
                              (item.mercular[0] &&
                                item.mercular[0].data[0].image)
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
                })}
              </div>
              
            </div>
          </main>
        </Route>
        {/* ปิดส่วนของ Maincontent Mouse */}
        {/* ส่วนของ Maincontent Keyboard */}

        <Route path="/products/Keyboard/">
          <main className="page-main">
          <div className="page-number">
            <table>
              <tr><button type="button" onClick={(e) => setChangePage(currentPage-1)} >Previous</button>
           {allPage.map((page)=>{
             return(
               <td>
              <div key={Math.random()}>
              
              <button type="button" onClick={(e) => setChangePage(page)} value={page}>
                {page}
              </button>
            </div>
            </td>
             )
           })}
           <button type="button" onClick={(e) => setChangePage(currentPage+1)}>Next</button>
           </tr>
           
            </table>
            </div>
            <div className="content-data-category">
              <div className="grid-category-filter">
                {products.map((item) => {
                  return (
                    <div className="item" key={item._id}>
                      <Link to={`/products/${cate}/${item.key}`}>
                       
                        <div className="card-content-mp">
                          <img
                            className="card-img"
                            src={
                              (item.advice[0] &&
                                item.advice[0].data[0].image) ||
                              (item.banana[0] &&
                                item.banana[0].data[0].image) ||
                              (item.mercular[0] &&
                                item.mercular[0].data[0].image)
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
                })}
              </div>
              <div className="blankcate">s</div>
            </div>
          </main>
        </Route>
        {/* ปิดส่วนของ Maincontent Keyboard */}
        {/* ส่วนของ Maincontent Headset*/}
        <Route path="/products/Headset/">
        <main className="page-main">
          <div className="page-number">
            <table>
              <tr><button type="button" onClick={(e) => setChangePage(currentPage-1)} >Previous</button>
           {allPage.map((page)=>{
             return(
               <td>
              <div key={Math.random()}>
              
              <button type="button" onClick={(e) => setChangePage(page)} value={page}>
                {page}
              </button>
            </div>
            </td>
             )
           })}
           <button type="button" onClick={(e) => setChangePage(currentPage+1)}>Next</button>
           </tr>
           
            </table>
            </div>
            <div className="content-data-category">
              <div className="grid-category-filter">
                {products.map((item) => {
                  return (
                    <div className="item" key={item._id}>
                      <Link to={`/products/${cate}/${item.key}`}>
                       
                        <div className="card-content-mp">
                          <img
                            className="card-img"
                            src={
                              (item.advice[0] &&
                                item.advice[0].data[0].image) ||
                              (item.banana[0] &&
                                item.banana[0].data[0].image) ||
                              (item.mercular[0] &&
                                item.mercular[0].data[0].image)
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
                })}
              </div>
              <div className="blankcate">s</div>
            </div>
          </main>
        </Route>
        {/* ปิดส่วนของ Maincontent Headset}
        {/* ส่วนของ Maincontent Mousepad*/}
       <Route path="/products/Mousepad/">
        <main className="page-main">
          <div className="page-number">
            <table>
              <tr><button type="button" onClick={(e) => setChangePage(currentPage-1)} >Previous</button>
           {allPage.map((page)=>{
             return(
               <td>
              <div key={Math.random()}>
              
              <button type="button" onClick={(e) => setChangePage(page)} value={page}>
                {page}
              </button>
            </div>
            </td>
             )
           })}
           <button type="button" onClick={(e) => setChangePage(currentPage+1)}>Next</button>
           </tr>
           
            </table>
            </div>
            <div className="content-data-category">
              <div className="grid-category-filter">
                {products.map((item) => {
                  return (
                    <div className="item" key={item._id}>
                      <Link to={`/products/${cate}/${item.key}`}>
                       
                        <div className="card-content-mp">
                          <img
                            className="card-img"
                            src={
                              (item.advice[0] &&
                                item.advice[0].data[0].image) ||
                              (item.banana[0] &&
                                item.banana[0].data[0].image) ||
                              (item.mercular[0] &&
                                item.mercular[0].data[0].image)
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
                })}
              </div>
              <div className="blankcate">s</div>
            </div>
          </main>
        </Route>
        {/* ปิดส่วนส่วนของ Maincontent Mousepad*/}
        {/* ส่วนของ Maincontent Microphone*/}
        <Route path="/products/Microphone/">
        <main className="page-main">
          <div className="page-number">
            <table>
              <tr><button type="button" onClick={(e) => setChangePage(currentPage-1)} >Previous</button>
           {allPage.map((page)=>{
             return(
               <td>
              <div key={Math.random()}>
              
              <button type="button" onClick={(e) => setChangePage(page)} value={page}>
                {page}
              </button>
            </div>
            </td>
             )
           })}
           <button type="button" onClick={(e) => setChangePage(currentPage+1)}>Next</button>
           </tr>
           
            </table>
            </div>
            <div className="content-data-category">
              <div className="grid-category-filter">
                {products.map((item) => {
                  return (
                    <div className="item" key={item._id}>
                      <Link to={`/products/${cate}/${item.key}`}>
                       
                        <div className="card-content-mp">
                          <img
                            className="card-img"
                            src={
                              (item.advice[0] &&
                                item.advice[0].data[0].image) ||
                              (item.banana[0] &&
                                item.banana[0].data[0].image) ||
                              (item.mercular[0] &&
                                item.mercular[0].data[0].image)
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
                })}
                
              </div>
              <div className="blankcate">s</div>
            </div>
          </main>
          
        </Route>

        {/* ปิดส่วนของ Maincontent Microphone*/}
      </div>
    </div>
  );
}

export default KeyboardCategory;
