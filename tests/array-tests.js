describe("TestingAddUser", function() {

    it("CallWithoutArgumentsMustReturnFalse", function() {
        AddUser();
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

describe("TestingUpdateUser", function () {

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

describe("TestingDeleteUser", function () {

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

})