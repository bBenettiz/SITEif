let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let resposta = document.querySelector('.Bresp')
resposta.disabled = true;
resposta.textContent = null
resposta.style.background = "transparent";
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta  = document.querySelector('#pergunta')


// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Existem quantas espécies de Mico-Leão?",
    alternativaA : "A. 2",
    alternativaB : "B. 3",
    alternativaC : "C. 5",
    alternativaD : "D. 4",
    correta      : "D. 4",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Além da Mata Atlântica, em quais biomas o tamanduá bandeira pode ser encontrado?",
    alternativaA : "A. Cerrado",
    alternativaB : "B. Pantanal",
    alternativaC : "C. Pampa",
    alternativaD : "D. Todas as alternativas",
    correta      : "D. Todas as alternativas",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual o período de gestação de um Tigre-de-bengala?",
    alternativaA : "A. 104 a 106 dias",
    alternativaB : "B. 197 a 200 dias",
    alternativaC : "C. 400 a 403 dias",
    alternativaD : "D. 300 a 302 dias",
    correta      : "A. 104 a 106 dias",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual o motivo do risco de extinção do Diabo da Tasmânia?",
    alternativaA : "A. Predadores nativos que eliminam a maioria da espécie",
    alternativaB : "B. Diminuição do seu habitat motivada pelo desmatamento",
    alternativaC : "C. Presas em escassez",
    alternativaD : "D. Caça desenfreada por conta do valor de sua pelagem",
    correta      : "B. Diminuição do seu habitat motivada pelo desmatamento",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quantos ovos as fêmeas de Kakapo botam?",
    alternativaA : "A. 1 a 7 ovos",
    alternativaB : "B. 2 a 9 ovos",
    alternativaC : "C. 1 a 4 ovos",
    alternativaD : "D. 3 a 6 ovos",
    correta      : "C. 1 a 4 ovos",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Em que alternativa estão citadas duas subespécies de elefantes asiáticos?",
    alternativaA : "A. Elefante Máximo e Elefante sumartrense",
    alternativaB : "B. Elephas maximus indicus e Elephas maximus maximus",
    alternativaC : "C. Elephas ificos, Elephas nellis e Elephas atiuicas",
    alternativaD : "D. Elephas epilicos, Elephas minimus e Elephas pericios",
    correta      : "B. Elephas maximus indicus e Elephas maximus maximus",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Sobre o pato mergulhão, quais das afirmativas a baixo é correta?",
    alternativaA : "A. É uma ave nativa do Brasil, e uma das 10 aves aquáticas mais raras do mundo",
    alternativaB : "B. É uma ave comumente encontrada em áreas urbanas, próximo de corregos poluídos",
    alternativaC : "C. Nativa da Inglaterra, é uma ave criada como animal de estimação",
    alternativaD : "D. Na verdade ele é um peixe voador, que muitas vezes é confundido com um pato",
    correta      : "A. É uma ave nativa do Brasil, e uma das 10 aves aquáticas mais raras do mundo",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Após ler as informações sobre o animal, o que é o Hirola?",
    alternativaA : "A. Um tipo de urso",
    alternativaB : "B. Um felino de pequeno porte",
    alternativaC : "C. Um antílope",
    alternativaD : "D. Um mamífero aquático",
    correta      : "C. Um antílope",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Quais atitudes auxiliam na preservação destas espécies em extinção?",
    alternativaA : "A. Descartar lixo nos rios, evitar o uso de produtos sustentáveis e desmatar espaço para agropecuária",
    alternativaB : "B. Comer carne, evitar o uso de energia renovável e usar mais plástico",
    alternativaC : "C. Plantar árvores, regularizar leis contra o desmatamento desenfreado e usar produtos sustentáveis",
    alternativaD : "D. Incentivar a caça predatória para que possamos fazer o equilíbrio na natureza",
    correta      : "C. Plantar árvores, regularizar leis contra o desmatamento desenfreado e usar produtos sustentáveis",
}
const q10  = {
    numQuestao   : 10,
    pergunta     : "Quais hábitos a baixo mais impactam na extinção animal?",
    alternativaA : "A. Poluir o meio ambiente, desmatar a natureza e praticar caça desenfreada",
    alternativaB : "B. Investir em ONG's que apoiam a causa animal e adotar o estilo de vida vegano",
    alternativaC : "C. Evitar o estilo de vida consumista e apoiar marcas cruelty free",
    alternativaD : "D. Agir conscientemente e desincentivar a caça e o desmatamento",
    correta      : "A. Poluir o meio ambiente, desmatar a natureza e praticar caça desenfreada",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""
    
    

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'
    resposta.disabled = false;
    resposta.textContent = "VER RESPOSTAS"
        resposta.style.background = "rgb(44, 44, 44)";

}

var botao = document.querySelector(".Bresp");
botao.onclick = function VerResposta(){
    window.location.href = 'indexRESPOSTAS.html'
}

function Tentar(){
    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}
