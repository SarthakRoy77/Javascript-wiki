// string methods allow you to manipulate text i.e. strings
let userName = "BroCode";
let phoneNumber = "123-456-7800"

// Getting a specified character of the Sentence
console.log(userName.charAt(0));

//Gets the index of the first and last occurrence of the string
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"))

//Getting the length of the string
console.log(userName.length);

//Removing whitespaces in the string
console.log(userName.trim());

//Changing the case of the string
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

//Repeating a string
console.log(userName.repeat(2));

// Checking if the strings begins or ends with a string , returns a boolean
console.log(userName.startsWith("B"));
console.log(userName.endsWith("o"));

//Checking if x is in the string, returns a boolean
console.log(userName.includes(" "));

// Replacing a string
console.log(phoneNumber.replaceAll("-", ""));

// Tells the limit len of the string and the start of the string(It adds it total len - limit len)
console.log(phoneNumber.padStart(15, "0"));

// Tells the limit len of the string and the end of the string(It adds it total len - limit len)
console.log(phoneNumber.padEnd(15, "0"));

// String slicing = creating a substring from a portion of another string
//                  string.slice(start index,end index)
const fullName = "Sarthak Roy";
let firstName = fullName.slice(0,7);
let lastName = fullName.slice(8, 11);

console.log(`Hi ${firstName} or should i call you Mr.${lastName}`);
// Indexing must be hard so we can also use negative index(indices)

let lastChars = fullName.slice(-3)
console.log(lastChars)

//Even better is this
let dynamicFirstName = fullName.slice(0, fullName.indexOf(" "))
console.log(dynamicFirstName)