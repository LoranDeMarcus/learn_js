var usersData = [];
//language=JSRegexp
const nameCheck = (/[a-zA-Z]+/g);
const emailCheck = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const digitCheck = (/\d+/g);
function AddUser(name, email) {
    if (name === undefined || email === undefined /*|| name !== nameCheck || email !== emailCheck*/) {
        return false
    } else {
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

function UpdateUser(id, name, email) {
    if (id === undefined || name === undefined || email === undefined /*|| name !== nameCheck || email !== emailCheck*/) {
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

function DeleteUser(id) {
    if (id < usersData.length || id > usersData.length /*|| id !== digitCheck*/) {
        return false
    }
    else {
        for (var index = 0; index < usersData.length; index++) {
            if (usersData[index].id === id) {
                usersData.splice(id, 1);
            }
        }
    }
}

function ShowUsers () {
    usersData.forEach(function (item) {
        console.log(item);
    });
}