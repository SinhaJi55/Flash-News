import React from "react";

const Navbar = ({
  countries,
  selectedCountry,
  setSelectedCountry,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-black"
      
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white fw-bold" href="#">
          <img
            src="./image1.png"
            alt=""
            width="50"
            height="40"
            style={{ borderRadius: "10px" }}
          />{" "}
          FlashNews
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            {/* Country Dropdown */}
            <li className="nav-item dropdown bg-black">
              <button
                className="nav-link dropdown-toggle text-white btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
              >
                Select Country: {selectedCountry.flag} {selectedCountry.name} (
                {selectedCountry.lang.toUpperCase()})
              </button>

              <ul className="dropdown-menu fw-bold">
                {countries.map((c) => (
                  <li key={c.code}>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => setSelectedCountry(c)}
                    >
                      {c.flag} {c.name} ({c.lang.toUpperCase()})
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            {/* Categories */}
            {categories.map((cat) => (
              <li key={cat} className="nav-item">
                <button
                  className={`nav-link text-white btn btn-link ${
                    selectedCategory === cat ? "fw-bold text-warning" : ""
                  }`}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.toUpperCase()}
                </button>
              </li>
            ))}

          
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-white btn btn-link nav-link text-white btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
              >
                Support Us
              </button>
              <ul className="dropdown-menu p-3">
                <li className="text-center">
                  <img
                    src="./qr.jpg" 
                    alt="QR Code for Payment"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="mt-2">Scan to Support</p>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
