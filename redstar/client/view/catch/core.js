import './core.html'
import {Template} from "meteor/templating";

let __Template = Template.catch

//const os = require('os');

__Template.onCreated(function () {

  //this.subscribe('touchInfo/all')

})


__Template.onRendered(function () {

  console.log('event')

  document.addEventListener('mouseup',function (evt) {

    console.log(evt)

    Meteor.call('touchInfo/add',{
        x: evt.clientX,
        y: evt.clientY

      },
      function (err) {
        if(err) {
          console.log(err)
        }
        else {
          console.log('success')
        }

      })

  })

  var ip = require("ip");
  console.log ( ip.address() );





})