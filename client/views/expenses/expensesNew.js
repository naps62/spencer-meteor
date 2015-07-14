AutoForm.hooks({
  'newExpenseForm': {
    onSuccess: function() {
      Router.go('/');
    }
  }
});
