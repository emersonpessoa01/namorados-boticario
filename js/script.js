searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }

  fadeOut();
};

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*  VALIDAÇÃO */
const botao = document.querySelector("#btnSubscribe");

botao.addEventListener("click", (event) => {
  //desabilita a funcao padrão do botao
  event.preventDefault();
  //define as variaveis dos inputs
  const userEmail = document.querySelector("#email");

  const [user] = userEmail.value.split("@");

  //define as variaveis dos "spans" usados para mensagem de erro e sucesso
  const spanEmail = document.querySelector("#spanEmail");
  const textoSucesso = document.querySelector("#textoSucesso");

  //define o regex do email
  const regTeste = /^[a-z0-9A-Z.]{1,32}@[a-z0-9]{1,16}\.[a-z]+$/;

  //verifica se os campos estao de acordo com a validacao
  if (userEmail.value === "") {
    spanEmail.classList.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerContent = "";
  } else if (!regTeste.test(userEmail.value)) {
    spanEmail.classList.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerContent = "";
  } else {
    spanEmail.classList.remove("erro");
    userEmail.classList.remove("bordaErro");
    textoSucesso.innerText = `Obrigado, ${user}!`;
  }
});

const target = document.querySelectorAll('[data-anime]');

const animationClass = "animate";

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4.5);
  target.forEach(function(element){
    if(element.offsetTop < windowTop){
      element.classList.add(animationClass)
    }else{
      element.classList.remove(animationClass)
    }

    // console.log(element.offsetTop)
    // console.log(window.innerHeight)
  })
}
window.addEventListener("scroll",function(){
  animeScroll()
})



