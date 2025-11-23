import React, { useState } from "react";

import Navbar from "./Component/Navbar";

import News from "./Component/News";

const countries = [
  { 
    name: "India", 
    code: "in", 
    lang: "en", 
    img: "https://flagcdn.com/in.svg" 
  },
  { 
    name: "USA", 
    code: "us", 
    lang: "en", 
    img: "https://flagcdn.com/us.svg" 
  },
  { 
    name: "UK", 
    code: "gb", 
    lang: "en", 
    img: "https://flagcdn.com/gb.svg" 
  },
  { 
    name: "Russia", 
    code: "ru", 
    lang: "en", 
    img: "https://flagcdn.com/ru.svg" 
  },
  { 
    name: "China", 
    code: "cn", 
    lang: "en", 
    img: "https://flagcdn.com/cn.svg" 
  },
];

const categories = [
  "general",
  "science",
  "sports",
  "business",
  "health",
  "entertainment",
  "tech",
  "politics",
  "food",
  "travel",
];


const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>
      <Navbar
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
         categories={categories}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
      />
     <News selectedCountry={selectedCountry} category={selectedCategory} />

    </>
  );
};

export default App;
