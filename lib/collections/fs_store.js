var base = "";
if (Meteor.isServer) {
    base = process.env.PWD;
}
var imageStore = new FS.Store.FileSystem("images", {path: base+"/uploads"});

Images = new FS.Collection("images", {
    stores: [imageStore]
});

Images.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    },
    download: function(){
        return false;
    }
});

Images.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function(){
        return true;
    }
});