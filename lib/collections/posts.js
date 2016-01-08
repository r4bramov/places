Posts = new Mongo.Collection('posts');

Posts.attachBehaviour('timestampable',{
    createdBy: false
});

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            photo: String,
            author: String,
            place: String
        });
        var postId = Posts.insert(postAttributes);
        return {
            _id: postId
        };
    }
});

