const popCard = () => {
  const pop = document.querySelector('#popup');
  // creat overlay div
  const over = document.createElement('div');
  over.classList.add('overaly');
  pop.appendChild(over);
  // creat content div
  const content = document.createElement('div');
  content.classList.add('content');
  pop.appendChild(content);
  // Add divs inside content div
  // item photo
  const image = document.createElement('img');
  image.classList.add('photo');
  content.appendChild(image);
  // item name
  const Iname = document.createElement('p');
  Iname.classList.add('item-name');
  content.appendChild(Iname);
  // div for comments
  const commnts = document.createElement('div');
  commnts.classList.add('comment-num');
  content.appendChild(commnts);
  // pragragh inside  comments
  const pra = document.createElement('p');
  pra.innerText = 'comments()';
  commnts.appendChild(pra);
};
export default popCard;
