// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2){
      return num1
    }
    else if (num2 > num1){
      return num2
    }
    else {
      return "Unable to compute this! Numbers are most likely equal to each other."
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments
// and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if (a > b && a > c){
      return a
    }
    else if (b > a && b > c){
      return b
    }
    else if (c > a && c > b){
      return c
    }
    else {
      return "Unable to compute this! Largest numbers are most likely equal to each other."
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char == "a"){
    return "True"
  }
  else if (char == "e"){
    return "True"
  }
  else if (char == "i"){
    return "True"
  }
  else if (char == "o"){
    return "True"
  }
  else if (char == "u"){
    return "True"
  }
  else
  {
    return "False"
  }
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
 //   var wordArray = [phrase];
 //   console.log(wordArray);
 // }
  var results = ""
   var pLength = phrase.length;

   for (i = 0; i < pLength; i++) {
     var letter = phrase.charAt(i)
     var vowels = ["a","e","i","o","u", " "]

     if (!vowels.includes(letter)){
     results = results + letter + "o" + letter
}
  else{
    results = results + letter
}
console.log(results);
}
return results;
};


// ---------------------
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(stringA) {
      var reverseResults = "";
      var stringLength = stringA.length; //determines string length

      for (i = stringLength; i >= 0; i--){
        var letter = stringA.charAt(i)
        reverseResults = reverseResults + letter
      }
      console.log(reverseResults);
  };


//reverse function without argument passed

function reverseWOarg(){
    var reverseResults = "";

    var args = Array.prototype.slice.call(arguments); //turns native "arguements" object into arg array
    var stringA = args.toString(); //turns args array into stringA

    var stringLength = stringA.length; //determines string length

    for (i = stringLength; i >= 0; i--){
      var letter = stringA.charAt(i)
      reverseResults = reverseResults + letter
    }

    console.log(reverseResults);
};
