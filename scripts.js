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
    name: 'Aasda Benkler',
    picture: './imgs/speaker_01.svg',
    title: 'Aasdas Professor',
    info: 'Aasda studies commons-based',
  },
  ];

  function createGrid(rows, columns) {

    const section = document.getElementById('speakers_section');
    const article = document.createElement('article');
    section.appendChild(article);
    article.className = 'article'

    const title = document.createElement('h2');
    title.innerHTML = 'Featured Speakers';
    article.appendChild(title);

    const speakersContainer = document.createElement('div');
    speakersContainer.id = 'speakers_container';
    article.appendChild(speakersContainer);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let cell = document.createElement('div')
        cell.className = 'cell'

        cell.innerHTML = `<img src = "${speakersObj[0].picture}">
        <div>
          <h1>${speakersObj[0].name}</h1>
          <h3>${speakersObj[0].title}</h3>
          <p>${speakersObj[0].info}</p>
        </div>`

        speakersContainer.appendChild(cell);
      }
    }

  }

  createGrid(2, 3);
}
