import getMeals from './consume-api';

const mealsList = document.querySelector('.meals');
// render 6 meals from api

const render = async () => {
    const dataFromAPI = await getMeals();
    const { meals } = dataFromAPI;
    meals.forEach((element, index) => {
        if (index < 6) {
            mealsList.innerHTML += `
        <li>
        <figure>
        <img src="${element.strMealThumb}" alt="meal photo">
        <figcaption>${element.strMeal}</figcaption>
        </figure>
        <div id="likes">
        <i class="fas fa-heart"></i>
        <div id="num-liks">250 <span>Likes</span></div>
        </div>
        <div id="comments">
        <div id="num-comments">250 <span>commints</span></div>
        <i class="fas fa-comment"></i>
        </li>`;
        }
    });
};
export default render;
