describe("TestingAddUserWithoutArguments", function() {

    it("CallWithoutArgumentsMustReturnFalse", function() {
        assert.equal(AddUser(), false);
    });

    it("CallWithWrongArgumentsReturnFalse", function() {

        it("WithEmptyArgumentsReturnFalse", function() {
            assert.equal(AddUser('', ''), false);
        });

        it("WithUndefinedArgumentsReturnFalse", function() {
            assert.equal(AddUser(undefined, undefined), false);
        });

    });
});

describe("TestingUpdateUserWithoutArguments", function () {

    it("CallWithoutArgumentsMustReturnFalse", function () {
        assert.equal(UpdateUser(), false);
    });

    it("CallWithWrongArgumentsReturnFalse", function () {

        it("WithEmptyArgumentsReturnFalse", function () {
            assert.equal(UpdateUser('', '', ''), false);
        });

        it("WithUndefinedArgumentsReturnFalse", function () {
            assert.equal(UpdateUser(undefined, undefined, undefined), false);
        });

    });

    it("WithIDArgumentsIsNotInTheRangeReturnFalse", function () {

        it("WithIDArgumentsIsHigherThanRangeReturnFalse", function (id) {
            assert.equal(DeleteUser(id > usersData.length),false)
        })

        it("WithIDArgumentsIsLowerThanRangeReturnFalse", function (id) {
            assert.equal(DeleteUser(id < usersData[0]),false)
        });

    });
});

describe("TestingDeleteUserWithoutArguments", function () {

    it("CallWithoutArgumentsMustReturnFalse", function () {
        assert.equal(DeleteUser(), false);
    });

    it("CallWithWrongArgumentsReturnFalse", function () {

        it("WithEmptyArgumentsReturnFalse", function () {
            assert.equal(DeleteUser(''), false);
        });

        it("WithUndefinedArgumentsReturnFalse", function () {
            assert.equal(DeleteUser(undefined), false)
        });

    });

    it("WithIDArgumentsIsNotInTheRangeReturnFalse", function () {

        it("WithIDArgumentsIsHigherThanRangeReturnFalse", function (id) {
            assert.equal(DeleteUser(id > usersData.length),false)
        })

        it("WithIDArgumentsIsLowerThanRangeReturnFalse", function (id) {
            assert.equal(DeleteUser(id < usersData.length),false)
        });

    });

});

describe("TestingAddUserWithArguments", function () {

    it("CallWithValidArgumentsMustReturnTrue", function () {
        usersData.push({
            id: 100,
            name: "testName",
            email: "testEmail"
        });

    });

    it("CheckingForAddedUserMustReturnTrue", function () {
        AddUser("test1", "test@rm.ru");
        assert.equal(usersData[1].id, 101);
    })

});

describe("TestingUpdateUserForRe-Update", function () {

    it("CallUpdateAgainMustReturnFalse", function () {
        usersData.push({
            id: 102,
            name: "ReName",
            email: "ReEmail@tem.com"
        });
        let prevArray = usersData[102];
        UpdateUser(102, "ReNameDone", "ReEmailDone@tem.com");
        assert.equal(prevArray, usersData[102]);
    });

});

describe("TestingDeleteWithArguments", function () {
    
    it("CallDeleteAndCheckDeleted", function () {
        const prevLength = usersData.length;
        DeleteUser(101);
        assert.equal(prevLength, usersData.length + 1);
    })
    
})
