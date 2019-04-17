/* localy created json object
var jsonObj = '{ "name": "Mike", "age": 23, "city": "Novi Sad"}';
var jsObj = JSON.parse(jsonObj);
console.log(jsObj.city);
*/

/* parse single post
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var myObj = JSON.parse(xhttp.responseText);
        document.getElementById("demo").innerHTML = myObj.id + " " + myObj.title;
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhttp.send();
*/

// parse multiple posts
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var myObj = JSON.parse(xhttp.responseText);
        let text = "";
        for (let i in myObj) {
            text += myObj[i].id + "\n";
        }
        document.getElementById("demo").innerHTML = text;
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();

/* manipulating dates
let person = '{ "name": "Nikola", "age": 18, "birth": "2000-11-24", "older": "function(age) { return age + 1;}"}';
let myObj = JSON.parse(person);
myObj.birth = new Date(myObj.birth);
console.log(myObj.birth.getDay());
document.getElementById("demo").innerHTML = myObj.age;

// alternative method
// parsing function
let myObj = JSON.parse(person, function (key, value) {
    if (key == 'birth')
        return new Date(value);
    else if (key == 'older')
        return eval('('+value+')');
    else return value;
});

console.log(myObj.older(2));
*/