const electron = require('electron')
const remote = electron.remote

const THREE = require('three')

const elvis3d = require('../../libs/elvis5/core')

function AppMain() {


  //import * as THREE from 'three';

  let _wb = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()

  let _Smgr = new  elvis3d.scene.SceneManager({
    camera : {
      type : 'ortho2d',
      aspect : _wb.width/_wb.height,
      frustumSize : 1024

    },
    renderer : {
      type : 'webgl',
      clear : {
        color : 0xafab96,
        alpha : 1
      }
    },
    window_size : {
      width : _wb.width,
      height: _wb.height

    },
    setup : function() {

      let root_dummy = new THREE.Object3D();
      this.scene.add(root_dummy);
      this.root_dummy = root_dummy;

      let material = new THREE.MeshBasicMaterial(
        {
          color: 0xff0000,
          side: THREE.DoubleSide,
          transparent : true
        }
      );

      let object = new THREE.Mesh( new THREE.PlaneGeometry(
        256, 256,//가로세로 크기
        1, 1 //나누기갯수
        ),
        material );
      object.position.set( 0, 0, 0 );

      root_dummy.add(object)

      this.centerBox = object;

      this.infoPanel = document.querySelector('#infoPanel')

      this.updateAll()
    },
    event : {

      onKeyDown: function (event) {

      },
      onMouseUp: function (event) {
        //console.log(event)

        var mx = ( event.clientX / window.innerWidth ) * 2 - 1;
        var my = - ( event.clientY / window.innerHeight ) * 2 + 1;

        var vector = new THREE.Vector3( mx, my, 0.5 ).unproject( this.camera );

        console.log(vector)

        let _clone = this.centerBox.clone()
        _clone.scale.x = 0.25
        _clone.scale.y = 0.25

        _clone.position.copy(vector)

        this.root_dummy.add(_clone)

      },
      onUpdate: function (event) {

        /*
         event 인자
         deltaTick : 루프지연시간 (ms)
         */

        //console.log(event);

        this.centerBox.rotation.z += THREE.Math.degToRad(45) * event.deltaTick

        this.infoPanel.innerHTML =   Math.round( (1 / event.deltaTick)*100 ) / 100

        this.updateAll();


      }
    }
  })

  this.Smgr = _Smgr

}

var theApp = new AppMain()