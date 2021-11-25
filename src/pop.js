// import getMeals from './consume-api';

const popCard = async (data) => {
  const { meals } = data;
  meals.forEach((meal, index) => {
    if (index < 6) {
      const pop = document.querySelector('#popup');
      // creat overlay div
      const over = document.createElement('div');
      over.classList.add('overaly');
      over.classList.add('hidden');
      over.classList.add(`c-x-${meal.idMeal}`);
      pop.appendChild(over);
      // creat content div
      const content = document.createElement('div');
      content.classList.add('content');
      content.classList.add('hidden');
      content.classList.add(`c-x-${meal.idMeal}`);
      pop.appendChild(content);
      // Add divs inside content div
      // close button
      const closeBtn = document.createElement('div');
      closeBtn.classList.add('close-btn');
      content.appendChild(closeBtn);
      const x = document.createElement('p');
      x.classList.add('x');
      x.classList.add(`c-x-${meal.idMeal}`);
      x.innerText = 'X';
      closeBtn.appendChild(x);
      // item photo
      const image = document.createElement('img');
      image.src = meal.strMealThumb;
      image.height = '300';
      image.classList.add('photo');
      content.appendChild(image);
      // item name
      const Iname = document.createElement('p');
      Iname.classList.add('item-name');
      Iname.innerHTML = meal.strMeal;
      content.appendChild(Iname);
      // div for comments
      const commnts = document.createElement('div');
      commnts.classList.add('comment-num');
      content.appendChild(commnts);
      // pragragh inside  comments
      const pra = document.createElement('h3');
      pra.innerText = 'comments()';
      commnts.appendChild(pra);
      // creat form
      const form = document.createElement('form');
      form.id = 'comment_form';
      content.appendChild(form);
      // form title
      const formTitle = document.createElement('h3');
      formTitle.innerHTML = 'Add a comment';
      form.appendChild(formTitle);
      // form name
      const nameInp = document.createElement('input');
      nameInp.type = 'text';
      nameInp.id = 'yourname';
      nameInp.placeholder = 'Your name';
      nameInp.className = 'form_item';
      nameInp.required = true;
      form.appendChild(nameInp);
      // form textarea
      const commentText = document.createElement('textarea');
      commentText.name = 'insights';
      commentText.id = 'insight';
      commentText.cols = '30';
      commentText.rows = '10';
      commentText.className = 'form_item';
      commentText.placeholder = 'Your Comment';
      commentText.required = true;
      form.appendChild(commentText);
      // creat submit button
      const submitCom = document.createElement('button');
      submitCom.type = 'submit';
      submitCom.className = 'form_item';
      submitCom.id = 'submit_btn';
      // submitCom.setAttribute('data', num);
      submitCom.innerHTML = 'Comment';
      form.appendChild(submitCom);
    }
  });
};
export default popCard;
