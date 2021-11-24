const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
// get the data fron api
const getMeals = async () => {
  const data = await fetch(url);
  const result = data.json();
  return result;
};
export default getMeals;
// idMeal