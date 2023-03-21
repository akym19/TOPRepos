const container = document.querySelector('#container');

const red = document.createElement('p');
red.textContent = "Hey I'm red!"
container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
// blue.style.color = 'blue';
blue.setAttribute('style', 'color: blue');
container.appendChild(blue);

const pinkdiv = document.createElement('div');
// pinkdiv.style.backgroundColor = 'pink';
// pinkdiv.style.border = 'black solid 1px';
pinkdiv.setAttribute('style','background-color: pink; border: solid 1px black')

const h1in = document.createElement('h1');
h1in.textContent = "I'm in a div";
pinkdiv.appendChild(h1in)

const pin = document.createElement('p')
pin.textContent = "ME TOO!"
pinkdiv.appendChild(pin)

container.appendChild(pinkdiv)

// -----------------------------------------------
function alertFunction(){
    alert ("Nice! You clicked me!")
}

const btn2 = document.querySelector('#btn2');
// btn2.onclick = () => alert('Hello World 2')

const btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', () => {alert("Hello World 3")})

// btn2.addEventListener('click', alertFunction)
// btn3.addEventListener('click', alertFunction)

// btn2.addEventListener('click', function (e) {
//     console.log(e);
//   });

// btn2.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

// btn2.addEventListener('click', function (e) {
//   e.target.style.background = 'blue';
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});