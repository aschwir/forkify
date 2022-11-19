import * as model from './model.js';
import recipeView from './views/recipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////




const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // const id = '5ed6604591c37cdc054bcc72zzz'
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id);

    //rendering recipe
    recipeView.render(model.state.recipe);

  }
  catch (err) {
    recipeView.renderError()
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}

init();

