const WanToCookCart = ({ wantCart }) => {
  return (
    <>
      <div className="right-side-content">
        <h1 className="text-center">Want to cook</h1>
        <hr />
        <div className="table-content">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {wantCart.map((recipe, index) => (
                  <tr key={index} className="bg-base-200 rounded">
                    <th>{index + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>
                    <td>
                      <button className="btn px-10 py-5 bg-green-400 border-none rounded-3xl font-semibold text-black">
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/*Currently Cooking section */}
      </div>
    </>
  );
};

export default WanToCookCart;
