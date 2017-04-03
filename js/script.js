var usersData = [];

function ValidateUser (id, name, email) {
    //language=JSRegexp
    const nameRegExp = /[a-zA-Z]+/g;
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    const idCheck = (id > usersData.length && id < usersData[0] || id === undefined || id === "");
    const dataCheck = (name === undefined || email === undefined || !(name.match(nameRegExp)) || !(email.match(emailRegExp)));
    return idCheck && dataCheck;
}

function AddUser (name, email) {
    const newId = GetNewUserId();
    if (ValidateUser(name, email)) {
        return false
    } else {
        usersData.push({
            id: newId,
            name: name,
            email: email
        });
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

function UpdateUser (id, name, email) {
    if (ValidateUser(id) && ValidateUser(name, email)) {
        return false && 'validation error';
    } else {
        for (var index = 0; index < usersData.length; index++) {
            if (usersData[index].id === id) {
                usersData[index].email = email;
                usersData[index].name = name;
            } else {
                return false
            }
        }
    }
}

function DeleteUser (id) {
    if (ValidateUser(id)) {
        return false && 'validation error';
    } else {
        for (var index = 0; index < usersData.length; index++) {
            if (usersData[index].id === (id)) {
                usersData.splice(index, 1);
            } else {
                return false
            }
        }
    }
}

function ShowUsers () {
    usersData.forEach(function (item) {
        console.log(item);
    });
}