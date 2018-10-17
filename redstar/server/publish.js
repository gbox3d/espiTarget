Meteor.publish('touchInfo/all', function () {

  return touchInfo.find()
})