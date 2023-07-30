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
  "Não seja um c#zão",
  "O quão mais fundo seria o oceano sem as esponjas?",
  "Gostou da refeição? Compre uma pra levar",
  "Sua sorte diz que você precisa fazer uma doação. Dê ela para o chef"
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
