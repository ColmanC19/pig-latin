// // User logic
// var pigLatin = function(word) {
//   var splitAt = indexOfFirstVowel(word);
//   return word.slice(splitAt) + word.slice(0, splitAt) +"ay";
//   }
//
// var indexOfFirstVowel = function(word) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   var letters = word.split("");
//   for (var i = 0; i<letters.length; i++) {
//     for (var g = 0; g < vowels.length; g++ ) {
//       if(letters[i] === vowels[g]) {
//         return i;
//       }
//     //   } else if (vowels.includes(word[0])) {
//     //      return word + "way"
//     //   // }
//     // }
//   }
// };
// };
// var quWords = function(word) {
//   var squ = "squ";
//   var qu = "qu";
//   if (word[0] + word[1] + word[2] === squ) {
//     return word.slice(2) + word.slice([0]) + word.slice([1]) + "ay";
//   } else {
//     return word.slice(2) + word.slice([0]) + word.slice([1]) + "ay";
//   }
// };

//  Business logic
$(document).ready(function(){
  $("form#latin").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val();
    var translatedMessage = pigLatin(word);

    $(".translation").text(translatedMessage);

    $("#result").show();

  });
});



// User Logic

var pigLatin = function pigLatin(word) {

     var vowels = ["a","e","i","o","u"];
     var strArr = word.split("");
     var index;

     // Look for the vowel index in a string
     for(var k = 0; k < strArr.length; k++){
       for(var i = 0; i < vowels.length; i++){
         if(strArr[k] === vowels[i]){
           if(index === undefined){
             index = strArr.indexOf(strArr[k]);
           }
         }
       }
     }

     // if vowel is not the first letter use pig latin method
     if(index !== 0){
       var sliced = word.slice(0, index);
       word = word.slice(index) + sliced + "ay";
     }else {
       word = word + "way";
     }

     return word;
   }

   pigLatin("consonant");

   var quWords = function(word) {
     var squ = "squ";
     var qu = "qu";
     if (word[0] + word[1] + word[2] === squ) {
       return word.slice(3) + word[0] + word[1] + word[2] + "ay";
     } else {
       return word.slice(2) + word[0] + word[1] + "ay";
     }
   };
