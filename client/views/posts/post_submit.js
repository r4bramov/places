Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();
        var fields = $('.myFileInput')[0].files;

        var filesArray = [];

        for (var i = 0, ln = fields.length; i < ln; i++) {
            Images.insert(fields[i], function (err, fileObj) {
                filesArray.push(fileObj._id);
                if(filesArray.length === fields.length) {
                    console.log(filesArray);
                    var post = {
                        photo: filesArray,
                        author: $(event.target).find('[name=author]').val(),
                        place: $(event.target).find('[name=place]').val()
                    };

                    Meteor.call('postInsert', post, function (error, result) {
                        if (error)
                            return console.log(error.reason);
                        Router.go('postsList', {_id: result._id});
                    });
                }
            });
        }
    }
});
