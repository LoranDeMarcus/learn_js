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

function GetNewUserId() {
    if (usersData.id === '') {
        usersData.id = 1
    } else {

    }
    var maxId = usersData.reduce((max, item) => item.id > max ? item.id : max, 0);
    /* TODO:
     функция для поиска максимального id среди всех пользователей.
     Возвращает максимальный (id пользователя + 1) из массиве userData, тип Int
     если в массиве нет пользователей возвращает 1
     */
}

// данная функция ничего не делает полезного
function UpdateUser(id, name , email) {
    usersData.forEach(function (item, i, usersData) {
        /*
         todo сделать условие поиска по id (https://www.mobila.name/post/52f2236296ceb/).
         найти в массиве пользователя с указанным id и уже только потом поменять данные
         ! Вернуть true если пользователь найден и обновлен, иначе false
         */

        // это ок
        usersData[id].email = email;
        usersData[id].name = name;
    })
}

// функция не работает
function DeleteUser(id) {
    /*
     todo сделать условие поиска id (https://www.mobila.name/post/52f2236296ceb/).
     в данном случае выполняется удаление из ячейки по ее номеру.
     Сделать по аналогу с update. - найти нужного пользователя и вызвать splice уже только потом
     ! Вернуть true если пользователь найден и удален, иначе false
     */
    usersData.splice(id, 1)
}

function ShowUsers() {
    // todo: сделать вывод в консоле в цикле. что бы отобразилось например:
    /*
     User in list:
     1|Vanya|vanya@mail.ru
     2|Tema|tema@mail.ru
     */
    console.log(usersData);
}