Template.postsList.helpers({
    posts: function() {
        var Posts1 = Posts.find({}, {sort: {createdAt: -1}});
        console.log(Posts1.fetch());
        return Posts1
    }
});
