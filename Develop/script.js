// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','{','}','[',']','|','<','>','?','/','~'];
var passwordlengthh = 8;

function getPrompts() {
	choiceArray = [];
  passwordlength = parseInt(prompt("Choose Password Length (8-128 characters)"));
  if (isNaN(passwordlength) || passwordlength < 8 || passwordlength >128) {
	alert("Password length has to be a number from 8-128!");
	return false;
  }
  
  if (confirm("Would you like to include lowercase letters?")) {
	choiceArray = choiceArray.concat(lowerCase);
  }
  
  if (confirm("Would you like to include uppercase letters?")) {
	choiceArray = choiceArray.concat(upperCase);
  }
  
  if (confirm("Would you like to include special characters?")) {
	choiceArray = choiceArray.concat(special);
  }
  
  if (confirm("Would you like to include numbers?")) {
	choiceArray = choiceArray.concat(numbers);
  }
  return true;
  }
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var promptResults = getPrompts ();
  var passwordText = document.querySelector("#password");

if (promptResults) {
  var endPassword = generatePassword();

  passwordText.value = endPassword;
}else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
	var password = "";
	for(var i = 0; i < passwordlength; i++) {
	  var randomIndx = Math.floor(Math.random() * choiceArray.length);
	  password = password + choiceArray [randomIndx];
	  
	}
	return password;
  } 