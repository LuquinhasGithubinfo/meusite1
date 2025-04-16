const texto = "Sites modernos, rápidos e com design profissional.";
const speed = 70;
let i = 0;

function typeWriter() {
  if (i < texto.length) {
    document.querySelector(".typewriter").innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
