//Template.postSubmit.events({
//    'submit form': function(event) {
//        event.preventDefault();
//        var files = $('.myFileInput')[0].files;
//
//        var filesArray = [];
//
//        var promise = new Promise(function(resolve, reject) {
//
//            for (var i = 0, ln = files.length; i < ln; i++) {
//
//                Images.insert(files[i], function (err, fileObj) {
//                    filesArray.push(fileObj);
//                    return filesArray;
//                });
//            }
//            if (filesArray.length) {
//                console.log(filesArray);
//                var post = {
//                    photo: filesArray,
//                    author: $(event.target).find('[name=author]').val(),
//                    place: $(event.target).find('[name=place]').val()
//                };
//
//                Meteor.call('postInsert', post, function (error, result) {
//                    if (error)
//                        return console.log(error.reason);
//
//                    Router.go('postsList', {_id: result._id});
//                });
//            }else{
//                console.log('error promise');
//            }
//        });
//    }
//});

Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();
        var files = $('.myFileInput')[0].files;

        var filesArray = [];

        for (var i = 0, ln = files.length; i < ln; i++) {
            Images.insert(files[i], function (err, fileObj) {
                filesArray.push(fileObj._id);
                if(filesArray.length === files.length) {
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
