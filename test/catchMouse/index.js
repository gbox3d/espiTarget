//console.log('hello');

function AppMain() {

  const electron = require('electron')
  const remote = electron.remote

  let _wb = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()


  console.log('init app')

  let _output = document.querySelector('#output')
  let _outputInfo = document.querySelector('#outputInfo')
  let _marker = document.querySelector('#marker')

  function _cvtTouch(x,y,rot90)
  {
    if(rot90) {
      let _y = (1920 - x) * (1080 / 1920)
      let _x = y * (1920 / 1080)

      return {x:_x,y:_y}

    }
    else {
      return {x:x,y:y}
    }

  }

  _outputInfo.innerHTML =  _wb.width + "," + _wb.height;

  _outputInfo.style.transform  = "translate("+ _wb.width/2 + "px," +  _wb.height/2 + "px)"




  document.addEventListener('mousedown',function (evt) {

    _output.innerHTML = 'mouse down(' + evt.clientX + ',' + evt.clientY  +')'


    let mpos = _cvtTouch((evt.clientX -16),(evt.clientY-16),false);

    _marker.style.transform = "translate("+ mpos.x + "px, " + mpos.y +"px)"
    console.log(evt);

  })

  document.addEventListener('mouseup',function (evt) {

    _output.innerHTML = 'mouse up(' + evt.clientX + ',' + evt.clientY  +')'

    let mpos = _cvtTouch((evt.clientX -16),(evt.clientY-16),false);

    //_marker.style.transform = "translate("+ (evt.clientX -16) +"px, "+ (evt.clientY-16) +"px)"
    _marker.style.transform = "translate("+ mpos.x+"px, "+ mpos.y +"px)"

    console.log(evt);

  })

}

var theApp = new AppMain()