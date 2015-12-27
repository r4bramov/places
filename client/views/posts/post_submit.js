Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();
        var imagesURL;

        var file = $('.myFileInput' )[0].files[0];
        Images.insert(file, function (err, fileObj) {
            if (err){
                console.log('error');
            } else {
                // handle success depending what you need to do
                var userId = Meteor.userId();

                var post = {
                    photo: fileObj._id,
                    author: $(event.target).find('[name=author]').val(),
                    place: $(event.target).find('[name=place]').val()
                };

                post._id = Posts.insert(post);
                //Meteor.users.update(userId, {$set: imagesURL});
            }
        });

        Router.go('postsList');
    }
});