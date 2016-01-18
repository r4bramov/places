Template.postsList.helpers({
    posts: function() {
        var Posts1 = Posts.find({}, {sort: {createdAt: -1}});
        return Posts1;
    }
});
