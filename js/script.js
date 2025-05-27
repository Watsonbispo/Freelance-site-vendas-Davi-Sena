
/*delay da pagina*/  
const video = document.getElementById('video_propaganda');
const mostrarDiv = document.getElementById('esconder_aparecer');
const btnMostrar=document.getElementById("mostrarEvent")


btnMostrar.addEventListener("click",()=>{
    mostrarDiv.style.display="block"
    document.getElementById("esconder_aparecer").scrollIntoView({ behavior: "smooth" });
})

/*cronometro*/
var minutos = 50;
var segundos = 59;

var x = setInterval(function() {

    var counters = document.querySelectorAll(".timer");

    for (y of counters) {
        y.innerHTML = minutos + ":" + segundos;
    }

    segundos--;

    if (segundos < 10 & segundos > -1) {
        segundos = "0" + segundos
    } else if (segundos < 0) {
        segundos = 59;
        minutos--;
    } else {
        segundos = segundos;
    }

    if (minutos < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIROU";
    }
}, 1000);

/*drop-content*/

const btns = document.querySelectorAll('.jsdrop');
const contents = document.querySelector('.visible');

btns.forEach((button) => {
    button.addEventListener('click', function() {
        const content = this.parentNode.nextElementSibling;
        content.classList.toggle('visible');
        this.classList.toggle("jsdropX")

    });
});

function reorganizarDivs() {
    let groups = document.querySelectorAll('.content-offers > .treeofertas');

    groups.forEach(group => {
        let divs = Array.from(group.getElementsByClassName('offerR'));
        let firstDiv = divs.shift();
        let middleIndex = Math.floor(divs.length / 2); 
        divs.splice(middleIndex, 0, firstDiv);
        // Reinsere as divs no grupo na ordem correta
        divs.forEach(div => group.appendChild(div));
    });
}

function verificarLarguraTela() {
    if (window.innerWidth > 1024) {
        reorganizarDivs();
    }
}

window.addEventListener('load', verificarLarguraTela);