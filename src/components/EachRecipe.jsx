const EachRecipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    calories,
    preparing_time,
    ingredients,
    short_description,
  } = recipe;
  return (
    <>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title text-center">{recipe_name}</h2>
          <p className="text-center">{short_description}</p>
          <hr />
          <div className="ingredients text-left">
            <p>Ingredients:{ingredients.length}</p>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <hr />
          </div>
          <div className="preparing-time flex justify-between space-x-7">
            <div className="flex justify-center">
              <img src="./time-img.png" alt="" />
              <p>{preparing_time}</p>
            </div>
            <div className="flex justify-center">
              <img src="./calorie-img.png" alt="" />
              <p>{calories}</p>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleWantToCook(recipe)}
              className="btn px-6 py-5 bg-green-400 border-none rounded-3xl font-semibold text-black"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachRecipe;
