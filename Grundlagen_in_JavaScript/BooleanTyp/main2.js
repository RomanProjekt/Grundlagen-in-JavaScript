console.log(false == null); // false
if (null) {
  console.log("null"); // Wird nicht ausgeführt
} else if (!null) {
  console.log("!null"); // Wird ausgeführt
}
console.log(true == {}); // false
if ({}) {
  console.log("{}"); // Wird ausgeführt
} else if (!{}) {
  console.log("!{}"); // Wird nicht ausgeführt
}
