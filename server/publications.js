Meteor.publish('images', function(){
    return Images.find({}, {sort: {createdAt: -1}});
});
Meteor.publish('posts', function(){
    return Posts.find({}, {sort: {createdAt: -1}});
});