import React, { useEffect, useState } from "react";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      console.log("data", data);
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);
  return (
    <div className="bg-[#0f172a] text-white rounded-2xl p-4 space-y-2 sticky top-4 h-fit max-h-[500px] overflow-y-auto ">
      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      {categories.map((cat) => (
        <div
          key={cat.idCategory}
          onClick={() => setSelectedCategory(cat.strCategory)}
          className={`cursor-pointer px-3 py-2 rounded-lg flex items-center space-x-2 transition ${
            selectedCategory === cat.strCategory
              ? "bg-yellow-500 text-black"
              : "hover:bg-slate-700"
          }`}
        >
          <img
            src={cat.strCategoryThumb}
            alt={cat.strCategory}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{cat.strCategory}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
