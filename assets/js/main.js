const key = 'layout'
const url = new URL(window.location.href)
const message = url.searchParams.get('message')

if (message === 'success') {
  alert('Email enviado com sucesso! Em breve entraremos em contato!')
}

if (message === 'failed') {
  alert('Infelizmente houve um erro, tente novamente.')
}

if (document.getElementById('cnpj') !== null) {
  document.getElementById('cnpj').addEventListener('blur', function () {
    const cnpj = this.value
    if (verifyCNPJ(cnpj)) {
      console.log('CNPJ válido')
    } else {
      console.log('CNPJ inválido')
    }
  })
}

$(document).ready(function () {
  getStorageAndAddClass()
  verifyCookies()
})

function getStorageAndAddClass() {
  const layout = localStorage.getItem(key) || 'light'
  if (layout === 'light') {
    document.getElementById('layout').classList.add('light')
    document.getElementById('layout').classList.remove('dark')
    document.getElementById(`main-body`).style.background = 'none'
    document.querySelectorAll(`.button-light`).forEach((item) => {
      item.classList.add('active')
    })
    document.querySelectorAll(`.button-dark`).forEach((item) => {
      item.classList.remove('active')
    })
  }
  if (layout === 'dark') {
    document.getElementById('layout').classList.add('dark')
    document.getElementById('layout').classList.remove('light')
    document.getElementById(`main-body`).style.background = '#121C26'
    document.querySelectorAll(`.button-dark`).forEach((item) => {
      item.classList.add('active')
    })
    document.querySelectorAll(`.button-light`).forEach((item) => {
      item.classList.remove('active')
    })
  }
}

function changeBackground(params) {
  localStorage.setItem(key, params)
  getStorageAndAddClass()
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document.getElementById('navigation').classList.add('scape')
  } else {
    document.getElementById('navigation').classList.remove('scape')
  }

  if (window.scrollY >= 200) {
    document.getElementById('navigation').classList.add('fixed')
  } else {
    document.getElementById('navigation').classList.remove('fixed')
  }
})

/* function getBlogPosts() {
  return {
    blogPosts: [
      {
        id: 1,
        backgroundImg: 'background-image: url(./assets/img/blog/post-1.png)',
        badge: 'tecnologia',
        title:
          'BYD amplia linha de produtos e lança novo inversor trifásico 220V.',
        href: 'https://www.byd.com.br/byd-amplia-linha-de-produtos-e-lanca-novo-inversor-trifasico-220v/'
      },
      {
        id: 2,
        backgroundImg: 'background-image: url(./assets/img/blog/post-2.png)',
        badge: 'economia',
        title:
          'BYD Energy anuncia plataforma online de comercialização de produtos fotovoltaicos.',
        href: 'https://www.byd.com.br/byd-energy-anuncia-plataforma-online-de-comercializacao-de-produtos-fotovoltaicos/'
      },
      {
        id: 3,
        backgroundImg: 'background-image: url(./assets/img/blog/post-3.png)',
        badge: 'meio ambiente',
        title: 'BYD traz solução para aumentar produção do agronegócio.',
        href: 'https://www.byd.com.br/byd-traz-solucao-para-aumentar-producao-do-agronegocio/'
      },
      {
        id: 4,
        backgroundImg: 'background-image: url(./assets/img/blog/post-4.png)',
        badge: 'economia',
        title: 'BYD Energy anuncia três novos centros de distribuição no país.',
        href: 'https://www.byd.com.br/byd-energy-anuncia-tres-novos-centros-de-distribuicao-no-pais-e-amplia-sua-capacidade-de-armazenamento-e-entrega/'
      },
      {
        id: 5,
        backgroundImg: 'background-image: url(./assets/img/blog/post-4.webp)',
        badge: 'meio ambiente',
        title: 'BYD recebe o prêmio “Top Brand PV Storage Europe”.',
        href: 'https://www.byd.com.br/byd-recebe-o-premio-top-brand-pv-storage-europe/'
      },
      {
        id: 6,
        backgroundImg: 'background-image: url(./assets/img/blog/post-6.png)',
        badge: 'tecnologia',
        title: 'BYD Energy investe em excelência na qualidade do produto.',
        href: 'https://www.byd.com.br/byd-energy-investe-em-excelencia-na-qualidade-do-produto-e-no-atendimento-para-seguir-lider-em-vendas-de-modulos-fotovoltaicos/'
      }
    ]
  }
} */

function acceptCookies() {
  localStorage.setItem('acceptCookies', true)
  document.querySelector('.cookie-consent').classList.add('d-none')
}

function rejectCookies() {
  localStorage.setItem('acceptCookies', false)
  document.querySelector('.cookie-consent').classList.add('d-none')
}

function verifyCookies() {
  const acceptCookies = localStorage.getItem('acceptCookies') || false
  if (acceptCookies === 'false' || acceptCookies === false) {
    document.querySelector('.cookie-consent').classList.remove('d-none')
  }
}

// Array com os URLs das imagens que deseja trocar
const imageUrls = [
  'assets/img/team-1.png',
  'assets/img/team-2.png',
  'assets/img/team-3.png'
]

// Array com os textos que deseja trocar no parágrafo
const paragraphTexts = [
  `
    Olá, sou Lorrainy, uma apaixonada por design de <br />
    experiência do usuário (UX) e design de interface do <br />
    usuário (UI). Estou entusiasmada em compartilhar <br />
    meu trabalho com você!
  `,
  `
    Olá, sou Fabiano, desenvolvedor Full Stack, tenho <br /> 
    habilidades sólidas em desenvolvimento de <br /> 
    front-end e back-end e sou  capaz de construir <br /> 
    aplicações web solidas.
  `,
  `
    Olá, sou Lucas, desenvolvedor Frontend com <br />
    paixão pela criação de interfaces de usuário <br />
    incríveis e experiências digitais excepcionais.
  `
]

let currentImageIndex = 0
let currentParagraphIndex = 0

function changeImageAndParagraph() {
  const image = document.getElementById('img-team')
  const paragraph = document.getElementById('text-team')

  // Trocar o src da imagem a cada 5 segundos
  image.src = imageUrls[currentImageIndex]
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length

  // Trocar o texto do parágrafo a cada 5 segundos
  paragraph.innerHTML = paragraphTexts[currentParagraphIndex]
  currentParagraphIndex = (currentParagraphIndex + 1) % paragraphTexts.length
}

// Iniciar a troca de imagem e parágrafo a cada 5 segundos
setInterval(changeImageAndParagraph, 10000)
