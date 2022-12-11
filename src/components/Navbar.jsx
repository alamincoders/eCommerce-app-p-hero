/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav>
        <div class="wrapper">
          <div class="logo">
            <a href="#">Logo</a>
          </div>
          <input type="radio" name="slide" id="menu_btn" />
          <input type="radio" name="slide" id="cancel_btn" />
          <ul class="nav_links">
            <label for="cancel_btn" class="btn cancel_btn">
              <i class="fas fa-times"></i>
            </label>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" class="desktop_item">
                Dropdown Menu
              </a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile_item">
                Dropdown Menu
              </label>
              <ul class="drop_menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 3</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
                <li>
                  <a href="#">Drop Menu 5</a>
                </li>
                <li>
                  <a href="#">Drop Menu 6</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="desktop_item">
                Mega Menu
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile_item">
                Mega Menu
              </label>
              <div class="mega_box">
                <div class="content">
                  {/* <!--  --> */}
                  <div class="row img_row">
                    <header>Our Services</header>
                    <div class="services_img"></div>
                  </div>
                  {/* <!--  --> */}
                  <div class="row">
                    <header>Design Services</header>
                    <ul class="mega_links first_links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                      <li>
                        <a href="#">Ui / Ux</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  --> */}
                  {/* <!--  --> */}
                  <div class="row">
                    <header>Product Services</header>
                    <ul class="mega_links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                      <li>
                        <a href="#">Ui / Ux</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  --> */}
                  {/* {/* <!--  --> */}
                  <div class="row">
                    <header>SEO Services</header>
                    <ul class="mega_links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                      <li>
                        <a href="#">Ui / Ux</a>
                      </li>
                    </ul>
                  </div>
                  {/* {/* <!--  --> */}
                </div>
              </div>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
          <label for="menu_btn" class="btn menu_btn">
            <i class="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
