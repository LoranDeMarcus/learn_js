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
});