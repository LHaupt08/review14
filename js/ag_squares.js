"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Review Assignment

   Author: Lukas Haupt
   Date:   4/17/26
   
   Filename: ag_squares.js

*/

window.addEventListener("load", playPokerSquares);

function playPokerSquares() {
   var newCard = document.getElementById("newCard");
   var startButton = document.getElementById("startButton");
   var rowSumCells = document.querySelectorAll("table#grid th.rowsum");   
   var colSumCells = document.querySelectorAll("table#grid th.colsum"); 
   var cardImages = document.querySelectorAll("table#grid tr td img");
   var gameScore = document.getElementById("gameScore");
   var gameResult = document.getElementById("gameResult");
   
   startButton.addEventListener("click", function() {
      console.log("click");
      squareGame.gameTotal = 0;
      gameScore.value = "";
      gameResult.value = "";

      for (var i=0; i < rowSumCells.length; i++) {
         rowSumCells[i].textContent="";
      }

      for (var i=0; i < colSumCells.length; i++) {
         rowSumCells[i].textContent="";
      }

      for (var i=0; i < cardImages.length; i++) {
         cardImages[i].src = "./img/ag_trans.gif";
      }

      var myDeck = new pokerDeck();
      myDeck.shuffle();

      var myStarterCard = myDeck.cards.shift();
      console.log(myStarterCard);
      newCard.src = myStarterCard.cardImage();

      var rowNum;
      var colNum;
      for (var i = 0; i < cardImages.length; i++) {
         cardImages[i].onclick = function(e) {
            e.target.src = myStarterCard.cardImage()
            
            rowNum = e.target.id.charAt(1);
            
         }
      }
   });
}
                               

