//console.log('hello');

function AppMain() {

  console.log('init app')

  let _output = document.querySelector('#output')
  let _marker = document.querySelector('#marker')


  document.addEventListener('mousedown',function (evt) {

    _output.innerHTML = 'mouse down(' + evt.clientX + ',' + evt.clientY  +')'

    _marker.style.transform = "translate("+ (evt.clientX -16) +"px, "+ (evt.clientY-16) +"px)"
    console.log(evt);

  })

  document.addEventListener('mouseup',function (evt) {

    _output.innerHTML = 'mouse up(' + evt.clientX + ',' + evt.clientY  +')'

    _marker.style.transform = "translate("+ (evt.clientX -16) +"px, "+ (evt.clientY-16) +"px)"
    console.log(evt);

  })

}

var theApp = new AppMain()