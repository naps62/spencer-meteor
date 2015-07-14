Expenses = new Mongo.Collection("expenses");

Expenses.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  value: {
    type: Number
  },
  notes: {
    type: String,
    autoform: { rows: 3 },
    optional: true
  },
  userId: {
      type: String,
      optional: true,
      autoValue: function() { return Meteor.userId(); }
  }
}));

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
