console.log('router module setup')

FlowRouter.route('/', {
  name:'index',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "index"
    });
  }
});


FlowRouter.route('/catch', {
  name:'catch',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "catch"
    });
  }
});


FlowRouter.route('/infoDevice', {
  name:'infoDevice',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "infoDevice"
    });
  }
});