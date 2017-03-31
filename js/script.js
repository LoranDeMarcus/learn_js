var usersData = [];

function AddUser(name, email) {
    usersData.push({
        id: GetNewUserId(),
        name: name,
        email: email
    });
}

function GetNewUserId(id) {
    if (usersData.id === 0) {
        usersData.id = 1;
    } else {
        var maxId = usersData.reduce((max, item) => item.id > max ? item.id : max, 0);
    }
    return maxId + 1;
}

function UpdateUser(id, name , email) {
    for (var index = 0; index < usersData.length; index++) {
        if (usersData[index].id === id) {
            usersData[index].email = email;
            usersData[index].name = name;
            break;
        }
    }
}

function DeleteUser(id) {
    for (var index = 0; index < usersData.length; index++) {
        if (usersData[index].id === id) {
            usersData.splice(id, 1)
        }
    }
}

function ShowUsers() {
    usersData.forEach(function (item) {
        console.log(item)
    })
}