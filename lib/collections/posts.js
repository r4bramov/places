Posts = new Mongo.Collection('posts');

Posts.attachBehaviour('timestampable',{
    createdBy: false
});