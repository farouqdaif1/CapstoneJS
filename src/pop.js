import { getComments, counter, postComments } from './comments';

const popCard = async (data) => {
  const { meals } = data;

  meals.forEach(async (meal, index) => {
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
      content.id = `content2-${meal.idMeal}`;
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
      const idx = document.querySelector(`#content2-${meal.idMeal}`);
      const pra = document.createElement('h3');
      const num = await counter(idx.id);
      pra.innerText = `comments(${num})`;
      commnts.appendChild(pra);
      const allComments = document.createElement('div');
      allComments.className = 'allcomments';
      content.appendChild(allComments);
      const commentsAll = await getComments(idx.id);
      commentsAll.forEach((e) => {
        const special = document.createElement('p');
        special.innerText = `${e.creation_date} ${e.username} ${e.comment}`;
        allComments.appendChild(special);
      });
      // creat form
      const form = document.createElement('form');
      form.className = 'form_x';
      form.id = `${meal.idMeal}`;
      content.appendChild(form);
      // form title
      const formTitle = document.createElement('h3');
      formTitle.className = 'form_title';
      formTitle.innerHTML = 'Add a comment';
      form.appendChild(formTitle);
      // form name
      const nameInp = document.createElement('input');
      nameInp.type = 'text';
      nameInp.id = `name-${meal.idMeal}`;
      nameInp.placeholder = 'Your name';
      nameInp.className = 'form_item';
      nameInp.required = true;
      form.appendChild(nameInp);
      // form textarea
      const commentText = document.createElement('textarea');
      commentText.name = 'insights';
      commentText.id = `insight-${meal.idMeal}`;
      commentText.cols = '30';
      commentText.rows = '10';
      commentText.className = 'form_item';
      commentText.placeholder = 'Your Comment';
      commentText.required = true;
      form.appendChild(commentText);
      // creat submit button
      const submitCom = document.createElement('button');
      submitCom.type = 'submit';
      submitCom.className = 'form_item1';
      submitCom.className = 'form_v';
      submitCom.className = `submit_${meal.idMeal}`;
      submitCom.innerHTML = 'Comment';
      form.appendChild(submitCom);
      const formts = document.querySelectorAll('.form_x');
      formts.forEach((form) => {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          e.stopPropagation();
          const id = document.querySelector(`#content2-${form.id}`);
          const Inputname = document.querySelector(`#name-${form.id}`);
          const Inputcoment = document.querySelector(`#insight-${form.id}`);
          const namev = Inputname.value;
          const commentv = Inputcoment.value;
          console.log(e.target.previousElementSibling);

          await postComments(id.id, namev, commentv);
          // .then(() => { } showComment(e.target.previousElementSibling, namev, commentv));
          window.location.reload();
        });
      });
    }
  });
};
// function showComment(namev, commentv) {
//   const ulCont = document.querySelector('');
//   const li = document.createElement('p');
//   li.innerHTML = `${namev} : ${commentv}`;
//   ulCont.appendChild(li);
// }
export default popCard;