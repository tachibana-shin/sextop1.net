function ownKeys(object, enumerableOnly) {              let keys = Object.keys(object);                      if (Object.getOwnPropertySymbols) {                     let symbols = Object.getOwnPropertySymbols(object);                                                       if (enumerableOnly) symbols = symbols.filter(function(sym) {                                                 return Object.getOwnPropertyDescriptor(object, sym).enumerable;                                        });                                                  keys.push.apply(keys, symbols);                   }                                                    return keys;                                      }                                                                                                         function _objectSpread(target) {                        for (let i = 1; i < arguments.length; i++) {            let source = arguments[i] != null ? arguments[i] : {};                                                    if (i % 2) {                                            ownKeys(Object(source), true).forEach(function(key) {                                                        target[ key ] = source[key]                       });                                               } else if (Object.getOwnPropertyDescriptors) {                                                               Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));                             } else {                                                ownKeys(Object(source)).forEach(function(key) {                                                              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));                      });                                               }                                                 }
   return target
}

const VueTouchScroll = {
   install(Vue) {
      let ELEMENT = []

      function addElement(element, type, scrollbar = { render: true }) {
         
         scrollbar =  _objectSpread({ render: true }, scrollbar)
         
         if (scrollbar == null || typeof scrollbar != "object") {
            scrollbar = new Object(null)
         }
         ELEMENT.push({ element, type, scrollbar })
      }

      function removeElement(element2) {
         ELEMENT = ELEMENT.filter(({ element }) => element !== element2)
      }

      function E() {
         let a = document.createElement("style");
         document.head.appendChild(a), C = document.styleSheets[document.styleSheets.length - 1]
      }

      function F(a) {
         function f(a) {
            a.preventDefault(), y = !0, e && (clearTimeout(e), e = 0), c && (M(c), c = null);
            let b = g ? a.touches[0] : a;
            w = b.clientX, x = b.clientY;
            if (A.length > 1)
               for (let d = 0; d < A.length; ++d) {
                  let f = A[d];
                  if (f.disable && f.disable(w, x, u, v)) {
                     f.terminate(), A.splice(d--, 1);
                     if (A.length == 1) {
                        let h = A[0];
                     }
                  }
               }
            A.forEach(function(b) {
               let c = b.filter(w, x);
               b.track(c, a.timeStamp)
            })
         }

         function h(a) {
            if (c) {
               let b = document.createEvent("MouseEvents");
               b.initMouseEvent("click", !0, !0, window, 1), c[0].dispatchEvent(b), M(c)
            }
            document.removeEventListener(g ? "touchmove" : "mousemove", f, !1), document.removeEventListener(g ? "touchend" : "mouseup", h, !1), A.forEach(function(a) {
               a.takeoff()
            })
         }
         let b = g ? a.touches[0] : a,
            c = null;
         w = u = b.clientX, x = v = b.clientY, y = !1, A = H({ element: a.target, type: "Y" }, w, x, a.timeStamp, a);
         if (!A.length) return !0;
         let d = a.target,
            e = setTimeout(function() {
               e = 0, c = L(d)
            }, 50);
         document.addEventListener(g ? "touchmove" : "mousemove", f, !1), document.addEventListener(g ? "touchend" : "mouseup", h, !1)
      }

      function G(a, b, c, d, scrollbar) {
         function X(a, b) {
            N.push({
               node: a,
               callback: b,
               keyframes: []
            })
         }

         function Y(a) {
            D = a
         }

         function Z(a) {
            P = a, $(I, J)
         }

         function $(a, b) {
            L = b - J, J = b, E = a - I, I = a, Math.abs(E) < i ? ++M : (M && --M, M = 0);
            if (f)
               if (v > x && A == x) {
                  let c = v - x;
                  E *= (1 - c / G) * k
               } else if (v < w && z == w) {
               let c = w - v;
               E *= (1 - c / G) * k
            }
            return v += E, bc(v), e.style.webkitAnimationName = "", N.forEach(function(a) {
               a.node.style.webkitAnimationName = ""
            }), !0
         }

         function _(a) {
            let b = -w - x;
            if (u && j < b) {
               let c = j - q * 2,
                  d = c / b * c,
                  e;
               if (a > x) d = Math.max(d - (a - x), r), e = 0;
               else if (a < w) {
                  let f = d - (w - a);
                  d = Math.max(d - (w - a), r), e = c - d
               } else e = Math.abs(a) / b * (c - d);
               return e += q, "translate3d(0, " + Math.round(e) + "px,  0) " + "scaleY(" + Math.round(d) + ")"
            }
         }

         function ba() {
            M && (E = 0), v += E, bc(v), E = E / L * s;
            let b = bb();
            if (!b.time) {
               bf();
               return
            }
            e.cleanup && e.cleanup(), C.insertRule(b.css, 0), N.forEach(function(c, d) {
               c.name = "scrollability-track" + B++;
               let e = K(a, c.keyframes, c.name, b.time);
               C.insertRule(e, 0)
            }), e.earlyEnd = function() {
               be(!0)
            }, e.normalEnd = function() {
               bd(b.keyframes[b.keyframes.length - 1].position), be()
            }, e.cleanup = function() {
               delete e.cleanup, C.deleteRule(0), N.forEach(function(a) {
                  C.deleteRule(0)
               })
            }, e.addEventListener("webkitAnimationEnd", e.normalEnd, !1), R(e, b.name, b.time), N.forEach(function(a) {
               R(a.node, a.name, b.time)
            })
         }

         function bb() {
            function Q(a) {
               let f = v - c;
               if (a || b - d >= t || e < 0 != f < 0) o.push({
                  position: v,
                  time: b
               }), N.forEach(function(a) {
                  a.keyframes.push({
                     time: b,
                     css: a.callback(v)
                  })
               }), e = f, c = v, d = b
            }
            let b = 0,
               c = v,
               d = 0,
               e = 0,
               i, k, m = 0,
               n, o = [];
            if (g)
               if (Math.abs(v - x) > H || Math.abs(E) > p)
                  if (v > x) {
                     if (x != A) {
                        x += j + D, w += j + D;
                        let q = w % j,
                           r = -Math.round((v + j - q) / (j + D));
                     }
                  } else if (w != z) {
               x -= j + D, w -= j + D;
               let q = w % j,
                  r = -Math.round((v - j - q) / (j + D));

            }
            let u = !0;
            while (u) {
               if (v > x && f)
                  if (E > 0) {
                     let y = v - x,
                        C = 1 - y / G;
                     E = Math.max(E - l, 0) * C, v += E
                  } else m || (i = v, k = x - v), v = O(m, i, k, F), u = ++m <= F && Math.floor(Math.abs(v)) > x;
               else if (v < w && f)
                  if (E < 0) {
                     let y = w - v,
                        C = 1 - y / G;
                     E = Math.min(E + l, 0) * C, v += E
                  } else m || (i = v, k = w - v), v = O(m, i, k, F), u = ++m <= F && Math.ceil(v) < w;
               else {
                  u = Math.floor(Math.abs(E) * 10) > 0;
                  if (!u) break;
                  E *= h, v += E
               }
               Q(!u), b += s
            }
            if (g) {
               let I = Math.round(v / (j + D));
               v = I * (j + D), Q(!0)
            } else v > x && f ? (v = x, Q(!0)) : v < w && f && (v = w, Q(!0));
            let J = o.length ? o[o.length - 1].time : 0,
               L = "scrollability" + B++,
               M = K(a, o, L, J, P);
            return {
               time: J,
               position: v,
               keyframes: o,
               name: L,
               css: M
            }
         }

         function bc(b) {
            bd(b), u && y && S(u)
         }

         function bd(b) {
            e.style.webkitTransform = a.update(b + P), e.scrollableOffset = P, N.forEach(function(a) {
               a.node.style.webkitTransform = a.callback(b)
            })
         }

         function be(b) {
            u && (b ? S(u) : (u.style.opacity = "0", u.style.webkitTransition = "opacity 0.33s linear")), e.removeEventListener("webkitAnimationEnd", e.normalEnd, !1), delete e.earlyEnd, delete e.normalEnd
         }

         function bf() {
            be()
         }
         let e = a.node,
            f = a.constrained,
            g = a.paginated,
            j = a.viewport || 0,
            u = a.scrollbar,
            v = a.position,
            w = a.min,
            x = a.max,
            z = w,
            A = Math.round(x / j) * j,
            D = 0,
            E = 0,
            F = g ? n : m,
            G = a.bounce,
            H = j * o,
            I = a.filter(b, c),
            startTouch = I,
            J = d,
            L = 0,
            M = 0,
            N = [],
            P = e.scrollableOffset || 0;
         if (!a.mute) {
            let Q = {
               position: v,
               track: X,
               setSpacing: Y,
               setOffset: Z
            };
         }
         if (g) {
            if (D === undefined) {
               let U = Math.round(Math.abs(z) % j),
                  V = (Math.abs(z) - U) / j + 1;
               D = U / V
            }
            let W = Math.round(v / (j + D));
            w = x = W * (j + D), z += D
         }
         if (u && u.nodeType) {

            if (typeof scrollbar.style == "string") {
               u.style = scrollbar.style
            } else {
               for (let key in scrollbar.style) {
                  u.style[key] = scrollbar.style[key]
               }
            }


            if (typeof scrollbar.class == "object") {
               if (Array.isArray(scrollbar.class)) {
                  u.className += scrollbar.class.join(" ")
               } else {
                  for (let [thisClass, state] of scrollbar.class) {
                     if (state) {
                        u.className += " " + thisClass
                     }
                  }
               }
            } else {
               u.className += scrollbar.class
            }

            u.className = u.className.replace(/\s{2,}/g, " ").split(" ").filter((value, index, array) => array.indexOf(value, index + 1) == -1).join(" ")
         }
         
         return u && (X(u, _), (scrollbar.render ? (u.parentNode || e.parentNode.appendChild(u)) : u.parentNode && e.parentNode.removeChild(u))), e.earlyEnd && (R(e), N.forEach(function(a) {
            R(a.node)
         }), e.earlyEnd(), bc(v)), a.reposition = bc, a.track = $, a.takeoff = ba, a.terminate = bf, a
      }

      function H(a, b, c, d, f) {
         let e = []
         for (let g = 0; g < ELEMENT.length; ++g) {
            if ([f.target, f.currentTarget, f.srcElement].some(e => ELEMENT[g].element.contains(e)))
               I(ELEMENT[g], e, b, c, d);
         }
         return e
      }

      function I({ element, type, scrollbar }, b, c, d, e) {
         while (element) {
            if (element.nodeType == 1) {
               let f = J({ element, type }, c, d, e);
               if (f) {
                  let g = !1;
                  for (let h = 0; h < b.length; ++h)
                     if (b[h].node == element) {
                        g = !0;
                        break
                     }
                  g || (f = G(f, c, d, e, scrollbar), f && b.push(f))
               }
            }
            element = element.parentNode
         }
      }

      function J({ element, type }, b, c, d) {

         if (ELEMENT.some(item => item.element === element)) {

            let g = e[f];
            if (D[type]) {
               let h = D[type](element);
               return h.direction = type, h.paginated = element.className.indexOf("paginated") != -1, h
            }
         }
      }

      function K(a, b, c, d, e) {
         let f = ["@-webkit-keyframes " + c + " {"];
         return b.forEach(function(b) {
            let c = b.time / d * 100,
               g = Math.floor(c) + "% {" + "-webkit-transform: " + (b.css || a.update(b.position + e)) + ";" + "}";
            f.push(g)
         }), f.push("}"), f.join("\n")
      }

      function L(a) {
         let b = [];
         for (let c = a; c; c = c.parentNode) c.nodeType == 1 && (c.className = (c.className ? c.className + " " : "") + "touched", b.push(c));
         return b
      }

      function M(a) {
         for (let b = 0; b < a.length; ++b) {
            let c = a[b];
            c.className = c.className.replace("touched", "")
         }
      }

      function N(a) {
         if (!a.scrollableScrollbar) {
            let b = a.scrollableScrollbar = document.createElement("div");
            b.style = "position: absolute;top: 0;right: 2px;width: 7px;height: 1px;z-index: 999999;opacity: 0;transform: translate3d(0, 0, 0);box-sizing: border-box;transform-origin: top left;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAABCAYAAADuHp8EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC5JREFUeNpi/P//vyQDAwMjKytr2Z8/f9gYIICRAQH+Q/n/WVhYfgNBJ4gNEGAAhVUOGMTI0TwAAAAASUVORK5CYII=) no-repeat"
         }
         return a.scrollableScrollbar
      }

      function O(a, b, c, d) {
         return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
      }

      function P(a) {
         let b = a.parentNode,
            c = a.querySelector("* > .clipper") || a;
         a.style.webkitAnimation && (a.style.webkitAnimationPlayState = "paused");
         let d = getComputedStyle(a).webkitTransform,
            e = (new WebKitCSSMatrix(d)).m41 - (a.scrollableOffset || 0);
         return {
            node: a,
            min: -c.offsetWidth + b.offsetWidth,
            max: 0,
            position: e,
            viewport: b.offsetWidth,
            bounce: b.offsetWidth * k,
            constrained: !0,
            filter: function(a, b) {
               return a
            },
            disable: function(a, b, c, d) {
               let e = Math.abs(a - c),
                  f = Math.abs(b - d);
               if (f > e && f > j) return !0
            },
            update: function(a) {
               return "translate3d(" + Math.round(a) + "px, 0, 0)"
            }
         }
      }

      function Q(a) {
         let b = a.parentNode,
            c = a.querySelector("* > .clipper") || a;
         a.style.webkitAnimation && (a.style.webkitAnimationPlayState = "paused");
         let d = getComputedStyle(a).webkitTransform,
            e = (new WebKitCSSMatrix(d)).m42;
         return {
            node: a,
            scrollbar: N(a),
            position: e,
            min: -c.offsetHeight + b.offsetHeight,
            max: 0,
            viewport: b.offsetHeight,
            bounce: b.offsetHeight * k,
            constrained: !0,
            filter: function(a, b) {
               return b
            },
            disable: function(a, b, c, d) {
               let e = Math.abs(a - c),
                  f = Math.abs(b - d);
               if (e > f && e > j) return !0
            },
            update: function(a) {
               return "translate3d(0, " + Math.round(a) + "px, 0)"
            }
         }
      }

      function R(a, b, c) {
         b && (a.style.webkitAnimation = b + " " + c + "ms linear both"), a.style.webkitAnimationPlayState = b ? "running" : "paused"
      }

      function S(a) {
         a.style.webkitTransition = "", a.style.opacity = "1"
      }

      let e = "webkitTransform" in document.documentElement.style,
         f = e && /OS 5_/.exec(navigator.userAgent),
         g = "ontouchstart" in window,
         h = .9925,
         i = 4,
         j = 10,
         k = .75,
         l = .01,
         m = 240,
         n = 160,
         o = .5,
         p = 2,
         q = 2,
         r = 7,
         s = 4,
         t = 24,
         u, v, w, x, y, z = 0,
         A = [],
         B = 0,
         C, D = {
            horizontal: P,
            vertical: Q
         };

      function onload() {
         document.addEventListener(g ? "touchstart" : "mousedown", F, !1)
         E()
      }

      document.addEventListener("DOMContentLoaded", onload)

      if (document.readyState == "complete") {
         onload()
      }

      Vue.directive("touch-scroll", {
         bind(element, { arg, value }) {
            
            addElement(element, arg, typeof value == "object" && value ? value.scrollbar : null)
         },
         update(element, { arg, value }) {
            removeElement(element)
            addElement(element, arg, typeof value == "object" && value ? value.scrollbar : null)
         },
         unbind(element) {
            removeElement(element)
         }
      })
      Vue.component("VueTouchScroll", this.VueTouchScroll)
   },
   VueTouchScroll: {
      props: {
         scrollbar: Object,
         hideScrollbar: Boolean,
         classScrollbar: [String, Object, Array],
         tag: {
            type: String,
            default: "div"
         },
         type: {
            type: String,
            default: "vertical",
            validator(value) {
               return ["vertical", "horizontal"].indexOf(value) > -1
            }
         }
      },
      render(h) {
         return h(this.tag, {
            directives: [
               {
                  name: "touch-scroll",
                  arg: this.type,
                  value: {
                     scrollbar: _objectSpread({}, this.scrollbar, {
                        render: !this.hideScrollbar,
                        class: this.classScrollbar
                     })
                  }
               }
            ]
         }, [this.$slots.default])
      }
   }
}

if (typeof Vue == "function") {
   Vue.use(VueTouchScroll)
}

export default VueTouchScroll
