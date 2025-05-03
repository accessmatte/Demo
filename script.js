var gesture = {
      x: [],
      y: [],
      match: ''
    },
    tolerance = 100,
    output = document.getElementById('surface');

var surface = document.getElementById('surface');

surface.addEventListener('touchstart',function(e){
  e.preventDefault()
  for (i=0;i<e.touches.length;i++){
    var dot = document.createElement('em');
    dot.id = i
    dot.style.top = e.touches[i].clientY-25+'px'
    dot.style.left = e.touches[i].clientX-25+'px'
    document.body.appendChild(dot)
    gesture.x.push(e.touches[i].clientX)
    gesture.y.push(e.touches[i].clientY)
  }
});
surface.addEventListener('touchmove',function(e){
  e.preventDefault()
  for (var i=0; i<e.touches.length; i++) {
    var dot = document.getElementById(i);
    dot.style.top = e.touches[i].clientY-25+'px'
    dot.style.left = e.touches[i].clientX-25+'px'
    gesture.x.push(e.touches[i].clientX)
    gesture.y.push(e.touches[i].clientY)
  }
});
surface.addEventListener('touchend',function(e){
  var dots = document.querySelectorAll('em'),
      xTravel = gesture.x[gesture.x.length-1] - gesture.x[0],
      yTravel = gesture.y[gesture.y.length-1] - gesture.y[0];
  if (xTravel<tolerance && xTravel>-tolerance && yTravel<-tolerance){
    document.write('<img src=""/><h2 id="ca">~~</h2><p id=""></p><p id="cd"></p><p id="cb">/=</p><div id="quantityc"><input id="quantity3" value="1" style="width: 38%; height: 110px;"/> <button id="aaa3" style="width: 37%; background: #b3056d;"><h2>quantity</h2></button>');
  }
  if (xTravel<tolerance && xTravel>-tolerance && yTravel>tolerance){
    document.write('<img src=""/><h2 id="ca">~~</h2><p id=""></p><p id="cd"></p><p id="cb">/=</p><div id="quantityc"><input id="quantity3" value="1" style="width: 38%; height: 110px;"/> <button id="aaa3" style="width: 37%; background: #b3056d;"><h2>quantity</h2></button>');
  }
  if (yTravel<tolerance && yTravel>-tolerance && xTravel<-tolerance){
    document.write('<img src=""/><h2 id="ca">~~</h2><p id=""></p><p id="cd"></p><p id="cb">/=</p><div id="quantityc"><input id="quantity3" value="1" style="width: 38%; height: 110px;"/> <button id="aaa3" style="width: 37%; background: #b3056d;"><h2>quantity</h2></button>');
  }
  if (yTravel<tolerance && yTravel>-tolerance && xTravel>tolerance){
    document.write('<img src=""/><h2 id="ca">~~</h2><p id=""></p><p id="cd"></p><p id="cb">/=</p><div id="quantityc"><input id="quantity3" value="1" style="width: 38%; height: 110px;"/> <button id="aaa3" style="width: 37%; background: #b3056d;"><h2>quantity</h2></button>');
  }
  if (gesture.match!==''){
    output.innerHTML = gesture.match
    output.style.opacity = 1
  }
  setTimeout(function(){
    output.style.opacity = 1
  },500)
  gesture.x = []
  gesture.y = []
  gesture.match = xTravel = yTravel = ''
  for (i=0;i<dots.length;i++){
    dots[i].id = ''
    dots[i].style.opacity = 1
    setTimeout(function(){
      document.body.removeChild(dots[i])
    },1000)
  }
})