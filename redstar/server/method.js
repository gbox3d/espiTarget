Meteor.methods({
  'touchInfo/add' : function(obj) {
    obj.createdAt = new Date();
    touchInfo.insert(obj);
  }
});

Meteor.methods({
  'touchInfo/removeAll' : function() {
    touchInfo.remove({});
  }
});
