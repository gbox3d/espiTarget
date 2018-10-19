import { Meteor } from 'meteor/meteor';

import '../lib/collections'

import './method'
//import './publish'

Meteor.startup(() => {



  process.env.ROOT_URL = 'http://127.0.0.1'
  // process.env.MONGO_URL = 'mongodb://localhost:27017/redstar'
  // process.env.PORT = 3000
  // process.env.MAIL_URL = null

  // Meteor.absoluteUrl()

  // console.log(process.env.ROOT_URL)
  // console.log(process.env.PORT)
  // console.log(process.env.MONGO_URL)


  // code to run on server at startup

  if(configData.find({name:"config"}).count() == 0)
  {
    console.log('config data 생성')
    configData.insert({baseX:0,baseY:0,name:'config'})

  }
  else {

    console.log(configData.findOne({name:"config"}))
  }

  var os = require('os');
  var ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
      }
      ++alias;
    });
  });

});
