Posts = new Mongo.Collection('posts');

Posts.attachBehaviour('timestampable',{
    createdBy: false
});

Meteor.methods({
    postInsert: function(postAttributes) {
        var postId;
        check(Meteor.userId(), String);
        if(postAttributes.author.length && postAttributes.place.length) {
            check(postAttributes, {
                photo: String,
                author: String,
                place: String
            });
        }else{
            return false;
        }
        postId = Posts.insert(postAttributes);
        return {
            _id: postId
        };
    }
});

