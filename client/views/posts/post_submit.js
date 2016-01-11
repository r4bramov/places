Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();
        var file = $('.myFileInput')[0].files[0];


        var post = {
            photo: '',
            author: $(event.target).find('[name=author]').val(),
            place: $(event.target).find('[name=place]').val()
        };

        Images.insert(file, function (err, fileObj) {
            if (err){
                console.log(err);
                return false;
            }
            _.extend(post, {
                photo: fileObj._id
            });

            Meteor.call('postInsert', post, function(error, result) {
                if (error)
                    return console.log(error.reason);

                Router.go('postsList', {_id: result._id});
            });
        });
    }
});
