var usersData = [];

function AddUser(GetNewUserId, name, email) {
    usersData.push({
        id: GetNewUserId,
        name: name,
        email: email
         // здесь id, это максимальный id среди всех
        // записей пользователей в массиве, т.е функция GetNewUserId() должна вызываться здесь
        // плюс очередное замечание даже если бы это было правильно - ИМЯ ПЕРЕМЕННО НЕ НЕСЕТ СМЫСЛА
    });
}

function GetNewUserId(id, userObj) {
    if (usersData.id === 0) {
        usersData.id = 1;
    } else {
        var maxId = usersData.reduce((max, item) => item.id > max ? item.id : max, 0);
        userObj['id'] = maxId + 1;
        usersData.push(usersData.id);
    }
    /* TODO:
     функция для поиска максимального id среди всех пользователей.
     Возвращает максимальный (id пользователя + 1) из массиве userData, тип Int
     если в массиве нет пользователей возвращает 1
     */
}

// данная функция ничего не делает полезного
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
    // todo: сделать вывод в консоле в цикле. что бы отобразилось например:
    /*
     User in list:
     1|Vanya|vanya@mail.ru
     2|Tema|tema@mail.ru
     */

}