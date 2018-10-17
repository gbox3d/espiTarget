import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import '../lib/collections'
import '../lib/router'


import './main.html'
import './layout.html'

import './index'

import './view/catch/core'
import './view/infoDevice/core'


Meteor.startup(function () {
  console.log('start up')

  global.theApp = {
    version : '100'
  }



})