const hambur = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-section');
const hide = document.querySelector('.hide');
const logo = document.querySelector('.logo');

hambur.onclick = function myfunction() {
  menu.classList.toggle('active');
  hambur.classList.toggle('active');
  logo.classList.toggle('active');
  hide.classList.toggle('active');
};
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hambur.classList.remove('active');
  menu.classList.remove('active');
  logo.classList.remove('active');
  hide.classList.remove('active');
}));

const chef = [
  {
    name: 'Nancy Robert',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image.png',
  },
  {
    name: 'vikry khan',
    title: 'Teachers his india cusine ',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-2.png',
  },
  {
    name: 'kwame morsi',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-3.png',
  },
  {
    name: 'francis diaro',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-4.png',
  },
  {
    name: 'miaya kianu',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-5.png',
  },
  {
    name: 'eriz komaro',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-6.png',
  },
];

const container = document.querySelector('.empty-container');
const teacher = (e) => {
  const card = document.createElement('div');
  const count = 0;
  card.classList = 'teacher-item';

  card.innerHTML += `
   <ul class="card-container chef-${count}">
  
   <li>
   <img src="${e.Image}" alt="image" class="chef-image">
   </li>
   <li>
   <ul class="teach-text">
   <li><p class="chef-n text-dark"> ${e.name}</p></li>
   <li><p class="text-danger chef-t" >${e.title}</p></li>

   <li><p class="chef-p">${e.about}</p></li>
   </ul>
   </li>
   </ul>
   `;

  container.appendChild(card);
};
chef.forEach((e) => {
  teacher(e);
});

const chef3 = document.querySelector('.chef-3');
const chef4 = document.querySelector('.chef-4');
const chef5 = document.querySelector('.chef-5');
const chef6 = document.querySelector('.chef-6');
const more = document.querySelector('.more');
more.onclick = function more() {
  chef3.classList.toggle('active');
  chef4.classList.toggle('active');
  chef5.classList.toggle('active');
  chef6.classList.toggle('active');
};
