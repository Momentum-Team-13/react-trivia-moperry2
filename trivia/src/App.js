import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryList from "./Components/CategoryList";

function App() {
  const [categories, setCategories] = useState([]);
  // const[count, setCount]

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setCategories(res.data.trivia_categories));
  }, []);

  return (
    <div>
      {/* <div className="counter"> cOU</div>
      <button onClick={()=> setCount(count + 1)} */}
      <h1> List of Categories: </h1>
      <CategoryList categories={categories} />
    </div>
  );
}

export default App;
