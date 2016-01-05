Template.postItem.helpers({
    image: function () {
        var img = Images.findOne(this.photo);
        console.log(img);
        return img;
    }
});
