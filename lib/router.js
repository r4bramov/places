Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loading'
});

Router.route('/', {
   name: 'postsList',
   waitOn: function () {
      this.render(this.loadingTemplate);
      return [Meteor.subscribe('posts'), Meteor.subscribe('images')]
   }
});

Router.route('/submit', {name: 'postSubmit'});

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