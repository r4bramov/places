Template.postItem.helpers({
    image: function () {
        return Images.findOne(this.photo);
    }
});
