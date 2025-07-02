import React from "react";
import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import CategoryList from "./CategoryList";
import RecipeDetail from "./RecipeDetail";

export default function RecipeCategories () {
   const [selectedCategory, setSelectedCategory] = useState("Beef");
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Hero />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>

        <div className="md:w-3/4">
          <RecipeDetail selectedCategory={selectedCategory} />
        </div>

      </div>
    </div>
  );
};

// const [categories, setCategories] = useState([]);

// useEffect(() => {
//   const fetchCategories = async () => {
//     const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
//     const data = await res.json();
//     setCategories(data.categories);
//   };
//   fetchCategories();
// }, []);

// return (
//   <div className="max-w-5xl mx-auto p-4">
//     <h1 className="text-3xl font-bold text-center mb-6">Recipe Categories</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {categories.map((category) => (
//         <div key={category.idCategory} className="bg-white shadow rounded-lg overflow-hidden hover:scale-105 transition transform cursor-pointer">
//           <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <h2 className="text-xl font-semibold">{category.strCategory}</h2>
//             <p className="text-sm text-gray-600 mt-1 line-clamp-3">{category.strCategoryDescription}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//);
//}

// export default RecipeCategories;
