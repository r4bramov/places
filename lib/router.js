Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', {
   name: 'postsList',
   waitOn: function () {
      return Meteor.subscribe('images')
   }
});

Router.route('/submit', {name: 'postSubmit'});