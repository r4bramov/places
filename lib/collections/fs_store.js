imageStore = new FS.Store.FileSystem("images", {path: "../../../uploads"});

Images = new FS.Collection("images", {
    stores: [imageStore]
});

//Images.deny({
//    insert: function(){
//        return false;
//    },
//    update: function(){
//        return false;
//    },
//    remove: function(){
//        return false;
//    },
//    download: function(){
//        return false;
//    }
//});
//
Images.allow({
    insert: function(userId, doc){
        return  true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function(){
        return true;
    }
});

Meteor.methods({
    imageExist: function(){

    }
});
