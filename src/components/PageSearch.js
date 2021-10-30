import axios from "axios";
import React, { useState, useEffect, Component, sort } from "react";
import { Link, Switch, Route, onChange } from "react-router-dom";

function PageSearch() {
  const [keyword, setKeyword] = useState([]);
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
  console.log(products);
  return (
    <main className="page-main">
      <input
        type="text"
        placeholder="Seach here bro!"
        onChange={(e) => setKeyword(e.target.value)}
      ></input>

      <div className="content-data-category">
        <div className="grid-category-filter">
          {products.map((item, index) => {
            if (index <= 20) {
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
  );
}

export default PageSearch;
