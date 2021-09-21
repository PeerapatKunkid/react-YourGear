import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PageContent.css";
import axios from "axios";

function PageContent() {
  const { index } = useParams();

  const [mouse, setMouse] = useState(
    {
      _id: "",
      key: "",
      name: "",
      category: "",
      advice: [
        {
          _id: "",
          model: "",
          name: "",
          store: "",
          brand: "",
          category: "",
          tag: "",
          data: [
            {
              name: "",
              price: 0,
              href: "",
              image: "",
              spec: {
                interface: "",
                sensor: "",
                macro: "",
                dpi: "",
                switch_type: "",
              },
            },
          ],
        },
      ],
      banana: [
        {
          _id: "",
          model: "",
          name: "",
          store: "",
          brand: "",
          category: "",
          tag: "",
          data: [
            {
              name: "",
              price: 0,
              href: "",
              image: "",
              spec: {
                interface: "",
                sensor: "",
                macro: "",
                dpi: "",
                switch_type: "",
              },
            },
          ],
        },
      ],
      mercular: [
        {
          _id: "",
          model: "",
          name: "",
          store: "",
          brand: "",
          category: "",
          tag: "",
          data: [
            {
              name: "",
              price: 0,
              href: "",
              image: "",
              spec: {
                interface: "",
                sensor: "",
                macro: "",
                dpi: "",
                switch_type: "",
              },
            },
          ],
        },
      ],
    },
  );
  const [keyboard, setKeyboard] = useState(
    {
      _id: "",
      key: "",
      name: "",
      category: "",
      advice: [
        {
          _id: "",
          model: "",
          name: "",
          store: "",
          brand: "",
          category: "",
          tag: "",
          data: [
            {
              name: "",
              price: 0,
              href: "",
              image: "",
              spec: {
                interface: "",
                sensor: "",
                macro: "",
                dpi: "",
                switch_type: "",
              },
            },
          ],
        },
      ],
      banana: [
        {
          _id: "",
          model: "",
          name: "",
          store: "",
          brand: "",
          category: "",
          tag: "",
          data: [
            {
              name: "",
              price: 0,
              href: "",
              image: "",
              spec: {
                interface: "",
                sensor: "",
                macro: "",
                dpi: "",
                switch_type: "",
              },
            },
          ],
        },
      ],
      mercular: [
        {
          _id: "",
          model: "",
          name: "",
          store: "",
          brand: "",
          category: "",
          tag: "",
          data: [
            {
              name: "",
              price: 0,
              href: "",
              image: "",
              spec: {
                interface: "",
                sensor: "",
                macro: "",
                dpi: "",
                switch_type: "",
              },
            },
          ],
        },
      ],
    },
  );

  async function getAllMouses(index) {
    const res = await axios.get(`http://localhost:3001/allMouse/1/${index}`);
    const data = await res.data;

    setMouse(data);
  }
  async function getAllKeyboards(index) {
    const res = await axios.get(`http://localhost:3001/allKeyboard/1/${index}`);
    const data = await res.data;

    setKeyboard(data);
  }

  useEffect(async () => {
    await getAllMouses(index);
    await getAllKeyboards(index)
  }, [index]);

  return (
    <div class="content-show">
      <h1>{mouse.name}</h1>

      {/* {console.log(mouse.category)} */}
      <div class="content-show-in">
        <img src={
                              mouse.advice[0]
                                ? mouse.advice[0].data[0].image
                                : mouse.banana[0]
                                ? mouse.banana[0].data[0].image
                                : mouse.mercular[0]
                                ? mouse.mercular[0].data[0].image
                                : ""
                            } height="450" width="450" ></img>
      </div>

      <h3>TEST TEST TEST </h3>
      <h3>TTTTTTT</h3>
    </div>
  );
}
export default PageContent;
