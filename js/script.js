var usersData = [];
var userObj = {name: '', email: '',id: i = 0};

function AddUser(name, email, id) {
    usersData.push({
        name: name,
        email: email,
        id: i++
    });
}

function UpdateUser(id, name , email) {
    usersData.forEach(function (item, i, usersData) {
       usersData[id].email = email;
       usersData[id].name = name;
    })
}

function DeleteUser(id) {
    usersData.splice(id, 1)
}
function ShowUsers() {
    console.log(usersData);
}