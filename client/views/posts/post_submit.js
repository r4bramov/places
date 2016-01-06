Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();
        var file = $('.myFileInput')[0].files[0];

        console.log(file);


        var post = {
            author: $(event.target).find('[name=author]').val(),
            place: $(event.target).find('[name=place]').val()
        };

        Meteor.call('postInsert', post, function(error, result) {
            if (error)
                return console.log(error.reason);

            Router.go('postsList', {_id: result._id});
        });

        Images.insert(file, function (err, fileObj) {
            if (err){
                console.log(err);
            } else {
                post = _.extend({
                    photo: fileObj._id
                });
                console.log(post);
            }
        });

            //Images.insert(file, function (err, fileObj) {
            //    if (err){
            //        console.log(err);
            //    } else {
            //        post = _.extend({
            //            photo: fileObj._id
            //        });
            //        console.log(post);
            //    }
            //});
        //Router.go('postsList');
    }
});