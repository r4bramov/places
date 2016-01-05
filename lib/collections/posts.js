Posts = new Mongo.Collection('posts');

Posts.attachBehaviour('timestampable',{
    createdBy: false
});


Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            photo: this.url,
            title: String,
            url: String
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    }
});
