Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading'
});

Router.route('/', {
   name: 'postsList',
   waitOn: function () {
      this.render(this.loadingTemplate);
      Meteor.subscribe('posts');
      Meteor.subscribe('images');
      return [];
   }
});

Router.route('/submit', {name: 'postSubmit'});

Router.route('/:_id', {
   name: 'postPage',
   waitOn: function(){
      Meteor.subscribe('posts');
      Meteor.subscribe('images');
   },
	data: function() {
		return Posts.findOne(this.params._id);
	}
});


var requireLogin = function() {
   if (! Meteor.user()) {
      if (Meteor.loggingIn()) {
         this.render(this.loadingTemplate);
      } else {
         this.render('accessDenied');
      }
   } else {
      this.next();
   }
};

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});