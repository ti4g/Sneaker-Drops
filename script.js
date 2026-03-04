/* ══════════════════════════════════════
   CONFIGURAÇÃO
   ══════════════════════════════════════ */

// Troque pelo seu número se mudar (DDI + DDD + número, sem espaços ou traços)
const WHATSAPP = '5563999614831';

const SIZES = [36, 37, 38, 39, 40, 41, 42, 43];


/* ══════════════════════════════════════
   PRODUTOS
   ══════════════════════════════════════ */
const products = [

  {
    brand: 'Nike',
    name: 'Nike Air Force Branco',
    price: 'R$ 229,90',
    tag: '🔥 Hot',
    desc: 'O Nike Air Force é um dos modelos mais icônicos da Nike. Com design clássico e acabamento premium, oferece conforto, resistência e estilo atemporal. Perfeito para o dia a dia, combina facilmente com qualquer look casual ou streetwear.',
    images: [
      'Air Force Branco/Air-Force-One-Branco-Atacado-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-2-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-3-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-4-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-5-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-6-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-7-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-8-600x800.jpeg',
      'Air Force Branco/Air-Force-One-Branco-Atacado-9-600x800.jpeg',
    ],
  },
  {
    brand: 'Nike',
    name: 'Nike Pegasus Bege e Preto',
    price: 'R$ 229,90',
    tag: '🔥 Hot',
    desc: 'O Nike Air Zoom Pegasus é conhecido pelo seu equilíbrio entre conforto, leveza e desempenho. Ideal para caminhadas, academia ou uso diário, possui amortecimento responsivo e cabedal respirável que garante conforto durante todo o dia.',
    images: [
      'Nike Pegasus Bege e Preto/Nike Zoom Pegasus.jpeg',
      'Nike Pegasus Bege e Preto/Nike-Air-Zoom-Pegasus-39-Bege-e-Preto-2-768x1024.jpeg',
      'Nike Pegasus Bege e Preto/Nike-Air-Zoom-Pegasus-39-Bege-e-Preto-3-768x1024.jpeg',
      'Nike Pegasus Bege e Preto/Nike-Air-Zoom-Pegasus-39-Bege-e-Preto-5-768x1024.jpeg',
      'Nike Pegasus Bege e Preto/Nike-Air-Zoom-Pegasus-39-Bege-e-Preto-6.jpeg',
      'Nike Pegasus Bege e Preto/Nike-Air-Zoom-Pegasus-39-Bege-e-Preto-7-768x1024.jpeg',
      'Nike Pegasus Bege e Preto/Nike-Air-Zoom-Pegasus-39-Bege-e-Preto-8-768x1024.jpeg',
    ],
  },
  {
    brand: 'Nike',
    name: 'Nike Pegasus Preto',
    price: 'R$ 229,90',
    tag: null,
    desc: 'O Nike Pegasus oferece uma experiência de corrida e caminhada extremamente confortável. Com design moderno e tecnologia de amortecimento Zoom, é um modelo leve, versátil e ideal tanto para atividades físicas quanto para uso casual.',
    images: [
      'Nike Pegasus Preto/Tenis-Nike-Zoom-Pegasus-Preto-Premium-1-600x800.jpeg',
      'Nike Pegasus Preto/Tenis-Nike-Zoom-Pegasus-Preto-Premium-2-600x837.jpeg',
      'Nike Pegasus Preto/Tenis-Nike-Zoom-Pegasus-Preto-Premium-3-600x800.jpeg',
      'Nike Pegasus Preto/Tenis-Nike-Zoom-Pegasus-Preto-Premium-4-600x800.jpeg',
    ],
  },
  {
    brand: 'Adidas',
    name: 'Adidas Samba',
    price: 'R$ 229,90',
    tag: null,
    desc: 'O Adidas Samba é um verdadeiro clássico do streetwear mundial. Seu design minimalista e elegante combina couro premium com solado resistente, garantindo conforto e durabilidade. Um modelo atemporal que nunca sai de moda.',
    images: [
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-600x800.jpeg',
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-2-600x800.jpeg',
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-3-600x800.jpeg',
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-4-600x800.jpeg',
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-5-600x800.jpeg',
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-6-600x800.jpeg',
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-7-600x800.jpeg',
      'Tenis Adidas Samba/Adidas-Samba-OG-Branco-e-Preto-8-600x800.jpeg',
    ],
  },
  {
    brand: 'Vans',
    name: 'Vans KNU Bege',
    price: 'R$ 229,90',
    tag: 'Novo',
    desc: 'O Vans KNU traz o estilo clássico da marca com um visual moderno e robusto. Confortável, resistente e estiloso, é perfeito para quem busca um tênis versátil para o dia a dia, combinando com diferentes estilos e ocasiões.',
    images: [
      'Vans KNU Bege/Tenis-Vans-Knu-Skool-Branco-e-Cinza-600x800.jpeg',
      'Vans KNU Bege/Tenis-Vans-Knu-Skool-Branco-e-Cinza-2-600x800.jpeg',
      'Vans KNU Bege/Tenis-Vans-Knu-Skool-Branco-e-Cinza-3-600x800.jpeg',
      'Vans KNU Bege/Tenis-Vans-Knu-Skool-Branco-e-Cinza-5-600x800.jpeg',
      'Vans KNU Bege/Tenis-Vans-Knu-Skool-Branco-e-Cinza-6.jpeg',
      'Vans KNU Bege/Tenis-Vans-Knu-Skool-Branco-e-Cinza-8-600x800.jpeg',
    ],
  },
  {
    brand: 'Vans',
    name: 'Vans KNU Preto e Branco',
    price: 'R$ 229,90',
    tag: null,
    desc: 'O Vans KNU Preto e Branco mantém a essência skate da Vans com um design marcante e contemporâneo. Oferece excelente conforto, durabilidade e um visual urbano que combina facilmente com looks casuais.',
    images: [
      'Vans KNU Preto e Branco/Tenis-Vans-Knu-Premium-1-600x800.jpeg',
      'Vans KNU Preto e Branco/Tenis-Vans-Knu-Premium-3-600x800.jpeg',
      'Vans KNU Preto e Branco/Tenis-Vans-Knu-Premium-4-600x800.jpeg',
      'Vans KNU Preto e Branco/Tenis-Vans-Knu-Premium-5-600x800.jpeg',
      'Vans KNU Preto e Branco/Tenis-Vans-Knu-Premium-6-600x800.jpeg',
    ],
  },
  {
    brand: 'Vans',
    name: 'Vans UltraRange Preto Branco',
    price: 'R$ 229,90',
    tag: null,
    desc: 'O Vans UltraRange foi desenvolvido para quem busca máximo conforto e mobilidade. Leve, flexível e com excelente amortecimento, é ideal para caminhadas, uso diário e longos períodos de uso.',
    images: [
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-2-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-3-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-4-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-5-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-6-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-7-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-8-600x800.jpeg',
      'Vans Ultra Range Preto Branco/Vans-Ultra-Range-Preto-Branco-9-600x800.jpeg',
    ],
  },
  {
    brand: 'Vans',
    name: 'Vans Vulcanizado Preto',
    price: 'R$ 229,90',
    tag: 'Novo',
    desc: 'O Vans Vulcanizado possui o tradicional solado waffle da marca, oferecendo ótima aderência e resistência. Com design clássico e minimalista, é um modelo confortável e perfeito para o uso casual no dia a dia.',
    images: [
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto--600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-2-600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-3-600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-4-600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-5-600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-6-600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-7-600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-8-600x800.jpeg',
      'Vans Vulcanizado Preto/Vans-Knu-Skool-Vulcanizado-Preto-9-600x800.jpeg',
    ],
  },
  {
    brand: 'Adidas',
    name: 'Adidas 4D Azul',
    price: 'R$ 229,90',
    tag: 'Destaque',
    desc: 'O Adidas 4D combina tecnologia avançada de amortecimento com um design moderno e esportivo. A entressola em estrutura 4D proporciona excelente absorção de impacto e conforto para o uso diário, caminhadas ou atividades físicas. Um modelo estiloso e tecnológico que se destaca em qualquer ocasião.',
    images: [
      'Adidas 4d Azul/Adidas 4d Azul.jpg',
      'Adidas 4d Azul/01c0b631354c16398590d5bb3572bee90e179e32f2874a7ee4185d31823614b9118129.jpg',
      'Adidas 4d Azul/9eb1e3c546ce6cc3365df0d673c4d0a9f2c63615e52e73c101891e6fcd507196118129.jpg',
      'Adidas 4d Azul/a723053ec60b61936f45e01e39581c2fb206f76674e2868eda716d8a904fd249118129.jpg',
      'Adidas 4d Azul/d9e89b9ba97daed3ad0c8bcbf7880cd227b9c0682d880fa34ccb10ef4858b0a6118129.jpg',
    ],
  },
];


/* ══════════════════════════════════════
   RENDERIZAR CARDS
   ══════════════════════════════════════ */
function renderCards() {
  const catalog = document.getElementById('catalog');

  products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openModal(i);

    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
      </div>
      <div class="card-body">
        <p class="card-brand">${p.brand}</p>
        <p class="card-name">${p.name}</p>
        <div class="card-footer">
          <span class="price">${p.price}</span>
          <button class="btn-ver">Ver detalhes</button>
        </div>
      </div>
    `;

    catalog.appendChild(card);
  });
}


/* ══════════════════════════════════════
   MODAL
   ══════════════════════════════════════ */
let selectedSize    = null;
let currentProduct  = null;

function openModal(i) {
  const p = products[i];
  currentProduct = p;
  selectedSize   = null;

  // galeria de fotos
  const track = document.getElementById('galleryTrack');
  const dots  = document.getElementById('galleryDots');

  track.innerHTML = p.images
    .map(src => `<img class="gallery-img" src="${src}" alt="${p.name}" loading="lazy" />`)
    .join('');

  dots.innerHTML = p.images
    .map((_, j) => `<div class="dot ${j === 0 ? 'active' : ''}"></div>`)
    .join('');

  track.scrollLeft = 0;
  track.onscroll = () => {
    const idx = Math.round(track.scrollLeft / (track.scrollWidth / p.images.length));
    document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === idx));
  };

  // informações
  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalName').textContent  = p.name;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalDesc').textContent  = p.desc;

  // numeração
  const sg = document.getElementById('sizesGrid');
  sg.innerHTML = SIZES
    .map(s => `<button class="size-btn" data-size="${s}">${s}</button>`)
    .join('');

  sg.querySelectorAll('.size-btn').forEach(btn => {
    btn.onclick = () => {
      selectedSize = +btn.dataset.size;
      sg.querySelectorAll('.size-btn').forEach(b => b.classList.toggle('selected', b === btn));
      updateWppBtn();
    };
  });

  updateWppBtn();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateWppBtn() {
  if (!currentProduct) return;

  const sizeText = selectedSize ? `, número ${selectedSize}` : '';
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no ${currentProduct.brand} ${currentProduct.name}${sizeText}. Pode me dar mais informações?`
  );
  document.getElementById('modalWppBtn').href = `https://wa.me/${WHATSAPP}?text=${msg}`;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}


/* ══════════════════════════════════════
   EVENTOS
   ══════════════════════════════════════ */
document.getElementById('modalClose').onclick = closeModal;

document.getElementById('modalOverlay').onclick = (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('footerYear').textContent = new Date().getFullYear();

/* ══════════════════════════════════════
   INIT
   ══════════════════════════════════════ */
renderCards();