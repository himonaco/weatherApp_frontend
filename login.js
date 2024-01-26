


document.querySelector('#register').addEventListener('click', function(){
    
      let user = {
          name: document.querySelector('#registerName').value,
          email: document.querySelector('#registerEmail').value,
          password: document.querySelector('#registerPassword').value,
      }
      
      fetch('http://localhost:3000/users/signup', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => {
          if(data.result){
              window.location.assign('/frontend/index.html');
              
          } else {
              console.log('error');
              
          }
      });
    
    
    
  });
  
//   //Au clic sur le bouton #connection, envoyez les informations renseignées dans les différents champs vers le backend avec la toute POST /signin.
// Si les informations sont correctes et qu’elles correspondent bien à un utilisateur en BDD, renvoyez true et redirigez votre page vers index.html (en utilisant window.location.assign()).

document.querySelector('#connection').addEventListener('click', function() {
    let email = document.querySelector('#connectionEmail').value;
    let password = document.querySelector('#connectionPassword').value;

    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password}),
    })
    .then(response => response.json())
    .then(data => {
        if(data.result){
            window.location.assign('/frontend/index.html');
        } else{
            console.log('error');
        }
    });
});
