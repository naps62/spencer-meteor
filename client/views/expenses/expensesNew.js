AutoForm.hooks({
  newExpenseForm: {
    onSuccess: function() {
      Router.go('/');
    },
    formToDoc: function(doc) {
      if (doc.tags) {
        doc.tags = doc.tags.split(',').map(function(tag) {
          return tag.trim();
        });
      }
      console.log(doc.tags);

      return doc;
    },
    docToForm: function(doc) {
      doc.tags = doc.tags.join(', ');
      return doc;
    }
  }
});

Template.expensesNew.helpers({
  expenseSchema: function() {
    return NewExpenseSchema;
  }
});
