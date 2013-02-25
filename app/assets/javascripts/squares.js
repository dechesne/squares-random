jQuery(document).ready(function() {
  var blocksAmount = 200;
  var blockSize    = $('.squares li.template').outerWidth(true);

  var viewportWith   = $(window).width();
  var viewportHeight = $(window).height();

  var blocksFitX = Math.floor((viewportWith / blockSize) * 100) / 100;
      blocksFitX = blocksFitX.toFixed(2);
      blocksFitX = blocksFitX.split('.')[1];

  if(blocksFitX != 0) {
    for (blocksFitX; blocksFitX != 0; blocksFitX) {
      blockSize  = blockSize + 1;

      blocksFitX = Math.floor((viewportWith / blockSize) * 100) / 100;
      blocksFitX = blocksFitX.toFixed(2);
      blocksFitX = blocksFitX.split('.')[1];
    };
  }

  var blockMarginLeft  = parseInt($('.squares li.template').css('margin-left').replace("px", ""));
  var blockMarginRight = parseInt($('.squares li.template').css('margin-right').replace("px", ""));
  var blockNewSize     = blockSize - (blockMarginLeft + blockMarginRight);

  var blocksX = Math.floor(viewportWith / blockSize);
  var blocksY = Math.floor(viewportHeight / blockSize);

  var docMarginY = (viewportHeight - (blockSize * blocksY)) / 2;

  blocksAmount = blocksX * blocksY;

  $('body').css('padding-top', docMarginY);
  $('.squares li').css('width', blockNewSize);
  $('.squares li').css('height', blockNewSize);

  for (var i = 1; i < blocksAmount; i++) {
    var block = $('.squares li.template').clone();
    block.removeClass('template');
    $('.squares').append(block);
  };

  var $blocks = $('.squares li');

  var turnTimeMin = 100;
  var turnTimeMax = 200;

  setInterval(function(){
    var randomTurnTime = Math.floor(turnTimeMin + (Math.random()*((turnTimeMax - turnTimeMin)) + 1))
    var randomBlock = Math.floor(Math.random()*(blocksAmount+1));
      $($blocks[randomBlock]).addClass('flip');
      setTimeout(function(){
        $($blocks[randomBlock]).removeClass('flip');
      }, randomTurnTime);
  }, 100);

  $('.squares li').bind({
    click: function(){
      $(this).addClass('flip');
    }
  });

});
 