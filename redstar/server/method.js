Meteor.methods({
  'touchInfo/add' : function(obj) {
    obj.createdAt = new Date();
    touchInfo.insert(obj);
  },
  'touchInfo/removeAll' : function() {
    touchInfo.remove({});
  }
});

Meteor.methods({
  'configData/update' : function (_) {

    configData.update(
      {
        name : 'config'
      },
      {
        $set : {
          baseX : _.baseX,
          baseY : _.baseY,
        }
      }

    )

  }

});
