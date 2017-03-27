var usersData = [];
var userObj = {name: '', email: '', id: i = 0};

function AddUser(name, email, id) {
    usersData.push({
        name: name,
        email: email,
        id: i++
    });
}

function UpdateUser() {
    for (i in usersData) {
        usersData.splice(i, 1);
    }
}

function DeleteUser(i) {
    for (i in usersData) {
        usersData.splice(i, 1);
    }
}

function ShowUsers() {
    console.log(usersData);
}