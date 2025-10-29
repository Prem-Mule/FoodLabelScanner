// src/pages/FoodDetails.jsx
const FoodDetails = () => {
  const ingredients = [
    "Cultured Pasteurized Grade A Nonfat Milk",
    "Strawberries",
    "Cane Sugar",
    "Water",
    "Pectin",
    "Natural Flavors",
    "Live and Active Cultures (S. Thermophilus, L. Bulgaricus)",
  ];

  const nutritionFacts = [
    { label: "Calories", value: "120" },
    { label: "Protein", value: "12g" },
    { label: "Carbs", value: "18g" },
    { label: "Fat", value: "0g" },
  ];

  const recipes = [
    {
      name: "Berry Yogurt Smoothie",
      desc: "A refreshing and healthy drink.",
      img: "public/yogurtSmoothie.png",
    },
    {
      name: "Yogurt Parfait",
      desc: "Perfect for a quick breakfast.",
      img: "public/parfait.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-8 mt-[3vw]">
      <div className="px-[5vw] mx-auto flex gap-8">
        {/* Left: Food Card */}
        <div className="bg-gray-100 rounded-lg shadow p-6 w-[30%] space-y-5 ">
          <img
            src="public/GreekYoghurtStrawberry.png"
            alt="Greek Yogurt"
            className=" rounded-t-2xl w-full h-[60%] "
          />
          <h2 className="font-bold text-3xl">Greek Yoghurt & Strawberry</h2>
          <p className="text-gray-600 mt-2">
            A delicious and protein-rich snack. Made with real fruit and natural
            ingredients. Perfect for a healthy breakfast or post-workout meal.
          </p>
          <span className="inline-block mt-4 text-green-600 font-semibold">
            ✔ Organic
          </span>
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          {/* Ingredients */}
          <div>
            <h3 className="text-3xl font-semibold mb-5">Ingredients</h3>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-700 text-[1.2vw]">
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Nutrition Facts */}
          <div>
            <h3 className="text-3xl font-semibold mb-5">Nutrition Facts</h3>
            <div className="grid grid-cols-4 gap-10">
              {nutritionFacts.map((fact, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg shadow p-4 text-center"
                >
                  <p className="text-2xl font-bold">{fact.value}</p>
                  <p className="text-gray-500">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Recipes */}
          <div>
            <h3 className="text-[1.15vw] font-semibold mt-4 mb-4">
              Suggested Recipes
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {recipes.map((recipe, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow p-4 flex items-center space-x-8"
                >
                  <img
                    src={recipe.img}
                    alt={recipe.name}
                    className="w-32 h-w-32 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{recipe.name}</h4>
                    <p className="text-gray-500 text-[1vw]">{recipe.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
