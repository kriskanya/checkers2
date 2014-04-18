(function(){
 'use strict';

 //  var player = 0;

     $(document).ready(init);

    var initialX;
    var initialY;

     function init(){
       addSpaces();
       setupBoard();
       $('.validSpace').click(selectPiece);

     }

//when a square is clicked, make the image disappear; when another square is clicked, make the image appear

 function selectPiece(){
 //  $(this).addClass('selected');

    initialX = ($(this).removeClass('.player1'));
    initialY = ($(this).removeClass('.player1'));
    initialX;
    initialY;

   if ($('.selected').length > 0){    //this enables you to select only one at a time

     $('.selected').removeClass('selected');

   }

     $(this).addClass('selected');
     $(this).addClass('player1');

    $('td[data-x="5"][data-y="4"]').removeClass('player1');

      movePiece();
 }

  function movePiece(){

    // console.log($(this).data('x'));
    // console.log($(this).data('y'));

    // $('td[data-x=""][data-y="").removeClass('player1');



 }


 function setupBoard(){
   var $spaces =  $('.validSpace');
   for(var i = 0; i < 12; i++){
     $($spaces[i]).addClass('player2');    //$spaces is an array; you are incrementing i to go through the entire array and you're adding class 'player2'
     }

   for( i = 20; i < 32; i++){
     $($spaces[i]).addClass('player1');
   }
 }

 function addSpaces() {
   $('tr:nth-child(2n) td:nth-child(2n+1)').addClass('validSpace');
   $('tr:nth-child(2n+1) td:nth-child(2n)').addClass('validSpace');
 }

 })();
