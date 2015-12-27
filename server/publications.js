Meteor.publish('images', function(){
    return Images.find();
});

Meteor.publish('posts', function(){
    return Posts.find();
});