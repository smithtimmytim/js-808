// GLOBAL JS
// -----------------------------------------

var beatButton = document.getElementsByClassName("instrument__beat");

// console.log(beatButton);

function beatButtonSelected() {
  console.log('made it');
  this.classList.toggle('instrument__beat--active');
}

for (var i = 0; i < beatButton.length; i++) {
  beatButton[i].addEventListener("click", beatButtonSelected);
}


// -----------------------------------------
// LISTENERS

// if ( beatButton ) {
//   beatButton.addEventListener("click", beatButtonSelected);
// }
