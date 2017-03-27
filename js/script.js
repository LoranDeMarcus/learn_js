var usersData = [];
var userObj = {name: '', email: '', id: i = 0};

function AddUser(name, email, id) {
    usersData.push(i++,{
        name: name,
        email: email
    });
}

function UpdateUser(i) {
    for (var j = 0; i < usersData; j++) {
        console.log(usersData[usersData[i]])
    }
}

function DeleteUser(i) {
    delete usersData[i];
}

function ShowUsers() {
    console.log(usersData);
}