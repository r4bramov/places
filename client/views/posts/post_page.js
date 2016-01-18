Template.postPage.helpers({
    images: function () {
        var mas = [];
        for (var i = 0, ln = this.photo.length; i < ln; i++) {
            mas.push(Images.findOne(this.photo[i]));
        }
        return mas;
    }
});