function playSound1() {
  var obj = document.createElement("audio");
      obj.src = "assets/sound.m4a";
      obj.play();
      obj.volume = 0.09;
}

function playSound2() {
  var obj = document.createElement("audio");
      obj.src = "assets/sound.m4a";
      obj.play();
      obj.volume = 0.09;
}

function playSound3() {
  var obj = document.createElement("audio");
      obj.src = "assets/sound.m4a";
      obj.play();
      obj.volume = 0.09;
}

function playSound4() {
  var obj = document.createElement("audio");
      obj.src = "assets/sound.m4a";
      obj.play();
      obj.volume = 0.09;
}

$( ".item1" ).hover(
  function() {
    $( ".img1" ).addClass( 'img-show' );
    $( ".text1" ).addClass( 'text-show' );
    playSound2();
  }, function() {
    $( ".img1" ).removeClass( 'img-show' );
    $( ".text1" ).removeClass( 'text-show' );
  }
);

$( ".item2" ).hover(
  function() {
    $( ".img2" ).addClass( 'img-show' );
    $( ".text2" ).addClass( 'text-show' );
    playSound2();
  }, function() {
    $( ".img2" ).removeClass( 'img-show' );
    $( ".text2" ).removeClass( 'text-show' );
  }
);

$( ".item3" ).hover(
  function() {
    $( ".img3" ).addClass( 'img-show' );
    $( ".text3" ).addClass( 'text-show' );
    playSound3();
  }, function() {
    $( ".img3" ).removeClass( 'img-show' );
    $( ".text3" ).removeClass( 'text-show' );
  }
);

$( ".item4" ).hover(
  function() {
    $( ".img4" ).addClass( 'img-show' );
    $( ".text4" ).addClass( 'text-show' );
    playSound4();
  }, function() {
    $( ".img4" ).removeClass( 'img-show' );
    $( ".text4" ).removeClass( 'text-show' );
  }
);

$( ".item5" ).hover(
  function() {
    $( ".img5" ).addClass( 'img-show' );
    $( ".text5" ).addClass( 'text-show' );
    playSound4();
  }, function() {
    $( ".img5" ).removeClass( 'img-show' );
    $( ".text5" ).removeClass( 'text-show' );
  }
);

$( ".item6" ).hover(
  function() {
    $( ".img6" ).addClass( 'img-show' );
    $( ".text6" ).addClass( 'text-show' );
    playSound4();
  }, function() {
    $( ".img6" ).removeClass( 'img-show' );
    $( ".text6" ).removeClass( 'text-show' );
  }
);
