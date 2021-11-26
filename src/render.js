import getMeals from './consume-api';
// import { getikes, addLikes } from './likes';

const mealsList = document.querySelector('.meals');
// render 6 meals from api

const render = async () => {
  const dataFromAPI = await getMeals();
  const { meals } = dataFromAPI;

  meals.forEach((element, index) => {
    if (index < 6) {
      mealsList.innerHTML += `
        <li  id=id-${element.idMeal}>
        <figure>
        <img src="${element.strMealThumb}" alt="meal photo" width="250" height="250">
        <figcaption>${element.strMeal}</figcaption>
        </figure>
        <div id="buttons">
        <button class="like" id="likes">
        '<i class="fas fa-heart"></i> '
        <div id="num-liks"> </div>
        </button>
        <button  id=x-${element.idMeal} class="com ${element.idMeal}">
        <i class="fas fa-comment ${element.idMeal}" ></i>
        <div id="num-comments" class="num-comments  ${element.idMeal}"><span class="span ${element.idMeal}">comment</span></div>
        </button>
        </div>
        </li>`;
    }
  });
};

export default render;
