var usersData = [];
//language=JSRegexp
const nameCheck = /[a-zA-Z]+/g;
const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const digitCheck = /\d/g;
function AddUser (name, email) {
    if (name === undefined || email === undefined || name !== nameCheck || email !== emailCheck) {
        return false
    }
    else {
        usersData.push({
            id: GetNewUserId(),
            name: name,
            email: email
        });
    }
}

function GetNewUserId () {
    if (usersData.id === 0) {
        usersData.id = 1;
    } else {
        var maxId = usersData.reduce((max, item) => item.id > max ? item.id : max, 0);
    }
    return maxId + 1;
}

function UpdateUser (id, name, email) {
    if (name === undefined || email === undefined || name !== nameCheck || email !== emailCheck) {
        return false
    }
    else {
        for (var index = 0; index < usersData.length; index++) {
            if (usersData[index].id === id) {
                usersData[index].email = email;
                usersData[index].name = name;
                break;
            }
        }
    }
}

function DeleteUser (id) {
    if (id > usersData.length || id < usersData.length || id !== digitCheck) {
        return false
    }
    else {
        for (var index = 0; index < usersData.length; index++) {
            if (usersData[index].id === id) {
                usersData.splice(id, 1)
            }
        }
    }
}

function ShowUsers () {
    usersData.forEach(function (item) {
        console.log(item)
    })
}