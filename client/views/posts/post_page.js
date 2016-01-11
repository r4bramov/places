Template.postPage.helpers({
    image: function () {
        return Images.findOne(this.photo);
    }
});