var inputOne = document.getElementById("11");
var inputTwo = document.getElementById("31");
var inputThree = document.getElementById("41");
var inputFour = document.getElementById("51");
var inputFive = document.getElementById("81");
var inputSix = document.getElementById("91");
var inputSeven = document.getElementById("22");
var inputEight = document.getElementById("32");
var inputNine = document.getElementById("42");
var inputTen = document.getElementById("62");
var inputEleven = document.getElementById("72");
var inputTwelve = document.getElementById("82");
var inputThirteen = document.getElementById("13");
var inputFourteen = document.getElementById("23");
var inputFifteen = document.getElementById("33");
var inputSixteen = document.getElementById("53");
var inputSeventeen = document.getElementById("73");
var inputEighteen = document.getElementById("93");
var inputNineteen = document.getElementById("14");
var inputTwenty = document.getElementById("24");
var inputTwentyone = document.getElementById("34");
var inputTwentytwo = document.getElementById("44");
var inputTwentythree = document.getElementById("54");
var inputTwentyfour = document.getElementById("64");
var inputTwentyfive = document.getElementById("74");
var inputTwentysix = document.getElementById("84");
var inputTwentyseven = document.getElementById("15");
var inputTwentyeight = document.getElementById("55");
var inputTwentynine = document.getElementById("95");
var inputThirty = document.getElementById("26");
var inputThirtyone = document.getElementById("36");
var inputThirtytwo = document.getElementById("46");
var inputThirtythree = document.getElementById("56");
var inputThirtyfour = document.getElementById("66");
var inputThirtyfive = document.getElementById("76");
var inputThirtysix = document.getElementById("86");
var inputThirtyseven = document.getElementById("96");
var inputThirtyeight = document.getElementById("17");
var inputThirtynine = document.getElementById("37");
var inputFourty = document.getElementById("57");
var inputFourtyone = document.getElementById("77");
var inputFourtytwo = document.getElementById("87");
var inputFourtythree = document.getElementById("97");
var inputFourtyfour = document.getElementById("28");
var inputFourtyfive = document.getElementById("38");
var inputFourtysix = document.getElementById("48");
var inputFourtyseven = document.getElementById("68");
var inputFourtyeight = document.getElementById("78");
var inputFourtynine = document.getElementById("88");
var inputFifty = document.getElementById("19");
var inputFiftyone = document.getElementById("29");
var inputFiftytwo = document.getElementById("59");
var inputFiftythree = document.getElementById("69");
var inputFiftyfour = document.getElementById("79");
var inputFiftyfive = document.getElementById("99");

function checkAnswers() {
  if (inputOne.value == '8'
     && inputTwo.value == '7'
     && inputThree.value == '1'
     && inputFour.value == '5'
     && inputFive.value == '9'
     && inputSix.value == '6'
     && inputSeven.value == '6'
     && inputEight.value == '5'
     && inputNine.value == '3'
     && inputTen.value == '7'
     && inputEleven.value == '1'
     && inputTwelve.value == '4'
     && inputThirteen.value == '3'
     && inputFourteen.value == '4'
     && inputFifteen.value == '1'
     && inputSixteen.value == '8'
     && inputSeventeen.value == '7'
     && inputEighteen.value == '2'
     && inputNineteen.value == '5'
     && inputTwenty.value == '9'
     && inputTwentyone.value == '3'
     && inputTwentytwo.value == '4'
     && inputTwentythree.value == '6'
     && inputTwentyfour.value == '8'
     && inputTwentyfive.value == '2'
     && inputTwentysix.value == '7'
     && inputTwentyseven.value == '4'
     && inputTwentyeight.value == '1'
     && inputTwentynine.value == '9'
     && inputThirty.value == '1'
     && inputThirtyone.value == '8'
     && inputThirtytwo.value == '9'
     && inputThirtythree.value == '7'
     && inputThirtyfour.value == '2'
     && inputThirtyfive.value == '4'
     && inputThirtysix.value == '3'
     && inputThirtyseven.value == '5'
     && inputThirtyeight.value == '7'
     && inputThirtynine.value == '6'
     && inputFourty.value == '3'
     && inputFourtyone.value == '9'
     && inputFourtytwo.value == '1'
     && inputFourtythree.value == '4'
     && inputFourtyfour.value == '5'
     && inputFourtyfive.value == '4'
     && inputFourtysix.value == '7'
     && inputFourtyseven.value == '6'
     && inputFourtyeight.value == '8'
     && inputFourtynine.value == '2'
     && inputFifty.value == '2'
     && inputFiftyone.value == '3'
     && inputFiftytwo.value == '4'
     && inputFiftythree.value == '1'
     && inputFiftyfour.value == '5'
     && inputFiftyfive.value == '7') {
    body.style = 'background-color: limeGreen'
  } else {
    body.style = 'background-color: Red'
  }
  
}


function revealAnswers() {
  inputOne.value = '8'
  inputTwo.value = '7'
  inputThree.value = '1'
  inputFour.value = '5'
  inputFive.value = '9'
  inputSix.value = '6'
  inputSeven.value = '6'
  inputEight.value = '5'
  inputNine.value = '3'
  inputTen.value = '7'
  inputEleven.value = '1'
  inputTwelve.value = '4'
  inputThirteen.value = '3'
  inputFourteen.value = '4'
  inputFifteen.value = '1'
  inputSixteen.value = '8'
  inputSeventeen.value = '7'
  inputEighteen.value = '2'
  inputNineteen.value = '5'
  inputTwenty.value = '9'
  inputTwentyone.value = '3'
  inputTwentytwo.value = '4'
  inputTwentythree.value = '6'
  inputTwentyfour.value = '8'
  inputTwentyfive.value = '2'
  inputTwentysix.value = '7'
  inputTwentyseven.value = '4'
  inputTwentyeight.value = '1'
  inputTwentynine.value = '9'
  inputThirty.value = '1'
  inputThirtyone.value = '8'
  inputThirtytwo.value = '9'
  inputThirtythree.value = '7'
  inputThirtyfour.value = '2'
  inputThirtyfive.value = '4'
  inputThirtysix.value = '3'
  inputThirtyseven.value = '5'
  inputThirtyeight.value = '7'
  inputThirtynine.value = '6'
  inputFourty.value = '3'
  inputFourtyone.value = '9'
  inputFourtytwo.value = '1'
  inputFourtythree.value = '4'
  inputFourtyfour.value = '5'
  inputFourtyfive.value = '4'
  inputFourtysix.value = '7'
  inputFourtyseven.value = '6'
  inputFourtyeight.value = '8'
  inputFourtynine.value = '2'
  inputFifty.value = '2'
  inputFiftyone.value = '3'
  inputFiftytwo.value = '4'
  inputFiftythree.value = '1'
  inputFiftyfour.value = '5'
  inputFiftyfive.value = '7'
}
SUBMIT.onclick = checkAnswers
reveal.onclick = revealAnswers