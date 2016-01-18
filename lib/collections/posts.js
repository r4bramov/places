Posts = new Mongo.Collection('posts');

Posts.attachBehaviour('timestampable',{
    createdBy: false
});

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            photo: Array,
            author: String,
            place: String
        });
        if(postAttributes.author.length && postAttributes.place.length && postAttributes.photo.length) {
            var postId = Posts.insert(postAttributes);
            return {
                _id: postId
            };
        }else{
            return false;
        }
    }
});

Posts.allow({
    insert: function(userId, doc){
        return  true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    },
    remove: function(){
        return true;
    }
});



