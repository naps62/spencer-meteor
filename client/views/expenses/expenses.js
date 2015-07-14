Meteor.subscribe("expenses");

Template.expenses.helpers({
  expenses: function() {
    return Expenses.find();
  }
})
