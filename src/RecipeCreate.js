import React, { useState } from "react";

function RecipeCreate({ setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements. Check
  // TODO: Add the required submit and change handlers
  const emptyState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [recipe, setRecipe] = useState(emptyState);

  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes((recipes) => [...recipes, recipe]);
    event.target.reset();
    setRecipe(emptyState);
  };

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required={true}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required={true}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                required={true}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required={true}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                value={recipe.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
