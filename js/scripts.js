//  Business logic
$(function(){
  $("form#latin").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val();
    var translatedMessage = pigLatin(word);

    $(".translation").text(translatedMessage);

    $("#result").show();

  });
});

// User logic
var pigLatin = function(word) {
  var splitAt = indexOfFirstVowel(word);
  return word.slice(splitAt) + word.slice(0, splitAt) +"ay";
  };

var indexOfFirstVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");

  for (var i = 0; i< letters.length; i++) {
    for (var g = 0; g < vowels.length; g++ ) {
      if(letters[i] === vowels[g]) {
        return i;
      }
    }
  }
};

var quWords = function(word) {
  var squ = "squ";
  var qu = "qu";
  if (word[0] + word[1] + word[2] === squ) {
    return word.slice(2) + word[0] + word[1] + "ay";
  } else {
    return word.slice(2) + word[0] + word[1] + "ay";
  }
};
