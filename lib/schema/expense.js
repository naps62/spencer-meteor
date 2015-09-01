Expenses = new Mongo.Collection("expenses");

ExpenseSchema = new SimpleSchema({
  value: {
    type: Number
  },
  tags: {
    type: [String],
    autoform: { type: "text" }
  },
  notes: {
    type: String,
    optional: true
  },
  userId: {
      type: String,
      optional: true,
      autoValue: function() { return Meteor.userId(); }
  }
});

Expenses.allow({
  insert: function(userId) {
    return !!userId;
  },

  update: function(userId, doc) {
    return userId == doc.userId;
  },

  remove: function(userId, doc) {
    return userId == doc.userId;
  }
});

Expenses.attachSchema(ExpenseSchema);
