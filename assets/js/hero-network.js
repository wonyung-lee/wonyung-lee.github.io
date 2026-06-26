/* =============================================================================
   Hero network background — pure-canvas, no external libraries.
   Floating nodes that connect with thin lines when they drift close together.
   Sits behind the home hero title; tune the values in CONFIG below.
   ============================================================================= */
(function () {
  "use strict";

  // ---- Tunable settings -----------------------------------------------------
  var CONFIG = {
    // Color: null = inherit the site theme (--global-theme-color). Or set e.g. "#b509ac".
    color: null,
    nodeOpacity: 0.40, // 0–1, kept low so the title stays readable
    lineOpacity: 0.18, // 0–1
    // Density: roughly one node per N pixels of hero area (bigger = fewer nodes).
    areaPerNode: 7000,
    areaPerNodeMobile: 14000,
    maxNodes: 70,
    maxNodesMobile: 30,
    speed: 0.18, // drift in px/frame
    linkDistance: 140, // px: connect nodes closer than this
    nodeRadius: 1.8, // px
    mobileBreakpoint: 600, // px viewport width
  };
  // ---------------------------------------------------------------------------

  var canvas = document.getElementById("hero-network");
  if (!canvas) return;
  var hero = document.querySelector(".post-header");
  if (!hero) return;

  // Place the canvas as a background layer inside the hero.
  if (canvas.parentElement !== hero) {
    hero.insertBefore(canvas, hero.firstChild);
  }

  var ctx = canvas.getContext("2d");
  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var dpr = Math.max(1, window.devicePixelRatio || 1);
  var nodes = [];
  var W = 0,
    H = 0;
  var rgb = [136, 136, 136];
  var raf = null;

  function parseColor(value) {
    var probe = document.createElement("span");
    probe.style.cssText = "display:none;color:" + value;
    document.body.appendChild(probe);
    var c = getComputedStyle(probe).color; // normalized to rgb(...)
    probe.remove();
    var m = c.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    return m ? [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)] : [136, 136, 136];
  }

  function resolveThemeColor() {
    if (CONFIG.color) return parseColor(CONFIG.color);
    var v = getComputedStyle(document.documentElement)
      .getPropertyValue("--global-theme-color")
      .trim();
    return parseColor(v || "#888888");
  }

  function nodeCount() {
    var mobile = W <= CONFIG.mobileBreakpoint;
    var per = mobile ? CONFIG.areaPerNodeMobile : CONFIG.areaPerNode;
    var cap = mobile ? CONFIG.maxNodesMobile : CONFIG.maxNodes;
    return Math.max(6, Math.min(cap, Math.round((W * H) / per)));
  }

  function initNodes() {
    var n = nodeCount();
    nodes = [];
    for (var i = 0; i < n; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 2 * CONFIG.speed,
        vy: (Math.random() - 0.5) * 2 * CONFIG.speed,
      });
    }
  }

  function resize() {
    W = hero.clientWidth;
    H = hero.clientHeight;
    canvas.width = Math.max(1, Math.floor(W * dpr));
    canvas.height = Math.max(1, Math.floor(H * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rgb = resolveThemeColor();
    initNodes();
    if (prefersReduced) draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    var r = rgb[0],
      g = rgb[1],
      b = rgb[2];
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < CONFIG.linkDistance) {
          var a = CONFIG.lineOpacity * (1 - d / CONFIG.linkDistance);
          ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.fillStyle =
      "rgba(" + r + "," + g + "," + b + "," + CONFIG.nodeOpacity + ")";
    for (var k = 0; k < nodes.length; k++) {
      ctx.beginPath();
      ctx.arc(nodes[k].x, nodes[k].y, CONFIG.nodeRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function step() {
    for (var i = 0; i < nodes.length; i++) {
      var p = nodes[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x <= 0 || p.x >= W) p.vx *= -1;
      if (p.y <= 0 || p.y >= H) p.vy *= -1;
      p.x = Math.max(0, Math.min(W, p.x));
      p.y = Math.max(0, Math.min(H, p.y));
    }
    draw();
    raf = requestAnimationFrame(step);
  }

  function start() {
    resize();
    if (prefersReduced) return; // static single frame, no loop
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(step);
  }

  // Re-read theme color when the user toggles light/dark.
  if (window.MutationObserver) {
    new MutationObserver(function () {
      rgb = resolveThemeColor();
      if (prefersReduced) draw();
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
  }

  // Redraw on window resize (debounced).
  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(resize, 200);
  });

  start();
})();
