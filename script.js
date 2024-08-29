'use strict';


const igrac0El = document.querySelector('.igrac--0');
const igrac1El = document.querySelector('.igrac--1');
const rezultat0El = document.querySelector('#rezultat--0');
const rezultat1El = document.getElementById('rezultat--1'); 
const trenutno = document.getElementById('trenutno--0');
const trenutno1El = document.getElementById('trenutno--1');
const kockicaEl = document.querySelector('.kockica');
const btnnovi = document.querySelector('.btn--novi');
const btnzavrti = document.querySelector('.btn--zavrti');
const btnzadrzi = document.querySelector('.btn--zadrzi');

let rezultats, trenutnorezultat, activeigrac, igranje;



const init = function () {
  rezultats = [0, 0];
  trenutnorezultat = 0;
  activeigrac = 0;
  igranje = true;

  rezultat0El.textContent = 0;
  rezultat1El.textContent = 0;
  trenutno.textContent = 0;
  trenutno1El.textContent = 0;

  kockicaEl.classList.add('hidden');
  igrac0El.classList.remove('igrac--pobednik');
  igrac1El.classList.remove('igrac--pobednik');
  igrac0El.classList.add('igrac--active');
  igrac1El.classList.remove('igrac--active');
};
init();

const switchigrac = function () {
  document.getElementById(`trenutno--${activeigrac}`).textContent = 0;
  trenutnorezultat = 0;
  activeigrac = activeigrac === 0 ? 1 : 0;
  igrac0El.classList.toggle('igrac--active');
  igrac1El.classList.toggle('igrac--active');
};

btnzavrti.addEventListener('click', function () {
  if (igranje) {
    
    const kockica = Math.trunc(Math.random() * 6) + 1;

    
    kockicaEl.classList.remove('hidden');
    kockicaEl.src = `kockica-${kockica}.png`;
    
    if (kockica !== 1) {
      trenutnorezultat += kockica;
      document.getElementById(`trenutno--${activeigrac}`).textContent =
        trenutnorezultat;
    } else {
      
      switchigrac();
    }
  }
});

btnzadrzi.addEventListener('click', function () {
  if (igranje) {
    
    rezultats[activeigrac] += trenutnorezultat;

    document.getElementById(`rezultat--${activeigrac}`).textContent =
      rezultats[activeigrac];

    
    if (rezultats[activeigrac] >= 100) {
     
      igranje = false;
      kockicaEl.classList.add('hidden');
      document
        .querySelector(`.igrac--${activeigrac}`)
        .classList.add('igrac--pobednik');
      document
        .querySelector(`.igrac--${activeigrac}`)
        .classList.remove('igrac--active');
    } else {
   
      switchigrac();
    }
  }
});

btnnovi.addEventListener('click', init);
