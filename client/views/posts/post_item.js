Template.postItem.helpers({
    public: function() {
        var a = document.createElement('a');
        a.src = this.photo;
        return a.photo;
    }
});