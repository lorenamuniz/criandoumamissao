const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você decide criar sua primeira música. Qual será o gênero principal?",
        alternativas: [
            {
                texto: "Pop moderno com batidas eletrônicas.",
                afirmacao: "Escolheu um estilo popular e atual, apostando no que está em alta."
            },
            {
                texto: "MPB com letras profundas e instrumentação acústica.",
                afirmacao: "Decidiu seguir um caminho mais artístico e introspectivo."
            },
            {
                texto: "Trap com letras polêmicas e batidas marcantes.",
                afirmacao: "Quer causar impacto e atingir um público jovem e ousado."
            }
        ]
    },
    {
        enunciado: "Com o estilo escolhido, é hora de pensar na letra. Qual será o tema da música?",
        alternativas: [
            {
                texto: "Amor jovem e momentos felizes.",
                afirmacao: "Apostou em uma letra leve e envolvente, fácil de cantar junto."
            },
            {
                texto: "Superação e autoestima.",
                afirmacao: "Criou uma mensagem inspiradora que pode tocar muitas pessoas."
            },
            {
                texto: "Críticas sociais e reflexões sobre o mundo.",
                afirmacao: "Quer provocar pensamento e dar voz às questões importantes."
            }
        ]
    },
    {
        enunciado: "Você precisa de ajuda para a produção musical. Quem será seu parceiro?",
        alternativas: [
            {
                texto: "Um produtor famoso que trabalha com grandes artistas.",
                afirmacao: "Fez uma parceria com alguém experiente, garantindo qualidade na produção."
            },
            {
                texto: "Um amigo da escola talentoso, mas ainda desconhecido.",
                afirmacao: "Decidiu apostar no talento local e valorizar quem está começando junto com você."
            },
            {
                texto: "Você mesmo! Vai aprender a produzir sua música com tutoriais online.",
                afirmacao: "Assumiu o controle criativo e decidiu se desafiar na produção caseira."
            }
        ]
    },
    {
        enunciado: "Hora de gravar o clipe da música. Qual a abordagem?",
        alternativas: [
            {
                texto: "Um clipe com efeitos visuais e coreografia.",
                afirmacao: "Investiu em um visual chamativo para atrair atenção nas redes."
            },
            {
                texto: "Um clipe simples, contando uma história emocional.",
                afirmacao: "Preferiu focar no sentimento e na narrativa da canção."
            },
            {
                texto: "Gravado com celular nas ruas da cidade, mostrando a realidade.",
                afirmacao: "Optou por algo autêntico e direto, conectando com o público das periferias."
            }
        ]
    },
    {
        enunciado: "A música está pronta! Como será o lançamento?",
        alternativas: [
            {
                texto: "Grande divulgação nas redes com influenciadores e teaser.",
                afirmacao: "Criou uma campanha viral para gerar expectativa no público."
            },
            {
                texto: "Lançamento discreto com foco em plataformas de streaming.",
                afirmacao: "Confiou na força da música e deixou que o público descobrisse organicamente."
            },
            {
                texto: "Fez uma live com amigos, cantou a música ao vivo e pediu para o pessoal compartilhar.",
                afirmacao: "Usou o poder da comunidade e da conexão direta com o público."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado Final da Sua Música";
    textoResultado.textContent = historiaFinal + avaliaMusica(historiaFinal);
    caixaAlternativas.textContent = "";
}

function avaliaMusica(historia) {
    const sucesso = [
        "popular", "viral", "coreografia", "influenciadores", "produtor famoso", "causar impacto", "grande divulgação"
    ];
    const fracasso = [
        "discreto", "orgânico", "simples", "desconhecido", "live com amigos", "caseira"
    ];

    let pontos = 0;
    for (const palavra of sucesso) {
        if (historia.includes(palavra)) pontos++;
    }
    for (const palavra of fracasso) {
        if (historia.includes(palavra)) pontos--;
    }

    if (pontos >= 3) {
        return "🎉 A música foi um estouro! Virou trend nas redes sociais, alcançou milhões de visualizações e foi elogiada pela crítica.";
    } else if (pontos <= -2) {
        return "😢 A música não teve muita repercussão. Apesar do esforço, ela passou despercebida pelo público.";
    } else {
        return "🎵 A música teve uma recepção mediana. Algumas pessoas curtiram, outras não se conectaram tanto.";
    }
}

mostraPergunta();
