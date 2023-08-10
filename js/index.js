/* para menu hamburguesa */
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); /* activa la x */
    navbar.classList.toggle('active');
}

/* desaparece el menú responsivo al darle click en un link */
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


/* para palabras */
// let words = document.querySelectorAll(".word");
// words.forEach(word => {
//     let letters = word.textContent.split("");
//     word.textContent = "";
//     letters.forEach(letter => {
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         word.append(span);
//     });
// });

// let currentWordIndex = 0;
// let maxWordIndex = words.length - 1;
// words[currentWordIndex].style.opacity = "1";
// let rotateText = () => {
//     let currentWord = words[currentWordIndex];
//     let nextWord = currentWordIndex ===
//             maxWordIndex ? words[0] : words[currentWordIndex + 1];
//     Array.from(currentWord.children).forEach((letter, i) => {
//         setTimeout(() => {
//             letter.className = "letter out";
//         }, i * 60);
//     });
//     nextWord.style.opacity = "1";
//     Array.from(nextWord.children).forEach((letter, i) => {
//         letter.className = "letter behind";
//         setTimeout(() => {
//             letter.className = "letter in";
//         }, 340 + i * 60);
//     });
//     currentWordIndex =
//         currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;        
// };
// rotateText();
// setInterval(rotateText, 4000);

// para efecto escritura
var typed = new Typed('.typed', {

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
    
});