let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  

  function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
      <h2>${user.name}</h2>
      <p>Username: ${user.username}</p>
      <p>Email: ${user.email}</p>
    `;
    return card;
  }
  

  function displayUserCards() {
    const container = document.getElementById('user-cards-container');
    container.innerHTML = '';
    users.forEach(user => {
      const userCard = createUserCard(user);
      container.appendChild(userCard);
    });
  }
  

  function addUser() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
  
    if (name && username && email) {
      const newUser = {
        id: users.length + 1,
        name: name,
        username: username,
        email: email,
      };
      users.push(newUser);
      displayUserCards();
  
      document.getElementById('name').value = '';
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
    } else {
      alert('Please fill in all fields.');
    }
  }

  window.onload = displayUserCards;
  