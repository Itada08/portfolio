/* ==========================================================
   DADOS DO SITE — edite aqui para atualizar o portfólio.
   Deixe "" nos links que ainda não existem (o link some sozinho).
   ========================================================== */

const atividades = [
  { titulo: "Criação de Banco de Dados", tipo: "Curso", texto: "Criação de tabelas com SQL no MySQL Workbench e prova prática com banco de escola (cursos, alunos e inscrições)." },
  { titulo: "Git e GitHub", tipo: "Curso", texto: "Repositórios, commits e publicação de um projeto no GitHub." },
  { titulo: "Programação para Aplicações Cliente 2", tipo: "Disciplina", texto: "React: componentes, useState, useEffect e consumo de API com fetch." },
  { titulo: "Programação para Aplicações Servidor 3", tipo: "Disciplina", texto: "Back-end com Node.js e Express." },
  { titulo: "Programação para Dispositivos Móveis", tipo: "Disciplina", texto: "Introdução a PWAs (aplicativos web instaláveis) e criação do Sorteador PWA." },
  { titulo: "Redes de Computadores 2", tipo: "Disciplina", texto: "Modelo OSI, protocolos, cliente/servidor, VLANs e roteamento." },
  { titulo: "Segurança de Sistemas", tipo: "Disciplina", texto: "Reconhecimento (footprinting e fingerprinting) e engenharia social." },
  { titulo: "Estágio na Sanesul", tipo: "Estágio obrigatório", texto: "Estágio em Nova Andradina, com relatório parcial entregue ao curso." },
  { titulo: "TCC sobre tecnologia na Fisioterapia", tipo: "Trabalho de conclusão", texto: "Pesquisa com profissionais sobre as necessidades de tecnologia na área." }
];

// area: usada nos filtros (Web, Mobile, Redes)
const projetos = [
  {
    nome: "Banco de Questões", area: "Mobile",
    descricao: "Aplicativo para organizar provas e questões em um só lugar.",
    papel: "Desenvolvi o app completo.",
    tecnologias: ["React Native", "Expo"],
    github: "", site: ""
  },
  {
    nome: "ProjetoTop", area: "Web",
    descricao: "Encurtador de links com estatísticas de acesso.",
    papel: "Desenvolvi o projeto full-stack (telas e servidor).",
    tecnologias: ["JavaScript", "Node.js", "Banco de dados"],
    github: "", site: ""
  },
  {
    nome: "Escala BR", area: "Web",
    descricao: "Jogo para montar um time do Brasileirão com jogadores de toda a história. Funciona como app instalável (PWA).",
    papel: "Criei o jogo e a interface.",
    tecnologias: ["HTML", "CSS", "JavaScript", "PWA"],
    github: "", site: ""
  },
  {
    nome: "Sorteador PWA", area: "Mobile",
    descricao: "Aplicativo web instalável para fazer sorteios.",
    papel: "Desenvolvi o aplicativo para a disciplina de Dispositivos Móveis.",
    tecnologias: ["HTML", "CSS", "JavaScript", "PWA"],
    github: "", site: ""
  },
  {
    nome: "Card NFT", area: "Web",
    descricao: "Desafio do Frontend Mentor: card de NFT responsivo, feito em componentes.",
    papel: "Fiz o desenvolvimento e a publicação no GitHub Pages.",
    tecnologias: ["React", "CSS"],
    github: "", site: ""
  },
  {
    nome: "Rede de Lojas de Varejo (Varejo Tech MS)", area: "Redes",
    descricao: "Projeto em grupo de uma rede de lojas, simulada no Cisco Packet Tracer.",
    papel: "Fui o Membro 2, responsável pela infraestrutura da rede.",
    tecnologias: ["Cisco Packet Tracer", "VLANs", "Roteamento"],
    github: "", site: ""
  }
];

// Preencha com feiras, mostras, apresentações e prêmios reais.
const eventos = [
  // { titulo: "Nome do evento", data: "Mês/Ano", texto: "O que você apresentou ou ganhou." }
];

// imagem: caminho de um print, ex.: "img/escala-br.png". Sem imagem, aparece a inicial.
const sites = [
  { nome: "Escala BR", descricao: "Jogo de montar time do Brasileirão com jogadores de toda a história.", imagem: "", site: "", github: "" },
  { nome: "Card NFT", descricao: "Card responsivo feito a partir de um desafio do Frontend Mentor.", imagem: "", site: "", github: "" },
  { nome: "Sorteador PWA", descricao: "Sorteador que pode ser instalado no celular.", imagem: "", site: "", github: "" }
];

const habilidades = [
  "HTML", "CSS", "JavaScript", "React", "React Native", "Node.js", "Express",
  "MySQL", "Git", "GitHub", "PWA", "Cisco Packet Tracer", "Redes de computadores"
];

/* ==========================================================
   CÓDIGO — não precisa mexer daqui para baixo.
   ========================================================== */

// Evita que textos com símbolos quebrem a página
function esc(texto) {
  const d = document.createElement("div");
  d.textContent = texto;
  return d.innerHTML;
}

function links(item) {
  const partes = [];
  if (item.site) partes.push(`<a href="${esc(item.site)}" target="_blank" rel="noopener">Abrir site</a>`);
  if (item.github) partes.push(`<a href="${esc(item.github)}" target="_blank" rel="noopener">Código no GitHub</a>`);
  return partes.join(" · ");
}

function mostrarAtividades() {
  document.getElementById("listaAtividades").innerHTML = atividades.map(a => `
    <li>
      <h3>${esc(a.titulo)}</h3>
      <span class="tipo">${esc(a.tipo)}</span>
      <p>${esc(a.texto)}</p>
    </li>`).join("");
}

function mostrarProjetos(filtro = "Todos") {
  const lista = projetos.filter(p => filtro === "Todos" || p.area === filtro);
  document.getElementById("listaProjetos").innerHTML = lista.map(p => `
    <article class="cartao">
      <h3>${esc(p.nome)}</h3>
      <p>${esc(p.descricao)}</p>
      <p class="papel-txt"><strong>Minha participação:</strong> ${esc(p.papel)}</p>
      <ul class="tags">${p.tecnologias.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="links">${links(p)}</div>
    </article>`).join("");
}

function montarFiltros() {
  const areas = ["Todos", ...new Set(projetos.map(p => p.area))];
  const caixa = document.getElementById("filtros");
  caixa.innerHTML = areas.map((a, i) =>
    `<button class="filtro" type="button" aria-pressed="${i === 0}">${esc(a)}</button>`).join("");
  caixa.addEventListener("click", e => {
    const botao = e.target.closest(".filtro");
    if (!botao) return;
    caixa.querySelectorAll(".filtro").forEach(b => b.setAttribute("aria-pressed", "false"));
    botao.setAttribute("aria-pressed", "true");
    mostrarProjetos(botao.textContent);
  });
}

function mostrarEventos() {
  const ul = document.getElementById("listaEventos");
  if (eventos.length === 0) {
    ul.innerHTML = `<li><h3>Em breve</h3><p>Ainda não participei de feiras ou eventos, mas já estou me preparando para os próximos.</p></li>`;
    return;
  }
  ul.innerHTML = eventos.map(ev => `
    <li>
      <h3>${esc(ev.titulo)}</h3>
      <span class="data">${esc(ev.data)}</span>
      <p>${esc(ev.texto)}</p>
    </li>`).join("");
}

function mostrarSites() {
  document.getElementById("listaSites").innerHTML = sites.map(s => `
    <article class="site">
      ${s.imagem
        ? `<img class="miniatura" src="${esc(s.imagem)}" alt="Imagem do site ${esc(s.nome)}" loading="lazy">`
        : `<div class="miniatura" aria-hidden="true">${esc(s.nome.charAt(0))}</div>`}
      <div class="corpo">
        <h3>${esc(s.nome)}</h3>
        <p>${esc(s.descricao)}</p>
        <div class="links">${links(s) || "<span>Link em breve</span>"}</div>
      </div>
    </article>`).join("");
}

function mostrarHabilidades() {
  document.getElementById("listaHabilidades").innerHTML =
    habilidades.map(h => `<li>${esc(h)}</li>`).join("");
}

// Menu do celular
function configurarMenu() {
  const botao = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto);
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  menu.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      menu.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
    }
  });
}

// Destaca no menu a seção que está na tela
function destacarMenu() {
  const links = document.querySelectorAll(".menu a");
  const secoes = [...links].map(a => document.querySelector(a.getAttribute("href")));
  const obs = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  secoes.forEach(s => s && obs.observe(s));
}

mostrarAtividades();
montarFiltros();
mostrarProjetos();
mostrarEventos();
mostrarSites();
mostrarHabilidades();
configurarMenu();
destacarMenu();
document.getElementById("ano").textContent = new Date().getFullYear();
