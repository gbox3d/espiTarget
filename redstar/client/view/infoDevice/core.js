import './core.html'

let __templete = Template.infoDevice

//Meteor.call('touchInfo/removeAll')

__templete.onCreated(function () {

  let cursor = touchInfo.find()

  console.log(cursor)

  cursor.observeChanges({
    added : function (id,fields) {
      console.log( fields )
    },
    changed(id,fields) {
      //MsgLog.update({_id:'xRrDwofPCwD8AZGjG'},{$set:{text:'hi'}})
      console.log('observe change ' + id)
    },
    removed(id) {
      //MsgLog.remove({})
      console.log('observe remove ' + id)
    }
  })
})

__templete.onRendered(function () {




})

__templete.events({
  "click .actGameEnd"() {
    Meteor.call('touchInfo/removeAll',function (err) {
      if(err) {
        console.log(err)
      }
      else {
        console.log('success')
      }
    })
  },
  "click .base button"(evt,instance) {
    Meteor.call('configData/update',
      {
        baseX : parseInt( instance.find(".base input.X").value ),
        baseY :  parseInt( instance.find(".base input.Y").value)

      },
      function (err) {
      if(err) {
        console.log(err)
      }
      else {
        console.log('success')
      }
    })
  }
})

__templete.helpers({
  getTouchInfo() {
    return touchInfo.find()
  },
  getConfigData() {
    return configData.findOne({name:'config'})
  }
})