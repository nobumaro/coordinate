<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/jquery-2.1.3.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/jQueryRotate.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
    <title>Coordinate</title>
</head>

<body>
  <div class="container">
    <button type="button" class="btn btn-success" id="wheel">回転</button>
    <button type="button" class="btn btn-info" id="big">拡大</button>
    <button type="button" class="btn btn-warning" id="small">縮小</button>
    <button type="button" class="btn btn-primary"  id="save">保存</button>
<div>
  <div id="field">

  </div>
<!-- three.jsを読み込む -->
<script type="text/javascript" src="js/Three.js"></script>
  <?php
  foreach(glob("./image/*.jpg") as $list) {
				$imgs[] = basename($list,".jpg");
			}
			sort($imgs);
      $temp = implode(',',$imgs);
   ?>
    <!-- menubar start -->
    <div id="menu">
        <ul>
            <li><a href="#" onclick="furniture('chair_S')">イス S</a></li>
            <li><a href="#" onclick="furniture('chair_L')">イス L</a></li>
            <li><a href="#" onclick="furniture('table_S')">机 S</a></li>
            <li><a href="#" onclick="furniture('table_L')">机 L</a></li>
        </ul>
    </div>
    <!-- menubar end -->

    <!-- preview start -->
    <div class="preview" id="prev_chair_S" style="display:none">
        <input class="back_btn" type="image" name="name" src="image/back.png" onclick="back()">
        <!-- <img class="back_btn"src="image/back.jpg"/> -->
        <h2>イス S</h2>
        <?PHP
          $count = 0;
          for($i = 0; $i < count($imgs); $i++) {
              if (strstr($imgs[$i],"chair_S")) {
                $count++;
          ?>
          <img class="prev_image" id=<?= "$imgs[$i]" ?> src="image/<?= "$imgs[$i]" ?>.jpg" onclick="show('chair_S')"/>
          <?php
            }
            if ($count!=0 && $count%2==0){
              echo "<br/>";
            }
          ?>
          <?PHP } ?>
    </div>
    <div class="preview" id="prev_chair_L" style="display:none">
        <input class="back_btn" type="image" name="name" src="image/back.png" onclick="back()">
        <!-- <img class="back_btn"src="image/back.jpg"/> -->
        <h2>イス L</h2>
        <?PHP
          $count = 0;
          for($i = 0; $i < count($imgs); $i++) {
              if (strstr($imgs[$i],"chair_L")) {
                $count++;
          ?>
          <img class="prev_image" id=<?= "$imgs[$i]" ?> src="image/<?= "$imgs[$i]" ?>.jpg" onclick="show('chair_L')"/>
          <?php
            }
            if ($count!=0 && $count%2==0){
              echo "<br/>";
            }
          } ?>
    </div>
    <div class="preview" id="prev_table_S" style="display:none">
        <input class="back_btn" type="image" name="name" src="image/back.png" onclick="back()">
        <!-- <img class="back_btn"src="image/back.jpg"/> -->
        <h2>机 S</h2>
        <?PHP
          $count = 0;
          for($i = 0; $i < count($imgs); $i++) {
              if (strstr($imgs[$i],"table_S")) {
                $count++;
          ?>
          <img class="prev_image" id=<?= "$imgs[$i]" ?> src="image/<?= "$imgs[$i]" ?>.jpg" onclick="show('table_S')"/>
          <?php
            }
            if ($count!=0 && $count%2==0){
              echo "<br/>";
            }
         } ?>
    </div>
    <div class="preview" id="prev_table_L" style="display:none">
        <input class="back_btn" type="image" name="name" src="image/back.png" onclick="back()">
        <!-- <img class="back_btn"src="image/back.jpg"/> -->
        <h2>机 L</h2>
        <?PHP
          $count = 0;
          for($i = 0; $i < count($imgs); $i++) {
              if (strstr($imgs[$i],"table_L")) {
                $count++;
          ?>
          <img class="prev_image" id=<?= "$imgs[$i]" ?> src="image/<?= "$imgs[$i]" ?>.jpg" onclick="show('table_L')"/>
          <?php
            }
            if ($count!=0 && $count%2==0){
              echo "<br/>";
            }
         } ?>
    </div>
    <!-- preview end -->
  </body>
</html>
