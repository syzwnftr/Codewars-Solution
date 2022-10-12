/*

Description:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str) {
  let result = str.replace(/[^A-Za-z0-9]/g, ",").split(",");
  result.forEach((word, i) => {
    if (i !== 0) {
      result[i] = word[0].toUpperCase() + word.slice(1);
    }
  });
  return result.join("");
}
