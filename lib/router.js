Meteor.startup(function() {
  Router.configure({
    layoutTemplate: 'Layout'
  });

  UserController = RouteController.extend({
    onBeforeAction: function() {
      if(Meteor.userId()) {
        this.next();
      } else {
        Router.go('/signin');
      }
    }
  });

  Router.route('/', function() {
    Router.go('/expenses');
  });

  Router.route('signin', { name: 'signIn' });

  function userRoute(url, name) {
    Router.route(url, { name: name, controller: UserController });
  }

  userRoute('/expenses',     'expenses');
  userRoute('/expenses/new', 'expenses.new');
});
