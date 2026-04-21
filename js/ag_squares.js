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

      // Create a deck and shuffle it
      var myDeck = new pokerDeck();
      myDeck.shuffle();

      // Create a new card by shifting a card from the deck
      var myStarterCard = myDeck.cards.shift();
      console.log(myStarterCard);
      newCard.src = myStarterCard.cardImage();

      var rowNum;
      var colNum;

      // Set the location of the image onto the grid
      for (var i = 0; i < cardImages.length; i++) {
         cardImages[i].onclick = function(e) {
            e.target.src = myStarterCard.cardImage();
            
            rowNum = e.target.id.charAt(1);
            colNum = e.target.id.charAt(2);

            squareGame.cardGrid[rowNum].insertCard(myStarterCard, colNum);

            e.target.onclick = null;

            if (myDeck.cards.length > 27) {
               myStarterCard = myDeck.cards.shift();
               console.log(myStarterCard);
               newCard.src = myStarterCard.cardImage();
            } else {
               newCard.src = "./img/ag_cardback3.png";
               

               // Calculate the total of each row
               for (var j = 0; j < 5; j++) {

                  var rowTotal = squareGame.calcRowPoints(j);
                  squareGame.gameTotal += rowTotal;

                  rowSumCells[j].textContent = rowTotal;

               }

               // Calculate the total of each file
               for (var j = 0; j < 5; j++) {

                  var colTotal = squareGame.calcColumnPoints(j);
                  squareGame.gameTotal += colTotal;

                  colSumCells[j].textContent = colTotal;

               }

               console.log(squareGame.gameTotal);
               gameScore.value = squareGame.gameTotal;
               gameResult.textContent = squareGame.gameResult();

            }
         }
      }
   });
}
                               

