const container1 = document.querySelector('.move1');
const origin1 = document.querySelector('.origin1');
const block1 = document.querySelector('.block1');

function moveBlock1() {
  if (window.innerWidth <= 1200) {
    container1.appendChild(block1); // Move block outside the container
  } else {
    origin1.appendChild(block1);
    block1.style.order = -1 // Move block back inside the container
  }
}

window.addEventListener('resize', moveBlock1);
moveBlock1(); // Initial check on page load

const container2 = document.querySelector('.move2');
const origin2 = document.querySelector('.origin2');
const block2 = document.querySelector('.block2');

function moveBlock2() {
  if (window.innerWidth <= 1200) {
    container2.appendChild(block2); // Move block outside the container
  } else {
    origin2.appendChild(block2);
  }
}

window.addEventListener('resize', moveBlock2);
moveBlock2(); // Initial check on page load

const container3 = document.querySelector('.move3');
const origin3 = document.querySelector('.origin3');
const block3 = document.querySelector('.block3');

function moveBlock3() {
  if (window.innerWidth <= 1200) {
    container3.appendChild(block3); // Move block outside the container
    origin3.style.order = -1;
  } else {
    origin3.appendChild(block3);
    origin3.style.order = 1;
  }
}

window.addEventListener('resize', moveBlock3);
moveBlock3(); // Initial check on page load

const container4 = document.querySelector('.move4');
const origin4 = document.querySelector('.origin4');
const block4 = document.querySelector('.block4');

function moveBlock4() {
  if (window.innerWidth <= 1200) {
    container4.appendChild(block4); // Move block outside the container
  } else {
    origin4.appendChild(block4);
  }
}

window.addEventListener('resize', moveBlock4);
moveBlock4(); // Initial check on page load