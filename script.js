// 1. Banco de dados com todos os dias da semana
const dadosSemana = [
    { 
        titulo: "Segunda-feira", 
        itens: ["Arroz", "Feijão", "Frango Grelhado", "Salada Verde", "Batata Assada"] 
    },
    { 
        titulo: "Terça-feira", 
        itens: ["Arroz Integral", "Lentilha", "Peixe ao Forno", "Legumes", "Suco Natural"] 
    },
    { 
        titulo: "Quarta-feira", 
        itens: ["Macarrão", "Molho à Bolonhesa", "Salada de Grão de Bico", "Fruta"] 
    },
    { 
        titulo: "Quinta-feira", 
        itens: ["Arroz com Açafrão", "Feijão Preto", "Omelete", "Legumes Salteados"] 
    },
    { 
        titulo: "Sexta-feira", 
        itens: ["Feijoada", "Couve Refogada", "Farofa", "Laranja", "Arroz Branco"] 
    }
];

let indiceAtual = 0;

// 2. Função que atualiza o conteúdo do card e os "dots"
function mostrarSlide(index) {
    const slide = dadosSemana[index];
    
    // Atualiza o título do dia
    document.getElementById('current-day').innerText = slide.titulo;
    
    // Atualiza a lista de itens
    const lista = document.getElementById('menu-list');
    lista.innerHTML = ""; // Limpa a lista atual para inserir a nova
    
    // Importante: use "itens" (conforme definido no array lá em cima)
    slide.itens.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        lista.appendChild(li);
    });

    // Chama a função para atualizar as bolinhas
    atualizarIndicadores(index);
}

// 3. Função para controlar a classe "active" nos dots
function atualizarIndicadores(index) {
    const bolinhas = document.querySelectorAll('.dot');
    
    bolinhas.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 4. Função para mudar a direção (chamada pelos botões no HTML)
function moveSlide(direcao) {
    indiceAtual += direcao;

    // Lógica para carrossel infinito
    if (indiceAtual >= dadosSemana.length) {
        indiceAtual = 0;
    }
    if (indiceAtual < 0) {
        indiceAtual = dadosSemana.length - 1;
    }

    mostrarSlide(indiceAtual);
}

// Inicializa o primeiro dia ao carregar a página
window.onload = () => mostrarSlide(0);
