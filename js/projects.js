const projectsData = [
    {
        id: "23",
        display: "block",
        title: "23 - Naya Outlet",
        description: "Feito um site para uma cliente para e-commerce de venda de roupas",
        technologies: ["JAVASCRIPT", "HTML", "CSS", "WORDPRESS"],
        githubUrl: "",
        alt: "Imagem Demo do site Naya Outlet",
        deployUrl: "https://nayaoutlet.com.br/",
        image: "./images/23-nayaoutlet-project-img.png",
    },
    {
        id: "22",
        display: "block",
        title: "22 - Followers superior ou inferior GAME",
        description: "Saiba quem tem mais seguidor, A ou B e some pontos até zerar o game!",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-14",
        alt: "Imagem Demo do projeto Followers superior ou inferior GAME",
        deployUrl: "https://replit.com/@thalissongsilva/14-Superior-ou-Inferior",
        image: "./images/22-superior-ou-inferior-project-img.png",
    },
    {
        id: "21",
        display: "block",
        title: "21 - Adivinhe o numero GAME",
        description: "Selecionando a dificuldade do jogo, você recebe determinado número de tentativas para acertar o número, o game vai te dar dicas se o número está próximo ou não do número exato.",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-12",
        alt: "Imagem Demo do projeto Adivinhe o numero GAME",
        deployUrl: "https://replit.com/@thalissongsilva/12-Adivinhe-o-numero-game",
        image: "./images/21-adivinhe-o-numero-game-project-img.png",
    },
    {
        id: "20",
        display: "block",
        title: "20 - Blackjack GAME",
        description: "Conhecido no brasil pelo jogo de carta Vinte e Um, Blackjack é um game onde você recebe duas cartas somando uma pontuação, e você tem opção de pegar mais cartas e tentar somar pontuação mais próxima do 21 ou 21 exato, se passar ou ficar menos próximo do 21 que seu adversário você perde.",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-11",
        alt: "Imagem Demo do projeto Blackjack GAME",
        deployUrl: "https://replit.com/@thalissongsilva/11-Jogo-de-carta-Vinte-e-Um",
        image: "./images/20-jogo-de-carta-vinte-e-um-project-img.png",
    },
    {
        id: "19",
        display: "block",
        title: "19 - Calculadora",
        description: "Lhe dando a opção de digitar o primeiro número, um operador e o segundo número, essa calculadora lhe mostra o resultado e te dá opção de seguir um novo cálculo com o número do resultado ou começar um novo cálculo do 0.",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-10",
        alt: "Imagem Demo do projeto Calculadora",
        deployUrl: "https://replit.com/@thalissongsilva/10-Calculadora",
        image: "./images/19-calculadora-project-img.png",
    },
    {
        id: "18",
        display: "block",
        title: "18 - Leilão Secreto",
        description: "Um programa feito para leilões, você pode ir adicionando os licitantes, nome do licitante e valor de lance, ao final quando não tiver mais licitantes irá aparecer o nome do licitante e o valor de seu lance.",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-09",
        alt: "Imagem Demo do projeto Leilão Secreto",
        deployUrl: "https://replit.com/@thalissongsilva/09-Leilao-Secreto",
        image: "./images/18-leilao-secreto-project-img.png",
    },
    {
        id: "17",
        display: "block",
        title: "17 - Codificador e Decodificador Caeser",
        description: "Um programa feito para codificar e decodificar qualquer palavra baseado nas regras de Caeser.",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-08",
        alt: "Imagem Demo do projeto Codificador e Decodificador Caeser",
        deployUrl: "https://replit.com/@thalissongsilva/08-Caeser-codificador-e-decodificador",
        image: "./images/17-caeser-codificador-e-decodificador-project-img.png",
    },
    {
        id: "16",
        display: "block",
        title: "16 - Jogo da forca",
        description: "O clássico jogo da forca feito em python, tendo 6 vidas, você pode digitar a letra e tentar descobrir qual palavra está sendo proposta no back-end, divirta-se!",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-07",
        alt: "Imagem Demo do projeto Jogo da forca",
        deployUrl: "https://replit.com/@thalissongsilva/07-Jogo-da-Forca",
        image: "./images/16-jogo-da-forca-project-img.png",
    },
    {
        id: "15",
        display: "block",
        title: "15 - Gerador de senha",
        description: "Está interessado em um gerador de senha? Esse projeto lhe proporciona ainda escolher quantas letras, números e símbolos você deseja para sua nova senha, aproveite!",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-05",
        alt: "Imagem Demo do projeto Gerador de senha",
        deployUrl: "https://replit.com/@thalissongsilva/05-gerador-de-senhas",
        image: "./images/15-gerador-de-senha-project-img.png",
    },
    {
        id: "14",
        display: "block",
        title: "14 - Pedra Papel Tesoura GAME",
        description: "Divirta-se contra o computador jogando pedra papel tesoura, o computador sempre terá respostas aleatórias, sendo possível vitória, derrota ou empate. Aproveite!",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-04",
        alt: "Imagem Demo do projeto Pedra Papel Tesoura GAME",
        deployUrl: "https://replit.com/@thalissongsilva/04-pedra-papel-tesoura",
        image: "./images/14-pedra-papel-tesoura-project-img.png",
    },
    {
        id: "13",
        display: "block",
        title: "13 - Ilha do tesouro GAME",
        description: "Desenvolvido um jogo definido por trilhas a seguir, de acordo com suas respostas você tem um determinado fim, caso responda da forma correta você chegará ao tesouro!",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-03",
        alt: "Imagem Demo do projeto Ilha do tesouro GAME",
        deployUrl: "https://replit.com/@thalissongsilva/03-Ilha-do-tesouro",
        image: "./images/13-ilha-do-tesouro-project-img.png",
    },
    {
        id: "12",
        display: "block",
        title: "12 - Calculadora de Gorjeta",
        description: "Desenvolvido para facilitar no cálculo total da conta entre o grupo que estiver saindo juntos, ao pagar a conta e decidir dar gorjeta, informe quantos % do total quer dar de gorjeta e informe em quantas pessoas vai dividir a conta, assim sendo feito o cálculo de acordo com as informações prestadas.",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-02",
        alt: "Imagem Demo do projeto Calculadora de Gorjeta",
        deployUrl: "https://replit.com/@thalissongsilva/02-calculadora-de-gorjeta",
        image: "./images/12-calculadora-de-gorjeta-project-img.png",
    },
    {
        id: "11",
        display: "block",
        title: "11 - Gerador de nome de banda",
        description: "Um projeto básico apenas para iniciar meus treinamentos em python, pegando valor dos inputos e devolvendo um resultado, onde pergunta o nome da cidade que o usuário cresceu e o nome de seu animal de estimação, juntando-os e dando sugestão de nome para banda.",
        technologies: ["PYTHON"],
        githubUrl: "https://github.com/thalissongoncalves/100DaysOfCode-Python/tree/main/projects/project-01",
        alt: "Imagem Demo do projeto Gerador de nome de banda",
        deployUrl: "https://replit.com/@thalissongsilva/01-Gerador-de-Nome-de-BandaPT-BR#main.py",
        image: "./images/11-Gerador-de-nome-de-banda-project-img.png",
    },
    {
        id: "10",
        display: "block",
        title: "10 - React Testing Library",
        description: "Esse projeto foi feito para testar minhas habilidades em: Seletores (queries) da React-Testing-Library em testes automatizados; Simular eventos com a React-Testing-Library em testes automatizados; Testar fluxos lógicos assíncronos com a React-Testing-Library; Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados;Testar inputs.",
        technologies: ["JAVASCRIPT", "JEST", "REACT"],
        githubUrl: "https://github.com/thalissongoncalves/10-React-Testing-Library",
        alt: "Imagem Demo do projeto React Testing Library",
        deployUrl: "#",
        image: "./images/10-react-testing-library-project-img.png",
    },
    {
        id: "09",
        display: "block",
        title: "09 - Solar System",
        description: "Uma página que mostra missões históricas feito em planetas vizinhos, detalhando com o nome da missão, ano, país e planeta. Mostrando também a ordem dos planetas no sistema solar, projeto feito em React E Js.",
        technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
        githubUrl: "https://github.com/thalissongoncalves/09-Solar-System",
        alt: "Imagem Demo do projeto Solar System",
        deployUrl: "https://09-solar-system.vercel.app/",
        image: "./images/09-system-solar-project-img.png",
    },
    {
        id: "08",
        display: "block",
        title: "08 - Shopping Cart",
        description: "Foi desenvolvido uma página utilizando API do Mercado Livre e framework VITE para criação de exibição de produtos que estão ativos no site da Mercado Livre, disponibilizando também um sistema de carrinhos onde fica salvo no localStorage para não perder o carrinho e alteração de preços conforme produtos selecionados e também um sistema de busca de CEP!",
        technologies: ["HTML", "CSS", "JAVASCRIPT", "NODE", "JEST", "VITE"],
        githubUrl: "https://github.com/thalissongoncalves/08-Shopping-Cart",
        alt: "Imagem Demo do projeto Shopping Cart",
        deployUrl: "https://08-shopping-cart.vercel.app/",
        image: "./images/08-shopping-cart-project-img.png",
    },
    {
        id: "07",
        display: "block",
        title: "07 - Zoo Functions",
        description: "No projeto, empreguei ES6 e Higher Order Functions para organizar dados do zoológico, enfatizando a abordagem orientada a testes. Obtive uma implementação eficaz, destacando minha habilidade prática e comprometimento com a qualidade do código.",
        technologies: ["JAVASCRIPT", "NODE", "JEST"],
        githubUrl: "https://github.com/thalissongoncalves/07-zoo-functions",
        alt: "Imagem Demo do projeto Zoo Functions",
        deployUrl: "#",
        image: "./images/07-zoo-functions-project-img.png",
    },
    {
        id: "06",
        display: "block",
        title: "06 - Js Unit Tests",
        description: "Foi implementado várias funções na resolução dos requisitos propostos e/ou testes unitários para garantir que as implementações das funções estão corretas, de acordo com o que está sendo solicitado em cada enunciado.",
        technologies: ["JAVASCRIPT", "NODE", "JEST"],
        githubUrl: "https://github.com/thalissongoncalves/06-js-unit-tests",
        alt: "Imagem Demo do projeto JS UNIT TESTS",
        deployUrl: "#",
        image: "./images/06-js-unit-tests-project-img.png",
    },
    {
        id: "05",
        display: "block",
        title: "05 - Trybewarts",
        description: "Uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling.",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        githubUrl: "https://github.com/thalissongoncalves/05-Trybewarts",
        alt: "Imagem Demo do projeto Trybewarts",
        deployUrl: "https://05-trybewarts.vercel.app/",
        image: "./images/05-trybewarts-project-img.png",
    },
    {
        id: "04",
        display: "block",
        title: "04 - Paleta de Cores",
        description: "Editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco 🎨 🧑‍🎨",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        githubUrl: "https://github.com/thalissongoncalves/04-Paleta-de-Cores",
        alt: "Imagem Demo do projeto Paleta de Cores",
        deployUrl: "https://04-paleta-de-cores.vercel.app/",
        image: "./images/04-paleta-de-cores-project-img.png",
    },
    {
        id: "02",
        display: "block",
        title: "02 - Playground Functions",
        description: "Resolvido alguns desafios em javascript para treinamento de uso de funções e lógica.",
        technologies: ["JAVASCRIPT"],
        githubUrl: "https://github.com/thalissongoncalves/02-playground-functions",
        alt: "Imagem Demo do projeto Playground functions",
        deployUrl: "#",
        image: "./images/02-playground-functions-project-img.png",
    },
    {
        id: "01",
        display: "block",
        title: "01 - Lessons Learned",
        description: "Site que contém uma série de informações sobre o que aprendi na Trybe ao longo das primeiras aulas de Fundamentos.",
        technologies: ["HTML", "CSS"],
        githubUrl: "https://github.com/thalissongoncalves/01-Project-Lessons-Learned",
        alt: "Imagem Demo do projeto Lessons Learned",
        deployUrl: "https://01-project-lessons-learned.vercel.app/",
        image: "./images/01-lessons-learned-project-img.png",
    }, 
]

export default projectsData;
