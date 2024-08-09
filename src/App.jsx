import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./App.css";
import EachRecipe from "./components/EachRecipe";
import Navbar from "./components/Navbar";
import WanToCookCart from "./components/WanToCookCart";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantCart, setWantCart] = useState([]);
  useEffect(() => {
    fetch("apiData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    const isExist = wantCart.find((item) => item.id === recipe.recipe_id);
    if (!isExist) {
      setWantCart([...wantCart, recipe]);
    } else {
      toast.error("This recipe is already in the want to cook section!");
    }
  };
  return (
    <>
      <div className="container mx-auto px-16">
        <Navbar />
        {/* BANNER SECTION */}
        <div className="banner my-7 ">
          <div
            className="hero h-screen lg:h-[600px] overflow-hidden rounded-3xl"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">
                  Discover an exceptional cooking class tailored for you!
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <div className="flex justify-center items-center space-x-5">
                  <button className="btn px-6 py-5 bg-green-400 border-none rounded-3xl font-semibold text-black">
                    Explore Now
                  </button>
                  <button className="btn px-6 py-5 hover:bg-green-400 border-none rounded-3xl">
                    Our Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *OUR RECIPES SECTION* */}
        <div className="our-recipe-text text-center py-4">
          <h2 className="text-4xl font-bold text-black">Our Recipes</h2>
          <p className="w-3/4 mx-auto">
            We have the best dishes from across the world made by the best cooks
            ever found on earth. We believe in quality food for our customer
          </p>
        </div>
        <div className="cards-container flex justify-center items-start">
          <div className="left-side-content grid grid-cols-2 gap-10">
            {recipes.map((recipe, index) => (
              <EachRecipe
                key={index}
                recipe={recipe}
                handleWantToCook={handleWantToCook}
              />
            ))}
          </div>
          <div className="right-side-content">
            {wantCart.map((recipe, index) => (
              <WanToCookCart key={index} recipe={recipe} wantCart={wantCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
