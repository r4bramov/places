Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();
        var file = $('.myFileInput')[0].files[0];

            Images.insert(file, function (err, fileObj) {
                if (err){
                    console.log(err);
                } else {
                    var post = {
                        photo: fileObj._id,
                        author: $(event.target).find('[name=author]').val(),
                        place: $(event.target).find('[name=place]').val()
                    };
                    post._id = Posts.insert(post);
                }
            });

        Router.go('postsList');
    }
});