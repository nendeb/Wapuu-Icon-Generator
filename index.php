<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>アイコンジェネレーター</title>

<link href="style.css" rel="stylesheet">

</head>
<body>
 	<div class="main">
        <div class="content clearfix">

	<h1>わぷーアイコンジェネレーター</h1>
	<div id="wapu_icon">
        	
		<div class="canvas">
			<canvas id="wapu_canvas" width="300" height="300"></canvas>
			<input type="file" id="jsUpload" class="upload" accept="image/*" style="display:none" onchange="upload()">
			<button id="fileSelect" class="btn-primary">画像アップロード</button>
			<button id="imageclear" class="btn-clear" onclick="fbcanvas_clear()">リセット</button>
		</div>
		<div class="canvas2">
			<img src="img/wp_chara.png" id="newImg">
			<button id="imagenew" class="btn-newimage" onclick="generateNewImage()">画像生成</button>
		</div>

		<div class="canvashelp">
			<h3>ご利用方法</h3>

			①アイコンにする元画像をアップロードしてください。<br />
			②元画像とわぷー画像が重なって表示されますので各画像を移動して、あわせください。　(それぞれの画像をクリックすると変更できるようになります。)<br />
			③完成したら[画像生成]ボタンを押してください。<br />
			④完成画像を右クリックして「名前を付けて画像を保存」で保存してください。<br />

			※画像をアップロードから、やり直す場合は[リセット]ボタンを押してください。<br />
			※ブラウザ上で画像を操作、生成しますのでサーバーには画像を送信しません。<br />
			※このサービスによる成果物のライセンスはGPL2です。<br />


			<h3>わぷーについて</h3>
			「わぷー」 の画像は、WordPress ソフトウェアと同様、「GPL バージョン2 またはそれ以降のバージョン」というライセンスのもとに公開されています。著作権は作者のカネウチカズコさんに属します。			<ul>
			<li>・<a href="http://ja.wordpress.org/about-wp-ja/wapuu/" target="_blank" rel="nofollow"><u>WordPress日本公式キャラクター「わぷー（Wapuu）」</u></a></li>
			<li>・<a href="https://github.com/jawordpressorg/wapuu" target="_blank" rel="nofollow"><u>「わぷー（Wapuu）」GitHub</u></a></li>
			</ul>
			<p>

		</div>
		<!-- work area -->
		<canvas id="wapu_canvas2" width="200" height="200"></canvas>

        </div><!-- /#wapu_icon -->
        </div><!-- /.content -->
	</div><!-- /.main -->
	<script src="js/fabric.js"></script>
	<script src="js/script.js"></script>
</body>
</html>