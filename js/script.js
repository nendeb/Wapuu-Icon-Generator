/**
 * WAPUU Icon Generator
 * Version 1.0.2 
 *
 * Copyright 2014, nendeb  
 * Released under the GPLv2 license
 *
 * Date: 06/01/2014
*/

var wapuu_kai_png ='img/wp_chara_kai.png';
var wapuu_kai_svg ='img/wp_chara_kai.svg';
var wapuu_dummy_png ='img/wp_chara.png';


// File API チェック
if (window.File && window.FileReader && window.FileList && window.Blob) {
	// Upload button有効
	var elm1 = document.getElementById("jsUpload");
	elm1.disabled = false;
	elm1.value = "";
} else {
	alert('他のブラウザでご利用ください。');
};

// ファイルピッカーを呼び出し
var fileSelect = document.getElementById("fileSelect");
var fileElem   = document.getElementById("jsUpload");

fileSelect.addEventListener("click", function (e) {
	if (fileElem) {
		fileElem.click();
	};
}, false);


//Fabric
var fbcanvas = new fabric.Canvas('wapu_canvas');

//HTML5 canvas
var canvas = document.getElementById("wapu_canvas");
var ctx = canvas.getContext('2d');

var canvas2 = document.getElementById("wapu_canvas2");
var ctx2 = canvas2.getContext('2d');

// Fabric background scale
background_scale();

//ファイル読み込み
function upload(){

	var files = document.getElementById('jsUpload').files;
	var file = files[0];

	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onerror = function(e){	alert('画像の読込みに失敗しました。');	};

	// ファイル読み込み完了時
	reader.onload = function(event){
		var image = new Image();
		image.src = event.target.result;

		// background scale
		background_scale();

		// add Upload image
		fabric.Image.fromURL( image.src , function(oImg1) {
			fbcanvas.add(oImg1);
		});

		// add wapuu png 
	//	add_wapuu_png();

		// add wapuu svg
		add_wapuu_svg();

		// Upload button無効
		var elm1 = document.getElementById("jsUpload");
		elm1.disabled = true;
	};
};

// add wapuu png
function add_wapuu_png(){
	fabric.Image.fromURL( wapuu_kai_png , function(oImg2) {
		oImg2.set({
			top: 49,
			left: 60,
			scaleY: 1.1,
			scaleX: 1.1,
			selectable: true
		});
		fbcanvas.add(oImg2);
	});
}

// add wapuu svg
function add_wapuu_svg(){
	fabric.loadSVGFromURL(wapuu_kai_svg , function(objects, options) {
		var shape = fabric.util.groupSVGElements(objects, options);
		shape.set({
			top: 49,
			left: 60,
			scaleY: 1.1,
			scaleX: 1.1,
			selectable: true
		});
		fbcanvas.add(shape);
	});
};

// remove all objects and re-render
function fbcanvas_clear(){
	// wapu_canvas
	fbcanvas.clear().renderAll();
	// background scale
	background_scale();
	// wapu_canvas2
	ctx2.clearRect(0, 0, 200, 200);
	// newImg
	document.getElementById("newImg").src = wapuu_dummy_png;
	// Upload button有効
	var elm1 = document.getElementById("jsUpload");
	elm1.disabled = false;
	elm1.value = "";
};

// canvas-newImg 画像生成
function generateNewImage(){
	var sourceX=50;
	var sourcey=50;
	var chip_W=10;
	var chip_H=10;

	var img = new Image();
	img.src = canvas.toDataURL( 'image/png' );	//or image/jpeg 

	img.onload = function(){

		ctx2.clearRect( 0, 0, 200, 200 );
		ctx2.drawImage(img, 50, 50, 200, 200, 0, 0, 200, 200 );

		var img2 = new Image();
		img2.src = canvas2.toDataURL( 'image/png' );	//or image/jpeg 

		img2.onload = function(){
			document.getElementById("newImg").src = img2.src;
		};
	};
};

// Fabric background scale
function background_scale(){
	var rect = new fabric.Rect({
		left: 49,
		top: 49,
		fill: 'rgb( 128, 128, 128 )',
		width: 1,
		height: 202,
		selectable:false
	});
	fbcanvas.add( rect );
	var rect2 = new fabric.Rect({
		left: 250,
		top: 49,
		fill: 'rgb( 128, 128, 128 )',
		width: 1,
		height: 202,
		selectable:false
	});
	fbcanvas.add( rect2 );
	var rect3 = new fabric.Rect({
		left: 49,
		top: 49,
		fill: 'rgb( 128, 128, 128 )',
		width: 202,
		height: 1,
		selectable:false
	});
	fbcanvas.add( rect3 );
	var rect4 = new fabric.Rect({
		left: 49,
		top: 250,
		fill: 'rgb( 128, 128, 128 )',
		width: 202,
		height: 1,
		selectable:false
	});
	fbcanvas.add( rect4 );
};

