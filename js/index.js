window.onload = function(){
  var oWrap = document.getElementById("wrap"),
      oWraps = document.getElementById("wraps");
      oBlock = document.getElementById("block"),
      detailImg = document.getElementById("detailimg");
  var _offsetleft = oWraps.offsetLeft + oBlock.clientWidth/2,
      _offsetTop = oWraps.offsetTop + oBlock.clientHeight/2;
  var _detailimgwidth = -parseInt(detailImg.clientWidth)+350,
      _detailimgheight = -parseInt(detailImg.clientHeight)+236;

  oWrap.onmouseenter = function(){
    oBlock.style.zIndex = "1";
    detailImg.style.zIndex = "1";
  }
  oWrap.onmouseleave = function(){
    oBlock.style.zIndex = "-1";
    detailImg.style.zIndex = "-1";
  }
  oWrap.onmousemove = function(ev){
    oBlock.style.left = ev.clientX - _offsetleft + 'px';
    oBlock.style.top = ev.clientY - _offsetTop + 'px';
    var oBlockLeft = parseInt(oBlock.style.left),
        oBlockTop = parseInt(oBlock.style.top);
    if(oBlockLeft<0){
      oBlock.style.left = '0px';
    }
    else if(oBlockLeft>230){
      oBlock.style.left = '230px';
    }
    if(oBlockTop<0){
      oBlock.style.top = '0px';
    }
    else if(oBlockTop>116){
      oBlock.style.top = '116px';
    }
    detailImg.style.marginLeft = parseInt(oBlock.style.left)*(_detailimgwidth/230) +'px';
    detailImg.style.marginTop = parseInt(oBlock.style.top)*(_detailimgheight/116) +'px';
    console.log(parseInt(oBlock.style.left));
  }
}
