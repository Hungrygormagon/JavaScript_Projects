function my_Dictionary() {
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eye: "blue"
    };
    delete person.lastName;
    document.getElementById("Dictionary").innerHTML = person.lastName;
}