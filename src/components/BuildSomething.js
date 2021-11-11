import React from "react";
import "./BuildSomething.css";
import { Link, Switch, Route, onChange, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../redux/buildDetailSlice";
import { v4 as uuidv4 } from "uuid";

function BuildSomething({ cate, url }) {
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(
      add({
        id: uuidv4(),
        userId: "123",
        mouse,
        keyboard,
        headset,
        mousepad,
        microphone,
      })
    );
  }

  const [mouse, setMouse] = useState({
    title: "Mouse",
    pic: "/image/iconmouse.png",
    name: "",
    url: "",
    advice: "",
    banana: "",
    mercular: "",
    model: "",
  });
  const [keyboard, setKeyboard] = useState({
    title: "Keyboard",
    pic: "/image/iconkeyboard.png",
    name: "",
    url: "",
    advice: "",
    banana: "",
    mercular: "",
    model: "",
  });
  const [headset, setHeadset] = useState({
    title: "Headset",
    pic: "/image/iconheadset.png",
    name: "",
    url: "",
    advice: "",
    banana: "",
    mercular: "",
    model: "",
  });
  const [mousepad, setMousepad] = useState({
    title: "Mousepad",
    pic: "/image/iconmousepad.png",
    name: "",
    url: "",
    advice: "",
    banana: "",
    mercular: "",
    model: "",
  });
  const [microphone, setMicrophone] = useState({
    title: "Microphone",
    pic: "/image/iconmicrophone.png",
    name: "",
    url: "",
    advice: "",
    banana: "",
    mercular: "",
    model: "",
  });

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

  const [model, setModel] = useState({
    mouse: "",
  });

  const [page, setPage] = useState([]);
  const allPage = [1, 2, 3, 4, 5, 6, 7];
  const [chagePage, setChangePage] = useState();

  let currentPage = chagePage || 1;

  useEffect(async () => {
    const res = await axios.get(
      // `http://localhost:3001/products/${url}/?page=${currentPage}${sort}`
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
  }, [sort, brand, currentPage, url]);

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/products/${url}/`);
    const dataBrand = res.data.allBrand;

    SetAllbrand(dataBrand);
  }, []);

  return (
    <div className="App">
      <div className="content-all">
        <div className="grid">
          <Route path="/Build/Mouse/">
            <header className="page-header">
              <div className="page-number">
                <table>
                  <tr>
                    {allPage.map((page) => {
                      return (
                        <td>
                          <div key={Math.random()}>
                            <button
                              type="button"
                              onClick={(e) => setChangePage(page)}
                              value={page}
                            >
                              {page}
                            </button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </table>
              </div>

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
          </Route>
          <Route path="/Build/Keyboard/">
            <header className="page-header">
              <div className="page-number">
                <table>
                  <tr>
                    {allPage.map((page) => {
                      return (
                        <td>
                          <div key={Math.random()}>
                            <button
                              type="button"
                              onClick={(e) => setChangePage(page)}
                              value={page}
                            >
                              {page}
                            </button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </table>
              </div>

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
          </Route>
          <Route path="/Build/Headset/">
            <header className="page-header">
              <div className="page-number">
                <table>
                  <tr>
                    {allPage.map((page) => {
                      return (
                        <td>
                          <div key={Math.random()}>
                            <button
                              type="button"
                              onClick={(e) => setChangePage(page)}
                              value={page}
                            >
                              {page}
                            </button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </table>
              </div>

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
          </Route>
          <Route path="/Build/Mousepad/">
            <header className="page-header">
              <div className="page-number">
                <table>
                  <tr>
                    {allPage.map((page) => {
                      return (
                        <td>
                          <div key={Math.random()}>
                            <button
                              type="button"
                              onClick={(e) => setChangePage(page)}
                              value={page}
                            >
                              {page}
                            </button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </table>
              </div>

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
          </Route>
          <Route path="/Build/Microphone/">
            <header className="page-header">
              <div className="page-number">
                <table>
                  <tr>
                    {allPage.map((page) => {
                      return (
                        <td>
                          <div key={Math.random()}>
                            <button
                              type="button"
                              onClick={(e) => setChangePage(page)}
                              value={page}
                            >
                              {page}
                            </button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </table>
              </div>

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
          </Route>

          <aside className="page-leftbar">
            <div className="content">
              <div className="flexbox">
                <div className="item30">
                  <div className="content-leftbar1">
                    <Link to="/Build/Mouse" className="content-cate">
                      <img src={mouse.pic} className="pic-cate" />
                    </Link>
                  </div>
                </div>
                <div className="item70">
                  <div className="content-leftbar1">
                    <Link to="/Build/Mouse" className="content-cate">
                      <h4>{mouse.title}</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flexbox">
                <div className="item30">
                  <div className="content-leftbar1">
                    <Link to="/Build/Keyboard" className="content-cate">
                      <img src={keyboard.pic} className="pic-cate" />
                    </Link>
                  </div>
                </div>
                <div className="item70">
                  <div className="content-leftbar1">
                    <Link to="/Build/Keyboard" className="content-cate">
                      <h4>{keyboard.title}</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flexbox">
                <div className="item30">
                  <div className="content-leftbar1">
                    <Link to="/Build/Headset" className="content-cate">
                      <img src={headset.pic} className="pic-cate" />
                    </Link>
                  </div>
                </div>
                <div className="item70">
                  <div className="content-leftbar1">
                    <Link to="/Build/Headset" className="content-cate">
                      <h4>{headset.title}</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flexbox">
                <div className="item30">
                  <div className="content-leftbar1">
                    <Link to="/Build/Mousepad" className="content-cate">
                      <img src={mousepad.pic} className="pic-cate" />
                    </Link>
                  </div>
                </div>
                <div className="item70">
                  <div className="content-leftbar1">
                    <Link to="/Build/Mousepad" className="content-cate">
                      <h4>{mousepad.title}</h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flexbox">
                <div className="item30">
                  <div className="content-leftbar1">
                    <Link to="/Build/Microphone" className="content-cate">
                      <img src={microphone.pic} className="pic-cate" />
                    </Link>
                  </div>
                </div>
                <div className="item70">
                  <div className="content-leftbar1">
                    <Link to="/Build/Microphone" className="content-cate">
                      <h4>{microphone.title}</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/MyBuild" className="content-cate">
                <button
                  className="btn-buildnow"
                  type="button"
                  onClick={handleUpdate}
                >
                  Build Now
                </button>
              </Link>
            </div>
          </aside>

          <Route path="/BuildSomething">
            <main className="page-main-bst">
              <div className="content-bst">
                <div className="grid-main1">
                  <div className="text-mid">
                    <h1>Build Something ?</h1>
                  </div>
                </div>
              </div>
            </main>
          </Route>

          <Route path="/Build/Mouse/">
            <main className="page-main">
              <div className="content-buildall">
                <div className="grid-buildall">
                  {products.map((item) => {
                    return (
                      <div className="item-buildall" key={item._id}>
                        <div className="card-buildall">
                          <img
                            className="pic-buildall"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="250"
                          />
                          <p className="name-buildall">{item.name}</p>
                          <div className="price-buildall">
                            <table>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://www.mercular.com/img/careers/logo.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td className="price-inbuildall2">
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                          <span>
                            <input
                              type="button"
                              value="ADD TO LIST"
                              // onClick={(e) => setMouse({name:item.name,
                              //     pic:item.advice[0]
                              //     ? item.advice[0].data[0].image
                              //     : item.banana[0]
                              //     ? item.banana[0].data[0].image
                              //     : item.mercular[0]
                              //     ? item.mercular[0].data[0].image
                              //     : ""})}
                              onClick={(e) =>
                                setMouse({
                                  title: item.name,
                                  pic: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  name: item.name,
                                  url: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  advice: item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A",
                                  mercular: item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A",
                                  banana: item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A",
                                })
                              }
                            />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </Route>

          <Route path="/Build/Keyboard/">
            <main className="page-main">
              <div className="content-buildall">
                <div className="grid-buildall">
                  {products.map((item) => {
                    return (
                      <div className="item-buildall" key={item._id}>
                        <div className="card-buildall">
                          <img
                            className="pic-buildall"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="250"
                          />
                          <p className="name-buildall">{item.name}</p>
                          <div className="price-buildall">
                            <table>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://www.mercular.com/img/careers/logo.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td className="price-inbuildall2">
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                          <span>
                            <input
                              type="button"
                              value="ADD TO LIST"
                              onClick={(e) =>
                                setKeyboard({
                                  title: item.name,
                                  pic: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  name: item.name,
                                  url: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  advice: item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A",
                                  mercular: item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A",
                                  banana: item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A",
                                })
                              }
                            />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </Route>

          <Route path="/Build/Headset/">
            <main className="page-main">
              <div className="content-buildall">
                <div className="grid-buildall">
                  {products.map((item) => {
                    return (
                      <div className="item-buildall" key={item._id}>
                        <div className="card-buildall">
                          <img
                            className="pic-buildall"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="250"
                          />
                          <p className="name-buildall">{item.name}</p>
                          <div className="price-buildall">
                            <table>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://www.mercular.com/img/careers/logo.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td className="price-inbuildall2">
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                          <span>
                            <input
                              type="button"
                              value="ADD TO LIST"
                              onClick={(e) =>
                                setHeadset({
                                  title: item.name,
                                  pic: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  name: item.name,
                                  url: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  advice: item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A",
                                  mercular: item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A",
                                  banana: item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A",
                                })
                              }
                            />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </Route>

          <Route path="/Build/Mousepad/">
            <main className="page-main">
              <div className="content-buildall">
                <div className="grid-buildall">
                  {products.map((item) => {
                    return (
                      <div className="item-buildall" key={item._id}>
                        <div className="card-buildall">
                          <img
                            className="pic-buildall"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="250"
                          />
                          <p className="name-buildall">{item.name}</p>
                          <div className="price-buildall">
                            <table>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://www.mercular.com/img/careers/logo.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td className="price-inbuildall2">
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                          <span>
                            <input
                              type="button"
                              value="ADD TO LIST"
                              onClick={(e) =>
                                setMousepad({
                                  title: item.name,
                                  pic: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  name: item.name,
                                  url: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  advice: item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A",
                                  mercular: item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A",
                                  banana: item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A",
                                })
                              }
                            />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </Route>

          <Route path="/Build/Microphone/">
            <main className="page-main">
              <div className="content-buildall">
                <div className="grid-buildall">
                  {products.map((item) => {
                    return (
                      <div className="item-buildall" key={item._id}>
                        <div className="card-buildall">
                          <img
                            className="pic-buildall"
                            src={
                              item.advice[0]
                                ? item.advice[0].data[0].image
                                : item.banana[0]
                                ? item.banana[0].data[0].image
                                : item.mercular[0]
                                ? item.mercular[0].data[0].image
                                : ""
                            }
                            height="250"
                            width="250"
                          />
                          <p className="name-buildall">{item.name}</p>
                          <div className="price-buildall">
                            <table>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://www.mercular.com/img/careers/logo.jpg"
                                    width="110"
                                    height="40"
                                  />
                                </td>
                                <td className="price-inbuildall2">
                                  {item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    className="price-inbuildall1"
                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                    width="110"
                                    height="40"
                                  />
                                </td>

                                <td className="price-inbuildall2">
                                  {item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A"}
                                </td>
                              </tr>
                            </table>
                          </div>
                          <span>
                            <input
                              type="button"
                              value="ADD TO LIST"
                              onClick={(e) =>
                                setMicrophone({
                                  title: item.name,
                                  pic: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  name: item.name,
                                  url: item.advice[0]
                                    ? item.advice[0].data[0].image
                                    : item.banana[0]
                                    ? item.banana[0].data[0].image
                                    : item.mercular[0]
                                    ? item.mercular[0].data[0].image
                                    : "",
                                  advice: item.advice[0]
                                    ? item.advice[0].data[0].price
                                    : "N/A",
                                  mercular: item.mercular[0]
                                    ? item.mercular[0].data[0].price
                                    : "N/A",
                                  banana: item.banana[0]
                                    ? item.banana[0].data[0].price
                                    : "N/A",
                                })
                              }
                            />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </Route>
        </div>
      </div>
    </div>
  );
}

export default BuildSomething;
