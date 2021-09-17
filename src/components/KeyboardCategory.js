import "./KeyboardCategory.css";
import $ from "jquery";
import React from "react";

function KeyboardCategory() {
  return (
    <div class="main-content-category">
      <div class="grid">
        <aside class="page-leftbar">
          <div class="content-filter-category">
            <p class="filter-header">Filter</p>
            <p class="brand-tag-filter">BRAND</p>

            <label class="filter-checkbox">
              Logitect
              {/* <input type="checkbox" checked="checked" /> */}
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Zowie
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Razer
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Xtrfy
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Steelseries
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Hyperx
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Oker
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="filter-checkbox">
              Nubwo
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="price-tag-filter">PRICE</p>
            <tr border="1" class="filter-price">
              <td><input type="text" id="fname" name="fname"/></td>
              <td class="to"> ~ </td>
              <td><input type="text" id="fname" name="fname"/></td>
            </tr>
            <p class="filter-header-category">CATEGORY</p>
            <div class="linkcategory">
            <p>
                - Mouse
            </p>
            <p>
                - Keyboard
            </p>
            <p>
                - Headset
            </p>
            <p>
                - Mousepad
            </p>
            <p>
                - Microphone
            </p>
            </div>
          </div>
        </aside>

        <main class="page-main">
          <div class="content-data-category"></div>
        </main>
      </div>
    </div>
  );
}

export default KeyboardCategory;
