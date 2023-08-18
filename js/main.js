document.documentElement.classList.add('js');

const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo-menu");
  } else {
    link.classList.remove("ativo-menu");
  }
});

// 

const urlSeg = new URLSearchParams(location.search);

urlSeg.forEach((url) => {
  const elemento = document.getElementById(url);
  if (elemento) elemento.checked = true;
});

// 

const urlSeguros = "seguros.html";

if((location.href).includes(urlSeguros)){
  const perguntas = document.querySelectorAll('#perguntas-site');

  perguntas[0].children[1].classList.add('ativo');
  
  perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', (event)=> {
      const son = Array.from(event.currentTarget.children);
      son[1].classList.toggle('ativo');
    })
  })
}

//

const galeria = document.querySelectorAll('.bicicleta-img img');

const galeriaContainer = document.querySelector('.bicicleta-img')

galeria.forEach(foto => {
  foto.addEventListener('click', (event)=> {
    if(window.innerWidth >= 920){
      galeriaContainer.prepend(event.target);
    }
  })
})

// Animação

if(window.SimpleAnime) new SimpleAnime();