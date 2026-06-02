let score = 0

let clicker = document.getElementById("clicker")
let scoreDisplay = document.getElementById("scoreDisplay")

function updateScore (amount) {
  score += amount
  scoreDisplay.innerText = score.toFixed(0) + ' scale'
}

clicker.addEventListener("click", function () {
let clickAmt = 1 + (Warmth ** 1.05)
 updateScore(clickAmt)

 soundEffectOne.play()
})

import{  Howl  } from 'howler'


import soundEffectOneSrc from './assets/Growl.mp3'

import backgroundMusicSrc from './assets/Magic.mp3'

const soundEffectOne = new Howl({
  src: [soundEffectOneSrc],
  volume: 0.5
})

const backgroundMusic = new Howl({
src:[backgroundMusicSrc],
autoplay: true,
loop: true,
volume: 0.1
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let Warmth = 0

upgradeOne.addEventListener("click", function() {
  if(score >= 100){
  updateScore(-100)
  Warmth++
  upgradeOneCount.innerText = Warmth + " Warmth"

  upgradeOneCount.innertext = Warmth + " Warmth"
  } else{
    alert('YOUR OUT')
  }
})

let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeTwoCount")
let Affection = 0

upgradeTwo.addEventListener("click", function(){
  if(score >= 1000){
    updateScore(-1000)
    Affection++
    upgradeOneCount.innertext = Affection + " Affection"

    upgradeOneCount.innertext = Affection + " Affection"
  }else{
    alert('NOT ENOUGH')
  }
})

function gameloop() {
  let clickAmt = (Warmth ** 1.05) + (Affection ** 20.05)

  updateScore(clickAtm)
}

setInterval(gameLoop, 1000)