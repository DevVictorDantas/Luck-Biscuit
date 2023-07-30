// Variáveis
screen1 = document.querySelector(".screen1")
screen2 = document.querySelector(".screen2")
const phrases = [
  "Agente 56, o restaurante foi comprometido, abortar missão. ABORTAR MISSÃO!",
  "Algo maravilhoso está prestes a feliz",
  "Alguns biscoitos da sorte não contêm nenhuma sorte",
  "Abençoadas são as crianças pois elas vão herdar o débito nacional",
  "Um bom jeito de se manter saudável é comendo mais comida chinesa",
  "Volte depois... estou dormindo (sim, biscoitos da sorte também precisam de seu sono)",
  "Não seja um otário",
  "O quão mais fundo seria o oceano sem as esponjas?",
  "Gostou da refeição? Compre uma pra levar",
  "Sua sorte diz que você precisa fazer uma doação. Dê ela para o chef",
  "Um homem tolo escuta seu coração, um homem sábio escuta os biscoitos",
  "Você ser parecido com um muppet faz com que o mundo não te leve a sério",
  "Quando trabalhando na solução de um problema, sempre ajuda saber a resposta",
  "Um verdadeiro patriota é o cara que leva uma multa e comemora que o governo funciona",
  "Pegue outro biscoito da sorte",
  "Pare de enrolar - comece amanhã",
  "Desistir é para os fracos, o ideal é nem tentar!",
  "O garçom tossiu na sua comida",
  "Pergunte a sua mãe",
  "Passe a conta para a pessoa na sua esquerda",
  "Nós sabemos o futuro, mas você ganhou um biscoito de graça",
  "Você vai ler isso e dizer 'Jesus! Eu poderia ter escrito uma sorte melhor que essa!",
  "Uma mudança de carreira lucrativa te espera. Já considerou gangsta rap?"
]
// Funções
function generateRandomNumber() {
  return Math.floor(Math.random() * phrases.length)
}

function showRandomNumber() {
  screen2.querySelector("p").innerText = phrases[generateRandomNumber()]
}

function handlePlayClick() {
  toggleScreen()
  showRandomNumber()
}

function returnHome() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
