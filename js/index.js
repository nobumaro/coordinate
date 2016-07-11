//2D素材 配列作成
var imgs = {};

//終
//　画像 php➡js変換
var jtemp = '<?PHP echo $temp; ?>';
var imgs = jtemp.split(',');
// 終
// メニューボタンを押したとき
function furniture(value) {
  if (value == 'chair_S') {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('prev_chair_S').style.display = 'block';
  }else if (value == 'chair_L') {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('prev_chair_L').style.display = 'block';
  }
  else if (value == 'table_S') {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('prev_table_S').style.display = 'block';
  }
  else if (value == 'table_L') {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('prev_table_L').style.display = 'block';
  }
}
// 終

// メニュー戻るボタンを押したとき
function back() {
  document.getElementById('menu').style.display = 'block';
  var elm = document.getElementsByClassName('preview');
  for (var i = 0; i < elm.length; i++) {
    elm[i].style.display = 'none';

  }
}
// $(function(){
//   $('#room').sortable();
// });
// 終

//写真クリック
  var count = 1;
var elm = "";
$(function () {
  $(".prev_image").on('click', function(){
    value = $(this).attr("id");
    //alert(value);
    if (value.indexOf('chair_S') === 0) {
      // document.getElementById("field").innerHTML='<img class="drag_Image" src="./image/chair_S_fp_01.png" draggable="true"/>';
      $("#field").append($("<img src='./image/chair_S_01.png' id=Img_"+count+" class='drag_Image'>"));
      imgs["Img_" + count] = {"angle":0,"rate":1};
      count++;
    }else if (value.indexOf('chair_L') === 0) {
      // document.getElementById("field").innerHTML='<img class="drag_Image" src="./image/chair_L_fp_01.png"/>';
      $("#field").append($("<img src='./image/chair_L_01.png' id=Img_"+count+" class='drag_Image'>"));
      imgs["Img_" + count] = {angle:"0",rate:"1"};
      count++;
    }
    else if (value.indexOf('table_S') === 0) {
      // document.getElementById("field").innerHTML='<img class="drag_Image" src="./image/table_S_fp_01.png"/>';
      $("#field").append($("<img src='./image/table_S_01.png' id=Img_"+count+" class='drag_Image'>"));
      imgs["Img_" + count] = {"angle":0,"rate":1};
      count++;
    }
    else if (value.indexOf('table_L') === 0) {
      // document.getElementById("field").innerHTML='<img class="drag_Image" src="./image/table_L_fp_01.png"/>';
      $("#field").append($("<img src='./image/table_L-C_01.png' id=Img_"+count+" class='drag_Image'>"));
      imgs["Img_" + count] = {"angle":0,"rate":1};
      count++;
    }
    $(".drag_Image").draggable();

      // $(".drag_Image").on('click', function(){
      //   if (this.id === elm) {
      //   }else {
      //     $('#'+elm).removeClass("PickUp");
      //   }
      // $(this).addClass("PickUp");
      // elm = this.id;
      // });

      judge = 0;
      $(' * ').on('click', function(){
        // alert(judge);
        if (this.id.indexOf('Img_') != -1) {
          if (this.id === elm) {
          }else {
            $('#'+elm).removeClass("PickUp");
          }
          $(this).addClass("PickUp");
          elm = this.id;
          judge = 1;
        } else {
          if(judge != 1){
            $('#'+elm).removeClass("PickUp");
          }
        }
        //   judge = 0;
      });
    });

    //回転処理
    var pic = document.getElementsByClassName("PickUp");
    // var tes = 0;
    $("#wheel").on('click',function(){
      // alert(pic[0].id);
      var value = imgs[pic[0].id][angle];
      imgs[pic[0].id][angle] += 15;
      $(".PickUp").rotate({
        value:value+=15,
        animateTo:value
      });
    });
    //終
    //拡大
    // $("#big").on('click',function(){
    //   pic[0].width = pic[0].naturalWidth * 1.5;
    // });
    //終
  });

// $('.drag_Image').on('focus', function(){
//
// });
// $('.drag_Image').on('blur', function(){
//   $('.drag_Image').draggable();
// });
//終
// ドラッグ処理
// $(function(){
//   $('.drag_Image').draggable({
//     // helper:"clone",
//     // connectToSortable:"#room"
//   });
// });
// //終

// //シーンの作成
// var scene = new THREE.Scene();
//
// //カメラの作成
// var fov = 75;
//
// var height = 600;
// var width = 400;
// var aspect = height/width;
// //カメラの距離(1~1000)
// var near = 1;
// var far = 1000;
//
// var camera = new THREE.PerspectiveCamera(fov,near,far);
//
// camera.position.set(0,0,70);
