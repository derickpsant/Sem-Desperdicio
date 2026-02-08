// Cada objeto dentro deste array [] representa um "slide" do seu carrossel
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
    }
    // Você pode adicionar Quinta, Sexta, ou até "Próxima Semana" aqui
];

let indiceAtual = 0;

// Função que limpa o conteúdo atual e escreve o novo conteúdo baseada no índice do array:
function mostrarSlide(index) {
    const slide = dadosSemana[index];
    
    // Atualiza o título (ex: Segunda-feira)
    document.getElementById('current-day').innerText = slide.titulo;
    
    // Atualiza a lista de itens
    const lista = document.getElementById('menu-list');
    lista.innerHTML = ""; // Limpa a lista atual
    
    slide.items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        lista.appendChild(li);
    });

    // Atualiza as bolinhas (dots) indicadoras
    atualizarIndicadores(index);
}

//Mudar a direção
function moveSlide(direcao) {
    indiceAtual += direcao;

    // Faz o carrossel voltar ao início se chegar no fim (infinito)
    if (indiceAtual >= dadosSemana.length) {
        indiceAtual = 0;
    }
    if (indiceAtual < 0) {
        indiceAtual = dadosSemana.length - 1;
    }

    mostrarSlide(indiceAtual);
}