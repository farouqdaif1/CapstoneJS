// import getMeals from './consume-api';
import { getComments, counter, postComments } from './comments';



// console.log(num);
const popCard = async (data) => {
  // console.log(num);
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
      const num = await counter();
      pra.innerText = `comments(${num})`;
      commnts.appendChild(pra);
      const allComments = document.createElement('div');
      content.appendChild(allComments);
      const commentsAll = await getComments();
      console.log(commentsAll);
      commentsAll.forEach((e) => {
        const special = document.createElement('p');
        special.innerText = `${e.creation_date}${e.username}${e.comment}`;
        allComments.appendChild(special);
      });
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
      submitCom.className = 'form_item1';
      // submitCom.id = 'submit_btn';
      submitCom.id = `submit_${meal.idMeal}`;

      // submitCom.setAttribute('data', num);
      submitCom.innerHTML = 'Comment';
      form.appendChild(submitCom);
      // console.log(submitBtn);
      const submitBtn = document.querySelectorAll('.form_item1');
      submitBtn.forEach(  (btn) => {
        btn.addEventListener( 'click', async (e)=> {
          const id = e.target.id;
          // console.log(id)
          const  commentP  = await postComments(12345abc, 'Farouq', 'I love fish');
          console.log(commentP)
        })
      })
    }
  });
};

const addPost =async () => {
  // const  commentP  = await postComments();
  // console.log(commentP)
}
addPost()
export  {popCard, addPost};
