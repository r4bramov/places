Template.postItem.helpers({
    image: function () {
        var img = Images.findOne(this.photo);
        return img;
    }
});
