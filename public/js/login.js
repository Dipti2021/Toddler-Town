const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // if sign up succeeds we will log them in
      if (response.ok) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in.');
        }
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
// async function previousLoginFormHandler(event) {
//     event.preventDefault();

//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();

//     if (email && password) {
//         const response = await fetch('/api/users/login', {
//             method: 'post',
//             body: JSON.stringify({
//                 email,
//                 password
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         });

//         if (response.ok) {
//             document.location.replace('/');
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// async function signupFormHandler(event) {
//     event.preventDefault();

//     const username = document.querySelector('#username-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();


//     if (username && email && password) {
//         const response = await fetch('/api/users', {
//             method: 'post',
//             body: JSON.stringify({
//                 username,
//                 email,
//                 password
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         });

//         // check the response status
//         if (response.ok) {
//             console.log('success');
//             document.location.replace('/');
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
// document.querySelector('.login-form').addEventListener('submit', signupFormHandler);
