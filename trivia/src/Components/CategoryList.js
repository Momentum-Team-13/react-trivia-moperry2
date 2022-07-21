import React, { useState } from "react";
// import axios from "axios";
import Question from "./Question";

function CategoryList({ categories }) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [categoryURL, setCategoryURL] = useState();

  const handleSelectedCat = (category) => {
    console.log(`seclected category: ${category.name}, id: ${category.id}`);
    setSelectedCat(category);
    makeURL(category);
  };
  // console.log(`seletedCat: ${selectedCat}`)

  const makeURL = (selectedCat) => {
    setCategoryURL(
      `https://opentdb.com/api.php?amount=10&category=${selectedCat.id}&type=multiple`
    );
  };

  return (
    <div>
      {selectedCat ? (
        <Question categoryURL={categoryURL} />
      ) : (
        categories.map((category) => (
          <div>
            <button onClick={() => handleSelectedCat(category)}>
              {category.name}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
