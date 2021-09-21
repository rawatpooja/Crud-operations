document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()
    adddata()
    details()


})
var person = [];
console.log(localStorage);
function details() {
    let table = document.getElementById("table")
    var row = '';
    person.map(function (value, i) {
        row += `<tr><td>${value.fname}</td><td>${value.lname}</td><td>${value.password}</td><td><a href="#" onclick="onEdit(${i})">Edit<a> <a href="#" onclick="onDelete(${i})">delete</a></td></tr>`
    }
    )
    table.innerHTML = row;
};
function adddata(fname, lname, password) {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var password = document.getElementById("password").value;
    person.push({ "fname": fname, "lname": lname, "password": password });
    localStorage.setItem("person", JSON.stringify(person))
    var text = localStorage.getItem("person");
    person = JSON.parse(text);
    clearData();

    console.log(person);
};
let t;
function onEdit(i) {
    t = i
    document.getElementById("fname").value = person[i].fname;
    document.getElementById("lname").value = person[i].lname;
    document.getElementById("password").value = person[i].password;
    console.log(i);

}
function updateData(i) {
    var newfname = document.getElementById("fname").value;
    var newlname = document.getElementById("lname").value;
    var newpassword = document.getElementById("password").value;
    person[i].fname = newfname;
    person[i].lname = newlname;
    person[i].password = newpassword;
    localStorage.setItem("person", JSON.stringify(person))
    var text = localStorage.getItem("person");
    person = JSON.parse(text);
    console.log(i);
    details();
    clearData();
}
document.getElementById("update").addEventListener("click", (e) => {
    e.preventDefault()
    updateData(t)
});
function onDelete(i) {
    person.splice(i, 1);
    localStorage.setItem("person", JSON.stringify(person))
    var text = localStorage.getItem("person");
    person = JSON.parse(text);
    details(person);
}
  function clearData(){
    var fname = document.getElementById("fname").value="";
    var lname = document.getElementById("lname").value="";
    var password = document.getElementById("password").value="";
  }





