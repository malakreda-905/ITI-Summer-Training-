function isPalindrome(str) {
    var s = str.split("").reverse().join(""); 
    return str === s; 
}


var str = prompt("Enter a string: ");

var check = confirm("Do you want to consider case sensitivity?");

if(!check){
    str1 = str.toLowerCase();
    var result = isPalindrome(str1);
    console.log("The string " + str + " is " + (result ? "" : "not ") + "a palindrome.");
    printResult(str);
}

else{
    var result = isPalindrome(str);
    console.log("The string " + str + " is " + (result ? "" : "not ") + "a palindrome.");
    printResult(str);
}

