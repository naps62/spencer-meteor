Meteor.startup(function() {
  Router.configure({
    layoutTemplate: 'Layout'
  });

  Router.route('/', function() {
    this.render('Landing');
  }, {
    name: 'landing'
  });

  Router.route('/dashboard', function() {
    this.render('Dashboard');
  }, {
    name: 'dashboard'
  })
});
