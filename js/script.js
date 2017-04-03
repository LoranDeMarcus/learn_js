var usersData = [];

function ValidateUser (newId, name, email) {
    //language=JSRegexp
    const nameRegExp = /[a-zA-Z]+/g;
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    const idCheck = (newId > usersData.length && newId < usersData[0] || newId === undefined || newId === "");
    const dataCheck = (name === undefined || !(name.match(nameRegExp)) || email === undefined || !(email.match(emailRegExp)));
    return idCheck && dataCheck;
}

function AddUser (name, email) {
    const newId = GetNewUserId();
    if (ValidateUser(newId, name, email)) {
        return false
    } else {
        usersData.push({
            id: newId,
            name: name,
            email: email
        });return true;
        return newId;
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

function UpdateUser (newId, name, email) {
    if (ValidateUser(newId) && ValidateUser(name, email)) {
        return false;
    } else {
        for (var index = 0; index < usersData.length; index++) {
            if (usersData[index].id === newId) {
                usersData[index].email = email;
                usersData[index].name = name;
                break;
            }
        }
    }
}

function DeleteUser (newId) {
    if (ValidateUser(newId)) {
        return false;
    } else {
        for (var index = 0; index < usersData.length; index++) {
            if (usersData[index].id === newId) {
                usersData.splice(index, 1);
            }
        }
    }
}

function ShowUsers () {
    usersData.forEach(function (item) {
        console.log(item);
    });
}