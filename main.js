///////////////////////////////
// -------  rotate  -------- //
///////////////////////////////

(function() {
  var init, rotate, start, stop,
    active = false,
    angle = 0,
    rotation = 0,
    startAngle = 0,
    center = {
      x: 0,
      y: 0
    },
    R2D = 180 / Math.PI,
    rot = document.getElementById('attack_disc');

  init = function() {
    rot.addEventListener("mousedown", start, false);
    $(document).bind('mousemove', function(event) {
      if (active === true) {
        event.preventDefault();
        rotate(event);
      }
    });
    $(document).bind('mouseup', function(event) {
      event.preventDefault();
      stop(event);
    });
  };

  start = function(e) {
    e.preventDefault();
    var bb = this.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x, y;
    center = {
      x: l + (w / 2),
      y: t + (h / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function(e) {
    e.preventDefault();
    var x = e.clientX - center.x,
      y = e.clientY - center.y,
      d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
  };

  stop = function() {
    angle += rotation;
    return active = false;
  };

  init();

}).call(this);

(function() {
  var init, rotate, start, stop,
    active = false,
    angle = 0,
    rotation = 0,
    startAngle = 0,
    center = {
      x: 0,
      y: 0
    },
    R2D = 180 / Math.PI,
    rot = document.getElementById('course_disc');

  init = function() {
    rot.addEventListener("mousedown", start, false);
    $(document).bind('mousemove', function(event) {
      if (active === true) {
        event.preventDefault();
        rotate(event);
      }
    });
    $(document).bind('mouseup', function(event) {
      event.preventDefault();
      stop(event);
    });
  };

  start = function(e) {
    e.preventDefault();
    var bb = this.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x, y;
    center = {
      x: l + (w / 2),
      y: t + (h / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function(e) {
    e.preventDefault();
    var x = e.clientX - center.x,
      y = e.clientY - center.y,
      d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
  };

  stop = function() {
    angle += rotation;
    return active = false;
  };

  init();

}).call(this);

(function() {
  var init, rotate, start, stop,
    active = false,
    angle = 0,
    rotation = 0,
    startAngle = 0,
    center = {
      x: 0,
      y: 0
    },
    R2D = 180 / Math.PI,
    rot = document.getElementById('aob_disc');

  init = function() {
    rot.addEventListener("mousedown", start, false);
    $(document).bind('mousemove', function(event) {
      if (active === true) {
        event.preventDefault();
        rotate(event);
      }
    });
    $(document).bind('mouseup', function(event) {
      event.preventDefault();
      stop(event);
    });
  };

  start = function(e) {
    e.preventDefault();
    var bb = this.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x, y;
    center = {
      x: l + (w / 2),
      y: t + (h / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function(e) {
    e.preventDefault();
    var x = e.clientX - center.x,
      y = e.clientY - center.y,
      d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
  };

  stop = function() {
    angle += rotation;
    return active = false;
  };

  init();

}).call(this);

var bearing_lead_disc = $("#bearing_lead_disc");
var mouseDown = false;
var offset = bearing_lead_disc.offset();

function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset.left) + (bearing_lead_disc.width() / 2);
    var center_y = (offset.top) + (bearing_lead_disc.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    bearing_lead_disc.css('-moz-transform', 'rotate(' + degree + 'deg)');
    bearing_lead_disc.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    bearing_lead_disc.css('-o-transform', 'rotate(' + degree + 'deg)');
    bearing_lead_disc.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

bearing_lead_disc.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})