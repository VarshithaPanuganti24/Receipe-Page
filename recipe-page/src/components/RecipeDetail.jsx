import { useState, useEffect } from "react";

export default function RecipeList({ selectedCategory }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!selectedCategory) return;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
      .then(res => res.json())
      .then(data => setRecipes(data.meals));
  }, [selectedCategory]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full ">
      <input
        type="text"
        placeholder="Search recipes and more..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-3 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.idMeal} className="bg-[#0f172a] rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
            <div className="p-3 text-white">
              <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
