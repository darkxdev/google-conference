window.onload = () => {
  const mMenuIcon = document.querySelector('#burguer_icon');
  const mMenuIconImg = document.querySelector('#burguer_container img');
  const mMenu = document.querySelector('#mobile_menu ul');
  const mMenuCloseIcon = document.querySelector('#mobile_menu ul img');

  mMenuIcon.addEventListener('click', () => {
    mMenu.style.display = 'block';
    mMenuIconImg.style.display = 'none';
    mMenuCloseIcon.style.float = 'right';
  });

  mMenuCloseIcon.addEventListener('click', () => {
    mMenu.style.display = 'none';
    mMenuIconImg.style.display = 'block';
    mMenuCloseIcon.style.float = 'none';
  });

  /* -- Dynamic HTML creation -- */

  const speakersObj = [{
    name: 'Yochai Benkler',
    picture: './imgs/speaker_01.svg',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Kilnam Chon',
    picture: './imgs/speaker_02.svg',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'SohYeong Noh',
    picture: './imgs/speaker_03.svg',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Julia Leda',
    picture: './imgs/speaker_04.svg',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Lila Tretikov',
    picture: './imgs/speaker_05.svg',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },

  {
    name: 'Ryan Merkley',
    picture: './imgs/speaker_06.svg',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },

  ];

  function createGrid(cells) {
    const section = document.getElementById('speakers_section');
    const article = document.createElement('article');
    article.className = 'article';
    section.appendChild(article);

    const title = document.createElement('h2');
    title.innerHTML = 'Featured Speakers';
    article.appendChild(title);

    const divider = document.createElement('hr');
    article.appendChild(divider);

    const speakersContainer = document.createElement('div');
    speakersContainer.id = 'speakers_container';
    article.appendChild(speakersContainer);

    for (let i = 0; i < cells; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      cell.innerHTML = `<img src = "${speakersObj[i].picture}">
        <div>
          <h1>${speakersObj[i].name}</h1>
          <h3>${speakersObj[i].title}</h3>
          <p>${speakersObj[i].info}</p>
        </div>`;

      speakersContainer.appendChild(cell);
    }
  }

  createGrid(6);
};
