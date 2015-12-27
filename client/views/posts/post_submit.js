Template.postSubmit.events({
    'submit form': function(event) {
        e.preventDefault();

        var post = {
            author: $(event.target).find('[name=author]').val(),
            place: $(event.target).find('[name=place]').val()
        };

        post._id = Posts.insert(post);

        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                if (err){
                    // handle error
                } else {
                    // handle success depending what you need to do
                    var userId = Meteor.userId();
                    var imagesURL = {
                        "profile.image": "/cfs/files/images/" + fileObj._id
                    };
                    Meteor.users.update(userId, {$set: imagesURL});
                }
            });
        });
        Router.go('postsList', post);
    }

    //'change .myFileInput': function(event, template) {
    //
    //}
});