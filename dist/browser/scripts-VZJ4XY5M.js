/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */ (function (
  m,
  se,
) {
  "use strict";
  typeof module == "object" && typeof module.exports == "object"
    ? (module.exports = m.document
        ? se(m, !0)
        : function (ee) {
            if (!ee.document)
              throw new Error("jQuery requires a window with a document");
            return se(ee);
          })
    : se(m);
})(typeof window < "u" ? window : this, function (m, se) {
  "use strict";
  var ee = [],
    L = Object.getPrototypeOf,
    Le = ee.slice,
    rn = ee.flat
      ? function (e) {
          return ee.flat.call(e);
        }
      : function (e) {
          return ee.concat.apply([], e);
        },
    Xt = ee.push,
    Re = ee.indexOf,
    Qe = {},
    Ln = Qe.toString,
    It = Qe.hasOwnProperty,
    pe = It.toString,
    $ = pe.call(Object),
    M = {},
    I = function (e) {
      return (
        typeof e == "function" &&
        typeof e.nodeType != "number" &&
        typeof e.item != "function"
      );
    },
    at = function (e) {
      return e != null && e === e.window;
    },
    J = m.document,
    an = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function or(e, n, a) {
    var o,
      l,
      f = (a = a || J).createElement("script");
    if (((f.text = e), n))
      for (o in an)
        (l = n[o] || (n.getAttribute && n.getAttribute(o))) &&
          f.setAttribute(o, l);
    a.head.appendChild(f).parentNode.removeChild(f);
  }
  function Lt(e) {
    return e == null
      ? e + ""
      : typeof e == "object" || typeof e == "function"
        ? Qe[Ln.call(e)] || "object"
        : typeof e;
  }
  var on = "3.7.1",
    Je = /HTML$/i,
    u = function (e, n) {
      return new u.fn.init(e, n);
    };
  function we(e) {
    var n = !!e && "length" in e && e.length,
      a = Lt(e);
    return (
      !I(e) &&
      !at(e) &&
      (a === "array" ||
        n === 0 ||
        (typeof n == "number" && 0 < n && n - 1 in e))
    );
  }
  function ie(e, n) {
    return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase();
  }
  (u.fn = u.prototype =
    {
      jquery: on,
      constructor: u,
      length: 0,
      toArray: function () {
        return Le.call(this);
      },
      get: function (e) {
        return e == null
          ? Le.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var n = u.merge(this.constructor(), e);
        return (n.prevObject = this), n;
      },
      each: function (e) {
        return u.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          u.map(this, function (n, a) {
            return e.call(n, a, n);
          }),
        );
      },
      slice: function () {
        return this.pushStack(Le.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          u.grep(this, function (e, n) {
            return (n + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          u.grep(this, function (e, n) {
            return n % 2;
          }),
        );
      },
      eq: function (e) {
        var n = this.length,
          a = +e + (e < 0 ? n : 0);
        return this.pushStack(0 <= a && a < n ? [this[a]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: Xt,
      sort: ee.sort,
      splice: ee.splice,
    }),
    (u.extend = u.fn.extend =
      function () {
        var e,
          n,
          a,
          o,
          l,
          f,
          g = arguments[0] || {},
          y = 1,
          b = arguments.length,
          w = !1;
        for (
          typeof g == "boolean" && ((w = g), (g = arguments[y] || {}), y++),
            typeof g == "object" || I(g) || (g = {}),
            y === b && ((g = this), y--);
          y < b;
          y++
        )
          if ((e = arguments[y]) != null)
            for (n in e)
              (o = e[n]),
                n !== "__proto__" &&
                  g !== o &&
                  (w && o && (u.isPlainObject(o) || (l = Array.isArray(o)))
                    ? ((a = g[n]),
                      (f =
                        l && !Array.isArray(a)
                          ? []
                          : l || u.isPlainObject(a)
                            ? a
                            : {}),
                      (l = !1),
                      (g[n] = u.extend(w, f, o)))
                    : o !== void 0 && (g[n] = o));
        return g;
      }),
    u.extend({
      expando: "jQuery" + (on + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var n, a;
        return (
          !(!e || Ln.call(e) !== "[object Object]") &&
          (!(n = L(e)) ||
            (typeof (a = It.call(n, "constructor") && n.constructor) ==
              "function" &&
              pe.call(a) === $))
        );
      },
      isEmptyObject: function (e) {
        var n;
        for (n in e) return !1;
        return !0;
      },
      globalEval: function (e, n, a) {
        or(e, { nonce: n && n.nonce }, a);
      },
      each: function (e, n) {
        var a,
          o = 0;
        if (we(e))
          for (a = e.length; o < a && n.call(e[o], o, e[o]) !== !1; o++);
        else for (o in e) if (n.call(e[o], o, e[o]) === !1) break;
        return e;
      },
      text: function (e) {
        var n,
          a = "",
          o = 0,
          l = e.nodeType;
        if (!l) for (; (n = e[o++]); ) a += u.text(n);
        return l === 1 || l === 11
          ? e.textContent
          : l === 9
            ? e.documentElement.textContent
            : l === 3 || l === 4
              ? e.nodeValue
              : a;
      },
      makeArray: function (e, n) {
        var a = n || [];
        return (
          e != null &&
            (we(Object(e))
              ? u.merge(a, typeof e == "string" ? [e] : e)
              : Xt.call(a, e)),
          a
        );
      },
      inArray: function (e, n, a) {
        return n == null ? -1 : Re.call(n, e, a);
      },
      isXMLDoc: function (e) {
        var n = e && e.namespaceURI,
          a = e && (e.ownerDocument || e).documentElement;
        return !Je.test(n || (a && a.nodeName) || "HTML");
      },
      merge: function (e, n) {
        for (var a = +n.length, o = 0, l = e.length; o < a; o++) e[l++] = n[o];
        return (e.length = l), e;
      },
      grep: function (e, n, a) {
        for (var o = [], l = 0, f = e.length, g = !a; l < f; l++)
          !n(e[l], l) !== g && o.push(e[l]);
        return o;
      },
      map: function (e, n, a) {
        var o,
          l,
          f = 0,
          g = [];
        if (we(e))
          for (o = e.length; f < o; f++)
            (l = n(e[f], f, a)) != null && g.push(l);
        else for (f in e) (l = n(e[f], f, a)) != null && g.push(l);
        return rn(g);
      },
      guid: 1,
      support: M,
    }),
    typeof Symbol == "function" &&
      (u.fn[Symbol.iterator] = ee[Symbol.iterator]),
    u.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, n) {
        Qe["[object " + n + "]"] = n.toLowerCase();
      },
    );
  var sn = ee.pop,
    ir = ee.sort,
    Vt = ee.splice,
    K = "[\\x20\\t\\r\\n\\f]",
    dt = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g");
  u.contains = function (e, n) {
    var a = n && n.parentNode;
    return (
      e === a ||
      !(
        !a ||
        a.nodeType !== 1 ||
        !(e.contains
          ? e.contains(a)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a))
      )
    );
  };
  var je = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function sr(e, n) {
    return n
      ? e === "\0"
        ? "\uFFFD"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  u.escapeSelector = function (e) {
    return (e + "").replace(je, sr);
  };
  var ze = J,
    ln = Xt;
  (function () {
    var e,
      n,
      a,
      o,
      l,
      f,
      g,
      y,
      b,
      w,
      S = ln,
      C = u.expando,
      T = 0,
      _ = 0,
      F = he(),
      E = he(),
      W = he(),
      X = he(),
      Q = function (x, D) {
        return x === D && (l = !0), 0;
      },
      le =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      re =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        K +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      G =
        "\\[" +
        K +
        "*(" +
        re +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
        re +
        "))|)" +
        K +
        "*\\]",
      oe =
        ":(" +
        re +
        `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
        G +
        ")*)|.*)\\)|)",
      q = new RegExp(K + "+", "g"),
      Z = new RegExp("^" + K + "*," + K + "*"),
      nr = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      Tr = new RegExp(K + "|>"),
      ct = new RegExp(oe),
      rr = new RegExp("^" + re + "$"),
      At = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + G),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + le + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      Ut = /^(?:input|select|textarea|button)$/i,
      An = /^h\d$/i,
      Ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Ce = /[+~]/,
      me = new RegExp("\\\\[\\da-fA-F]{1,6}" + K + "?|\\\\([^\\r\\n\\f])", "g"),
      We = function (x, D) {
        var A = "0x" + x.slice(1) - 65536;
        return (
          D ||
          (A < 0
            ? String.fromCharCode(A + 65536)
            : String.fromCharCode((A >> 10) | 55296, (1023 & A) | 56320))
        );
      },
      $t = function () {
        Ht();
      },
      Be = xr(
        function (x) {
          return x.disabled === !0 && ie(x, "fieldset");
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      S.apply((ee = Le.call(ze.childNodes)), ze.childNodes),
        ee[ze.childNodes.length].nodeType;
    } catch {
      S = {
        apply: function (D, A) {
          ln.apply(D, Le.call(A));
        },
        call: function (D) {
          ln.apply(D, Le.call(arguments, 1));
        },
      };
    }
    function H(x, D, A, j) {
      var k,
        R,
        O,
        U,
        N,
        ae,
        z,
        Y = D && D.ownerDocument,
        ne = D ? D.nodeType : 9;
      if (
        ((A = A || []),
        typeof x != "string" || !x || (ne !== 1 && ne !== 9 && ne !== 11))
      )
        return A;
      if (!j && (Ht(D), (D = D || f), y)) {
        if (ne !== 11 && (N = Ye.exec(x)))
          if ((k = N[1])) {
            if (ne === 9) {
              if (!(O = D.getElementById(k))) return A;
              if (O.id === k) return S.call(A, O), A;
            } else if (
              Y &&
              (O = Y.getElementById(k)) &&
              H.contains(D, O) &&
              O.id === k
            )
              return S.call(A, O), A;
          } else {
            if (N[2]) return S.apply(A, D.getElementsByTagName(x)), A;
            if ((k = N[3]) && D.getElementsByClassName)
              return S.apply(A, D.getElementsByClassName(k)), A;
          }
        if (!(X[x + " "] || (b && b.test(x)))) {
          if (((z = x), (Y = D), ne === 1 && (Tr.test(x) || nr.test(x)))) {
            for (
              ((Y = (Ce.test(x) && Cr(D.parentNode)) || D) == D && M.scope) ||
                ((U = D.getAttribute("id"))
                  ? (U = u.escapeSelector(U))
                  : D.setAttribute("id", (U = C))),
                R = (ae = ar(x)).length;
              R--;

            )
              ae[R] = (U ? "#" + U : ":scope") + " " + br(ae[R]);
            z = ae.join(",");
          }
          try {
            return S.apply(A, Y.querySelectorAll(z)), A;
          } catch {
            X(x, !0);
          } finally {
            U === C && D.removeAttribute("id");
          }
        }
      }
      return kr(x.replace(dt, "$1"), D, A, j);
    }
    function he() {
      var x = [];
      return function D(A, j) {
        return (
          x.push(A + " ") > n.cacheLength && delete D[x.shift()],
          (D[A + " "] = j)
        );
      };
    }
    function ge(x) {
      return (x[C] = !0), x;
    }
    function ce(x) {
      var D = f.createElement("fieldset");
      try {
        return !!x(D);
      } catch {
        return !1;
      } finally {
        D.parentNode && D.parentNode.removeChild(D), (D = null);
      }
    }
    function ft(x) {
      return function (D) {
        return ie(D, "input") && D.type === x;
      };
    }
    function In(x) {
      return function (D) {
        return (ie(D, "input") || ie(D, "button")) && D.type === x;
      };
    }
    function yr(x) {
      return function (D) {
        return "form" in D
          ? D.parentNode && D.disabled === !1
            ? "label" in D
              ? "label" in D.parentNode
                ? D.parentNode.disabled === x
                : D.disabled === x
              : D.isDisabled === x || (D.isDisabled !== !x && Be(D) === x)
            : D.disabled === x
          : "label" in D && D.disabled === x;
      };
    }
    function tn(x) {
      return ge(function (D) {
        return (
          (D = +D),
          ge(function (A, j) {
            for (var k, R = x([], A.length, D), O = R.length; O--; )
              A[(k = R[O])] && (A[k] = !(j[k] = A[k]));
          })
        );
      });
    }
    function Cr(x) {
      return x && typeof x.getElementsByTagName < "u" && x;
    }
    function Ht(x) {
      var D,
        A = x ? x.ownerDocument || x : ze;
      return (
        A != f &&
          A.nodeType === 9 &&
          A.documentElement &&
          ((g = (f = A).documentElement),
          (y = !u.isXMLDoc(f)),
          (w = g.matches || g.webkitMatchesSelector || g.msMatchesSelector),
          g.msMatchesSelector &&
            ze != f &&
            (D = f.defaultView) &&
            D.top !== D &&
            D.addEventListener("unload", $t),
          (M.getById = ce(function (j) {
            return (
              (g.appendChild(j).id = u.expando),
              !f.getElementsByName || !f.getElementsByName(u.expando).length
            );
          })),
          (M.disconnectedMatch = ce(function (j) {
            return w.call(j, "*");
          })),
          (M.scope = ce(function () {
            return f.querySelectorAll(":scope");
          })),
          (M.cssHas = ce(function () {
            try {
              return f.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          })),
          M.getById
            ? ((n.filter.ID = function (j) {
                var k = j.replace(me, We);
                return function (R) {
                  return R.getAttribute("id") === k;
                };
              }),
              (n.find.ID = function (j, k) {
                if (typeof k.getElementById < "u" && y) {
                  var R = k.getElementById(j);
                  return R ? [R] : [];
                }
              }))
            : ((n.filter.ID = function (j) {
                var k = j.replace(me, We);
                return function (R) {
                  var O =
                    typeof R.getAttributeNode < "u" && R.getAttributeNode("id");
                  return O && O.value === k;
                };
              }),
              (n.find.ID = function (j, k) {
                if (typeof k.getElementById < "u" && y) {
                  var R,
                    O,
                    U,
                    N = k.getElementById(j);
                  if (N) {
                    if ((R = N.getAttributeNode("id")) && R.value === j)
                      return [N];
                    for (U = k.getElementsByName(j), O = 0; (N = U[O++]); )
                      if ((R = N.getAttributeNode("id")) && R.value === j)
                        return [N];
                  }
                  return [];
                }
              })),
          (n.find.TAG = function (j, k) {
            return typeof k.getElementsByTagName < "u"
              ? k.getElementsByTagName(j)
              : k.querySelectorAll(j);
          }),
          (n.find.CLASS = function (j, k) {
            if (typeof k.getElementsByClassName < "u" && y)
              return k.getElementsByClassName(j);
          }),
          (b = []),
          ce(function (j) {
            var k;
            (g.appendChild(j).innerHTML =
              "<a id='" +
              C +
              "' href='' disabled='disabled'></a><select id='" +
              C +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              j.querySelectorAll("[selected]").length ||
                b.push("\\[" + K + "*(?:value|" + le + ")"),
              j.querySelectorAll("[id~=" + C + "-]").length || b.push("~="),
              j.querySelectorAll("a#" + C + "+*").length || b.push(".#.+[+~]"),
              j.querySelectorAll(":checked").length || b.push(":checked"),
              (k = f.createElement("input")).setAttribute("type", "hidden"),
              j.appendChild(k).setAttribute("name", "D"),
              (g.appendChild(j).disabled = !0),
              j.querySelectorAll(":disabled").length !== 2 &&
                b.push(":enabled", ":disabled"),
              (k = f.createElement("input")).setAttribute("name", ""),
              j.appendChild(k),
              j.querySelectorAll("[name='']").length ||
                b.push("\\[" + K + "*name" + K + "*=" + K + `*(?:''|"")`);
          }),
          M.cssHas || b.push(":has"),
          (b = b.length && new RegExp(b.join("|"))),
          (Q = function (j, k) {
            if (j === k) return (l = !0), 0;
            var R = !j.compareDocumentPosition - !k.compareDocumentPosition;
            return (
              R ||
              (1 &
                (R =
                  (j.ownerDocument || j) == (k.ownerDocument || k)
                    ? j.compareDocumentPosition(k)
                    : 1) ||
              (!M.sortDetached && k.compareDocumentPosition(j) === R)
                ? j === f || (j.ownerDocument == ze && H.contains(ze, j))
                  ? -1
                  : k === f || (k.ownerDocument == ze && H.contains(ze, k))
                    ? 1
                    : o
                      ? Re.call(o, j) - Re.call(o, k)
                      : 0
                : 4 & R
                  ? -1
                  : 1)
            );
          })),
        f
      );
    }
    for (e in ((H.matches = function (x, D) {
      return H(x, null, null, D);
    }),
    (H.matchesSelector = function (x, D) {
      if ((Ht(x), y && !X[D + " "] && (!b || !b.test(D))))
        try {
          var A = w.call(x, D);
          if (
            A ||
            M.disconnectedMatch ||
            (x.document && x.document.nodeType !== 11)
          )
            return A;
        } catch {
          X(D, !0);
        }
      return 0 < H(D, f, null, [x]).length;
    }),
    (H.contains = function (x, D) {
      return (x.ownerDocument || x) != f && Ht(x), u.contains(x, D);
    }),
    (H.attr = function (x, D) {
      (x.ownerDocument || x) != f && Ht(x);
      var A = n.attrHandle[D.toLowerCase()],
        j = A && It.call(n.attrHandle, D.toLowerCase()) ? A(x, D, !y) : void 0;
      return j !== void 0 ? j : x.getAttribute(D);
    }),
    (H.error = function (x) {
      throw new Error("Syntax error, unrecognized expression: " + x);
    }),
    (u.uniqueSort = function (x) {
      var D,
        A = [],
        j = 0,
        k = 0;
      if (
        ((l = !M.sortStable),
        (o = !M.sortStable && Le.call(x, 0)),
        ir.call(x, Q),
        l)
      ) {
        for (; (D = x[k++]); ) D === x[k] && (j = A.push(k));
        for (; j--; ) Vt.call(x, A[j], 1);
      }
      return (o = null), x;
    }),
    (u.fn.uniqueSort = function () {
      return this.pushStack(u.uniqueSort(Le.apply(this)));
    }),
    ((n = u.expr =
      {
        cacheLength: 50,
        createPseudo: ge,
        match: At,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (x) {
            return (
              (x[1] = x[1].replace(me, We)),
              (x[3] = (x[3] || x[4] || x[5] || "").replace(me, We)),
              x[2] === "~=" && (x[3] = " " + x[3] + " "),
              x.slice(0, 4)
            );
          },
          CHILD: function (x) {
            return (
              (x[1] = x[1].toLowerCase()),
              x[1].slice(0, 3) === "nth"
                ? (x[3] || H.error(x[0]),
                  (x[4] = +(x[4]
                    ? x[5] + (x[6] || 1)
                    : 2 * (x[3] === "even" || x[3] === "odd"))),
                  (x[5] = +(x[7] + x[8] || x[3] === "odd")))
                : x[3] && H.error(x[0]),
              x
            );
          },
          PSEUDO: function (x) {
            var D,
              A = !x[6] && x[2];
            return At.CHILD.test(x[0])
              ? null
              : (x[3]
                  ? (x[2] = x[4] || x[5] || "")
                  : A &&
                    ct.test(A) &&
                    (D = ar(A, !0)) &&
                    (D = A.indexOf(")", A.length - D) - A.length) &&
                    ((x[0] = x[0].slice(0, D)), (x[2] = A.slice(0, D))),
                x.slice(0, 3));
          },
        },
        filter: {
          TAG: function (x) {
            var D = x.replace(me, We).toLowerCase();
            return x === "*"
              ? function () {
                  return !0;
                }
              : function (A) {
                  return ie(A, D);
                };
          },
          CLASS: function (x) {
            var D = F[x + " "];
            return (
              D ||
              ((D = new RegExp("(^|" + K + ")" + x + "(" + K + "|$)")) &&
                F(x, function (A) {
                  return D.test(
                    (typeof A.className == "string" && A.className) ||
                      (typeof A.getAttribute < "u" &&
                        A.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (x, D, A) {
            return function (j) {
              var k = H.attr(j, x);
              return k == null
                ? D === "!="
                : !D ||
                    ((k += ""),
                    D === "="
                      ? k === A
                      : D === "!="
                        ? k !== A
                        : D === "^="
                          ? A && k.indexOf(A) === 0
                          : D === "*="
                            ? A && -1 < k.indexOf(A)
                            : D === "$="
                              ? A && k.slice(-A.length) === A
                              : D === "~="
                                ? -1 <
                                  (" " + k.replace(q, " ") + " ").indexOf(A)
                                : D === "|=" &&
                                  (k === A ||
                                    k.slice(0, A.length + 1) === A + "-"));
            };
          },
          CHILD: function (x, D, A, j, k) {
            var R = x.slice(0, 3) !== "nth",
              O = x.slice(-4) !== "last",
              U = D === "of-type";
            return j === 1 && k === 0
              ? function (N) {
                  return !!N.parentNode;
                }
              : function (N, ae, z) {
                  var Y,
                    ne,
                    V,
                    Se,
                    Ne,
                    _e = R !== O ? "nextSibling" : "previousSibling",
                    He = N.parentNode,
                    Ve = U && N.nodeName.toLowerCase(),
                    nt = !z && !U,
                    fe = !1;
                  if (He) {
                    if (R) {
                      for (; _e; ) {
                        for (V = N; (V = V[_e]); )
                          if (U ? ie(V, Ve) : V.nodeType === 1) return !1;
                        Ne = _e = x === "only" && !Ne && "nextSibling";
                      }
                      return !0;
                    }
                    if (((Ne = [O ? He.firstChild : He.lastChild]), O && nt)) {
                      for (
                        fe =
                          (Se =
                            (Y = (ne = He[C] || (He[C] = {}))[x] || [])[0] ===
                              T && Y[1]) && Y[2],
                          V = Se && He.childNodes[Se];
                        (V = (++Se && V && V[_e]) || (fe = Se = 0) || Ne.pop());

                      )
                        if (V.nodeType === 1 && ++fe && V === N) {
                          ne[x] = [T, Se, fe];
                          break;
                        }
                    } else if (
                      (nt &&
                        (fe = Se =
                          (Y = (ne = N[C] || (N[C] = {}))[x] || [])[0] === T &&
                          Y[1]),
                      fe === !1)
                    )
                      for (
                        ;
                        (V =
                          (++Se && V && V[_e]) || (fe = Se = 0) || Ne.pop()) &&
                        !(
                          (U ? ie(V, Ve) : V.nodeType === 1) &&
                          ++fe &&
                          (nt && ((ne = V[C] || (V[C] = {}))[x] = [T, fe]),
                          V === N)
                        );

                      );
                    return (fe -= k) === j || (fe % j == 0 && 0 <= fe / j);
                  }
                };
          },
          PSEUDO: function (x, D) {
            var A,
              j =
                n.pseudos[x] ||
                n.setFilters[x.toLowerCase()] ||
                H.error("unsupported pseudo: " + x);
            return j[C]
              ? j(D)
              : 1 < j.length
                ? ((A = [x, x, "", D]),
                  n.setFilters.hasOwnProperty(x.toLowerCase())
                    ? ge(function (k, R) {
                        for (var O, U = j(k, D), N = U.length; N--; )
                          k[(O = Re.call(k, U[N]))] = !(R[O] = U[N]);
                      })
                    : function (k) {
                        return j(k, 0, A);
                      })
                : j;
          },
        },
        pseudos: {
          not: ge(function (x) {
            var D = [],
              A = [],
              j = Lr(x.replace(dt, "$1"));
            return j[C]
              ? ge(function (k, R, O, U) {
                  for (var N, ae = j(k, null, U, []), z = k.length; z--; )
                    (N = ae[z]) && (k[z] = !(R[z] = N));
                })
              : function (k, R, O) {
                  return (D[0] = k), j(D, null, O, A), (D[0] = null), !A.pop();
                };
          }),
          has: ge(function (x) {
            return function (D) {
              return 0 < H(x, D).length;
            };
          }),
          contains: ge(function (x) {
            return (
              (x = x.replace(me, We)),
              function (D) {
                return -1 < (D.textContent || u.text(D)).indexOf(x);
              }
            );
          }),
          lang: ge(function (x) {
            return (
              rr.test(x || "") || H.error("unsupported lang: " + x),
              (x = x.replace(me, We).toLowerCase()),
              function (D) {
                var A;
                do
                  if (
                    (A = y
                      ? D.lang
                      : D.getAttribute("xml:lang") || D.getAttribute("lang"))
                  )
                    return (
                      (A = A.toLowerCase()) === x || A.indexOf(x + "-") === 0
                    );
                while ((D = D.parentNode) && D.nodeType === 1);
                return !1;
              }
            );
          }),
          target: function (x) {
            var D = m.location && m.location.hash;
            return D && D.slice(1) === x.id;
          },
          root: function (x) {
            return x === g;
          },
          focus: function (x) {
            return (
              x ===
                (function () {
                  try {
                    return f.activeElement;
                  } catch {}
                })() &&
              f.hasFocus() &&
              !!(x.type || x.href || ~x.tabIndex)
            );
          },
          enabled: yr(!1),
          disabled: yr(!0),
          checked: function (x) {
            return (
              (ie(x, "input") && !!x.checked) ||
              (ie(x, "option") && !!x.selected)
            );
          },
          selected: function (x) {
            return (
              x.parentNode && x.parentNode.selectedIndex, x.selected === !0
            );
          },
          empty: function (x) {
            for (x = x.firstChild; x; x = x.nextSibling)
              if (x.nodeType < 6) return !1;
            return !0;
          },
          parent: function (x) {
            return !n.pseudos.empty(x);
          },
          header: function (x) {
            return An.test(x.nodeName);
          },
          input: function (x) {
            return Ut.test(x.nodeName);
          },
          button: function (x) {
            return (ie(x, "input") && x.type === "button") || ie(x, "button");
          },
          text: function (x) {
            var D;
            return (
              ie(x, "input") &&
              x.type === "text" &&
              ((D = x.getAttribute("type")) == null ||
                D.toLowerCase() === "text")
            );
          },
          first: tn(function () {
            return [0];
          }),
          last: tn(function (x, D) {
            return [D - 1];
          }),
          eq: tn(function (x, D, A) {
            return [A < 0 ? A + D : A];
          }),
          even: tn(function (x, D) {
            for (var A = 0; A < D; A += 2) x.push(A);
            return x;
          }),
          odd: tn(function (x, D) {
            for (var A = 1; A < D; A += 2) x.push(A);
            return x;
          }),
          lt: tn(function (x, D, A) {
            var j;
            for (j = A < 0 ? A + D : D < A ? D : A; 0 <= --j; ) x.push(j);
            return x;
          }),
          gt: tn(function (x, D, A) {
            for (var j = A < 0 ? A + D : A; ++j < D; ) x.push(j);
            return x;
          }),
        },
      }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[e] = ft(e);
    for (e in { submit: !0, reset: !0 }) n.pseudos[e] = In(e);
    function jr() {}
    function ar(x, D) {
      var A,
        j,
        k,
        R,
        O,
        U,
        N,
        ae = E[x + " "];
      if (ae) return D ? 0 : ae.slice(0);
      for (O = x, U = [], N = n.preFilter; O; ) {
        for (R in ((A && !(j = Z.exec(O))) ||
          (j && (O = O.slice(j[0].length) || O), U.push((k = []))),
        (A = !1),
        (j = nr.exec(O)) &&
          ((A = j.shift()),
          k.push({ value: A, type: j[0].replace(dt, " ") }),
          (O = O.slice(A.length))),
        n.filter))
          !(j = At[R].exec(O)) ||
            (N[R] && !(j = N[R](j))) ||
            ((A = j.shift()),
            k.push({ value: A, type: R, matches: j }),
            (O = O.slice(A.length)));
        if (!A) break;
      }
      return D ? O.length : O ? H.error(x) : E(x, U).slice(0);
    }
    function br(x) {
      for (var D = 0, A = x.length, j = ""; D < A; D++) j += x[D].value;
      return j;
    }
    function xr(x, D, A) {
      var j = D.dir,
        k = D.next,
        R = k || j,
        O = A && R === "parentNode",
        U = _++;
      return D.first
        ? function (N, ae, z) {
            for (; (N = N[j]); ) if (N.nodeType === 1 || O) return x(N, ae, z);
            return !1;
          }
        : function (N, ae, z) {
            var Y,
              ne,
              V = [T, U];
            if (z) {
              for (; (N = N[j]); )
                if ((N.nodeType === 1 || O) && x(N, ae, z)) return !0;
            } else
              for (; (N = N[j]); )
                if (N.nodeType === 1 || O)
                  if (((ne = N[C] || (N[C] = {})), k && ie(N, k)))
                    N = N[j] || N;
                  else {
                    if ((Y = ne[R]) && Y[0] === T && Y[1] === U)
                      return (V[2] = Y[2]);
                    if (((ne[R] = V)[2] = x(N, ae, z))) return !0;
                  }
            return !1;
          };
    }
    function _r(x) {
      return 1 < x.length
        ? function (D, A, j) {
            for (var k = x.length; k--; ) if (!x[k](D, A, j)) return !1;
            return !0;
          }
        : x[0];
    }
    function Sr(x, D, A, j, k) {
      for (var R, O = [], U = 0, N = x.length, ae = D != null; U < N; U++)
        (R = x[U]) && ((A && !A(R, j, k)) || (O.push(R), ae && D.push(U)));
      return O;
    }
    function Ar(x, D, A, j, k, R) {
      return (
        j && !j[C] && (j = Ar(j)),
        k && !k[C] && (k = Ar(k, R)),
        ge(function (O, U, N, ae) {
          var z,
            Y,
            ne,
            V,
            Se = [],
            Ne = [],
            _e = U.length,
            He =
              O ||
              (function (nt, fe, nn) {
                for (var rt = 0, wr = fe.length; rt < wr; rt++)
                  H(nt, fe[rt], nn);
                return nn;
              })(D || "*", N.nodeType ? [N] : N, []),
            Ve = !x || (!O && D) ? He : Sr(He, Se, x, N, ae);
          if (
            (A ? A(Ve, (V = k || (O ? x : _e || j) ? [] : U), N, ae) : (V = Ve),
            j)
          )
            for (z = Sr(V, Ne), j(z, [], N, ae), Y = z.length; Y--; )
              (ne = z[Y]) && (V[Ne[Y]] = !(Ve[Ne[Y]] = ne));
          if (O) {
            if (k || x) {
              if (k) {
                for (z = [], Y = V.length; Y--; )
                  (ne = V[Y]) && z.push((Ve[Y] = ne));
                k(null, (V = []), z, ae);
              }
              for (Y = V.length; Y--; )
                (ne = V[Y]) &&
                  -1 < (z = k ? Re.call(O, ne) : Se[Y]) &&
                  (O[z] = !(U[z] = ne));
            }
          } else
            (V = Sr(V === U ? V.splice(_e, V.length) : V)),
              k ? k(null, U, V, ae) : S.apply(U, V);
        })
      );
    }
    function Ir(x) {
      for (
        var D,
          A,
          j,
          k = x.length,
          R = n.relative[x[0].type],
          O = R || n.relative[" "],
          U = R ? 1 : 0,
          N = xr(
            function (Y) {
              return Y === D;
            },
            O,
            !0,
          ),
          ae = xr(
            function (Y) {
              return -1 < Re.call(D, Y);
            },
            O,
            !0,
          ),
          z = [
            function (Y, ne, V) {
              var Se =
                (!R && (V || ne != a)) ||
                ((D = ne).nodeType ? N(Y, ne, V) : ae(Y, ne, V));
              return (D = null), Se;
            },
          ];
        U < k;
        U++
      )
        if ((A = n.relative[x[U].type])) z = [xr(_r(z), A)];
        else {
          if ((A = n.filter[x[U].type].apply(null, x[U].matches))[C]) {
            for (j = ++U; j < k && !n.relative[x[j].type]; j++);
            return Ar(
              1 < U && _r(z),
              1 < U &&
                br(
                  x
                    .slice(0, U - 1)
                    .concat({ value: x[U - 2].type === " " ? "*" : "" }),
                ).replace(dt, "$1"),
              A,
              U < j && Ir(x.slice(U, j)),
              j < k && Ir((x = x.slice(j))),
              j < k && br(x),
            );
          }
          z.push(A);
        }
      return _r(z);
    }
    function Lr(x, D) {
      var A,
        j,
        k,
        R,
        O,
        U,
        N = [],
        ae = [],
        z = W[x + " "];
      if (!z) {
        for (D || (D = ar(x)), A = D.length; A--; )
          (z = Ir(D[A]))[C] ? N.push(z) : ae.push(z);
        (z = W(
          x,
          ((j = ae),
          (R = 0 < (k = N).length),
          (O = 0 < j.length),
          (U = function (Y, ne, V, Se, Ne) {
            var _e,
              He,
              Ve,
              nt = 0,
              fe = "0",
              nn = Y && [],
              rt = [],
              wr = a,
              Fr = Y || (O && n.find.TAG("*", Ne)),
              Er = (T += wr == null ? 1 : Math.random() || 0.1),
              Nr = Fr.length;
            for (
              Ne && (a = ne == f || ne || Ne);
              fe !== Nr && (_e = Fr[fe]) != null;
              fe++
            ) {
              if (O && _e) {
                for (
                  He = 0, ne || _e.ownerDocument == f || (Ht(_e), (V = !y));
                  (Ve = j[He++]);

                )
                  if (Ve(_e, ne || f, V)) {
                    S.call(Se, _e);
                    break;
                  }
                Ne && (T = Er);
              }
              R && ((_e = !Ve && _e) && nt--, Y && nn.push(_e));
            }
            if (((nt += fe), R && fe !== nt)) {
              for (He = 0; (Ve = k[He++]); ) Ve(nn, rt, ne, V);
              if (Y) {
                if (0 < nt)
                  for (; fe--; ) nn[fe] || rt[fe] || (rt[fe] = sn.call(Se));
                rt = Sr(rt);
              }
              S.apply(Se, rt),
                Ne &&
                  !Y &&
                  0 < rt.length &&
                  1 < nt + k.length &&
                  u.uniqueSort(Se);
            }
            return Ne && ((T = Er), (a = wr)), nn;
          }),
          R ? ge(U) : U),
        )).selector = x;
      }
      return z;
    }
    function kr(x, D, A, j) {
      var k,
        R,
        O,
        U,
        N,
        ae = typeof x == "function" && x,
        z = !j && ar((x = ae.selector || x));
      if (((A = A || []), z.length === 1)) {
        if (
          2 < (R = z[0] = z[0].slice(0)).length &&
          (O = R[0]).type === "ID" &&
          D.nodeType === 9 &&
          y &&
          n.relative[R[1].type]
        ) {
          if (!(D = (n.find.ID(O.matches[0].replace(me, We), D) || [])[0]))
            return A;
          ae && (D = D.parentNode), (x = x.slice(R.shift().value.length));
        }
        for (
          k = At.needsContext.test(x) ? 0 : R.length;
          k-- && ((O = R[k]), !n.relative[(U = O.type)]);

        )
          if (
            (N = n.find[U]) &&
            (j = N(
              O.matches[0].replace(me, We),
              (Ce.test(R[0].type) && Cr(D.parentNode)) || D,
            ))
          ) {
            if ((R.splice(k, 1), !(x = j.length && br(R))))
              return S.apply(A, j), A;
            break;
          }
      }
      return (
        (ae || Lr(x, z))(
          j,
          D,
          !y,
          A,
          !D || (Ce.test(x) && Cr(D.parentNode)) || D,
        ),
        A
      );
    }
    (jr.prototype = n.filters = n.pseudos),
      (n.setFilters = new jr()),
      (M.sortStable = C.split("").sort(Q).join("") === C),
      Ht(),
      (M.sortDetached = ce(function (x) {
        return 1 & x.compareDocumentPosition(f.createElement("fieldset"));
      })),
      (u.find = H),
      (u.expr[":"] = u.expr.pseudos),
      (u.unique = u.uniqueSort),
      (H.compile = Lr),
      (H.select = kr),
      (H.setDocument = Ht),
      (H.tokenize = ar),
      (H.escape = u.escapeSelector),
      (H.getText = u.text),
      (H.isXML = u.isXMLDoc),
      (H.selectors = u.expr),
      (H.support = u.support),
      (H.uniqueSort = u.uniqueSort);
  })();
  var pt = function (e, n, a) {
      for (var o = [], l = a !== void 0; (e = e[n]) && e.nodeType !== 9; )
        if (e.nodeType === 1) {
          if (l && u(e).is(a)) break;
          o.push(e);
        }
      return o;
    },
    un = function (e, n) {
      for (var a = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== n && a.push(e);
      return a;
    },
    Jt = u.expr.match.needsContext,
    jt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function ht(e, n, a) {
    return I(n)
      ? u.grep(e, function (o, l) {
          return !!n.call(o, l, o) !== a;
        })
      : n.nodeType
        ? u.grep(e, function (o) {
            return (o === n) !== a;
          })
        : typeof n != "string"
          ? u.grep(e, function (o) {
              return -1 < Re.call(n, o) !== a;
            })
          : u.filter(n, e, a);
  }
  (u.filter = function (e, n, a) {
    var o = n[0];
    return (
      a && (e = ":not(" + e + ")"),
      n.length === 1 && o.nodeType === 1
        ? u.find.matchesSelector(o, e)
          ? [o]
          : []
        : u.find.matches(
            e,
            u.grep(n, function (l) {
              return l.nodeType === 1;
            }),
          )
    );
  }),
    u.fn.extend({
      find: function (e) {
        var n,
          a,
          o = this.length,
          l = this;
        if (typeof e != "string")
          return this.pushStack(
            u(e).filter(function () {
              for (n = 0; n < o; n++) if (u.contains(l[n], this)) return !0;
            }),
          );
        for (a = this.pushStack([]), n = 0; n < o; n++) u.find(e, l[n], a);
        return 1 < o ? u.uniqueSort(a) : a;
      },
      filter: function (e) {
        return this.pushStack(ht(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(ht(this, e || [], !0));
      },
      is: function (e) {
        return !!ht(
          this,
          typeof e == "string" && Jt.test(e) ? u(e) : e || [],
          !1,
        ).length;
      },
    });
  var kt,
    Ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((u.fn.init = function (e, n, a) {
    var o, l;
    if (!e) return this;
    if (((a = a || kt), typeof e == "string")) {
      if (
        !(o =
          e[0] === "<" && e[e.length - 1] === ">" && 3 <= e.length
            ? [null, e, null]
            : Ft.exec(e)) ||
        (!o[1] && n)
      )
        return !n || n.jquery ? (n || a).find(e) : this.constructor(n).find(e);
      if (o[1]) {
        if (
          ((n = n instanceof u ? n[0] : n),
          u.merge(
            this,
            u.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : J, !0),
          ),
          jt.test(o[1]) && u.isPlainObject(n))
        )
          for (o in n) I(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
        return this;
      }
      return (
        (l = J.getElementById(o[2])) && ((this[0] = l), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : I(e)
        ? a.ready !== void 0
          ? a.ready(e)
          : e(u)
        : u.makeArray(e, this);
  }).prototype = u.fn),
    (kt = u(J));
  var cn = /^(?:parents|prev(?:Until|All))/,
    jn = { children: !0, contents: !0, next: !0, prev: !0 };
  function kn(e, n) {
    for (; (e = e[n]) && e.nodeType !== 1; );
    return e;
  }
  u.fn.extend({
    has: function (e) {
      var n = u(e, this),
        a = n.length;
      return this.filter(function () {
        for (var o = 0; o < a; o++) if (u.contains(this, n[o])) return !0;
      });
    },
    closest: function (e, n) {
      var a,
        o = 0,
        l = this.length,
        f = [],
        g = typeof e != "string" && u(e);
      if (!Jt.test(e)) {
        for (; o < l; o++)
          for (a = this[o]; a && a !== n; a = a.parentNode)
            if (
              a.nodeType < 11 &&
              (g
                ? -1 < g.index(a)
                : a.nodeType === 1 && u.find.matchesSelector(a, e))
            ) {
              f.push(a);
              break;
            }
      }
      return this.pushStack(1 < f.length ? u.uniqueSort(f) : f);
    },
    index: function (e) {
      return e
        ? typeof e == "string"
          ? Re.call(u(e), this[0])
          : Re.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, n) {
      return this.pushStack(u.uniqueSort(u.merge(this.get(), u(e, n))));
    },
    addBack: function (e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    u.each(
      {
        parent: function (e) {
          var n = e.parentNode;
          return n && n.nodeType !== 11 ? n : null;
        },
        parents: function (e) {
          return pt(e, "parentNode");
        },
        parentsUntil: function (e, n, a) {
          return pt(e, "parentNode", a);
        },
        next: function (e) {
          return kn(e, "nextSibling");
        },
        prev: function (e) {
          return kn(e, "previousSibling");
        },
        nextAll: function (e) {
          return pt(e, "nextSibling");
        },
        prevAll: function (e) {
          return pt(e, "previousSibling");
        },
        nextUntil: function (e, n, a) {
          return pt(e, "nextSibling", a);
        },
        prevUntil: function (e, n, a) {
          return pt(e, "previousSibling", a);
        },
        siblings: function (e) {
          return un((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return un(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument != null && L(e.contentDocument)
            ? e.contentDocument
            : (ie(e, "template") && (e = e.content || e),
              u.merge([], e.childNodes));
        },
      },
      function (e, n) {
        u.fn[e] = function (a, o) {
          var l = u.map(this, n, a);
          return (
            e.slice(-5) !== "Until" && (o = a),
            o && typeof o == "string" && (l = u.filter(o, l)),
            1 < this.length &&
              (jn[e] || u.uniqueSort(l), cn.test(e) && l.reverse()),
            this.pushStack(l)
          );
        };
      },
    );
  var ve = /[^\x20\t\r\n\f]+/g;
  function Ze(e) {
    return e;
  }
  function ye(e) {
    throw e;
  }
  function Fn(e, n, a, o) {
    var l;
    try {
      e && I((l = e.promise))
        ? l.call(e).done(n).fail(a)
        : e && I((l = e.then))
          ? l.call(e, n, a)
          : n.apply(void 0, [e].slice(o));
    } catch (f) {
      a.apply(void 0, [f]);
    }
  }
  (u.Callbacks = function (e) {
    var n, a;
    e =
      typeof e == "string"
        ? ((n = e),
          (a = {}),
          u.each(n.match(ve) || [], function (T, _) {
            a[_] = !0;
          }),
          a)
        : u.extend({}, e);
    var o,
      l,
      f,
      g,
      y = [],
      b = [],
      w = -1,
      S = function () {
        for (g = g || e.once, f = o = !0; b.length; w = -1)
          for (l = b.shift(); ++w < y.length; )
            y[w].apply(l[0], l[1]) === !1 &&
              e.stopOnFalse &&
              ((w = y.length), (l = !1));
        e.memory || (l = !1), (o = !1), g && (y = l ? [] : "");
      },
      C = {
        add: function () {
          return (
            y &&
              (l && !o && ((w = y.length - 1), b.push(l)),
              (function T(_) {
                u.each(_, function (F, E) {
                  I(E)
                    ? (e.unique && C.has(E)) || y.push(E)
                    : E && E.length && Lt(E) !== "string" && T(E);
                });
              })(arguments),
              l && !o && S()),
            this
          );
        },
        remove: function () {
          return (
            u.each(arguments, function (T, _) {
              for (var F; -1 < (F = u.inArray(_, y, F)); )
                y.splice(F, 1), F <= w && w--;
            }),
            this
          );
        },
        has: function (T) {
          return T ? -1 < u.inArray(T, y) : 0 < y.length;
        },
        empty: function () {
          return y && (y = []), this;
        },
        disable: function () {
          return (g = b = []), (y = l = ""), this;
        },
        disabled: function () {
          return !y;
        },
        lock: function () {
          return (g = b = []), l || o || (y = l = ""), this;
        },
        locked: function () {
          return !!g;
        },
        fireWith: function (T, _) {
          return (
            g ||
              ((_ = [T, (_ = _ || []).slice ? _.slice() : _]),
              b.push(_),
              o || S()),
            this
          );
        },
        fire: function () {
          return C.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!f;
        },
      };
    return C;
  }),
    u.extend({
      Deferred: function (e) {
        var n = [
            [
              "notify",
              "progress",
              u.Callbacks("memory"),
              u.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              u.Callbacks("once memory"),
              u.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              u.Callbacks("once memory"),
              u.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          a = "pending",
          o = {
            state: function () {
              return a;
            },
            always: function () {
              return l.done(arguments).fail(arguments), this;
            },
            catch: function (f) {
              return o.then(null, f);
            },
            pipe: function () {
              var f = arguments;
              return u
                .Deferred(function (g) {
                  u.each(n, function (y, b) {
                    var w = I(f[b[4]]) && f[b[4]];
                    l[b[1]](function () {
                      var S = w && w.apply(this, arguments);
                      S && I(S.promise)
                        ? S.promise()
                            .progress(g.notify)
                            .done(g.resolve)
                            .fail(g.reject)
                        : g[b[0] + "With"](this, w ? [S] : arguments);
                    });
                  }),
                    (f = null);
                })
                .promise();
            },
            then: function (f, g, y) {
              var b = 0;
              function w(S, C, T, _) {
                return function () {
                  var F = this,
                    E = arguments,
                    W = function () {
                      var Q, le;
                      if (!(S < b)) {
                        if ((Q = T.apply(F, E)) === C.promise())
                          throw new TypeError("Thenable self-resolution");
                        (le =
                          Q &&
                          (typeof Q == "object" || typeof Q == "function") &&
                          Q.then),
                          I(le)
                            ? _
                              ? le.call(Q, w(b, C, Ze, _), w(b, C, ye, _))
                              : (b++,
                                le.call(
                                  Q,
                                  w(b, C, Ze, _),
                                  w(b, C, ye, _),
                                  w(b, C, Ze, C.notifyWith),
                                ))
                            : (T !== Ze && ((F = void 0), (E = [Q])),
                              (_ || C.resolveWith)(F, E));
                      }
                    },
                    X = _
                      ? W
                      : function () {
                          try {
                            W();
                          } catch (Q) {
                            u.Deferred.exceptionHook &&
                              u.Deferred.exceptionHook(Q, X.error),
                              b <= S + 1 &&
                                (T !== ye && ((F = void 0), (E = [Q])),
                                C.rejectWith(F, E));
                          }
                        };
                  S
                    ? X()
                    : (u.Deferred.getErrorHook
                        ? (X.error = u.Deferred.getErrorHook())
                        : u.Deferred.getStackHook &&
                          (X.error = u.Deferred.getStackHook()),
                      m.setTimeout(X));
                };
              }
              return u
                .Deferred(function (S) {
                  n[0][3].add(w(0, S, I(y) ? y : Ze, S.notifyWith)),
                    n[1][3].add(w(0, S, I(f) ? f : Ze)),
                    n[2][3].add(w(0, S, I(g) ? g : ye));
                })
                .promise();
            },
            promise: function (f) {
              return f != null ? u.extend(f, o) : o;
            },
          },
          l = {};
        return (
          u.each(n, function (f, g) {
            var y = g[2],
              b = g[5];
            (o[g[1]] = y.add),
              b &&
                y.add(
                  function () {
                    a = b;
                  },
                  n[3 - f][2].disable,
                  n[3 - f][3].disable,
                  n[0][2].lock,
                  n[0][3].lock,
                ),
              y.add(g[3].fire),
              (l[g[0]] = function () {
                return (
                  l[g[0] + "With"](this === l ? void 0 : this, arguments), this
                );
              }),
              (l[g[0] + "With"] = y.fireWith);
          }),
          o.promise(l),
          e && e.call(l, l),
          l
        );
      },
      when: function (e) {
        var n = arguments.length,
          a = n,
          o = Array(a),
          l = Le.call(arguments),
          f = u.Deferred(),
          g = function (y) {
            return function (b) {
              (o[y] = this),
                (l[y] = 1 < arguments.length ? Le.call(arguments) : b),
                --n || f.resolveWith(o, l);
            };
          };
        if (
          n <= 1 &&
          (Fn(e, f.done(g(a)).resolve, f.reject, !n),
          f.state() === "pending" || I(l[a] && l[a].then))
        )
          return f.then();
        for (; a--; ) Fn(l[a], g(a), f.reject);
        return f.promise();
      },
    });
  var zt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (u.Deferred.exceptionHook = function (e, n) {
    m.console &&
      m.console.warn &&
      e &&
      zt.test(e.name) &&
      m.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }),
    (u.readyException = function (e) {
      m.setTimeout(function () {
        throw e;
      });
    });
  var ot = u.Deferred();
  function Et() {
    J.removeEventListener("DOMContentLoaded", Et),
      m.removeEventListener("load", Et),
      u.ready();
  }
  (u.fn.ready = function (e) {
    return (
      ot.then(e).catch(function (n) {
        u.readyException(n);
      }),
      this
    );
  }),
    u.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (e === !0 ? --u.readyWait : u.isReady) ||
          ((u.isReady = !0) !== e && 0 < --u.readyWait) ||
          ot.resolveWith(J, [u]);
      },
    }),
    (u.ready.then = ot.then),
    J.readyState === "complete" ||
    (J.readyState !== "loading" && !J.documentElement.doScroll)
      ? m.setTimeout(u.ready)
      : (J.addEventListener("DOMContentLoaded", Et),
        m.addEventListener("load", Et));
  var ke = function (e, n, a, o, l, f, g) {
      var y = 0,
        b = e.length,
        w = a == null;
      if (Lt(a) === "object")
        for (y in ((l = !0), a)) ke(e, n, y, a[y], !0, f, g);
      else if (
        o !== void 0 &&
        ((l = !0),
        I(o) || (g = !0),
        w &&
          (g
            ? (n.call(e, o), (n = null))
            : ((w = n),
              (n = function (S, C, T) {
                return w.call(u(S), T);
              }))),
        n)
      )
        for (; y < b; y++) n(e[y], a, g ? o : o.call(e[y], y, n(e[y], a)));
      return l ? e : w ? n.call(e) : b ? n(e[0], a) : f;
    },
    it = /^-ms-/,
    En = /-([a-z])/g;
  function fn(e, n) {
    return n.toUpperCase();
  }
  function Oe(e) {
    return e.replace(it, "ms-").replace(En, fn);
  }
  var Ke = function (e) {
    return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
  };
  function gt() {
    this.expando = u.expando + gt.uid++;
  }
  (gt.uid = 1),
    (gt.prototype = {
      cache: function (e) {
        var n = e[this.expando];
        return (
          n ||
            ((n = {}),
            Ke(e) &&
              (e.nodeType
                ? (e[this.expando] = n)
                : Object.defineProperty(e, this.expando, {
                    value: n,
                    configurable: !0,
                  }))),
          n
        );
      },
      set: function (e, n, a) {
        var o,
          l = this.cache(e);
        if (typeof n == "string") l[Oe(n)] = a;
        else for (o in n) l[Oe(o)] = n[o];
        return l;
      },
      get: function (e, n) {
        return n === void 0
          ? this.cache(e)
          : e[this.expando] && e[this.expando][Oe(n)];
      },
      access: function (e, n, a) {
        return n === void 0 || (n && typeof n == "string" && a === void 0)
          ? this.get(e, n)
          : (this.set(e, n, a), a !== void 0 ? a : n);
      },
      remove: function (e, n) {
        var a,
          o = e[this.expando];
        if (o !== void 0) {
          if (n !== void 0)
            for (
              a = (n = Array.isArray(n)
                ? n.map(Oe)
                : ((n = Oe(n)) in o)
                  ? [n]
                  : n.match(ve) || []).length;
              a--;

            )
              delete o[n[a]];
          (n === void 0 || u.isEmptyObject(o)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var n = e[this.expando];
        return n !== void 0 && !u.isEmptyObject(n);
      },
    });
  var B = new gt(),
    De = new gt(),
    lr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Gt = /[A-Z]/g;
  function Pe(e, n, a) {
    var o, l;
    if (a === void 0 && e.nodeType === 1)
      if (
        ((o = "data-" + n.replace(Gt, "-$&").toLowerCase()),
        typeof (a = e.getAttribute(o)) == "string")
      ) {
        try {
          a =
            (l = a) === "true" ||
            (l !== "false" &&
              (l === "null"
                ? null
                : l === +l + ""
                  ? +l
                  : lr.test(l)
                    ? JSON.parse(l)
                    : l));
        } catch {}
        De.set(e, n, a);
      } else a = void 0;
    return a;
  }
  u.extend({
    hasData: function (e) {
      return De.hasData(e) || B.hasData(e);
    },
    data: function (e, n, a) {
      return De.access(e, n, a);
    },
    removeData: function (e, n) {
      De.remove(e, n);
    },
    _data: function (e, n, a) {
      return B.access(e, n, a);
    },
    _removeData: function (e, n) {
      B.remove(e, n);
    },
  }),
    u.fn.extend({
      data: function (e, n) {
        var a,
          o,
          l,
          f = this[0],
          g = f && f.attributes;
        if (e === void 0) {
          if (
            this.length &&
            ((l = De.get(f)), f.nodeType === 1 && !B.get(f, "hasDataAttrs"))
          ) {
            for (a = g.length; a--; )
              g[a] &&
                (o = g[a].name).indexOf("data-") === 0 &&
                ((o = Oe(o.slice(5))), Pe(f, o, l[o]));
            B.set(f, "hasDataAttrs", !0);
          }
          return l;
        }
        return typeof e == "object"
          ? this.each(function () {
              De.set(this, e);
            })
          : ke(
              this,
              function (y) {
                var b;
                if (f && y === void 0)
                  return (b = De.get(f, e)) !== void 0 ||
                    (b = Pe(f, e)) !== void 0
                    ? b
                    : void 0;
                this.each(function () {
                  De.set(this, e, y);
                });
              },
              null,
              n,
              1 < arguments.length,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          De.remove(this, e);
        });
      },
    }),
    u.extend({
      queue: function (e, n, a) {
        var o;
        if (e)
          return (
            (n = (n || "fx") + "queue"),
            (o = B.get(e, n)),
            a &&
              (!o || Array.isArray(a)
                ? (o = B.access(e, n, u.makeArray(a)))
                : o.push(a)),
            o || []
          );
      },
      dequeue: function (e, n) {
        n = n || "fx";
        var a = u.queue(e, n),
          o = a.length,
          l = a.shift(),
          f = u._queueHooks(e, n);
        l === "inprogress" && ((l = a.shift()), o--),
          l &&
            (n === "fx" && a.unshift("inprogress"),
            delete f.stop,
            l.call(
              e,
              function () {
                u.dequeue(e, n);
              },
              f,
            )),
          !o && f && f.empty.fire();
      },
      _queueHooks: function (e, n) {
        var a = n + "queueHooks";
        return (
          B.get(e, a) ||
          B.access(e, a, {
            empty: u.Callbacks("once memory").add(function () {
              B.remove(e, [n + "queue", a]);
            }),
          })
        );
      },
    }),
    u.fn.extend({
      queue: function (e, n) {
        var a = 2;
        return (
          typeof e != "string" && ((n = e), (e = "fx"), a--),
          arguments.length < a
            ? u.queue(this[0], e)
            : n === void 0
              ? this
              : this.each(function () {
                  var o = u.queue(this, e, n);
                  u._queueHooks(this, e),
                    e === "fx" && o[0] !== "inprogress" && u.dequeue(this, e);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          u.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, n) {
        var a,
          o = 1,
          l = u.Deferred(),
          f = this,
          g = this.length,
          y = function () {
            --o || l.resolveWith(f, [f]);
          };
        for (
          typeof e != "string" && ((n = e), (e = void 0)), e = e || "fx";
          g--;

        )
          (a = B.get(f[g], e + "queueHooks")) &&
            a.empty &&
            (o++, a.empty.add(y));
        return y(), l.promise(n);
      },
    });
  var st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Nt = new RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
    Me = ["Top", "Right", "Bottom", "Left"],
    Ge = J.documentElement,
    et = function (e) {
      return u.contains(e.ownerDocument, e);
    },
    ur = { composed: !0 };
  Ge.getRootNode &&
    (et = function (e) {
      return (
        u.contains(e.ownerDocument, e) || e.getRootNode(ur) === e.ownerDocument
      );
    });
  var Yt = function (e, n) {
    return (
      (e = n || e).style.display === "none" ||
      (e.style.display === "" && et(e) && u.css(e, "display") === "none")
    );
  };
  function Nn(e, n, a, o) {
    var l,
      f,
      g = 20,
      y = o
        ? function () {
            return o.cur();
          }
        : function () {
            return u.css(e, n, "");
          },
      b = y(),
      w = (a && a[3]) || (u.cssNumber[n] ? "" : "px"),
      S =
        e.nodeType &&
        (u.cssNumber[n] || (w !== "px" && +b)) &&
        Nt.exec(u.css(e, n));
    if (S && S[3] !== w) {
      for (b /= 2, w = w || S[3], S = +b || 1; g--; )
        u.style(e, n, S + w),
          (1 - f) * (1 - (f = y() / b || 0.5)) <= 0 && (g = 0),
          (S /= f);
      (S *= 2), u.style(e, n, S + w), (a = a || []);
    }
    return (
      a &&
        ((S = +S || +b || 0),
        (l = a[1] ? S + (a[1] + 1) * a[2] : +a[2]),
        o && ((o.unit = w), (o.start = S), (o.end = l))),
      l
    );
  }
  var Rt = {};
  function mt(e, n) {
    for (var a, o, l, f, g, y, b, w = [], S = 0, C = e.length; S < C; S++)
      (o = e[S]).style &&
        ((a = o.style.display),
        n
          ? (a === "none" &&
              ((w[S] = B.get(o, "display") || null),
              w[S] || (o.style.display = "")),
            o.style.display === "" &&
              Yt(o) &&
              (w[S] =
                ((b = g = f = void 0),
                (g = (l = o).ownerDocument),
                (y = l.nodeName),
                (b = Rt[y]) ||
                  ((f = g.body.appendChild(g.createElement(y))),
                  (b = u.css(f, "display")),
                  f.parentNode.removeChild(f),
                  b === "none" && (b = "block"),
                  (Rt[y] = b)))))
          : a !== "none" && ((w[S] = "none"), B.set(o, "display", a)));
    for (S = 0; S < C; S++) w[S] != null && (e[S].style.display = w[S]);
    return e;
  }
  u.fn.extend({
    show: function () {
      return mt(this, !0);
    },
    hide: function () {
      return mt(this);
    },
    toggle: function (e) {
      return typeof e == "boolean"
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Yt(this) ? u(this).show() : u(this).hide();
          });
    },
  });
  var Xe,
    Qt,
    Ot = /^(?:checkbox|radio)$/i,
    Rn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    dn = /^$|^module$|\/(?:java|ecma)script/i;
  (Xe = J.createDocumentFragment().appendChild(J.createElement("div"))),
    (Qt = J.createElement("input")).setAttribute("type", "radio"),
    Qt.setAttribute("checked", "checked"),
    Qt.setAttribute("name", "t"),
    Xe.appendChild(Qt),
    (M.checkClone = Xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (Xe.innerHTML = "<textarea>x</textarea>"),
    (M.noCloneChecked = !!Xe.cloneNode(!0).lastChild.defaultValue),
    (Xe.innerHTML = "<option></option>"),
    (M.option = !!Xe.lastChild);
  var Fe = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function be(e, n) {
    var a;
    return (
      (a =
        typeof e.getElementsByTagName < "u"
          ? e.getElementsByTagName(n || "*")
          : typeof e.querySelectorAll < "u"
            ? e.querySelectorAll(n || "*")
            : []),
      n === void 0 || (n && ie(e, n)) ? u.merge([e], a) : a
    );
  }
  function On(e, n) {
    for (var a = 0, o = e.length; a < o; a++)
      B.set(e[a], "globalEval", !n || B.get(n[a], "globalEval"));
  }
  (Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead),
    (Fe.th = Fe.td),
    M.option ||
      (Fe.optgroup = Fe.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var cr = /<|&#?\w+;/;
  function Mn(e, n, a, o, l) {
    for (
      var f,
        g,
        y,
        b,
        w,
        S,
        C = n.createDocumentFragment(),
        T = [],
        _ = 0,
        F = e.length;
      _ < F;
      _++
    )
      if ((f = e[_]) || f === 0)
        if (Lt(f) === "object") u.merge(T, f.nodeType ? [f] : f);
        else if (cr.test(f)) {
          for (
            g = g || C.appendChild(n.createElement("div")),
              y = (Rn.exec(f) || ["", ""])[1].toLowerCase(),
              b = Fe[y] || Fe._default,
              g.innerHTML = b[1] + u.htmlPrefilter(f) + b[2],
              S = b[0];
            S--;

          )
            g = g.lastChild;
          u.merge(T, g.childNodes), ((g = C.firstChild).textContent = "");
        } else T.push(n.createTextNode(f));
    for (C.textContent = "", _ = 0; (f = T[_++]); )
      if (o && -1 < u.inArray(f, o)) l && l.push(f);
      else if (
        ((w = et(f)), (g = be(C.appendChild(f), "script")), w && On(g), a)
      )
        for (S = 0; (f = g[S++]); ) dn.test(f.type || "") && a.push(f);
    return C;
  }
  var qn = /^([^.]*)(?:\.(.+)|)/;
  function vt() {
    return !0;
  }
  function yt() {
    return !1;
  }
  function pn(e, n, a, o, l, f) {
    var g, y;
    if (typeof n == "object") {
      for (y in (typeof a != "string" && ((o = o || a), (a = void 0)), n))
        pn(e, y, a, o, n[y], f);
      return e;
    }
    if (
      (o == null && l == null
        ? ((l = a), (o = a = void 0))
        : l == null &&
          (typeof a == "string"
            ? ((l = o), (o = void 0))
            : ((l = o), (o = a), (a = void 0))),
      l === !1)
    )
      l = yt;
    else if (!l) return e;
    return (
      f === 1 &&
        ((g = l),
        ((l = function (b) {
          return u().off(b), g.apply(this, arguments);
        }).guid = g.guid || (g.guid = u.guid++))),
      e.each(function () {
        u.event.add(this, n, l, o, a);
      })
    );
  }
  function lt(e, n, a) {
    a
      ? (B.set(e, n, !1),
        u.event.add(e, n, {
          namespace: !1,
          handler: function (o) {
            var l,
              f = B.get(this, n);
            if (1 & o.isTrigger && this[n]) {
              if (f)
                (u.event.special[n] || {}).delegateType && o.stopPropagation();
              else if (
                ((f = Le.call(arguments)),
                B.set(this, n, f),
                this[n](),
                (l = B.get(this, n)),
                B.set(this, n, !1),
                f !== l)
              )
                return o.stopImmediatePropagation(), o.preventDefault(), l;
            } else
              f &&
                (B.set(this, n, u.event.trigger(f[0], f.slice(1), this)),
                o.stopPropagation(),
                (o.isImmediatePropagationStopped = vt));
          },
        }))
      : B.get(e, n) === void 0 && u.event.add(e, n, vt);
  }
  (u.event = {
    global: {},
    add: function (e, n, a, o, l) {
      var f,
        g,
        y,
        b,
        w,
        S,
        C,
        T,
        _,
        F,
        E,
        W = B.get(e);
      if (Ke(e))
        for (
          a.handler && ((a = (f = a).handler), (l = f.selector)),
            l && u.find.matchesSelector(Ge, l),
            a.guid || (a.guid = u.guid++),
            (b = W.events) || (b = W.events = Object.create(null)),
            (g = W.handle) ||
              (g = W.handle =
                function (X) {
                  return typeof u < "u" && u.event.triggered !== X.type
                    ? u.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            w = (n = (n || "").match(ve) || [""]).length;
          w--;

        )
          (_ = E = (y = qn.exec(n[w]) || [])[1]),
            (F = (y[2] || "").split(".").sort()),
            _ &&
              ((C = u.event.special[_] || {}),
              (_ = (l ? C.delegateType : C.bindType) || _),
              (C = u.event.special[_] || {}),
              (S = u.extend(
                {
                  type: _,
                  origType: E,
                  data: o,
                  handler: a,
                  guid: a.guid,
                  selector: l,
                  needsContext: l && u.expr.match.needsContext.test(l),
                  namespace: F.join("."),
                },
                f,
              )),
              (T = b[_]) ||
                (((T = b[_] = []).delegateCount = 0),
                (C.setup && C.setup.call(e, o, F, g) !== !1) ||
                  (e.addEventListener && e.addEventListener(_, g))),
              C.add &&
                (C.add.call(e, S), S.handler.guid || (S.handler.guid = a.guid)),
              l ? T.splice(T.delegateCount++, 0, S) : T.push(S),
              (u.event.global[_] = !0));
    },
    remove: function (e, n, a, o, l) {
      var f,
        g,
        y,
        b,
        w,
        S,
        C,
        T,
        _,
        F,
        E,
        W = B.hasData(e) && B.get(e);
      if (W && (b = W.events)) {
        for (w = (n = (n || "").match(ve) || [""]).length; w--; )
          if (
            ((_ = E = (y = qn.exec(n[w]) || [])[1]),
            (F = (y[2] || "").split(".").sort()),
            _)
          ) {
            for (
              C = u.event.special[_] || {},
                T = b[(_ = (o ? C.delegateType : C.bindType) || _)] || [],
                y =
                  y[2] &&
                  new RegExp("(^|\\.)" + F.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                g = f = T.length;
              f--;

            )
              (S = T[f]),
                (!l && E !== S.origType) ||
                  (a && a.guid !== S.guid) ||
                  (y && !y.test(S.namespace)) ||
                  (o && o !== S.selector && (o !== "**" || !S.selector)) ||
                  (T.splice(f, 1),
                  S.selector && T.delegateCount--,
                  C.remove && C.remove.call(e, S));
            g &&
              !T.length &&
              ((C.teardown && C.teardown.call(e, F, W.handle) !== !1) ||
                u.removeEvent(e, _, W.handle),
              delete b[_]);
          } else for (_ in b) u.event.remove(e, _ + n[w], a, o, !0);
        u.isEmptyObject(b) && B.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var n,
        a,
        o,
        l,
        f,
        g,
        y = new Array(arguments.length),
        b = u.event.fix(e),
        w = (B.get(this, "events") || Object.create(null))[b.type] || [],
        S = u.event.special[b.type] || {};
      for (y[0] = b, n = 1; n < arguments.length; n++) y[n] = arguments[n];
      if (
        ((b.delegateTarget = this),
        !S.preDispatch || S.preDispatch.call(this, b) !== !1)
      ) {
        for (
          g = u.event.handlers.call(this, b, w), n = 0;
          (l = g[n++]) && !b.isPropagationStopped();

        )
          for (
            b.currentTarget = l.elem, a = 0;
            (f = l.handlers[a++]) && !b.isImmediatePropagationStopped();

          )
            (b.rnamespace &&
              f.namespace !== !1 &&
              !b.rnamespace.test(f.namespace)) ||
              ((b.handleObj = f),
              (b.data = f.data),
              (o = (
                (u.event.special[f.origType] || {}).handle || f.handler
              ).apply(l.elem, y)) !== void 0 &&
                (b.result = o) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        return S.postDispatch && S.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (e, n) {
      var a,
        o,
        l,
        f,
        g,
        y = [],
        b = n.delegateCount,
        w = e.target;
      if (b && w.nodeType && !(e.type === "click" && 1 <= e.button)) {
        for (; w !== this; w = w.parentNode || this)
          if (w.nodeType === 1 && (e.type !== "click" || w.disabled !== !0)) {
            for (f = [], g = {}, a = 0; a < b; a++)
              g[(l = (o = n[a]).selector + " ")] === void 0 &&
                (g[l] = o.needsContext
                  ? -1 < u(l, this).index(w)
                  : u.find(l, this, null, [w]).length),
                g[l] && f.push(o);
            f.length && y.push({ elem: w, handlers: f });
          }
      }
      return (
        (w = this), b < n.length && y.push({ elem: w, handlers: n.slice(b) }), y
      );
    },
    addProp: function (e, n) {
      Object.defineProperty(u.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: I(n)
          ? function () {
              if (this.originalEvent) return n(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (a) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a,
          });
        },
      });
    },
    fix: function (e) {
      return e[u.expando] ? e : new u.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var n = this || e;
          return (
            Ot.test(n.type) && n.click && ie(n, "input") && lt(n, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var n = this || e;
          return (
            Ot.test(n.type) && n.click && ie(n, "input") && lt(n, "click"), !0
          );
        },
        _default: function (e) {
          var n = e.target;
          return (
            (Ot.test(n.type) &&
              n.click &&
              ie(n, "input") &&
              B.get(n, "click")) ||
            ie(n, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== void 0 &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (u.removeEvent = function (e, n, a) {
      e.removeEventListener && e.removeEventListener(n, a);
    }),
    (u.Event = function (e, n) {
      if (!(this instanceof u.Event)) return new u.Event(e, n);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (e.defaultPrevented === void 0 && e.returnValue === !1)
              ? vt
              : yt),
          (this.target =
            e.target && e.target.nodeType === 3
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        n && u.extend(this, n),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[u.expando] = !0);
    }),
    (u.Event.prototype = {
      constructor: u.Event,
      isDefaultPrevented: yt,
      isPropagationStopped: yt,
      isImmediatePropagationStopped: yt,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = vt),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = vt),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = vt),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    u.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      u.event.addProp,
    ),
    u.each({ focus: "focusin", blur: "focusout" }, function (e, n) {
      function a(o) {
        if (J.documentMode) {
          var l = B.get(this, "handle"),
            f = u.event.fix(o);
          (f.type = o.type === "focusin" ? "focus" : "blur"),
            (f.isSimulated = !0),
            l(o),
            f.target === f.currentTarget && l(f);
        } else u.event.simulate(n, o.target, u.event.fix(o));
      }
      (u.event.special[e] = {
        setup: function () {
          var o;
          if ((lt(this, e, !0), !J.documentMode)) return !1;
          (o = B.get(this, n)) || this.addEventListener(n, a),
            B.set(this, n, (o || 0) + 1);
        },
        trigger: function () {
          return lt(this, e), !0;
        },
        teardown: function () {
          var o;
          if (!J.documentMode) return !1;
          (o = B.get(this, n) - 1)
            ? B.set(this, n, o)
            : (this.removeEventListener(n, a), B.remove(this, n));
        },
        _default: function (o) {
          return B.get(o.target, e);
        },
        delegateType: n,
      }),
        (u.event.special[n] = {
          setup: function () {
            var o = this.ownerDocument || this.document || this,
              l = J.documentMode ? this : o,
              f = B.get(l, n);
            f ||
              (J.documentMode
                ? this.addEventListener(n, a)
                : o.addEventListener(e, a, !0)),
              B.set(l, n, (f || 0) + 1);
          },
          teardown: function () {
            var o = this.ownerDocument || this.document || this,
              l = J.documentMode ? this : o,
              f = B.get(l, n) - 1;
            f
              ? B.set(l, n, f)
              : (J.documentMode
                  ? this.removeEventListener(n, a)
                  : o.removeEventListener(e, a, !0),
                B.remove(l, n));
          },
        });
    }),
    u.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, n) {
        u.event.special[e] = {
          delegateType: n,
          bindType: n,
          handle: function (a) {
            var o,
              l = a.relatedTarget,
              f = a.handleObj;
            return (
              (l && (l === this || u.contains(this, l))) ||
                ((a.type = f.origType),
                (o = f.handler.apply(this, arguments)),
                (a.type = n)),
              o
            );
          },
        };
      },
    ),
    u.fn.extend({
      on: function (e, n, a, o) {
        return pn(this, e, n, a, o);
      },
      one: function (e, n, a, o) {
        return pn(this, e, n, a, o, 1);
      },
      off: function (e, n, a) {
        var o, l;
        if (e && e.preventDefault && e.handleObj)
          return (
            (o = e.handleObj),
            u(e.delegateTarget).off(
              o.namespace ? o.origType + "." + o.namespace : o.origType,
              o.selector,
              o.handler,
            ),
            this
          );
        if (typeof e == "object") {
          for (l in e) this.off(l, n, e[l]);
          return this;
        }
        return (
          (n !== !1 && typeof n != "function") || ((a = n), (n = void 0)),
          a === !1 && (a = yt),
          this.each(function () {
            u.event.remove(this, e, a, n);
          })
        );
      },
    });
  var hn = /<script|<style|<link/i,
    Wn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Bn(e, n) {
    return (
      (ie(e, "table") &&
        ie(n.nodeType !== 11 ? n : n.firstChild, "tr") &&
        u(e).children("tbody")[0]) ||
      e
    );
  }
  function gn(e) {
    return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
  }
  function dr(e) {
    return (
      (e.type || "").slice(0, 5) === "true/"
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ee(e, n) {
    var a, o, l, f, g, y;
    if (n.nodeType === 1) {
      if (B.hasData(e) && (y = B.get(e).events))
        for (l in (B.remove(n, "handle events"), y))
          for (a = 0, o = y[l].length; a < o; a++) u.event.add(n, l, y[l][a]);
      De.hasData(e) &&
        ((f = De.access(e)), (g = u.extend({}, f)), De.set(n, g));
    }
  }
  function bt(e, n, a, o) {
    n = rn(n);
    var l,
      f,
      g,
      y,
      b,
      w,
      S = 0,
      C = e.length,
      T = C - 1,
      _ = n[0],
      F = I(_);
    if (F || (1 < C && typeof _ == "string" && !M.checkClone && Wn.test(_)))
      return e.each(function (E) {
        var W = e.eq(E);
        F && (n[0] = _.call(this, E, W.html())), bt(W, n, a, o);
      });
    if (
      C &&
      ((f = (l = Mn(n, e[0].ownerDocument, !1, e, o)).firstChild),
      l.childNodes.length === 1 && (l = f),
      f || o)
    ) {
      for (y = (g = u.map(be(l, "script"), gn)).length; S < C; S++)
        (b = l),
          S !== T &&
            ((b = u.clone(b, !0, !0)), y && u.merge(g, be(b, "script"))),
          a.call(e[S], b, S);
      if (y)
        for (w = g[g.length - 1].ownerDocument, u.map(g, dr), S = 0; S < y; S++)
          (b = g[S]),
            dn.test(b.type || "") &&
              !B.access(b, "globalEval") &&
              u.contains(w, b) &&
              (b.src && (b.type || "").toLowerCase() !== "module"
                ? u._evalUrl &&
                  !b.noModule &&
                  u._evalUrl(
                    b.src,
                    { nonce: b.nonce || b.getAttribute("nonce") },
                    w,
                  )
                : or(b.textContent.replace(fr, ""), b, w));
    }
    return e;
  }
  function Zt(e, n, a) {
    for (var o, l = n ? u.filter(n, e) : e, f = 0; (o = l[f]) != null; f++)
      a || o.nodeType !== 1 || u.cleanData(be(o)),
        o.parentNode &&
          (a && et(o) && On(be(o, "script")), o.parentNode.removeChild(o));
    return e;
  }
  u.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, n, a) {
      var o,
        l,
        f,
        g,
        y,
        b,
        w,
        S = e.cloneNode(!0),
        C = et(e);
      if (
        !(
          M.noCloneChecked ||
          (e.nodeType !== 1 && e.nodeType !== 11) ||
          u.isXMLDoc(e)
        )
      )
        for (g = be(S), o = 0, l = (f = be(e)).length; o < l; o++)
          (y = f[o]),
            (b = g[o]),
            (w = b.nodeName.toLowerCase()) === "input" && Ot.test(y.type)
              ? (b.checked = y.checked)
              : (w !== "input" && w !== "textarea") ||
                (b.defaultValue = y.defaultValue);
      if (n)
        if (a)
          for (f = f || be(e), g = g || be(S), o = 0, l = f.length; o < l; o++)
            Ee(f[o], g[o]);
        else Ee(e, S);
      return (
        0 < (g = be(S, "script")).length && On(g, !C && be(e, "script")), S
      );
    },
    cleanData: function (e) {
      for (var n, a, o, l = u.event.special, f = 0; (a = e[f]) !== void 0; f++)
        if (Ke(a)) {
          if ((n = a[B.expando])) {
            if (n.events)
              for (o in n.events)
                l[o] ? u.event.remove(a, o) : u.removeEvent(a, o, n.handle);
            a[B.expando] = void 0;
          }
          a[De.expando] && (a[De.expando] = void 0);
        }
    },
  }),
    u.fn.extend({
      detach: function (e) {
        return Zt(this, e, !0);
      },
      remove: function (e) {
        return Zt(this, e);
      },
      text: function (e) {
        return ke(
          this,
          function (n) {
            return n === void 0
              ? u.text(this)
              : this.empty().each(function () {
                  (this.nodeType !== 1 &&
                    this.nodeType !== 11 &&
                    this.nodeType !== 9) ||
                    (this.textContent = n);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return bt(this, arguments, function (e) {
          (this.nodeType !== 1 &&
            this.nodeType !== 11 &&
            this.nodeType !== 9) ||
            Bn(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return bt(this, arguments, function (e) {
          if (
            this.nodeType === 1 ||
            this.nodeType === 11 ||
            this.nodeType === 9
          ) {
            var n = Bn(this, e);
            n.insertBefore(e, n.firstChild);
          }
        });
      },
      before: function () {
        return bt(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return bt(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, n = 0; (e = this[n]) != null; n++)
          e.nodeType === 1 && (u.cleanData(be(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, n) {
        return (
          (e = e != null && e),
          (n = n ?? e),
          this.map(function () {
            return u.clone(this, e, n);
          })
        );
      },
      html: function (e) {
        return ke(
          this,
          function (n) {
            var a = this[0] || {},
              o = 0,
              l = this.length;
            if (n === void 0 && a.nodeType === 1) return a.innerHTML;
            if (
              typeof n == "string" &&
              !hn.test(n) &&
              !Fe[(Rn.exec(n) || ["", ""])[1].toLowerCase()]
            ) {
              n = u.htmlPrefilter(n);
              try {
                for (; o < l; o++)
                  (a = this[o] || {}).nodeType === 1 &&
                    (u.cleanData(be(a, !1)), (a.innerHTML = n));
                a = 0;
              } catch {}
            }
            a && this.empty().append(n);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var e = [];
        return bt(
          this,
          arguments,
          function (n) {
            var a = this.parentNode;
            u.inArray(this, e) < 0 &&
              (u.cleanData(be(this)), a && a.replaceChild(n, this));
          },
          e,
        );
      },
    }),
    u.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, n) {
        u.fn[e] = function (a) {
          for (var o, l = [], f = u(a), g = f.length - 1, y = 0; y <= g; y++)
            (o = y === g ? this : this.clone(!0)),
              u(f[y])[n](o),
              Xt.apply(l, o.get());
          return this.pushStack(l);
        };
      },
    );
  var Ue = new RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
    Un = /^--/,
    Mt = function (e) {
      var n = e.ownerDocument.defaultView;
      return (n && n.opener) || (n = m), n.getComputedStyle(e);
    },
    mn = function (e, n, a) {
      var o,
        l,
        f = {};
      for (l in n) (f[l] = e.style[l]), (e.style[l] = n[l]);
      for (l in ((o = a.call(e)), n)) e.style[l] = f[l];
      return o;
    },
    pr = new RegExp(Me.join("|"), "i");
  function qt(e, n, a) {
    var o,
      l,
      f,
      g,
      y = Un.test(n),
      b = e.style;
    return (
      (a = a || Mt(e)) &&
        ((g = a.getPropertyValue(n) || a[n]),
        y && g && (g = g.replace(dt, "$1") || void 0),
        g !== "" || et(e) || (g = u.style(e, n)),
        !M.pixelBoxStyles() &&
          Ue.test(g) &&
          pr.test(n) &&
          ((o = b.width),
          (l = b.minWidth),
          (f = b.maxWidth),
          (b.minWidth = b.maxWidth = b.width = g),
          (g = a.width),
          (b.width = o),
          (b.minWidth = l),
          (b.maxWidth = f))),
      g !== void 0 ? g + "" : g
    );
  }
  function $n(e, n) {
    return {
      get: function () {
        if (!e()) return (this.get = n).apply(this, arguments);
        delete this.get;
      },
    };
  }
  (function () {
    function e() {
      if (w) {
        (b.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (w.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          Ge.appendChild(b).appendChild(w);
        var S = m.getComputedStyle(w);
        (a = S.top !== "1%"),
          (y = n(S.marginLeft) === 12),
          (w.style.right = "60%"),
          (f = n(S.right) === 36),
          (o = n(S.width) === 36),
          (w.style.position = "absolute"),
          (l = n(w.offsetWidth / 3) === 12),
          Ge.removeChild(b),
          (w = null);
      }
    }
    function n(S) {
      return Math.round(parseFloat(S));
    }
    var a,
      o,
      l,
      f,
      g,
      y,
      b = J.createElement("div"),
      w = J.createElement("div");
    w.style &&
      ((w.style.backgroundClip = "content-box"),
      (w.cloneNode(!0).style.backgroundClip = ""),
      (M.clearCloneStyle = w.style.backgroundClip === "content-box"),
      u.extend(M, {
        boxSizingReliable: function () {
          return e(), o;
        },
        pixelBoxStyles: function () {
          return e(), f;
        },
        pixelPosition: function () {
          return e(), a;
        },
        reliableMarginLeft: function () {
          return e(), y;
        },
        scrollboxSize: function () {
          return e(), l;
        },
        reliableTrDimensions: function () {
          var S, C, T, _;
          return (
            g == null &&
              ((S = J.createElement("table")),
              (C = J.createElement("tr")),
              (T = J.createElement("div")),
              (S.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (C.style.cssText = "box-sizing:content-box;border:1px solid"),
              (C.style.height = "1px"),
              (T.style.height = "9px"),
              (T.style.display = "block"),
              Ge.appendChild(S).appendChild(C).appendChild(T),
              (_ = m.getComputedStyle(C)),
              (g =
                parseInt(_.height, 10) +
                  parseInt(_.borderTopWidth, 10) +
                  parseInt(_.borderBottomWidth, 10) ===
                C.offsetHeight),
              Ge.removeChild(S)),
            g
          );
        },
      }));
  })();
  var ue = ["Webkit", "Moz", "ms"],
    xt = J.createElement("div").style,
    Hn = {};
  function vn(e) {
    var n = u.cssProps[e] || Hn[e];
    return (
      n ||
      (e in xt
        ? e
        : (Hn[e] =
            (function (a) {
              for (
                var o = a[0].toUpperCase() + a.slice(1), l = ue.length;
                l--;

              )
                if ((a = ue[l] + o) in xt) return a;
            })(e) || e))
    );
  }
  var Xn = /^(none|table(?!-c[ea]).+)/,
    Vn = { position: "absolute", visibility: "hidden", display: "block" },
    Kt = { letterSpacing: "0", fontWeight: "400" };
  function Jn(e, n, a) {
    var o = Nt.exec(n);
    return o ? Math.max(0, o[2] - (a || 0)) + (o[3] || "px") : n;
  }
  function St(e, n, a, o, l, f) {
    var g = n === "width" ? 1 : 0,
      y = 0,
      b = 0,
      w = 0;
    if (a === (o ? "border" : "content")) return 0;
    for (; g < 4; g += 2)
      a === "margin" && (w += u.css(e, a + Me[g], !0, l)),
        o
          ? (a === "content" && (b -= u.css(e, "padding" + Me[g], !0, l)),
            a !== "margin" &&
              (b -= u.css(e, "border" + Me[g] + "Width", !0, l)))
          : ((b += u.css(e, "padding" + Me[g], !0, l)),
            a !== "padding"
              ? (b += u.css(e, "border" + Me[g] + "Width", !0, l))
              : (y += u.css(e, "border" + Me[g] + "Width", !0, l)));
    return (
      !o &&
        0 <= f &&
        (b +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + n[0].toUpperCase() + n.slice(1)] - f - b - y - 0.5,
            ),
          ) || 0),
      b + w
    );
  }
  function zn(e, n, a) {
    var o = Mt(e),
      l =
        (!M.boxSizingReliable() || a) &&
        u.css(e, "boxSizing", !1, o) === "border-box",
      f = l,
      g = qt(e, n, o),
      y = "offset" + n[0].toUpperCase() + n.slice(1);
    if (Ue.test(g)) {
      if (!a) return g;
      g = "auto";
    }
    return (
      ((!M.boxSizingReliable() && l) ||
        (!M.reliableTrDimensions() && ie(e, "tr")) ||
        g === "auto" ||
        (!parseFloat(g) && u.css(e, "display", !1, o) === "inline")) &&
        e.getClientRects().length &&
        ((l = u.css(e, "boxSizing", !1, o) === "border-box"),
        (f = y in e) && (g = e[y])),
      (g = parseFloat(g) || 0) +
        St(e, n, a || (l ? "border" : "content"), f, o, g) +
        "px"
    );
  }
  function qe(e, n, a, o, l) {
    return new qe.prototype.init(e, n, a, o, l);
  }
  u.extend({
    cssHooks: {
      opacity: {
        get: function (e, n) {
          if (n) {
            var a = qt(e, "opacity");
            return a === "" ? "1" : a;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, n, a, o) {
      if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
        var l,
          f,
          g,
          y = Oe(n),
          b = Un.test(n),
          w = e.style;
        if (
          (b || (n = vn(y)), (g = u.cssHooks[n] || u.cssHooks[y]), a === void 0)
        )
          return g && "get" in g && (l = g.get(e, !1, o)) !== void 0 ? l : w[n];
        (f = typeof a) == "string" &&
          (l = Nt.exec(a)) &&
          l[1] &&
          ((a = Nn(e, n, l)), (f = "number")),
          a != null &&
            a == a &&
            (f !== "number" ||
              b ||
              (a += (l && l[3]) || (u.cssNumber[y] ? "" : "px")),
            M.clearCloneStyle ||
              a !== "" ||
              n.indexOf("background") !== 0 ||
              (w[n] = "inherit"),
            (g && "set" in g && (a = g.set(e, a, o)) === void 0) ||
              (b ? w.setProperty(n, a) : (w[n] = a)));
      }
    },
    css: function (e, n, a, o) {
      var l,
        f,
        g,
        y = Oe(n);
      return (
        Un.test(n) || (n = vn(y)),
        (g = u.cssHooks[n] || u.cssHooks[y]) &&
          "get" in g &&
          (l = g.get(e, !0, a)),
        l === void 0 && (l = qt(e, n, o)),
        l === "normal" && n in Kt && (l = Kt[n]),
        a === "" || a
          ? ((f = parseFloat(l)), a === !0 || isFinite(f) ? f || 0 : l)
          : l
      );
    },
  }),
    u.each(["height", "width"], function (e, n) {
      u.cssHooks[n] = {
        get: function (a, o, l) {
          if (o)
            return !Xn.test(u.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? zn(a, n, l)
              : mn(a, Vn, function () {
                  return zn(a, n, l);
                });
        },
        set: function (a, o, l) {
          var f,
            g = Mt(a),
            y = !M.scrollboxSize() && g.position === "absolute",
            b = (y || l) && u.css(a, "boxSizing", !1, g) === "border-box",
            w = l ? St(a, n, l, b, g) : 0;
          return (
            b &&
              y &&
              (w -= Math.ceil(
                a["offset" + n[0].toUpperCase() + n.slice(1)] -
                  parseFloat(g[n]) -
                  St(a, n, "border", !1, g) -
                  0.5,
              )),
            w &&
              (f = Nt.exec(o)) &&
              (f[3] || "px") !== "px" &&
              ((a.style[n] = o), (o = u.css(a, n))),
            Jn(0, o, w)
          );
        },
      };
    }),
    (u.cssHooks.marginLeft = $n(M.reliableMarginLeft, function (e, n) {
      if (n)
        return (
          (parseFloat(qt(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              mn(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    u.each({ margin: "", padding: "", border: "Width" }, function (e, n) {
      (u.cssHooks[e + n] = {
        expand: function (a) {
          for (
            var o = 0, l = {}, f = typeof a == "string" ? a.split(" ") : [a];
            o < 4;
            o++
          )
            l[e + Me[o] + n] = f[o] || f[o - 2] || f[0];
          return l;
        },
      }),
        e !== "margin" && (u.cssHooks[e + n].set = Jn);
    }),
    u.fn.extend({
      css: function (e, n) {
        return ke(
          this,
          function (a, o, l) {
            var f,
              g,
              y = {},
              b = 0;
            if (Array.isArray(o)) {
              for (f = Mt(a), g = o.length; b < g; b++)
                y[o[b]] = u.css(a, o[b], !1, f);
              return y;
            }
            return l !== void 0 ? u.style(a, o, l) : u.css(a, o);
          },
          e,
          n,
          1 < arguments.length,
        );
      },
    }),
    (((u.Tween = qe).prototype = {
      constructor: qe,
      init: function (e, n, a, o, l, f) {
        (this.elem = e),
          (this.prop = a),
          (this.easing = l || u.easing._default),
          (this.options = n),
          (this.start = this.now = this.cur()),
          (this.end = o),
          (this.unit = f || (u.cssNumber[a] ? "" : "px"));
      },
      cur: function () {
        var e = qe.propHooks[this.prop];
        return e && e.get ? e.get(this) : qe.propHooks._default.get(this);
      },
      run: function (e) {
        var n,
          a = qe.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = n =
                u.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = n = e),
          (this.now = (this.end - this.start) * n + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          a && a.set ? a.set(this) : qe.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = qe.prototype),
    ((qe.propHooks = {
      _default: {
        get: function (e) {
          var n;
          return e.elem.nodeType !== 1 ||
            (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
            ? e.elem[e.prop]
            : (n = u.css(e.elem, e.prop, "")) && n !== "auto"
              ? n
              : 0;
        },
        set: function (e) {
          u.fx.step[e.prop]
            ? u.fx.step[e.prop](e)
            : e.elem.nodeType !== 1 ||
                (!u.cssHooks[e.prop] && e.elem.style[vn(e.prop)] == null)
              ? (e.elem[e.prop] = e.now)
              : u.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = qe.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (u.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (u.fx = qe.prototype.init),
    (u.fx.step = {});
  var tt,
    Ae,
    Te,
    yn,
    Gn = /^(?:toggle|show|hide)$/,
    Ie = /queueHooks$/;
  function te() {
    Ae &&
      (J.hidden === !1 && m.requestAnimationFrame
        ? m.requestAnimationFrame(te)
        : m.setTimeout(te, u.fx.interval),
      u.fx.tick());
  }
  function bn() {
    return (
      m.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function Wt(e, n) {
    var a,
      o = 0,
      l = { height: e };
    for (n = n ? 1 : 0; o < 4; o += 2 - n)
      l["margin" + (a = Me[o])] = l["padding" + a] = e;
    return n && (l.opacity = l.width = e), l;
  }
  function xe(e, n, a) {
    for (
      var o,
        l = ($e.tweeners[n] || []).concat($e.tweeners["*"]),
        f = 0,
        g = l.length;
      f < g;
      f++
    )
      if ((o = l[f].call(a, n, e))) return o;
  }
  function $e(e, n, a) {
    var o,
      l,
      f = 0,
      g = $e.prefilters.length,
      y = u.Deferred().always(function () {
        delete b.elem;
      }),
      b = function () {
        if (l) return !1;
        for (
          var C = tt || bn(),
            T = Math.max(0, w.startTime + w.duration - C),
            _ = 1 - (T / w.duration || 0),
            F = 0,
            E = w.tweens.length;
          F < E;
          F++
        )
          w.tweens[F].run(_);
        return (
          y.notifyWith(e, [w, _, T]),
          _ < 1 && E
            ? T
            : (E || y.notifyWith(e, [w, 1, 0]), y.resolveWith(e, [w]), !1)
        );
      },
      w = y.promise({
        elem: e,
        props: u.extend({}, n),
        opts: u.extend(!0, { specialEasing: {}, easing: u.easing._default }, a),
        originalProperties: n,
        originalOptions: a,
        startTime: tt || bn(),
        duration: a.duration,
        tweens: [],
        createTween: function (C, T) {
          var _ = u.Tween(
            e,
            w.opts,
            C,
            T,
            w.opts.specialEasing[C] || w.opts.easing,
          );
          return w.tweens.push(_), _;
        },
        stop: function (C) {
          var T = 0,
            _ = C ? w.tweens.length : 0;
          if (l) return this;
          for (l = !0; T < _; T++) w.tweens[T].run(1);
          return (
            C
              ? (y.notifyWith(e, [w, 1, 0]), y.resolveWith(e, [w, C]))
              : y.rejectWith(e, [w, C]),
            this
          );
        },
      }),
      S = w.props;
    for (
      !(function (C, T) {
        var _, F, E, W, X;
        for (_ in C)
          if (
            ((E = T[(F = Oe(_))]),
            (W = C[_]),
            Array.isArray(W) && ((E = W[1]), (W = C[_] = W[0])),
            _ !== F && ((C[F] = W), delete C[_]),
            (X = u.cssHooks[F]) && ("expand" in X))
          )
            for (_ in ((W = X.expand(W)), delete C[F], W))
              (_ in C) || ((C[_] = W[_]), (T[_] = E));
          else T[F] = E;
      })(S, w.opts.specialEasing);
      f < g;
      f++
    )
      if ((o = $e.prefilters[f].call(w, e, S, w.opts)))
        return (
          I(o.stop) &&
            (u._queueHooks(w.elem, w.opts.queue).stop = o.stop.bind(o)),
          o
        );
    return (
      u.map(S, xe, w),
      I(w.opts.start) && w.opts.start.call(e, w),
      w
        .progress(w.opts.progress)
        .done(w.opts.done, w.opts.complete)
        .fail(w.opts.fail)
        .always(w.opts.always),
      u.fx.timer(u.extend(b, { elem: e, anim: w, queue: w.opts.queue })),
      w
    );
  }
  (u.Animation = u.extend($e, {
    tweeners: {
      "*": [
        function (e, n) {
          var a = this.createTween(e, n);
          return Nn(a.elem, e, Nt.exec(n), a), a;
        },
      ],
    },
    tweener: function (e, n) {
      I(e) ? ((n = e), (e = ["*"])) : (e = e.match(ve));
      for (var a, o = 0, l = e.length; o < l; o++)
        (a = e[o]),
          ($e.tweeners[a] = $e.tweeners[a] || []),
          $e.tweeners[a].unshift(n);
    },
    prefilters: [
      function (e, n, a) {
        var o,
          l,
          f,
          g,
          y,
          b,
          w,
          S,
          C = "width" in n || "height" in n,
          T = this,
          _ = {},
          F = e.style,
          E = e.nodeType && Yt(e),
          W = B.get(e, "fxshow");
        for (o in (a.queue ||
          ((g = u._queueHooks(e, "fx")).unqueued == null &&
            ((g.unqueued = 0),
            (y = g.empty.fire),
            (g.empty.fire = function () {
              g.unqueued || y();
            })),
          g.unqueued++,
          T.always(function () {
            T.always(function () {
              g.unqueued--, u.queue(e, "fx").length || g.empty.fire();
            });
          })),
        n))
          if (((l = n[o]), Gn.test(l))) {
            if (
              (delete n[o],
              (f = f || l === "toggle"),
              l === (E ? "hide" : "show"))
            ) {
              if (l !== "show" || !W || W[o] === void 0) continue;
              E = !0;
            }
            _[o] = (W && W[o]) || u.style(e, o);
          }
        if ((b = !u.isEmptyObject(n)) || !u.isEmptyObject(_))
          for (o in (C &&
            e.nodeType === 1 &&
            ((a.overflow = [F.overflow, F.overflowX, F.overflowY]),
            (w = W && W.display) == null && (w = B.get(e, "display")),
            (S = u.css(e, "display")) === "none" &&
              (w
                ? (S = w)
                : (mt([e], !0),
                  (w = e.style.display || w),
                  (S = u.css(e, "display")),
                  mt([e]))),
            (S === "inline" || (S === "inline-block" && w != null)) &&
              u.css(e, "float") === "none" &&
              (b ||
                (T.done(function () {
                  F.display = w;
                }),
                w == null && ((S = F.display), (w = S === "none" ? "" : S))),
              (F.display = "inline-block"))),
          a.overflow &&
            ((F.overflow = "hidden"),
            T.always(function () {
              (F.overflow = a.overflow[0]),
                (F.overflowX = a.overflow[1]),
                (F.overflowY = a.overflow[2]);
            })),
          (b = !1),
          _))
            b ||
              (W
                ? "hidden" in W && (E = W.hidden)
                : (W = B.access(e, "fxshow", { display: w })),
              f && (W.hidden = !E),
              E && mt([e], !0),
              T.done(function () {
                for (o in (E || mt([e]), B.remove(e, "fxshow"), _))
                  u.style(e, o, _[o]);
              })),
              (b = xe(E ? W[o] : 0, o, T)),
              o in W ||
                ((W[o] = b.start), E && ((b.end = b.start), (b.start = 0)));
      },
    ],
    prefilter: function (e, n) {
      n ? $e.prefilters.unshift(e) : $e.prefilters.push(e);
    },
  })),
    (u.speed = function (e, n, a) {
      var o =
        e && typeof e == "object"
          ? u.extend({}, e)
          : {
              complete: a || (!a && n) || (I(e) && e),
              duration: e,
              easing: (a && n) || (n && !I(n) && n),
            };
      return (
        u.fx.off
          ? (o.duration = 0)
          : typeof o.duration != "number" &&
            (o.duration in u.fx.speeds
              ? (o.duration = u.fx.speeds[o.duration])
              : (o.duration = u.fx.speeds._default)),
        (o.queue != null && o.queue !== !0) || (o.queue = "fx"),
        (o.old = o.complete),
        (o.complete = function () {
          I(o.old) && o.old.call(this), o.queue && u.dequeue(this, o.queue);
        }),
        o
      );
    }),
    u.fn.extend({
      fadeTo: function (e, n, a, o) {
        return this.filter(Yt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: n }, e, a, o);
      },
      animate: function (e, n, a, o) {
        var l = u.isEmptyObject(e),
          f = u.speed(n, a, o),
          g = function () {
            var y = $e(this, u.extend({}, e), f);
            (l || B.get(this, "finish")) && y.stop(!0);
          };
        return (
          (g.finish = g),
          l || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (e, n, a) {
        var o = function (l) {
          var f = l.stop;
          delete l.stop, f(a);
        };
        return (
          typeof e != "string" && ((a = n), (n = e), (e = void 0)),
          n && this.queue(e || "fx", []),
          this.each(function () {
            var l = !0,
              f = e != null && e + "queueHooks",
              g = u.timers,
              y = B.get(this);
            if (f) y[f] && y[f].stop && o(y[f]);
            else for (f in y) y[f] && y[f].stop && Ie.test(f) && o(y[f]);
            for (f = g.length; f--; )
              g[f].elem !== this ||
                (e != null && g[f].queue !== e) ||
                (g[f].anim.stop(a), (l = !1), g.splice(f, 1));
            (!l && a) || u.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var n,
              a = B.get(this),
              o = a[e + "queue"],
              l = a[e + "queueHooks"],
              f = u.timers,
              g = o ? o.length : 0;
            for (
              a.finish = !0,
                u.queue(this, e, []),
                l && l.stop && l.stop.call(this, !0),
                n = f.length;
              n--;

            )
              f[n].elem === this &&
                f[n].queue === e &&
                (f[n].anim.stop(!0), f.splice(n, 1));
            for (n = 0; n < g; n++)
              o[n] && o[n].finish && o[n].finish.call(this);
            delete a.finish;
          })
        );
      },
    }),
    u.each(["toggle", "show", "hide"], function (e, n) {
      var a = u.fn[n];
      u.fn[n] = function (o, l, f) {
        return o == null || typeof o == "boolean"
          ? a.apply(this, arguments)
          : this.animate(Wt(n, !0), o, l, f);
      };
    }),
    u.each(
      {
        slideDown: Wt("show"),
        slideUp: Wt("hide"),
        slideToggle: Wt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, n) {
        u.fn[e] = function (a, o, l) {
          return this.animate(n, a, o, l);
        };
      },
    ),
    (u.timers = []),
    (u.fx.tick = function () {
      var e,
        n = 0,
        a = u.timers;
      for (tt = Date.now(); n < a.length; n++)
        (e = a[n])() || a[n] !== e || a.splice(n--, 1);
      a.length || u.fx.stop(), (tt = void 0);
    }),
    (u.fx.timer = function (e) {
      u.timers.push(e), u.fx.start();
    }),
    (u.fx.interval = 13),
    (u.fx.start = function () {
      Ae || ((Ae = !0), te());
    }),
    (u.fx.stop = function () {
      Ae = null;
    }),
    (u.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (u.fn.delay = function (e, n) {
      return (
        (e = (u.fx && u.fx.speeds[e]) || e),
        (n = n || "fx"),
        this.queue(n, function (a, o) {
          var l = m.setTimeout(a, e);
          o.stop = function () {
            m.clearTimeout(l);
          };
        })
      );
    }),
    (Te = J.createElement("input")),
    (yn = J.createElement("select").appendChild(J.createElement("option"))),
    (Te.type = "checkbox"),
    (M.checkOn = Te.value !== ""),
    (M.optSelected = yn.selected),
    ((Te = J.createElement("input")).value = "t"),
    (Te.type = "radio"),
    (M.radioValue = Te.value === "t");
  var Yn,
    wt = u.expr.attrHandle;
  u.fn.extend({
    attr: function (e, n) {
      return ke(this, u.attr, e, n, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        u.removeAttr(this, e);
      });
    },
  }),
    u.extend({
      attr: function (e, n, a) {
        var o,
          l,
          f = e.nodeType;
        if (f !== 3 && f !== 8 && f !== 2)
          return typeof e.getAttribute > "u"
            ? u.prop(e, n, a)
            : ((f === 1 && u.isXMLDoc(e)) ||
                (l =
                  u.attrHooks[n.toLowerCase()] ||
                  (u.expr.match.bool.test(n) ? Yn : void 0)),
              a !== void 0
                ? a === null
                  ? void u.removeAttr(e, n)
                  : l && "set" in l && (o = l.set(e, a, n)) !== void 0
                    ? o
                    : (e.setAttribute(n, a + ""), a)
                : l && "get" in l && (o = l.get(e, n)) !== null
                  ? o
                  : (o = u.find.attr(e, n)) == null
                    ? void 0
                    : o);
      },
      attrHooks: {
        type: {
          set: function (e, n) {
            if (!M.radioValue && n === "radio" && ie(e, "input")) {
              var a = e.value;
              return e.setAttribute("type", n), a && (e.value = a), n;
            }
          },
        },
      },
      removeAttr: function (e, n) {
        var a,
          o = 0,
          l = n && n.match(ve);
        if (l && e.nodeType === 1) for (; (a = l[o++]); ) e.removeAttribute(a);
      },
    }),
    (Yn = {
      set: function (e, n, a) {
        return n === !1 ? u.removeAttr(e, a) : e.setAttribute(a, a), a;
      },
    }),
    u.each(u.expr.match.bool.source.match(/\w+/g), function (e, n) {
      var a = wt[n] || u.find.attr;
      wt[n] = function (o, l, f) {
        var g,
          y,
          b = l.toLowerCase();
        return (
          f ||
            ((y = wt[b]),
            (wt[b] = g),
            (g = a(o, l, f) != null ? b : null),
            (wt[b] = y)),
          g
        );
      };
    });
  var Qn = /^(?:input|select|textarea|button)$/i,
    Zn = /^(?:a|area)$/i;
  function Dt(e) {
    return (e.match(ve) || []).join(" ");
  }
  function ut(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xn(e) {
    return Array.isArray(e) ? e : (typeof e == "string" && e.match(ve)) || [];
  }
  u.fn.extend({
    prop: function (e, n) {
      return ke(this, u.prop, e, n, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[u.propFix[e] || e];
      });
    },
  }),
    u.extend({
      prop: function (e, n, a) {
        var o,
          l,
          f = e.nodeType;
        if (f !== 3 && f !== 8 && f !== 2)
          return (
            (f === 1 && u.isXMLDoc(e)) ||
              ((n = u.propFix[n] || n), (l = u.propHooks[n])),
            a !== void 0
              ? l && "set" in l && (o = l.set(e, a, n)) !== void 0
                ? o
                : (e[n] = a)
              : l && "get" in l && (o = l.get(e, n)) !== null
                ? o
                : e[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var n = u.find.attr(e, "tabindex");
            return n
              ? parseInt(n, 10)
              : Qn.test(e.nodeName) || (Zn.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    M.optSelected ||
      (u.propHooks.selected = {
        get: function (e) {
          var n = e.parentNode;
          return n && n.parentNode && n.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var n = e.parentNode;
          n && (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
        },
      }),
    u.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        u.propFix[this.toLowerCase()] = this;
      },
    ),
    u.fn.extend({
      addClass: function (e) {
        var n, a, o, l, f, g;
        return I(e)
          ? this.each(function (y) {
              u(this).addClass(e.call(this, y, ut(this)));
            })
          : (n = xn(e)).length
            ? this.each(function () {
                if (
                  ((o = ut(this)),
                  (a = this.nodeType === 1 && " " + Dt(o) + " "))
                ) {
                  for (f = 0; f < n.length; f++)
                    (l = n[f]), a.indexOf(" " + l + " ") < 0 && (a += l + " ");
                  (g = Dt(a)), o !== g && this.setAttribute("class", g);
                }
              })
            : this;
      },
      removeClass: function (e) {
        var n, a, o, l, f, g;
        return I(e)
          ? this.each(function (y) {
              u(this).removeClass(e.call(this, y, ut(this)));
            })
          : arguments.length
            ? (n = xn(e)).length
              ? this.each(function () {
                  if (
                    ((o = ut(this)),
                    (a = this.nodeType === 1 && " " + Dt(o) + " "))
                  ) {
                    for (f = 0; f < n.length; f++)
                      for (l = n[f]; -1 < a.indexOf(" " + l + " "); )
                        a = a.replace(" " + l + " ", " ");
                    (g = Dt(a)), o !== g && this.setAttribute("class", g);
                  }
                })
              : this
            : this.attr("class", "");
      },
      toggleClass: function (e, n) {
        var a,
          o,
          l,
          f,
          g = typeof e,
          y = g === "string" || Array.isArray(e);
        return I(e)
          ? this.each(function (b) {
              u(this).toggleClass(e.call(this, b, ut(this), n), n);
            })
          : typeof n == "boolean" && y
            ? n
              ? this.addClass(e)
              : this.removeClass(e)
            : ((a = xn(e)),
              this.each(function () {
                if (y)
                  for (f = u(this), l = 0; l < a.length; l++)
                    (o = a[l]),
                      f.hasClass(o) ? f.removeClass(o) : f.addClass(o);
                else
                  (e !== void 0 && g !== "boolean") ||
                    ((o = ut(this)) && B.set(this, "__className__", o),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        o || e === !1 ? "" : B.get(this, "__className__") || "",
                      ));
              }));
      },
      hasClass: function (e) {
        var n,
          a,
          o = 0;
        for (n = " " + e + " "; (a = this[o++]); )
          if (a.nodeType === 1 && -1 < (" " + Dt(ut(a)) + " ").indexOf(n))
            return !0;
        return !1;
      },
    });
  var hr = /\r/g;
  u.fn.extend({
    val: function (e) {
      var n,
        a,
        o,
        l = this[0];
      return arguments.length
        ? ((o = I(e)),
          this.each(function (f) {
            var g;
            this.nodeType === 1 &&
              ((g = o ? e.call(this, f, u(this).val()) : e) == null
                ? (g = "")
                : typeof g == "number"
                  ? (g += "")
                  : Array.isArray(g) &&
                    (g = u.map(g, function (y) {
                      return y == null ? "" : y + "";
                    })),
              ((n =
                u.valHooks[this.type] ||
                u.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                n.set(this, g, "value") !== void 0) ||
                (this.value = g));
          }))
        : l
          ? (n = u.valHooks[l.type] || u.valHooks[l.nodeName.toLowerCase()]) &&
            "get" in n &&
            (a = n.get(l, "value")) !== void 0
            ? a
            : typeof (a = l.value) == "string"
              ? a.replace(hr, "")
              : a ?? ""
          : void 0;
    },
  }),
    u.extend({
      valHooks: {
        option: {
          get: function (e) {
            var n = u.find.attr(e, "value");
            return n ?? Dt(u.text(e));
          },
        },
        select: {
          get: function (e) {
            var n,
              a,
              o,
              l = e.options,
              f = e.selectedIndex,
              g = e.type === "select-one",
              y = g ? null : [],
              b = g ? f + 1 : l.length;
            for (o = f < 0 ? b : g ? f : 0; o < b; o++)
              if (
                ((a = l[o]).selected || o === f) &&
                !a.disabled &&
                (!a.parentNode.disabled || !ie(a.parentNode, "optgroup"))
              ) {
                if (((n = u(a).val()), g)) return n;
                y.push(n);
              }
            return y;
          },
          set: function (e, n) {
            for (
              var a, o, l = e.options, f = u.makeArray(n), g = l.length;
              g--;

            )
              ((o = l[g]).selected =
                -1 < u.inArray(u.valHooks.option.get(o), f)) && (a = !0);
            return a || (e.selectedIndex = -1), f;
          },
        },
      },
    }),
    u.each(["radio", "checkbox"], function () {
      (u.valHooks[this] = {
        set: function (e, n) {
          if (Array.isArray(n))
            return (e.checked = -1 < u.inArray(u(e).val(), n));
        },
      }),
        M.checkOn ||
          (u.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value;
          });
    });
  var de = m.location,
    P = { guid: Date.now() },
    Bt = /\?/;
  u.parseXML = function (e) {
    var n, a;
    if (!e || typeof e != "string") return null;
    try {
      n = new m.DOMParser().parseFromString(e, "text/xml");
    } catch {}
    return (
      (a = n && n.getElementsByTagName("parsererror")[0]),
      (n && !a) ||
        u.error(
          "Invalid XML: " +
            (a
              ? u.map(a.childNodes, function (o) {
                  return o.textContent;
                }).join(`
`)
              : e),
        ),
      n
    );
  };
  var Kn = /^(?:focusinfocus|focusoutblur)$/,
    Sn = function (e) {
      e.stopPropagation();
    };
  u.extend(u.event, {
    trigger: function (e, n, a, o) {
      var l,
        f,
        g,
        y,
        b,
        w,
        S,
        C,
        T = [a || J],
        _ = It.call(e, "type") ? e.type : e,
        F = It.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((f = C = g = a = a || J),
        a.nodeType !== 3 &&
          a.nodeType !== 8 &&
          !Kn.test(_ + u.event.triggered) &&
          (-1 < _.indexOf(".") && ((_ = (F = _.split(".")).shift()), F.sort()),
          (b = _.indexOf(":") < 0 && "on" + _),
          ((e = e[u.expando]
            ? e
            : new u.Event(_, typeof e == "object" && e)).isTrigger = o ? 2 : 3),
          (e.namespace = F.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + F.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = a),
          (n = n == null ? [e] : u.makeArray(n, [e])),
          (S = u.event.special[_] || {}),
          o || !S.trigger || S.trigger.apply(a, n) !== !1))
      ) {
        if (!o && !S.noBubble && !at(a)) {
          for (
            y = S.delegateType || _, Kn.test(y + _) || (f = f.parentNode);
            f;
            f = f.parentNode
          )
            T.push(f), (g = f);
          g === (a.ownerDocument || J) &&
            T.push(g.defaultView || g.parentWindow || m);
        }
        for (l = 0; (f = T[l++]) && !e.isPropagationStopped(); )
          (C = f),
            (e.type = 1 < l ? y : S.bindType || _),
            (w =
              (B.get(f, "events") || Object.create(null))[e.type] &&
              B.get(f, "handle")) && w.apply(f, n),
            (w = b && f[b]) &&
              w.apply &&
              Ke(f) &&
              ((e.result = w.apply(f, n)),
              e.result === !1 && e.preventDefault());
        return (
          (e.type = _),
          o ||
            e.isDefaultPrevented() ||
            (S._default && S._default.apply(T.pop(), n) !== !1) ||
            !Ke(a) ||
            (b &&
              I(a[_]) &&
              !at(a) &&
              ((g = a[b]) && (a[b] = null),
              (u.event.triggered = _),
              e.isPropagationStopped() && C.addEventListener(_, Sn),
              a[_](),
              e.isPropagationStopped() && C.removeEventListener(_, Sn),
              (u.event.triggered = void 0),
              g && (a[b] = g))),
          e.result
        );
      }
    },
    simulate: function (e, n, a) {
      var o = u.extend(new u.Event(), a, { type: e, isSimulated: !0 });
      u.event.trigger(o, null, n);
    },
  }),
    u.fn.extend({
      trigger: function (e, n) {
        return this.each(function () {
          u.event.trigger(e, n, this);
        });
      },
      triggerHandler: function (e, n) {
        var a = this[0];
        if (a) return u.event.trigger(e, n, a, !0);
      },
    });
  var Pt = /\[\]$/,
    en = /\r?\n/g,
    Dr = /^(?:submit|button|image|reset|file)$/i,
    gr = /^(?:input|select|textarea|keygen)/i;
  function Tt(e, n, a, o) {
    var l;
    if (Array.isArray(n))
      u.each(n, function (f, g) {
        a || Pt.test(e)
          ? o(e, g)
          : Tt(
              e + "[" + (typeof g == "object" && g != null ? f : "") + "]",
              g,
              a,
              o,
            );
      });
    else if (a || Lt(n) !== "object") o(e, n);
    else for (l in n) Tt(e + "[" + l + "]", n[l], a, o);
  }
  (u.param = function (e, n) {
    var a,
      o = [],
      l = function (f, g) {
        var y = I(g) ? g() : g;
        o[o.length] = encodeURIComponent(f) + "=" + encodeURIComponent(y ?? "");
      };
    if (e == null) return "";
    if (Array.isArray(e) || (e.jquery && !u.isPlainObject(e)))
      u.each(e, function () {
        l(this.name, this.value);
      });
    else for (a in e) Tt(a, e[a], n, l);
    return o.join("&");
  }),
    u.fn.extend({
      serialize: function () {
        return u.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = u.prop(this, "elements");
          return e ? u.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !u(this).is(":disabled") &&
              gr.test(this.nodeName) &&
              !Dr.test(e) &&
              (this.checked || !Ot.test(e))
            );
          })
          .map(function (e, n) {
            var a = u(this).val();
            return a == null
              ? null
              : Array.isArray(a)
                ? u.map(a, function (o) {
                    return {
                      name: n.name,
                      value: o.replace(
                        en,
                        `\r
`,
                      ),
                    };
                  })
                : {
                    name: n.name,
                    value: a.replace(
                      en,
                      `\r
`,
                    ),
                  };
          })
          .get();
      },
    });
  var wn = /%20/g,
    Pn = /#.*$/,
    Dn = /([?&])_=[^&]*/,
    mr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    vr = /^(?:GET|HEAD)$/,
    Tn = /^\/\//,
    Cn = {},
    _n = {},
    er = "*/".concat("*"),
    Ct = J.createElement("a");
  function _t(e) {
    return function (n, a) {
      typeof n != "string" && ((a = n), (n = "*"));
      var o,
        l = 0,
        f = n.toLowerCase().match(ve) || [];
      if (I(a))
        for (; (o = f[l++]); )
          o[0] === "+"
            ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(a))
            : (e[o] = e[o] || []).push(a);
    };
  }
  function tr(e, n, a, o) {
    var l = {},
      f = e === _n;
    function g(y) {
      var b;
      return (
        (l[y] = !0),
        u.each(e[y] || [], function (w, S) {
          var C = S(n, a, o);
          return typeof C != "string" || f || l[C]
            ? f
              ? !(b = C)
              : void 0
            : (n.dataTypes.unshift(C), g(C), !1);
        }),
        b
      );
    }
    return g(n.dataTypes[0]) || (!l["*"] && g("*"));
  }
  function t(e, n) {
    var a,
      o,
      l = u.ajaxSettings.flatOptions || {};
    for (a in n) n[a] !== void 0 && ((l[a] ? e : o || (o = {}))[a] = n[a]);
    return o && u.extend(!0, e, o), e;
  }
  (Ct.href = de.href),
    u.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: de.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            de.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": er,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": u.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, n) {
        return n ? t(t(e, u.ajaxSettings), n) : t(u.ajaxSettings, e);
      },
      ajaxPrefilter: _t(Cn),
      ajaxTransport: _t(_n),
      ajax: function (e, n) {
        typeof e == "object" && ((n = e), (e = void 0)), (n = n || {});
        var a,
          o,
          l,
          f,
          g,
          y,
          b,
          w,
          S,
          C,
          T = u.ajaxSetup({}, n),
          _ = T.context || T,
          F = T.context && (_.nodeType || _.jquery) ? u(_) : u.event,
          E = u.Deferred(),
          W = u.Callbacks("once memory"),
          X = T.statusCode || {},
          Q = {},
          le = {},
          re = "canceled",
          G = {
            readyState: 0,
            getResponseHeader: function (q) {
              var Z;
              if (b) {
                if (!f)
                  for (f = {}; (Z = mr.exec(l)); )
                    f[Z[1].toLowerCase() + " "] = (
                      f[Z[1].toLowerCase() + " "] || []
                    ).concat(Z[2]);
                Z = f[q.toLowerCase() + " "];
              }
              return Z == null ? null : Z.join(", ");
            },
            getAllResponseHeaders: function () {
              return b ? l : null;
            },
            setRequestHeader: function (q, Z) {
              return (
                b == null &&
                  ((q = le[q.toLowerCase()] = le[q.toLowerCase()] || q),
                  (Q[q] = Z)),
                this
              );
            },
            overrideMimeType: function (q) {
              return b == null && (T.mimeType = q), this;
            },
            statusCode: function (q) {
              var Z;
              if (q)
                if (b) G.always(q[G.status]);
                else for (Z in q) X[Z] = [X[Z], q[Z]];
              return this;
            },
            abort: function (q) {
              var Z = q || re;
              return a && a.abort(Z), oe(0, Z), this;
            },
          };
        if (
          (E.promise(G),
          (T.url = ((e || T.url || de.href) + "").replace(
            Tn,
            de.protocol + "//",
          )),
          (T.type = n.method || n.type || T.method || T.type),
          (T.dataTypes = (T.dataType || "*").toLowerCase().match(ve) || [""]),
          T.crossDomain == null)
        ) {
          y = J.createElement("a");
          try {
            (y.href = T.url),
              (y.href = y.href),
              (T.crossDomain =
                Ct.protocol + "//" + Ct.host != y.protocol + "//" + y.host);
          } catch {
            T.crossDomain = !0;
          }
        }
        if (
          (T.data &&
            T.processData &&
            typeof T.data != "string" &&
            (T.data = u.param(T.data, T.traditional)),
          tr(Cn, T, n, G),
          b)
        )
          return G;
        for (S in ((w = u.event && T.global) &&
          u.active++ == 0 &&
          u.event.trigger("ajaxStart"),
        (T.type = T.type.toUpperCase()),
        (T.hasContent = !vr.test(T.type)),
        (o = T.url.replace(Pn, "")),
        T.hasContent
          ? T.data &&
            T.processData &&
            (T.contentType || "").indexOf(
              "application/x-www-form-urlencoded",
            ) === 0 &&
            (T.data = T.data.replace(wn, "+"))
          : ((C = T.url.slice(o.length)),
            T.data &&
              (T.processData || typeof T.data == "string") &&
              ((o += (Bt.test(o) ? "&" : "?") + T.data), delete T.data),
            T.cache === !1 &&
              ((o = o.replace(Dn, "$1")),
              (C = (Bt.test(o) ? "&" : "?") + "_=" + P.guid++ + C)),
            (T.url = o + C)),
        T.ifModified &&
          (u.lastModified[o] &&
            G.setRequestHeader("If-Modified-Since", u.lastModified[o]),
          u.etag[o] && G.setRequestHeader("If-None-Match", u.etag[o])),
        ((T.data && T.hasContent && T.contentType !== !1) || n.contentType) &&
          G.setRequestHeader("Content-Type", T.contentType),
        G.setRequestHeader(
          "Accept",
          T.dataTypes[0] && T.accepts[T.dataTypes[0]]
            ? T.accepts[T.dataTypes[0]] +
                (T.dataTypes[0] !== "*" ? ", " + er + "; q=0.01" : "")
            : T.accepts["*"],
        ),
        T.headers))
          G.setRequestHeader(S, T.headers[S]);
        if (T.beforeSend && (T.beforeSend.call(_, G, T) === !1 || b))
          return G.abort();
        if (
          ((re = "abort"),
          W.add(T.complete),
          G.done(T.success),
          G.fail(T.error),
          (a = tr(_n, T, n, G)))
        ) {
          if (((G.readyState = 1), w && F.trigger("ajaxSend", [G, T]), b))
            return G;
          T.async &&
            0 < T.timeout &&
            (g = m.setTimeout(function () {
              G.abort("timeout");
            }, T.timeout));
          try {
            (b = !1), a.send(Q, oe);
          } catch (q) {
            if (b) throw q;
            oe(-1, q);
          }
        } else oe(-1, "No Transport");
        function oe(q, Z, nr, Tr) {
          var ct,
            rr,
            At,
            Ut,
            An,
            Ye = Z;
          b ||
            ((b = !0),
            g && m.clearTimeout(g),
            (a = void 0),
            (l = Tr || ""),
            (G.readyState = 0 < q ? 4 : 0),
            (ct = (200 <= q && q < 300) || q === 304),
            nr &&
              (Ut = (function (Ce, me, We) {
                for (
                  var $t, Be, H, he, ge = Ce.contents, ce = Ce.dataTypes;
                  ce[0] === "*";

                )
                  ce.shift(),
                    $t === void 0 &&
                      ($t =
                        Ce.mimeType || me.getResponseHeader("Content-Type"));
                if ($t) {
                  for (Be in ge)
                    if (ge[Be] && ge[Be].test($t)) {
                      ce.unshift(Be);
                      break;
                    }
                }
                if (ce[0] in We) H = ce[0];
                else {
                  for (Be in We) {
                    if (!ce[0] || Ce.converters[Be + " " + ce[0]]) {
                      H = Be;
                      break;
                    }
                    he || (he = Be);
                  }
                  H = H || he;
                }
                if (H) return H !== ce[0] && ce.unshift(H), We[H];
              })(T, G, nr)),
            !ct &&
              -1 < u.inArray("script", T.dataTypes) &&
              u.inArray("json", T.dataTypes) < 0 &&
              (T.converters["text script"] = function () {}),
            (Ut = (function (Ce, me, We, $t) {
              var Be,
                H,
                he,
                ge,
                ce,
                ft = {},
                In = Ce.dataTypes.slice();
              if (In[1])
                for (he in Ce.converters)
                  ft[he.toLowerCase()] = Ce.converters[he];
              for (H = In.shift(); H; )
                if (
                  (Ce.responseFields[H] && (We[Ce.responseFields[H]] = me),
                  !ce &&
                    $t &&
                    Ce.dataFilter &&
                    (me = Ce.dataFilter(me, Ce.dataType)),
                  (ce = H),
                  (H = In.shift()))
                ) {
                  if (H === "*") H = ce;
                  else if (ce !== "*" && ce !== H) {
                    if (!(he = ft[ce + " " + H] || ft["* " + H])) {
                      for (Be in ft)
                        if (
                          (ge = Be.split(" "))[1] === H &&
                          (he = ft[ce + " " + ge[0]] || ft["* " + ge[0]])
                        ) {
                          he === !0
                            ? (he = ft[Be])
                            : ft[Be] !== !0 && ((H = ge[0]), In.unshift(ge[1]));
                          break;
                        }
                    }
                    if (he !== !0)
                      if (he && Ce.throws) me = he(me);
                      else
                        try {
                          me = he(me);
                        } catch (yr) {
                          return {
                            state: "parsererror",
                            error: he
                              ? yr
                              : "No conversion from " + ce + " to " + H,
                          };
                        }
                  }
                }
              return { state: "success", data: me };
            })(T, Ut, G, ct)),
            ct
              ? (T.ifModified &&
                  ((An = G.getResponseHeader("Last-Modified")) &&
                    (u.lastModified[o] = An),
                  (An = G.getResponseHeader("etag")) && (u.etag[o] = An)),
                q === 204 || T.type === "HEAD"
                  ? (Ye = "nocontent")
                  : q === 304
                    ? (Ye = "notmodified")
                    : ((Ye = Ut.state),
                      (rr = Ut.data),
                      (ct = !(At = Ut.error))))
              : ((At = Ye), (!q && Ye) || ((Ye = "error"), q < 0 && (q = 0))),
            (G.status = q),
            (G.statusText = (Z || Ye) + ""),
            ct ? E.resolveWith(_, [rr, Ye, G]) : E.rejectWith(_, [G, Ye, At]),
            G.statusCode(X),
            (X = void 0),
            w &&
              F.trigger(ct ? "ajaxSuccess" : "ajaxError", [G, T, ct ? rr : At]),
            W.fireWith(_, [G, Ye]),
            w &&
              (F.trigger("ajaxComplete", [G, T]),
              --u.active || u.event.trigger("ajaxStop")));
        }
        return G;
      },
      getJSON: function (e, n, a) {
        return u.get(e, n, a, "json");
      },
      getScript: function (e, n) {
        return u.get(e, void 0, n, "script");
      },
    }),
    u.each(["get", "post"], function (e, n) {
      u[n] = function (a, o, l, f) {
        return (
          I(o) && ((f = f || l), (l = o), (o = void 0)),
          u.ajax(
            u.extend(
              { url: a, type: n, dataType: f, data: o, success: l },
              u.isPlainObject(a) && a,
            ),
          )
        );
      };
    }),
    u.ajaxPrefilter(function (e) {
      var n;
      for (n in e.headers)
        n.toLowerCase() === "content-type" &&
          (e.contentType = e.headers[n] || "");
    }),
    (u._evalUrl = function (e, n, a) {
      return u.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (o) {
          u.globalEval(o, n, a);
        },
      });
    }),
    u.fn.extend({
      wrapAll: function (e) {
        var n;
        return (
          this[0] &&
            (I(e) && (e = e.call(this[0])),
            (n = u(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && n.insertBefore(this[0]),
            n
              .map(function () {
                for (var a = this; a.firstElementChild; )
                  a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return I(e)
          ? this.each(function (n) {
              u(this).wrapInner(e.call(this, n));
            })
          : this.each(function () {
              var n = u(this),
                a = n.contents();
              a.length ? a.wrapAll(e) : n.append(e);
            });
      },
      wrap: function (e) {
        var n = I(e);
        return this.each(function (a) {
          u(this).wrapAll(n ? e.call(this, a) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              u(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (u.expr.pseudos.hidden = function (e) {
      return !u.expr.pseudos.visible(e);
    }),
    (u.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (u.ajaxSettings.xhr = function () {
      try {
        return new m.XMLHttpRequest();
      } catch {}
    });
  var r = { 0: 200, 1223: 204 },
    i = u.ajaxSettings.xhr();
  (M.cors = !!i && "withCredentials" in i),
    (M.ajax = i = !!i),
    u.ajaxTransport(function (e) {
      var n, a;
      if (M.cors || (i && !e.crossDomain))
        return {
          send: function (o, l) {
            var f,
              g = e.xhr();
            if (
              (g.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (f in e.xhrFields) g[f] = e.xhrFields[f];
            for (f in (e.mimeType &&
              g.overrideMimeType &&
              g.overrideMimeType(e.mimeType),
            e.crossDomain ||
              o["X-Requested-With"] ||
              (o["X-Requested-With"] = "XMLHttpRequest"),
            o))
              g.setRequestHeader(f, o[f]);
            (n = function (y) {
              return function () {
                n &&
                  ((n =
                    a =
                    g.onload =
                    g.onerror =
                    g.onabort =
                    g.ontimeout =
                    g.onreadystatechange =
                      null),
                  y === "abort"
                    ? g.abort()
                    : y === "error"
                      ? typeof g.status != "number"
                        ? l(0, "error")
                        : l(g.status, g.statusText)
                      : l(
                          r[g.status] || g.status,
                          g.statusText,
                          (g.responseType || "text") !== "text" ||
                            typeof g.responseText != "string"
                            ? { binary: g.response }
                            : { text: g.responseText },
                          g.getAllResponseHeaders(),
                        ));
              };
            }),
              (g.onload = n()),
              (a = g.onerror = g.ontimeout = n("error")),
              g.onabort !== void 0
                ? (g.onabort = a)
                : (g.onreadystatechange = function () {
                    g.readyState === 4 &&
                      m.setTimeout(function () {
                        n && a();
                      });
                  }),
              (n = n("abort"));
            try {
              g.send((e.hasContent && e.data) || null);
            } catch (y) {
              if (n) throw y;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    u.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    u.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return u.globalEval(e), e;
        },
      },
    }),
    u.ajaxPrefilter("script", function (e) {
      e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    u.ajaxTransport("script", function (e) {
      var n, a;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (o, l) {
            (n = u("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (a = function (f) {
                  n.remove(),
                    (a = null),
                    f && l(f.type === "error" ? 404 : 200, f.type);
                }),
              )),
              J.head.appendChild(n[0]);
          },
          abort: function () {
            a && a();
          },
        };
    });
  var s,
    c = [],
    h = /(=)\?(?=&|$)|\?\?/;
  u.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = c.pop() || u.expando + "_" + P.guid++;
      return (this[e] = !0), e;
    },
  }),
    u.ajaxPrefilter("json jsonp", function (e, n, a) {
      var o,
        l,
        f,
        g =
          e.jsonp !== !1 &&
          (h.test(e.url)
            ? "url"
            : typeof e.data == "string" &&
              (e.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) === 0 &&
              h.test(e.data) &&
              "data");
      if (g || e.dataTypes[0] === "jsonp")
        return (
          (o = e.jsonpCallback =
            I(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          g
            ? (e[g] = e[g].replace(h, "$1" + o))
            : e.jsonp !== !1 &&
              (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          (e.converters["script json"] = function () {
            return f || u.error(o + " was not called"), f[0];
          }),
          (e.dataTypes[0] = "json"),
          (l = m[o]),
          (m[o] = function () {
            f = arguments;
          }),
          a.always(function () {
            l === void 0 ? u(m).removeProp(o) : (m[o] = l),
              e[o] && ((e.jsonpCallback = n.jsonpCallback), c.push(o)),
              f && I(l) && l(f[0]),
              (f = l = void 0);
          }),
          "script"
        );
    }),
    (M.createHTMLDocument =
      (((s = J.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      s.childNodes.length === 2)),
    (u.parseHTML = function (e, n, a) {
      return typeof e != "string"
        ? []
        : (typeof n == "boolean" && ((a = n), (n = !1)),
          n ||
            (M.createHTMLDocument
              ? (((o = (n =
                  J.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = J.location.href),
                n.head.appendChild(o))
              : (n = J)),
          (f = !a && []),
          (l = jt.exec(e))
            ? [n.createElement(l[1])]
            : ((l = Mn([e], n, f)),
              f && f.length && u(f).remove(),
              u.merge([], l.childNodes)));
      var o, l, f;
    }),
    (u.fn.load = function (e, n, a) {
      var o,
        l,
        f,
        g = this,
        y = e.indexOf(" ");
      return (
        -1 < y && ((o = Dt(e.slice(y))), (e = e.slice(0, y))),
        I(n)
          ? ((a = n), (n = void 0))
          : n && typeof n == "object" && (l = "POST"),
        0 < g.length &&
          u
            .ajax({ url: e, type: l || "GET", dataType: "html", data: n })
            .done(function (b) {
              (f = arguments),
                g.html(o ? u("<div>").append(u.parseHTML(b)).find(o) : b);
            })
            .always(
              a &&
                function (b, w) {
                  g.each(function () {
                    a.apply(this, f || [b.responseText, w, b]);
                  });
                },
            ),
        this
      );
    }),
    (u.expr.pseudos.animated = function (e) {
      return u.grep(u.timers, function (n) {
        return e === n.elem;
      }).length;
    }),
    (u.offset = {
      setOffset: function (e, n, a) {
        var o,
          l,
          f,
          g,
          y,
          b,
          w = u.css(e, "position"),
          S = u(e),
          C = {};
        w === "static" && (e.style.position = "relative"),
          (y = S.offset()),
          (f = u.css(e, "top")),
          (b = u.css(e, "left")),
          (w === "absolute" || w === "fixed") && -1 < (f + b).indexOf("auto")
            ? ((g = (o = S.position()).top), (l = o.left))
            : ((g = parseFloat(f) || 0), (l = parseFloat(b) || 0)),
          I(n) && (n = n.call(e, a, u.extend({}, y))),
          n.top != null && (C.top = n.top - y.top + g),
          n.left != null && (C.left = n.left - y.left + l),
          "using" in n ? n.using.call(e, C) : S.css(C);
      },
    }),
    u.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return e === void 0
            ? this
            : this.each(function (l) {
                u.offset.setOffset(this, e, l);
              });
        var n,
          a,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? ((n = o.getBoundingClientRect()),
              (a = o.ownerDocument.defaultView),
              { top: n.top + a.pageYOffset, left: n.left + a.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            n,
            a,
            o = this[0],
            l = { top: 0, left: 0 };
          if (u.css(o, "position") === "fixed") n = o.getBoundingClientRect();
          else {
            for (
              n = this.offset(),
                a = o.ownerDocument,
                e = o.offsetParent || a.documentElement;
              e &&
              (e === a.body || e === a.documentElement) &&
              u.css(e, "position") === "static";

            )
              e = e.parentNode;
            e &&
              e !== o &&
              e.nodeType === 1 &&
              (((l = u(e).offset()).top += u.css(e, "borderTopWidth", !0)),
              (l.left += u.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: n.top - l.top - u.css(o, "marginTop", !0),
            left: n.left - l.left - u.css(o, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && u.css(e, "position") === "static";

          )
            e = e.offsetParent;
          return e || Ge;
        });
      },
    }),
    u.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, n) {
        var a = n === "pageYOffset";
        u.fn[e] = function (o) {
          return ke(
            this,
            function (l, f, g) {
              var y;
              if (
                (at(l) ? (y = l) : l.nodeType === 9 && (y = l.defaultView),
                g === void 0)
              )
                return y ? y[n] : l[f];
              y
                ? y.scrollTo(a ? y.pageXOffset : g, a ? g : y.pageYOffset)
                : (l[f] = g);
            },
            e,
            o,
            arguments.length,
          );
        };
      },
    ),
    u.each(["top", "left"], function (e, n) {
      u.cssHooks[n] = $n(M.pixelPosition, function (a, o) {
        if (o)
          return (o = qt(a, n)), Ue.test(o) ? u(a).position()[n] + "px" : o;
      });
    }),
    u.each({ Height: "height", Width: "width" }, function (e, n) {
      u.each(
        { padding: "inner" + e, content: n, "": "outer" + e },
        function (a, o) {
          u.fn[o] = function (l, f) {
            var g = arguments.length && (a || typeof l != "boolean"),
              y = a || (l === !0 || f === !0 ? "margin" : "border");
            return ke(
              this,
              function (b, w, S) {
                var C;
                return at(b)
                  ? o.indexOf("outer") === 0
                    ? b["inner" + e]
                    : b.document.documentElement["client" + e]
                  : b.nodeType === 9
                    ? ((C = b.documentElement),
                      Math.max(
                        b.body["scroll" + e],
                        C["scroll" + e],
                        b.body["offset" + e],
                        C["offset" + e],
                        C["client" + e],
                      ))
                    : S === void 0
                      ? u.css(b, w, y)
                      : u.style(b, w, S, y);
              },
              n,
              g ? l : void 0,
              g,
            );
          };
        },
      );
    }),
    u.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, n) {
        u.fn[n] = function (a) {
          return this.on(n, a);
        };
      },
    ),
    u.fn.extend({
      bind: function (e, n, a) {
        return this.on(e, null, n, a);
      },
      unbind: function (e, n) {
        return this.off(e, null, n);
      },
      delegate: function (e, n, a, o) {
        return this.on(n, e, a, o);
      },
      undelegate: function (e, n, a) {
        return arguments.length === 1
          ? this.off(e, "**")
          : this.off(n, e || "**", a);
      },
      hover: function (e, n) {
        return this.on("mouseenter", e).on("mouseleave", n || e);
      },
    }),
    u.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, n) {
        u.fn[n] = function (a, o) {
          return 0 < arguments.length
            ? this.on(n, null, a, o)
            : this.trigger(n);
        };
      },
    );
  var d = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (u.proxy = function (e, n) {
    var a, o, l;
    if ((typeof n == "string" && ((a = e[n]), (n = e), (e = a)), I(e)))
      return (
        (o = Le.call(arguments, 2)),
        ((l = function () {
          return e.apply(n || this, o.concat(Le.call(arguments)));
        }).guid = e.guid =
          e.guid || u.guid++),
        l
      );
  }),
    (u.holdReady = function (e) {
      e ? u.readyWait++ : u.ready(!0);
    }),
    (u.isArray = Array.isArray),
    (u.parseJSON = JSON.parse),
    (u.nodeName = ie),
    (u.isFunction = I),
    (u.isWindow = at),
    (u.camelCase = Oe),
    (u.type = Lt),
    (u.now = Date.now),
    (u.isNumeric = function (e) {
      var n = u.type(e);
      return (n === "number" || n === "string") && !isNaN(e - parseFloat(e));
    }),
    (u.trim = function (e) {
      return e == null ? "" : (e + "").replace(d, "$1");
    }),
    typeof define == "function" &&
      define.amd &&
      define("jquery", [], function () {
        return u;
      });
  var p = m.jQuery,
    v = m.$;
  return (
    (u.noConflict = function (e) {
      return m.$ === u && (m.$ = v), e && m.jQuery === u && (m.jQuery = p), u;
    }),
    typeof se > "u" && (m.jQuery = m.$ = u),
    u
  );
});
/*! DataTables 1.13.10
 * ©2008-2024 SpryMedia Ltd - datatables.net/license
 */ (function (m) {
  "use strict";
  var se;
  typeof define == "function" && define.amd
    ? define(["jquery"], function (ee) {
        return m(ee, window, document);
      })
    : typeof exports == "object"
      ? ((se = require("jquery")),
        typeof window > "u"
          ? (module.exports = function (ee, L) {
              return (
                (ee = ee || window), (L = L || se(ee)), m(L, ee, ee.document)
              );
            })
          : (module.exports = m(se, window, window.document)))
      : (window.DataTable = m(jQuery, window, document));
})(function (m, se, ee, L) {
  "use strict";
  function Le(t) {
    var r = parseInt(t, 10);
    return !isNaN(r) && isFinite(t) ? r : null;
  }
  function rn(t, r, i) {
    var s = typeof t,
      c = s == "string";
    return (
      s == "number" ||
      s == "bigint" ||
      !!Je(t) ||
      (r && c && (t = u(t, r)),
      i && c && (t = t.replace(on, "")),
      !isNaN(parseFloat(t)) && isFinite(t))
    );
  }
  function Xt(t, r, i) {
    var s;
    return (
      !!Je(t) ||
      ((Je((s = t)) || typeof s == "string") &&
        !!rn(t.replace(an, "").replace(/<script/i, ""), r, i)) ||
      null
    );
  }
  function Re(t, r, i, s) {
    var c = [],
      h = 0,
      d = r.length;
    if (s !== L) for (; h < d; h++) t[r[h]][i] && c.push(t[r[h]][i][s]);
    else for (; h < d; h++) c.push(t[r[h]][i]);
    return c;
  }
  function Qe(t, r) {
    var i,
      s = [];
    r === L ? ((r = 0), (i = t)) : ((i = r), (r = t));
    for (var c = r; c < i; c++) s.push(c);
    return s;
  }
  function Ln(t) {
    for (var r = [], i = 0, s = t.length; i < s; i++) t[i] && r.push(t[i]);
    return r;
  }
  function It(t, r) {
    return this.indexOf(t, (r = r === L ? 0 : r)) !== -1;
  }
  var pe,
    $,
    M,
    I = function (t, r) {
      if (I.factory(t, r)) return I;
      if (this instanceof I) return m(t).DataTable(r);
      (r = t),
        (this.$ = function (d, p) {
          return this.api(!0).$(d, p);
        }),
        (this._ = function (d, p) {
          return this.api(!0).rows(d, p).data();
        }),
        (this.api = function (d) {
          return new P(d ? tt(this[pe.iApiIndex]) : this);
        }),
        (this.fnAddData = function (e, p) {
          var v = this.api(!0),
            e = (
              Array.isArray(e) && (Array.isArray(e[0]) || m.isPlainObject(e[0]))
                ? v.rows
                : v.row
            ).add(e);
          return (p !== L && !p) || v.draw(), e.flatten().toArray();
        }),
        (this.fnAdjustColumnSizing = function (d) {
          var p = this.api(!0).columns.adjust(),
            v = p.settings()[0],
            e = v.oScroll;
          d === L || d ? p.draw(!1) : (e.sX === "" && e.sY === "") || Zt(v);
        }),
        (this.fnClearTable = function (d) {
          var p = this.api(!0).clear();
          (d !== L && !d) || p.draw();
        }),
        (this.fnClose = function (d) {
          this.api(!0).row(d).child.hide();
        }),
        (this.fnDeleteRow = function (n, p, v) {
          var e = this.api(!0),
            n = e.rows(n),
            a = n.settings()[0],
            o = a.aoData[n[0][0]];
          return (
            n.remove(), p && p.call(this, a, o), (v !== L && !v) || e.draw(), o
          );
        }),
        (this.fnDestroy = function (d) {
          this.api(!0).destroy(d);
        }),
        (this.fnDraw = function (d) {
          this.api(!0).draw(d);
        }),
        (this.fnFilter = function (d, p, v, e, n, a) {
          var o = this.api(!0);
          (p === null || p === L ? o : o.column(p)).search(d, v, e, a),
            o.draw();
        }),
        (this.fnGetData = function (d, p) {
          var v,
            e = this.api(!0);
          return d !== L
            ? ((v = d.nodeName ? d.nodeName.toLowerCase() : ""),
              p !== L || v == "td" || v == "th"
                ? e.cell(d, p).data()
                : e.row(d).data() || null)
            : e.data().toArray();
        }),
        (this.fnGetNodes = function (d) {
          var p = this.api(!0);
          return d !== L
            ? p.row(d).node()
            : p.rows().nodes().flatten().toArray();
        }),
        (this.fnGetPosition = function (d) {
          var p = this.api(!0),
            v = d.nodeName.toUpperCase();
          return v == "TR"
            ? p.row(d).index()
            : v == "TD" || v == "TH"
              ? [(v = p.cell(d).index()).row, v.columnVisible, v.column]
              : null;
        }),
        (this.fnIsOpen = function (d) {
          return this.api(!0).row(d).child.isShown();
        }),
        (this.fnOpen = function (d, p, v) {
          return this.api(!0).row(d).child(p, v).show().child()[0];
        }),
        (this.fnPageChange = function (d, p) {
          (d = this.api(!0).page(d)), (p !== L && !p) || d.draw(!1);
        }),
        (this.fnSetColumnVis = function (d, p, v) {
          (d = this.api(!0).column(d).visible(p)),
            (v !== L && !v) || d.columns.adjust().draw();
        }),
        (this.fnSettings = function () {
          return tt(this[pe.iApiIndex]);
        }),
        (this.fnSort = function (d) {
          this.api(!0).order(d).draw();
        }),
        (this.fnSortListener = function (d, p, v) {
          this.api(!0).order.listener(d, p, v);
        }),
        (this.fnUpdate = function (d, p, v, e, n) {
          var a = this.api(!0);
          return (
            (v === L || v === null ? a.row(p) : a.cell(p, v)).data(d),
            (n !== L && !n) || a.columns.adjust(),
            (e !== L && !e) || a.draw(),
            0
          );
        }),
        (this.fnVersionCheck = pe.fnVersionCheck);
      var i,
        s = this,
        c = r === L,
        h = this.length;
      for (i in (c && (r = {}),
      (this.oApi = this.internal = pe.internal),
      I.ext.internal))
        i && (this[i] = tr(i));
      return (
        this.each(function () {
          var d = 1 < h ? yn({}, r, !0) : r,
            p = 0,
            v = this.getAttribute("id"),
            e = !1,
            n = I.defaults,
            a = m(this);
          if (this.nodeName.toLowerCase() != "table")
            Ae(
              null,
              0,
              "Non-table node initialisation (" + this.nodeName + ")",
              2,
            );
          else {
            sr(n),
              ze(n.column),
              K(n, n, !0),
              K(n.column, n.column, !0),
              K(n, m.extend(d, a.data()), !0);
            for (var o = I.settings, p = 0, l = o.length; p < l; p++) {
              var f = o[p];
              if (
                f.nTable == this ||
                (f.nTHead && f.nTHead.parentNode == this) ||
                (f.nTFoot && f.nTFoot.parentNode == this)
              ) {
                var g = (d.bRetrieve !== L ? d : n).bRetrieve,
                  y = (d.bDestroy !== L ? d : n).bDestroy;
                if (c || g) return f.oInstance;
                if (y) {
                  f.oInstance.fnDestroy();
                  break;
                }
                return void Ae(f, 0, "Cannot reinitialise DataTable", 3);
              }
              if (f.sTableId == this.id) {
                o.splice(p, 1);
                break;
              }
            }
            (v !== null && v !== "") ||
              ((v = "DataTables_Table_" + I.ext._unique++), (this.id = v));
            var b,
              w,
              S = m.extend(!0, {}, I.models.oSettings, {
                sDestroyWidth: a[0].style.width,
                sInstance: v,
                sTableId: v,
              }),
              C =
                ((S.nTable = this),
                (S.oApi = s.internal),
                (S.oInit = d),
                o.push(S),
                (S.oInstance = s.length === 1 ? s : a.dataTable()),
                sr(d),
                dt(d.oLanguage),
                d.aLengthMenu &&
                  !d.iDisplayLength &&
                  (d.iDisplayLength = (
                    Array.isArray(d.aLengthMenu[0])
                      ? d.aLengthMenu[0]
                      : d.aLengthMenu
                  )[0]),
                (d = yn(m.extend(!0, {}, n), d)),
                Te(S.oFeatures, d, [
                  "bPaginate",
                  "bLengthChange",
                  "bFilter",
                  "bSort",
                  "bSortMulti",
                  "bInfo",
                  "bProcessing",
                  "bAutoWidth",
                  "bSortClasses",
                  "bServerSide",
                  "bDeferRender",
                ]),
                Te(S, d, [
                  "asStripeClasses",
                  "ajax",
                  "fnServerData",
                  "fnFormatNumber",
                  "sServerMethod",
                  "aaSorting",
                  "aaSortingFixed",
                  "aLengthMenu",
                  "sPaginationType",
                  "sAjaxSource",
                  "sAjaxDataProp",
                  "iStateDuration",
                  "sDom",
                  "bSortCellsTop",
                  "iTabIndex",
                  "fnStateLoadCallback",
                  "fnStateSaveCallback",
                  "renderer",
                  "searchDelay",
                  "rowId",
                  ["iCookieDuration", "iStateDuration"],
                  ["oSearch", "oPreviousSearch"],
                  ["aoSearchCols", "aoPreSearchCols"],
                  ["iDisplayLength", "_iDisplayLength"],
                ]),
                Te(S.oScroll, d, [
                  ["sScrollX", "sX"],
                  ["sScrollXInner", "sXInner"],
                  ["sScrollY", "sY"],
                  ["bScrollCollapse", "bCollapse"],
                ]),
                Te(S.oLanguage, d, "fnInfoCallback"),
                Ie(S, "aoDrawCallback", d.fnDrawCallback, "user"),
                Ie(S, "aoServerParams", d.fnServerParams, "user"),
                Ie(S, "aoStateSaveParams", d.fnStateSaveParams, "user"),
                Ie(S, "aoStateLoadParams", d.fnStateLoadParams, "user"),
                Ie(S, "aoStateLoaded", d.fnStateLoaded, "user"),
                Ie(S, "aoRowCallback", d.fnRowCallback, "user"),
                Ie(S, "aoRowCreatedCallback", d.fnCreatedRow, "user"),
                Ie(S, "aoHeaderCallback", d.fnHeaderCallback, "user"),
                Ie(S, "aoFooterCallback", d.fnFooterCallback, "user"),
                Ie(S, "aoInitComplete", d.fnInitComplete, "user"),
                Ie(S, "aoPreDrawCallback", d.fnPreDrawCallback, "user"),
                (S.rowIdFn = ke(d.rowId)),
                ln(S),
                S.oClasses),
              T =
                (m.extend(C, I.ext.classes, d.oClasses),
                a.addClass(C.sTable),
                S.iInitDisplayStart === L &&
                  ((S.iInitDisplayStart = d.iDisplayStart),
                  (S._iDisplayStart = d.iDisplayStart)),
                d.iDeferLoading !== null &&
                  ((S.bDeferLoading = !0),
                  (v = Array.isArray(d.iDeferLoading)),
                  (S._iRecordsDisplay = v
                    ? d.iDeferLoading[0]
                    : d.iDeferLoading),
                  (S._iRecordsTotal = v
                    ? d.iDeferLoading[1]
                    : d.iDeferLoading)),
                S.oLanguage),
              v =
                (m.extend(!0, T, d.oLanguage),
                T.sUrl
                  ? (m.ajax({
                      dataType: "json",
                      url: T.sUrl,
                      success: function (X) {
                        K(n.oLanguage, X),
                          dt(X),
                          m.extend(!0, T, X, S.oInit.oLanguage),
                          te(S, null, "i18n", [S]),
                          lt(S);
                      },
                      error: function () {
                        lt(S);
                      },
                    }),
                    (e = !0))
                  : te(S, null, "i18n", [S]),
                d.asStripeClasses === null &&
                  (S.asStripeClasses = [C.sStripeOdd, C.sStripeEven]),
                S.asStripeClasses),
              _ = a.children("tbody").find("tr").eq(0),
              F =
                (m.inArray(
                  !0,
                  m.map(v, function (X, Q) {
                    return _.hasClass(X);
                  }),
                ) !== -1 &&
                  (m("tbody tr", this).removeClass(v.join(" ")),
                  (S.asDestroyStripes = v.slice())),
                []),
              v = this.getElementsByTagName("thead");
            if (
              (v.length !== 0 && (Me(S.aoHeader, v[0]), (F = Ge(S))),
              d.aoColumns === null)
            )
              for (b = [], p = 0, l = F.length; p < l; p++) b.push(null);
            else b = d.aoColumns;
            for (p = 0, l = b.length; p < l; p++) un(S, F ? F[p] : null);
            kn(S, d.aoColumnDefs, b, function (X, Q) {
              Jt(S, X, Q);
            }),
              _.length &&
                ((w = function (X, Q) {
                  return X.getAttribute("data-" + Q) !== null ? Q : null;
                }),
                m(_[0])
                  .children("th, td")
                  .each(function (X, Q) {
                    var le,
                      re = S.aoColumns[X];
                    re || Ae(S, 0, "Incorrect column count", 18),
                      re.mData === X &&
                        ((le = w(Q, "sort") || w(Q, "order")),
                        (Q = w(Q, "filter") || w(Q, "search")),
                        (le === null && Q === null) ||
                          ((re.mData = {
                            _: X + ".display",
                            sort: le !== null ? X + ".@data-" + le : L,
                            type: le !== null ? X + ".@data-" + le : L,
                            filter: Q !== null ? X + ".@data-" + Q : L,
                          }),
                          (re._isArrayHost = !0),
                          Jt(S, X)));
                  }));
            var E = S.oFeatures,
              v = function () {
                if (d.aaSorting === L) {
                  var X = S.aaSorting;
                  for (p = 0, l = X.length; p < l; p++)
                    X[p][1] = S.aoColumns[p].asSorting[0];
                }
                Kt(S),
                  E.bSort &&
                    Ie(S, "aoDrawCallback", function () {
                      var G, oe;
                      S.bSorted &&
                        ((G = xt(S)),
                        (oe = {}),
                        m.each(G, function (q, Z) {
                          oe[Z.src] = Z.dir;
                        }),
                        te(S, null, "order", [S, G, oe]),
                        vn(S));
                    }),
                  Ie(
                    S,
                    "aoDrawCallback",
                    function () {
                      (S.bSorted || xe(S) === "ssp" || E.bDeferRender) && Kt(S);
                    },
                    "sc",
                  );
                var Q = a.children("caption").each(function () {
                    this._captionSide = m(this).css("caption-side");
                  }),
                  re = a.children("thead"),
                  le =
                    (re.length === 0 && (re = m("<thead/>").appendTo(a)),
                    (S.nTHead = re[0]),
                    a.children("tbody")),
                  re =
                    (le.length === 0 && (le = m("<tbody/>").insertAfter(re)),
                    (S.nTBody = le[0]),
                    a.children("tfoot"));
                if (
                  ((re =
                    re.length === 0 &&
                    0 < Q.length &&
                    (S.oScroll.sX !== "" || S.oScroll.sY !== "")
                      ? m("<tfoot/>").appendTo(a)
                      : re).length === 0 || re.children().length === 0
                    ? a.addClass(C.sNoFooter)
                    : 0 < re.length &&
                      ((S.nTFoot = re[0]), Me(S.aoFooter, S.nTFoot)),
                  d.aaData)
                )
                  for (p = 0; p < d.aaData.length; p++) ve(S, d.aaData[p]);
                else
                  (!S.bDeferLoading && xe(S) != "dom") ||
                    Ze(S, m(S.nTBody).children("tr"));
                (S.aiDisplay = S.aiDisplayMaster.slice()),
                  !(S.bInitialised = !0) === e && lt(S);
              };
            Ie(S, "aoDrawCallback", St, "state_save"),
              d.bStateSave ? ((E.bStateSave = !0), zn(S, 0, v)) : v();
          }
        }),
        (s = null),
        this
      );
    },
    at = {},
    J = /[\r\n\u2028]/g,
    an = /<.*?>/g,
    or =
      /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    Lt = new RegExp(
      "(\\" +
        [
          "/",
          ".",
          "*",
          "+",
          "?",
          "|",
          "(",
          ")",
          "[",
          "]",
          "{",
          "}",
          "\\",
          "$",
          "^",
          "-",
        ].join("|\\") +
        ")",
      "g",
    ),
    on = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    Je = function (t) {
      return !t || t === !0 || t === "-";
    },
    u = function (t, r) {
      return (
        at[r] || (at[r] = new RegExp(Fe(r), "g")),
        typeof t == "string" && r !== "."
          ? t.replace(/\./g, "").replace(at[r], ".")
          : t
      );
    },
    we = function (t, r, i) {
      var s = [],
        c = 0,
        h = t.length;
      if (i !== L) for (; c < h; c++) t[c] && t[c][r] && s.push(t[c][r][i]);
      else for (; c < h; c++) t[c] && s.push(t[c][r]);
      return s;
    },
    ie = function (t) {
      if (!(t.length < 2))
        for (
          var r = t.slice().sort(), i = r[0], s = 1, c = r.length;
          s < c;
          s++
        ) {
          if (r[s] === i) return !1;
          i = r[s];
        }
      return !0;
    },
    sn = function (t) {
      if (ie(t)) return t.slice();
      var r,
        i,
        s,
        c = [],
        h = t.length,
        d = 0;
      e: for (i = 0; i < h; i++) {
        for (r = t[i], s = 0; s < d; s++) if (c[s] === r) continue e;
        c.push(r), d++;
      }
      return c;
    },
    ir = function (t, r) {
      if (Array.isArray(r)) for (var i = 0; i < r.length; i++) ir(t, r[i]);
      else t.push(r);
      return t;
    };
  function Vt(t) {
    var r,
      i,
      s = {};
    m.each(t, function (c, h) {
      (r = c.match(/^([^A-Z]+?)([A-Z])/)) &&
        "a aa ai ao as b fn i m o s ".indexOf(r[1] + " ") !== -1 &&
        ((i = c.replace(r[0], r[2].toLowerCase())), (s[i] = c), r[1] === "o") &&
        Vt(t[c]);
    }),
      (t._hungarianMap = s);
  }
  function K(t, r, i) {
    var s;
    t._hungarianMap || Vt(t),
      m.each(r, function (c, h) {
        (s = t._hungarianMap[c]) === L ||
          (!i && r[s] !== L) ||
          (s.charAt(0) === "o"
            ? (r[s] || (r[s] = {}), m.extend(!0, r[s], r[c]), K(t[s], r[s], i))
            : (r[s] = r[c]));
      });
  }
  function dt(t) {
    var r,
      i = I.defaults.oLanguage,
      s = i.sDecimal;
    s && Pn(s),
      t &&
        ((r = t.sZeroRecords),
        !t.sEmptyTable &&
          r &&
          i.sEmptyTable === "No data available in table" &&
          Te(t, t, "sZeroRecords", "sEmptyTable"),
        !t.sLoadingRecords &&
          r &&
          i.sLoadingRecords === "Loading..." &&
          Te(t, t, "sZeroRecords", "sLoadingRecords"),
        t.sInfoThousands && (t.sThousands = t.sInfoThousands),
        (r = t.sDecimal)) &&
        s !== r &&
        Pn(r);
  }
  Array.isArray ||
    (Array.isArray = function (t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    }),
    Array.prototype.includes || (Array.prototype.includes = It),
    String.prototype.trim ||
      (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }),
    String.prototype.includes || (String.prototype.includes = It),
    (I.util = {
      throttle: function (t, r) {
        var i,
          s,
          c = r !== L ? r : 200;
        return function () {
          var h = this,
            d = +new Date(),
            p = arguments;
          i && d < i + c
            ? (clearTimeout(s),
              (s = setTimeout(function () {
                (i = L), t.apply(h, p);
              }, c)))
            : ((i = d), t.apply(h, p));
        };
      },
      escapeRegex: function (t) {
        return t.replace(Lt, "\\$1");
      },
      set: function (t) {
        var r;
        return m.isPlainObject(t)
          ? I.util.set(t._)
          : t === null
            ? function () {}
            : typeof t == "function"
              ? function (i, s, c) {
                  t(i, "set", s, c);
                }
              : typeof t != "string" ||
                  (t.indexOf(".") === -1 &&
                    t.indexOf("[") === -1 &&
                    t.indexOf("(") === -1)
                ? function (i, s) {
                    i[t] = s;
                  }
                : ((r = function (i, s, c) {
                    for (
                      var h,
                        d,
                        p,
                        v,
                        e = Et(c),
                        c = e[e.length - 1],
                        n = 0,
                        a = e.length - 1;
                      n < a;
                      n++
                    ) {
                      if (e[n] === "__proto__" || e[n] === "constructor")
                        throw new Error("Cannot set prototype values");
                      if (((h = e[n].match(zt)), (d = e[n].match(ot)), h)) {
                        if (
                          ((e[n] = e[n].replace(zt, "")),
                          (i[e[n]] = []),
                          (h = e.slice()).splice(0, n + 1),
                          (v = h.join(".")),
                          Array.isArray(s))
                        )
                          for (var o = 0, l = s.length; o < l; o++)
                            r((p = {}), s[o], v), i[e[n]].push(p);
                        else i[e[n]] = s;
                        return;
                      }
                      d && ((e[n] = e[n].replace(ot, "")), (i = i[e[n]](s))),
                        (i[e[n]] !== null && i[e[n]] !== L) || (i[e[n]] = {}),
                        (i = i[e[n]]);
                    }
                    c.match(ot)
                      ? i[c.replace(ot, "")](s)
                      : (i[c.replace(zt, "")] = s);
                  }),
                  function (i, s) {
                    return r(i, s, t);
                  });
      },
      get: function (t) {
        var r, i;
        return m.isPlainObject(t)
          ? ((r = {}),
            m.each(t, function (s, c) {
              c && (r[s] = I.util.get(c));
            }),
            function (s, c, h, d) {
              var p = r[c] || r._;
              return p !== L ? p(s, c, h, d) : s;
            })
          : t === null
            ? function (s) {
                return s;
              }
            : typeof t == "function"
              ? function (s, c, h, d) {
                  return t(s, c, h, d);
                }
              : typeof t != "string" ||
                  (t.indexOf(".") === -1 &&
                    t.indexOf("[") === -1 &&
                    t.indexOf("(") === -1)
                ? function (s, c) {
                    return s[t];
                  }
                : ((i = function (s, c, h) {
                    var d, p, v;
                    if (h !== "")
                      for (var e = Et(h), n = 0, a = e.length; n < a; n++) {
                        if (((f = e[n].match(zt)), (d = e[n].match(ot)), f)) {
                          if (
                            ((e[n] = e[n].replace(zt, "")),
                            e[n] !== "" && (s = s[e[n]]),
                            (p = []),
                            e.splice(0, n + 1),
                            (v = e.join(".")),
                            Array.isArray(s))
                          )
                            for (var o = 0, l = s.length; o < l; o++)
                              p.push(i(s[o], c, v));
                          var f = f[0].substring(1, f[0].length - 1);
                          s = f === "" ? p : p.join(f);
                          break;
                        }
                        if (d) (e[n] = e[n].replace(ot, "")), (s = s[e[n]]());
                        else {
                          if (s === null || s[e[n]] === null) return null;
                          if (s === L || s[e[n]] === L) return L;
                          s = s[e[n]];
                        }
                      }
                    return s;
                  }),
                  function (s, c) {
                    return i(s, c, t);
                  });
      },
    });
  var je = function (t, r, i) {
    t[r] !== L && (t[i] = t[r]);
  };
  function sr(t) {
    je(t, "ordering", "bSort"),
      je(t, "orderMulti", "bSortMulti"),
      je(t, "orderClasses", "bSortClasses"),
      je(t, "orderCellsTop", "bSortCellsTop"),
      je(t, "order", "aaSorting"),
      je(t, "orderFixed", "aaSortingFixed"),
      je(t, "paging", "bPaginate"),
      je(t, "pagingType", "sPaginationType"),
      je(t, "pageLength", "iDisplayLength"),
      je(t, "searching", "bFilter"),
      typeof t.sScrollX == "boolean" && (t.sScrollX = t.sScrollX ? "100%" : ""),
      typeof t.scrollX == "boolean" && (t.scrollX = t.scrollX ? "100%" : "");
    var r = t.aoSearchCols;
    if (r)
      for (var i = 0, s = r.length; i < s; i++)
        r[i] && K(I.models.oSearch, r[i]);
  }
  function ze(t) {
    je(t, "orderable", "bSortable"),
      je(t, "orderData", "aDataSort"),
      je(t, "orderSequence", "asSorting"),
      je(t, "orderDataType", "sortDataType");
    var r = t.aDataSort;
    typeof r != "number" || Array.isArray(r) || (t.aDataSort = [r]);
  }
  function ln(t) {
    var r, i, s, c;
    I.__browser ||
      ((I.__browser = r = {}),
      (c = (s = (i = m("<div/>")
        .css({
          position: "fixed",
          top: 0,
          left: -1 * m(se).scrollLeft(),
          height: 1,
          width: 1,
          overflow: "hidden",
        })
        .append(
          m("<div/>")
            .css({
              position: "absolute",
              top: 1,
              left: 1,
              width: 100,
              overflow: "scroll",
            })
            .append(m("<div/>").css({ width: "100%", height: 10 })),
        )
        .appendTo("body")).children()).children()),
      (r.barWidth = s[0].offsetWidth - s[0].clientWidth),
      (r.bScrollOversize =
        c[0].offsetWidth === 100 && s[0].clientWidth !== 100),
      (r.bScrollbarLeft = Math.round(c.offset().left) !== 1),
      (r.bBounding = !!i[0].getBoundingClientRect().width),
      i.remove()),
      m.extend(t.oBrowser, I.__browser),
      (t.oScroll.iBarWidth = I.__browser.barWidth);
  }
  function pt(t, r, i, s, c, h) {
    var d,
      p = s,
      v = !1;
    for (i !== L && ((d = i), (v = !0)); p !== c; )
      t.hasOwnProperty(p) &&
        ((d = v ? r(d, t[p], p, t) : t[p]), (v = !0), (p += h));
    return d;
  }
  function un(t, r) {
    var s = I.defaults.column,
      i = t.aoColumns.length,
      s = m.extend({}, I.models.oColumn, s, {
        nTh: r || ee.createElement("th"),
        sTitle: s.sTitle || (r ? r.innerHTML : ""),
        aDataSort: s.aDataSort || [i],
        mData: s.mData || i,
        idx: i,
      }),
      s = (t.aoColumns.push(s), t.aoPreSearchCols);
    (s[i] = m.extend({}, I.models.oSearch, s[i])), Jt(t, i, m(r).data());
  }
  function Jt(t, c, a) {
    function s(o) {
      return typeof o == "string" && o.indexOf("@") !== -1;
    }
    var c = t.aoColumns[c],
      h = t.oClasses,
      d = m(c.nTh),
      p =
        (!c.sWidthOrig &&
          ((c.sWidthOrig = d.attr("width") || null),
          (n = (d.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/))) &&
          (c.sWidthOrig = n[1]),
        a !== L &&
          a !== null &&
          (ze(a),
          K(I.defaults.column, a, !0),
          a.mDataProp === L || a.mData || (a.mData = a.mDataProp),
          a.sType && (c._sManualType = a.sType),
          a.className && !a.sClass && (a.sClass = a.className),
          a.sClass && d.addClass(a.sClass),
          (n = c.sClass),
          m.extend(c, a),
          Te(c, a, "sWidth", "sWidthOrig"),
          n !== c.sClass && (c.sClass = n + " " + c.sClass),
          a.iDataSort !== L && (c.aDataSort = [a.iDataSort]),
          Te(c, a, "aDataSort"),
          c.ariaTitle || (c.ariaTitle = d.attr("aria-label"))),
        c.mData),
      v = ke(p),
      e = c.mRender ? ke(c.mRender) : null,
      n =
        ((c._bAttrSrc =
          m.isPlainObject(p) && (s(p.sort) || s(p.type) || s(p.filter))),
        (c._setter = null),
        (c.fnGetData = function (o, l, f) {
          var g = v(o, l, L, f);
          return e && l ? e(g, l, o, f) : g;
        }),
        (c.fnSetData = function (o, l, f) {
          return it(p)(o, l, f);
        }),
        typeof p == "number" || c._isArrayHost || (t._rowReadObject = !0),
        t.oFeatures.bSort || ((c.bSortable = !1), d.addClass(h.sSortableNone)),
        m.inArray("asc", c.asSorting) !== -1),
      a = m.inArray("desc", c.asSorting) !== -1;
    c.bSortable && (n || a)
      ? n && !a
        ? ((c.sSortingClass = h.sSortableAsc),
          (c.sSortingClassJUI = h.sSortJUIAscAllowed))
        : !n && a
          ? ((c.sSortingClass = h.sSortableDesc),
            (c.sSortingClassJUI = h.sSortJUIDescAllowed))
          : ((c.sSortingClass = h.sSortable), (c.sSortingClassJUI = h.sSortJUI))
      : ((c.sSortingClass = h.sSortableNone), (c.sSortingClassJUI = ""));
  }
  function jt(t) {
    if (t.oFeatures.bAutoWidth !== !1) {
      var r = t.aoColumns;
      Mt(t);
      for (var i = 0, s = r.length; i < s; i++)
        r[i].nTh.style.width = r[i].sWidth;
    }
    var c = t.oScroll;
    (c.sY === "" && c.sX === "") || Zt(t), te(t, null, "column-sizing", [t]);
  }
  function ht(t, r) {
    return (t = cn(t, "bVisible")), typeof t[r] == "number" ? t[r] : null;
  }
  function kt(t, r) {
    return (t = cn(t, "bVisible")), (r = m.inArray(r, t)), r !== -1 ? r : null;
  }
  function Ft(t) {
    var r = 0;
    return (
      m.each(t.aoColumns, function (i, s) {
        s.bVisible && m(s.nTh).css("display") !== "none" && r++;
      }),
      r
    );
  }
  function cn(t, r) {
    var i = [];
    return (
      m.map(t.aoColumns, function (s, c) {
        s[r] && i.push(c);
      }),
      i
    );
  }
  function jn(t) {
    for (
      var r,
        i,
        s,
        c,
        h,
        d,
        p,
        v = t.aoColumns,
        e = t.aoData,
        n = I.ext.type.detect,
        a = 0,
        o = v.length;
      a < o;
      a++
    )
      if (((p = []), !(h = v[a]).sType && h._sManualType))
        h.sType = h._sManualType;
      else if (!h.sType) {
        for (r = 0, i = n.length; r < i; r++) {
          for (
            s = 0, c = e.length;
            s < c &&
            (p[s] === L && (p[s] = ye(t, s, a, "type")),
            (d = n[r](p[s], t)) || r === n.length - 1) &&
            (d !== "html" || Je(p[s]));
            s++
          );
          if (d) {
            h.sType = d;
            break;
          }
        }
        h.sType || (h.sType = "string");
      }
  }
  function kn(t, r, i, s) {
    var c,
      h,
      d,
      p,
      v = t.aoColumns;
    if (r) {
      for (c = r.length - 1; 0 <= c; c--)
        for (
          var e,
            n =
              (e = r[c]).target !== L
                ? e.target
                : e.targets !== L
                  ? e.targets
                  : e.aTargets,
            a = 0,
            o = (n = Array.isArray(n) ? n : [n]).length;
          a < o;
          a++
        )
          if (typeof n[a] == "number" && 0 <= n[a]) {
            for (; v.length <= n[a]; ) un(t);
            s(n[a], e);
          } else if (typeof n[a] == "number" && n[a] < 0) s(v.length + n[a], e);
          else if (typeof n[a] == "string")
            for (d = 0, p = v.length; d < p; d++)
              (n[a] != "_all" && !m(v[d].nTh).hasClass(n[a])) || s(d, e);
    }
    if (i) for (c = 0, h = i.length; c < h; c++) s(c, i[c]);
  }
  function ve(t, r, i, s) {
    for (
      var c = t.aoData.length,
        h = m.extend(!0, {}, I.models.oRow, {
          src: i ? "dom" : "data",
          idx: c,
        }),
        d = ((h._aData = r), t.aoData.push(h), t.aoColumns),
        p = 0,
        v = d.length;
      p < v;
      p++
    )
      d[p].sType = null;
    return (
      t.aiDisplayMaster.push(c),
      (r = t.rowIdFn(r)),
      r !== L && (t.aIds[r] = h),
      (!i && t.oFeatures.bDeferRender) || B(t, c, i, s),
      c
    );
  }
  function Ze(t, r) {
    var i;
    return (r = r instanceof m ? r : m(r)).map(function (s, c) {
      return (i = gt(t, c)), ve(t, i.data, c, i.cells);
    });
  }
  function ye(t, r, i, s) {
    s === "search" ? (s = "filter") : s === "order" && (s = "sort");
    var c = t.iDraw,
      h = t.aoColumns[i],
      d = t.aoData[r]._aData,
      p = h.sDefaultContent,
      v = h.fnGetData(d, s, { settings: t, row: r, col: i });
    if (v === L)
      return (
        t.iDrawError != c &&
          p === null &&
          (Ae(
            t,
            0,
            "Requested unknown parameter " +
              (typeof h.mData == "function"
                ? "{function}"
                : "'" + h.mData + "'") +
              " for row " +
              r +
              ", column " +
              i,
            4,
          ),
          (t.iDrawError = c)),
        p
      );
    if ((v !== d && v !== null) || p === null || s === L) {
      if (typeof v == "function") return v.call(d);
    } else v = p;
    return v === null && s === "display"
      ? ""
      : s === "filter" && (r = I.ext.type.search)[h.sType]
        ? r[h.sType](v)
        : v;
  }
  function Fn(t, r, i, s) {
    var c = t.aoColumns[i],
      h = t.aoData[r]._aData;
    c.fnSetData(h, s, { settings: t, row: r, col: i });
  }
  var zt = /\[.*?\]$/,
    ot = /\(\)$/;
  function Et(t) {
    return m.map(t.match(/(\\.|[^\.])+/g) || [""], function (r) {
      return r.replace(/\\\./g, ".");
    });
  }
  var ke = I.util.get,
    it = I.util.set;
  function En(t) {
    return we(t.aoData, "_aData");
  }
  function fn(t) {
    (t.aoData.length = 0),
      (t.aiDisplayMaster.length = 0),
      (t.aiDisplay.length = 0),
      (t.aIds = {});
  }
  function Oe(t, r, i) {
    for (var s = -1, c = 0, h = t.length; c < h; c++)
      t[c] == r ? (s = c) : t[c] > r && t[c]--;
    s != -1 && i === L && t.splice(s, 1);
  }
  function Ke(t, r, i, s) {
    function c(n, a) {
      for (; n.childNodes.length; ) n.removeChild(n.firstChild);
      n.innerHTML = ye(t, r, a, "display");
    }
    var h,
      d,
      p = t.aoData[r];
    if (i !== "dom" && ((i && i !== "auto") || p.src !== "dom")) {
      var v = p.anCells;
      if (v)
        if (s !== L) c(v[s], s);
        else for (h = 0, d = v.length; h < d; h++) c(v[h], h);
    } else p._aData = gt(t, p, s, s === L ? L : p._aData).data;
    (p._aSortData = null), (p._aFilterData = null);
    var e = t.aoColumns;
    if (s !== L) e[s].sType = null;
    else {
      for (h = 0, d = e.length; h < d; h++) e[h].sType = null;
      De(t, p);
    }
  }
  function gt(t, y, i, s) {
    function c(b, w) {
      var S;
      typeof b == "string" &&
        (S = b.indexOf("@")) !== -1 &&
        ((S = b.substring(S + 1)), it(b)(s, w.getAttribute(S)));
    }
    function h(b) {
      (i !== L && i !== a) ||
        ((p = o[a]),
        (v = b.innerHTML.trim()),
        p && p._bAttrSrc
          ? (it(p.mData._)(s, v),
            c(p.mData.sort, b),
            c(p.mData.type, b),
            c(p.mData.filter, b))
          : l
            ? (p._setter || (p._setter = it(p.mData)), p._setter(s, v))
            : (s[a] = v)),
        a++;
    }
    var d,
      p,
      v,
      e = [],
      n = y.firstChild,
      a = 0,
      o = t.aoColumns,
      l = t._rowReadObject;
    if (((s = s !== L ? s : l ? {} : []), n))
      for (; n; )
        ((d = n.nodeName.toUpperCase()) != "TD" && d != "TH") ||
          (h(n), e.push(n)),
          (n = n.nextSibling);
    else for (var f = 0, g = (e = y.anCells).length; f < g; f++) h(e[f]);
    var y = y.firstChild ? y : y.nTr;
    return (
      y && (y = y.getAttribute("id")) && it(t.rowId)(s, y),
      { data: s, cells: e }
    );
  }
  function B(t, r, i, s) {
    var c,
      h,
      d,
      p,
      v,
      e,
      n = t.aoData[r],
      a = n._aData,
      o = [];
    if (n.nTr === null) {
      for (
        c = i || ee.createElement("tr"),
          n.nTr = c,
          n.anCells = o,
          c._DT_RowIndex = r,
          De(t, n),
          p = 0,
          v = t.aoColumns.length;
        p < v;
        p++
      )
        (d = t.aoColumns[p]),
          (h = (e = !i) ? ee.createElement(d.sCellType) : s[p]) ||
            Ae(t, 0, "Incorrect column count", 18),
          (h._DT_CellIndex = { row: r, column: p }),
          o.push(h),
          (!e &&
            ((!d.mRender && d.mData === p) ||
              (m.isPlainObject(d.mData) && d.mData._ === p + ".display"))) ||
            (h.innerHTML = ye(t, r, p, "display")),
          d.sClass && (h.className += " " + d.sClass),
          d.bVisible && !i
            ? c.appendChild(h)
            : !d.bVisible && i && h.parentNode.removeChild(h),
          d.fnCreatedCell &&
            d.fnCreatedCell.call(t.oInstance, h, ye(t, r, p), a, r, p);
      te(t, "aoRowCreatedCallback", null, [c, a, r, o]);
    }
  }
  function De(t, r) {
    var i = r.nTr,
      s = r._aData;
    i &&
      ((t = t.rowIdFn(s)) && (i.id = t),
      s.DT_RowClass &&
        ((t = s.DT_RowClass.split(" ")),
        (r.__rowc = r.__rowc ? sn(r.__rowc.concat(t)) : t),
        m(i).removeClass(r.__rowc.join(" ")).addClass(s.DT_RowClass)),
      s.DT_RowAttr && m(i).attr(s.DT_RowAttr),
      s.DT_RowData) &&
      m(i).data(s.DT_RowData);
  }
  function lr(t) {
    var r,
      i,
      s,
      c = t.nTHead,
      h = t.nTFoot,
      d = m("th, td", c).length === 0,
      p = t.oClasses,
      v = t.aoColumns;
    for (d && (i = m("<tr/>").appendTo(c)), n = 0, a = v.length; n < a; n++)
      (s = v[n]),
        (r = m(s.nTh).addClass(s.sClass)),
        d && r.appendTo(i),
        t.oFeatures.bSort &&
          (r.addClass(s.sSortingClass), s.bSortable !== !1) &&
          (r.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId),
          Vn(t, s.nTh, n)),
        s.sTitle != r[0].innerHTML && r.html(s.sTitle),
        Wt(t, "header")(t, r, s, p);
    if (
      (d && Me(t.aoHeader, c),
      m(c).children("tr").children("th, td").addClass(p.sHeaderTH),
      m(h).children("tr").children("th, td").addClass(p.sFooterTH),
      h !== null)
    )
      for (var e = t.aoFooter[0], n = 0, a = e.length; n < a; n++)
        (s = v[n])
          ? ((s.nTf = e[n].cell), s.sClass && m(s.nTf).addClass(s.sClass))
          : Ae(t, 0, "Incorrect column count", 18);
  }
  function Gt(t, r, i) {
    var s,
      c,
      h,
      d,
      p,
      v,
      e,
      n,
      a,
      o = [],
      l = [],
      f = t.aoColumns.length;
    if (r) {
      for (i === L && (i = !1), s = 0, c = r.length; s < c; s++) {
        for (o[s] = r[s].slice(), o[s].nTr = r[s].nTr, h = f - 1; 0 <= h; h--)
          t.aoColumns[h].bVisible || i || o[s].splice(h, 1);
        l.push([]);
      }
      for (s = 0, c = o.length; s < c; s++) {
        if ((e = o[s].nTr)) for (; (v = e.firstChild); ) e.removeChild(v);
        for (h = 0, d = o[s].length; h < d; h++)
          if (((a = n = 1), l[s][h] === L)) {
            for (
              e.appendChild(o[s][h].cell), l[s][h] = 1;
              o[s + n] !== L && o[s][h].cell == o[s + n][h].cell;

            )
              (l[s + n][h] = 1), n++;
            for (; o[s][h + a] !== L && o[s][h].cell == o[s][h + a].cell; ) {
              for (p = 0; p < n; p++) l[s + p][h + a] = 1;
              a++;
            }
            m(o[s][h].cell).attr("rowspan", n).attr("colspan", a);
          }
      }
    }
  }
  function Pe(t, r) {
    (i = xe((v = t)) == "ssp"),
      (p = v.iInitDisplayStart) !== L &&
        p !== -1 &&
        ((v._iDisplayStart = !i && p >= v.fnRecordsDisplay() ? 0 : p),
        (v.iInitDisplayStart = -1));
    var i = te(t, "aoPreDrawCallback", "preDraw", [t]);
    if (m.inArray(!1, i) !== -1) Ee(t, !1);
    else {
      var s = [],
        c = 0,
        h = t.asStripeClasses,
        d = h.length,
        p = t.oLanguage,
        v = xe(t) == "ssp",
        e = t.aiDisplay,
        i = t._iDisplayStart,
        n = t.fnDisplayEnd();
      if (((t.bDrawing = !0), t.bDeferLoading))
        (t.bDeferLoading = !1), t.iDraw++, Ee(t, !1);
      else if (v) {
        if (!t.bDestroying && !r) return void ur(t);
      } else t.iDraw++;
      if (e.length !== 0)
        for (var a = v ? t.aoData.length : n, o = v ? 0 : i; o < a; o++) {
          var l,
            f = e[o],
            g = t.aoData[f],
            y = (g.nTr === null && B(t, f), g.nTr);
          d !== 0 &&
            ((l = h[c % d]), g._sRowStripe != l) &&
            (m(y).removeClass(g._sRowStripe).addClass(l), (g._sRowStripe = l)),
            te(t, "aoRowCallback", null, [y, g._aData, c, o, f]),
            s.push(y),
            c++;
        }
      else
        (r = p.sZeroRecords),
          t.iDraw == 1 && xe(t) == "ajax"
            ? (r = p.sLoadingRecords)
            : p.sEmptyTable && t.fnRecordsTotal() === 0 && (r = p.sEmptyTable),
          (s[0] = m("<tr/>", { class: d ? h[0] : "" }).append(
            m("<td />", {
              valign: "top",
              colSpan: Ft(t),
              class: t.oClasses.sRowEmpty,
            }).html(r),
          )[0]);
      te(t, "aoHeaderCallback", "header", [
        m(t.nTHead).children("tr")[0],
        En(t),
        i,
        n,
        e,
      ]),
        te(t, "aoFooterCallback", "footer", [
          m(t.nTFoot).children("tr")[0],
          En(t),
          i,
          n,
          e,
        ]),
        (v = m(t.nTBody)),
        v.children().detach(),
        v.append(m(s)),
        te(t, "aoDrawCallback", "draw", [t]),
        (t.bSorted = !1),
        (t.bFiltered = !1),
        (t.bDrawing = !1);
    }
  }
  function st(t, r) {
    var s = t.oFeatures,
      i = s.bSort,
      s = s.bFilter;
    i && Hn(t),
      s ? Xe(t, t.oPreviousSearch) : (t.aiDisplay = t.aiDisplayMaster.slice()),
      r !== !0 && (t._iDisplayStart = 0),
      (t._drawHold = r),
      Pe(t),
      (t._drawHold = !1);
  }
  function Nt(t) {
    for (
      var r,
        i,
        s,
        c,
        h,
        d,
        p,
        v = t.oClasses,
        e = m(t.nTable),
        e = m("<div/>").insertBefore(e),
        n = t.oFeatures,
        a = m("<div/>", {
          id: t.sTableId + "_wrapper",
          class: v.sWrapper + (t.nTFoot ? "" : " " + v.sNoFooter),
        }),
        o =
          ((t.nHolding = e[0]),
          (t.nTableWrapper = a[0]),
          (t.nTableReinsertBefore = t.nTable.nextSibling),
          t.sDom.split("")),
        l = 0;
      l < o.length;
      l++
    ) {
      if (((r = null), (i = o[l]) == "<")) {
        if (((s = m("<div/>")[0]), (c = o[l + 1]) == "'" || c == '"')) {
          for (h = "", d = 2; o[l + d] != c; ) (h += o[l + d]), d++;
          h == "H" ? (h = v.sJUIHeader) : h == "F" && (h = v.sJUIFooter),
            h.indexOf(".") != -1
              ? ((p = h.split(".")),
                (s.id = p[0].substr(1, p[0].length - 1)),
                (s.className = p[1]))
              : h.charAt(0) == "#"
                ? (s.id = h.substr(1, h.length - 1))
                : (s.className = h),
            (l += d);
        }
        a.append(s), (a = m(s));
      } else if (i == ">") a = a.parent();
      else if (i == "l" && n.bPaginate && n.bLengthChange) r = fr(t);
      else if (i == "f" && n.bFilter) r = mt(t);
      else if (i == "r" && n.bProcessing) r = dr(t);
      else if (i == "t") r = bt(t);
      else if (i == "i" && n.bInfo) r = vt(t);
      else if (i == "p" && n.bPaginate) r = Bn(t);
      else if (I.ext.feature.length !== 0) {
        for (var f = I.ext.feature, g = 0, y = f.length; g < y; g++)
          if (i == f[g].cFeature) {
            r = f[g].fnInit(t);
            break;
          }
      }
      r && ((p = t.aanFeatures)[i] || (p[i] = []), p[i].push(r), a.append(r));
    }
    e.replaceWith(a), (t.nHolding = null);
  }
  function Me(t, r) {
    var i,
      s,
      c,
      h,
      d,
      p,
      v,
      e,
      n,
      a,
      o = m(r).children("tr");
    for (t.splice(0, t.length), c = 0, p = o.length; c < p; c++) t.push([]);
    for (c = 0, p = o.length; c < p; c++)
      for (s = (i = o[c]).firstChild; s; ) {
        if (
          s.nodeName.toUpperCase() == "TD" ||
          s.nodeName.toUpperCase() == "TH"
        )
          for (
            e = (e = +s.getAttribute("colspan")) && e != 0 && e != 1 ? e : 1,
              n = (n = +s.getAttribute("rowspan")) && n != 0 && n != 1 ? n : 1,
              v = (function (l, f, g) {
                for (var y = l[f]; y[g]; ) g++;
                return g;
              })(t, c, 0),
              a = e == 1,
              d = 0;
            d < e;
            d++
          )
            for (h = 0; h < n; h++)
              (t[c + h][v + d] = { cell: s, unique: a }), (t[c + h].nTr = i);
        s = s.nextSibling;
      }
  }
  function Ge(t, r, i) {
    var s = [];
    i || ((i = t.aoHeader), r && Me((i = []), r));
    for (var c = 0, h = i.length; c < h; c++)
      for (var d = 0, p = i[c].length; d < p; d++)
        !i[c][d].unique || (s[d] && t.bSortCellsTop) || (s[d] = i[c][d].cell);
    return s;
  }
  function et(t, r, i) {
    function s(n) {
      var a = t.jqXHR ? t.jqXHR.status : null;
      (n === null || (typeof a == "number" && a == 204)) && Rt(t, (n = {}), []),
        (a = n.error || n.sError) && Ae(t, 0, a),
        (t.json = n),
        te(t, null, "xhr", [t, n, t.jqXHR]),
        i(n);
    }
    te(t, "aoServerParams", "serverParams", [r]),
      r &&
        Array.isArray(r) &&
        ((c = {}),
        (h = /(.*?)\[\]$/),
        m.each(r, function (n, a) {
          var o = a.name.match(h);
          o
            ? ((o = o[0]), c[o] || (c[o] = []), c[o].push(a.value))
            : (c[a.name] = a.value);
        }),
        (r = c));
    var c,
      h,
      d,
      p = t.ajax,
      v = t.oInstance,
      e =
        (m.isPlainObject(p) &&
          p.data &&
          ((e = typeof (d = p.data) == "function" ? d(r, t) : d),
          (r = typeof d == "function" && e ? e : m.extend(!0, r, e)),
          delete p.data),
        {
          data: r,
          success: s,
          dataType: "json",
          cache: !1,
          type: t.sServerMethod,
          error: function (n, a, o) {
            var l = te(t, null, "xhr", [t, null, t.jqXHR]);
            m.inArray(!0, l) === -1 &&
              (a == "parsererror"
                ? Ae(t, 0, "Invalid JSON response", 1)
                : n.readyState === 4 && Ae(t, 0, "Ajax error", 7)),
              Ee(t, !1);
          },
        });
    (t.oAjaxData = r),
      te(t, null, "preXhr", [t, r]),
      t.fnServerData
        ? t.fnServerData.call(
            v,
            t.sAjaxSource,
            m.map(r, function (n, a) {
              return { name: a, value: n };
            }),
            s,
            t,
          )
        : t.sAjaxSource || typeof p == "string"
          ? (t.jqXHR = m.ajax(m.extend(e, { url: p || t.sAjaxSource })))
          : typeof p == "function"
            ? (t.jqXHR = p.call(v, r, s, t))
            : ((t.jqXHR = m.ajax(m.extend(e, p))), (p.data = d));
  }
  function ur(t) {
    t.iDraw++, Ee(t, !0);
    var r = t._drawHold;
    et(t, Yt(t), function (i) {
      (t._drawHold = r), Nn(t, i), (t._drawHold = !1);
    });
  }
  function Yt(t) {
    for (
      var r,
        i,
        s,
        c = t.aoColumns,
        h = c.length,
        d = t.oFeatures,
        p = t.oPreviousSearch,
        v = t.aoPreSearchCols,
        e = [],
        n = xt(t),
        a = t._iDisplayStart,
        o = d.bPaginate !== !1 ? t._iDisplayLength : -1,
        l = function (y, b) {
          e.push({ name: y, value: b });
        },
        f =
          (l("sEcho", t.iDraw),
          l("iColumns", h),
          l("sColumns", we(c, "sName").join(",")),
          l("iDisplayStart", a),
          l("iDisplayLength", o),
          {
            draw: t.iDraw,
            columns: [],
            order: [],
            start: a,
            length: o,
            search: { value: p.sSearch, regex: p.bRegex },
          }),
        g = 0;
      g < h;
      g++
    )
      (i = c[g]),
        (s = v[g]),
        (r = typeof i.mData == "function" ? "function" : i.mData),
        f.columns.push({
          data: r,
          name: i.sName,
          searchable: i.bSearchable,
          orderable: i.bSortable,
          search: { value: s.sSearch, regex: s.bRegex },
        }),
        l("mDataProp_" + g, r),
        d.bFilter &&
          (l("sSearch_" + g, s.sSearch),
          l("bRegex_" + g, s.bRegex),
          l("bSearchable_" + g, i.bSearchable)),
        d.bSort && l("bSortable_" + g, i.bSortable);
    return (
      d.bFilter && (l("sSearch", p.sSearch), l("bRegex", p.bRegex)),
      d.bSort &&
        (m.each(n, function (y, b) {
          f.order.push({ column: b.col, dir: b.dir }),
            l("iSortCol_" + y, b.col),
            l("sSortDir_" + y, b.dir);
        }),
        l("iSortingCols", n.length)),
      (a = I.ext.legacy.ajax),
      a === null ? (t.sAjaxSource ? e : f) : a ? e : f
    );
  }
  function Nn(t, r) {
    function i(e, n) {
      return r[e] !== L ? r[e] : r[n];
    }
    var s = Rt(t, r),
      c = i("sEcho", "draw"),
      h = i("iTotalRecords", "recordsTotal"),
      d = i("iTotalDisplayRecords", "recordsFiltered");
    if (c !== L) {
      if (+c < t.iDraw) return;
      t.iDraw = +c;
    }
    (s = s || []),
      fn(t),
      (t._iRecordsTotal = parseInt(h, 10)),
      (t._iRecordsDisplay = parseInt(d, 10));
    for (var p = 0, v = s.length; p < v; p++) ve(t, s[p]);
    (t.aiDisplay = t.aiDisplayMaster.slice()),
      Pe(t, !0),
      t._bInitComplete || hn(t, r),
      Ee(t, !1);
  }
  function Rt(t, r, i) {
    if (
      ((t =
        m.isPlainObject(t.ajax) && t.ajax.dataSrc !== L
          ? t.ajax.dataSrc
          : t.sAjaxDataProp),
      !i)
    )
      return t === "data" ? r.aaData || r[t] : t !== "" ? ke(t)(r) : r;
    it(t)(r, i);
  }
  function mt(t) {
    function r(n) {
      h.f;
      var a = this.value || "";
      (c.return && n.key !== "Enter") ||
        (a != c.sSearch &&
          (Xe(t, {
            sSearch: a,
            bRegex: c.bRegex,
            bSmart: c.bSmart,
            bCaseInsensitive: c.bCaseInsensitive,
            return: c.return,
          }),
          (t._iDisplayStart = 0),
          Pe(t)));
    }
    var v = t.oClasses,
      i = t.sTableId,
      s = t.oLanguage,
      c = t.oPreviousSearch,
      h = t.aanFeatures,
      p = '<input type="search" class="' + v.sFilterInput + '"/>',
      d = (d = s.sSearch).match(/_INPUT_/) ? d.replace("_INPUT_", p) : d + p,
      p = m("<div/>", {
        id: h.f ? null : i + "_filter",
        class: v.sFilter,
      }).append(m("<label/>").append(d)),
      v = t.searchDelay !== null ? t.searchDelay : xe(t) === "ssp" ? 400 : 0,
      e = m("input", p)
        .val(c.sSearch)
        .attr("placeholder", s.sSearchPlaceholder)
        .on("keyup.DT search.DT input.DT paste.DT cut.DT", v ? mn(r, v) : r)
        .on("mouseup.DT", function (n) {
          setTimeout(function () {
            r.call(e[0], n);
          }, 10);
        })
        .on("keypress.DT", function (n) {
          if (n.keyCode == 13) return !1;
        })
        .attr("aria-controls", i);
    return (
      m(t.nTable).on("search.dt.DT", function (n, a) {
        if (t === a)
          try {
            e[0] !== ee.activeElement && e.val(c.sSearch);
          } catch {}
      }),
      p[0]
    );
  }
  function Xe(t, r, i) {
    function s(v) {
      (h.sSearch = v.sSearch),
        (h.bRegex = v.bRegex),
        (h.bSmart = v.bSmart),
        (h.bCaseInsensitive = v.bCaseInsensitive),
        (h.return = v.return);
    }
    function c(v) {
      return v.bEscapeRegex !== L ? !v.bEscapeRegex : v.bRegex;
    }
    var h = t.oPreviousSearch,
      d = t.aoPreSearchCols;
    if ((jn(t), xe(t) != "ssp")) {
      Rn(t, r.sSearch, i, c(r), r.bSmart, r.bCaseInsensitive), s(r);
      for (var p = 0; p < d.length; p++)
        Ot(t, d[p].sSearch, p, c(d[p]), d[p].bSmart, d[p].bCaseInsensitive);
      Qt(t);
    } else s(r);
    (t.bFiltered = !0), te(t, null, "search", [t]);
  }
  function Qt(t) {
    for (
      var r, i, s = I.ext.search, c = t.aiDisplay, h = 0, d = s.length;
      h < d;
      h++
    ) {
      for (var p = [], v = 0, e = c.length; v < e; v++)
        (i = c[v]),
          (r = t.aoData[i]),
          s[h](t, r._aFilterData, i, r._aData, v) && p.push(i);
      (c.length = 0), m.merge(c, p);
    }
  }
  function Ot(t, r, i, s, c, h) {
    if (r !== "") {
      for (
        var d, p = [], v = t.aiDisplay, e = dn(r, s, c, h), n = 0;
        n < v.length;
        n++
      )
        (d = t.aoData[v[n]]._aFilterData[i]), e.test(d) && p.push(v[n]);
      t.aiDisplay = p;
    }
  }
  function Rn(t, r, i, s, n, a) {
    var d,
      p,
      v,
      e = dn(r, s, n, a),
      n = t.oPreviousSearch.sSearch,
      a = t.aiDisplayMaster,
      o = [];
    if ((I.ext.search.length !== 0 && (i = !0), (p = cr(t)), r.length <= 0))
      t.aiDisplay = a.slice();
    else {
      for (
        (p ||
          i ||
          s ||
          n.length > r.length ||
          r.indexOf(n) !== 0 ||
          t.bSorted) &&
          (t.aiDisplay = a.slice()),
          d = t.aiDisplay,
          v = 0;
        v < d.length;
        v++
      )
        e.test(t.aoData[d[v]]._sFilterRow) && o.push(d[v]);
      t.aiDisplay = o;
    }
  }
  function dn(t, r, i, s) {
    return (
      (t = r ? t : Fe(t)),
      i &&
        (t =
          "^(?=.*?" +
          m
            .map(
              t.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""],
              function (c) {
                var h;
                return (
                  c.charAt(0) === '"'
                    ? (c = (h = c.match(/^"(.*)"$/)) ? h[1] : c)
                    : c.charAt(0) === "\u201C" &&
                      (c = (h = c.match(/^\u201C(.*)\u201D$/)) ? h[1] : c),
                  c.replace('"', "")
                );
              },
            )
            .join(")(?=.*?") +
          ").*$"),
      new RegExp(t, s ? "i" : "")
    );
  }
  var Fe = I.util.escapeRegex,
    be = m("<div>")[0],
    On = be.textContent !== L;
  function cr(t) {
    for (
      var r, i, s, c, h, d = t.aoColumns, p = !1, v = 0, e = t.aoData.length;
      v < e;
      v++
    )
      if (!(h = t.aoData[v])._aFilterData) {
        for (s = [], r = 0, i = d.length; r < i; r++)
          d[r].bSearchable
            ? typeof (c = (c = ye(t, v, r, "filter")) === null ? "" : c) !=
                "string" &&
              c.toString &&
              (c = c.toString())
            : (c = ""),
            c.indexOf &&
              c.indexOf("&") !== -1 &&
              ((be.innerHTML = c), (c = On ? be.textContent : be.innerText)),
            c.replace && (c = c.replace(/[\r\n\u2028]/g, "")),
            s.push(c);
        (h._aFilterData = s), (h._sFilterRow = s.join("  ")), (p = !0);
      }
    return p;
  }
  function Mn(t) {
    return {
      search: t.sSearch,
      smart: t.bSmart,
      regex: t.bRegex,
      caseInsensitive: t.bCaseInsensitive,
    };
  }
  function qn(t) {
    return {
      sSearch: t.search,
      bSmart: t.smart,
      bRegex: t.regex,
      bCaseInsensitive: t.caseInsensitive,
    };
  }
  function vt(t) {
    var r = t.sTableId,
      i = t.aanFeatures.i,
      s = m("<div/>", { class: t.oClasses.sInfo, id: i ? null : r + "_info" });
    return (
      i ||
        (t.aoDrawCallback.push({ fn: yt, sName: "information" }),
        s.attr("role", "status").attr("aria-live", "polite"),
        m(t.nTable).attr("aria-describedby", r + "_info")),
      s[0]
    );
  }
  function yt(t) {
    var r,
      i,
      s,
      c,
      h,
      d,
      p = t.aanFeatures.i;
    p.length !== 0 &&
      ((d = t.oLanguage),
      (r = t._iDisplayStart + 1),
      (i = t.fnDisplayEnd()),
      (s = t.fnRecordsTotal()),
      (h = (c = t.fnRecordsDisplay()) ? d.sInfo : d.sInfoEmpty),
      c !== s && (h += " " + d.sInfoFiltered),
      (h = pn(t, (h += d.sInfoPostFix))),
      (d = d.fnInfoCallback) !== null &&
        (h = d.call(t.oInstance, t, r, i, s, c, h)),
      m(p).html(h));
  }
  function pn(t, r) {
    var i = t.fnFormatNumber,
      s = t._iDisplayStart + 1,
      c = t._iDisplayLength,
      h = t.fnRecordsDisplay(),
      d = c === -1;
    return r
      .replace(/_START_/g, i.call(t, s))
      .replace(/_END_/g, i.call(t, t.fnDisplayEnd()))
      .replace(/_MAX_/g, i.call(t, t.fnRecordsTotal()))
      .replace(/_TOTAL_/g, i.call(t, h))
      .replace(/_PAGE_/g, i.call(t, d ? 1 : Math.ceil(s / c)))
      .replace(/_PAGES_/g, i.call(t, d ? 1 : Math.ceil(h / c)));
  }
  function lt(t) {
    var r,
      i,
      s,
      c = t.iInitDisplayStart,
      h = t.aoColumns,
      d = t.oFeatures,
      p = t.bDeferLoading;
    if (t.bInitialised) {
      for (
        Nt(t),
          lr(t),
          Gt(t, t.aoHeader),
          Gt(t, t.aoFooter),
          Ee(t, !0),
          d.bAutoWidth && Mt(t),
          r = 0,
          i = h.length;
        r < i;
        r++
      )
        (s = h[r]).sWidth && (s.nTh.style.width = ue(s.sWidth));
      te(t, null, "preInit", [t]),
        st(t),
        (d = xe(t)),
        (d == "ssp" && !p) ||
          (d == "ajax"
            ? et(t, [], function (v) {
                var e = Rt(t, v);
                for (r = 0; r < e.length; r++) ve(t, e[r]);
                (t.iInitDisplayStart = c), st(t), Ee(t, !1), hn(t, v);
              })
            : (Ee(t, !1), hn(t)));
    } else
      setTimeout(function () {
        lt(t);
      }, 200);
  }
  function hn(t, r) {
    (t._bInitComplete = !0),
      (r || t.oInit.aaData) && jt(t),
      te(t, null, "plugin-init", [t, r]),
      te(t, "aoInitComplete", "init", [t, r]);
  }
  function Wn(t, r) {
    (r = parseInt(r, 10)),
      (t._iDisplayLength = r),
      bn(t),
      te(t, null, "length", [t, r]);
  }
  function fr(t) {
    for (
      var r = t.oClasses,
        i = t.sTableId,
        s = t.aLengthMenu,
        c = Array.isArray(s[0]),
        h = c ? s[0] : s,
        d = c ? s[1] : s,
        p = m("<select/>", {
          name: i + "_length",
          "aria-controls": i,
          class: r.sLengthSelect,
        }),
        v = 0,
        e = h.length;
      v < e;
      v++
    )
      p[0][v] = new Option(
        typeof d[v] == "number" ? t.fnFormatNumber(d[v]) : d[v],
        h[v],
      );
    var n = m("<div><label/></div>").addClass(r.sLength);
    return (
      t.aanFeatures.l || (n[0].id = i + "_length"),
      n
        .children()
        .append(t.oLanguage.sLengthMenu.replace("_MENU_", p[0].outerHTML)),
      m("select", n)
        .val(t._iDisplayLength)
        .on("change.DT", function (a) {
          Wn(t, m(this).val()), Pe(t);
        }),
      m(t.nTable).on("length.dt.DT", function (a, o, l) {
        t === o && m("select", n).val(l);
      }),
      n[0]
    );
  }
  function Bn(t) {
    function r(d) {
      Pe(d);
    }
    var c = t.sPaginationType,
      i = I.ext.pager[c],
      s = typeof i == "function",
      c = m("<div/>").addClass(t.oClasses.sPaging + c)[0],
      h = t.aanFeatures;
    return (
      s || i.fnInit(t, c, r),
      h.p ||
        ((c.id = t.sTableId + "_paginate"),
        t.aoDrawCallback.push({
          fn: function (d) {
            if (s)
              for (
                var p = d._iDisplayStart,
                  v = d._iDisplayLength,
                  e = d.fnRecordsDisplay(),
                  n = v === -1,
                  a = n ? 0 : Math.ceil(p / v),
                  o = n ? 1 : Math.ceil(e / v),
                  l = i(a, o),
                  f = 0,
                  g = h.p.length;
                f < g;
                f++
              )
                Wt(d, "pageButton")(d, h.p[f], f, l, a, o);
            else i.fnUpdate(d, r);
          },
          sName: "pagination",
        })),
      c
    );
  }
  function gn(t, r, i) {
    var s = t._iDisplayStart,
      c = t._iDisplayLength,
      h = t.fnRecordsDisplay(),
      h =
        (h === 0 || c === -1
          ? (s = 0)
          : typeof r == "number"
            ? h < (s = r * c) && (s = 0)
            : r == "first"
              ? (s = 0)
              : r == "previous"
                ? (s = 0 <= c ? s - c : 0) < 0 && (s = 0)
                : r == "next"
                  ? s + c < h && (s += c)
                  : r == "last"
                    ? (s = Math.floor((h - 1) / c) * c)
                    : Ae(t, 0, "Unknown paging action: " + r, 5),
        t._iDisplayStart !== s);
    return (
      (t._iDisplayStart = s),
      h ? (te(t, null, "page", [t]), i && Pe(t)) : te(t, null, "page-nc", [t]),
      h
    );
  }
  function dr(t) {
    return m("<div/>", {
      id: t.aanFeatures.r ? null : t.sTableId + "_processing",
      class: t.oClasses.sProcessing,
      role: "status",
    })
      .html(t.oLanguage.sProcessing)
      .append("<div><div></div><div></div><div></div><div></div></div>")
      .insertBefore(t.nTable)[0];
  }
  function Ee(t, r) {
    t.oFeatures.bProcessing &&
      m(t.aanFeatures.r).css("display", r ? "block" : "none"),
      te(t, null, "processing", [t, r]);
  }
  function bt(t) {
    var r,
      i,
      s,
      c,
      h,
      d,
      p,
      v,
      e,
      n,
      a,
      o,
      l = m(t.nTable),
      f = t.oScroll;
    return f.sX === "" && f.sY === ""
      ? t.nTable
      : ((r = f.sX),
        (i = f.sY),
        (s = t.oClasses),
        (h = (c = l.children("caption")).length ? c[0]._captionSide : null),
        (v = m(l[0].cloneNode(!1))),
        (d = m(l[0].cloneNode(!1))),
        (e = function (g) {
          return g ? ue(g) : null;
        }),
        (p = l.children("tfoot")).length || (p = null),
        (v = m((a = "<div/>"), { class: s.sScrollWrapper })
          .append(
            m(a, { class: s.sScrollHead })
              .css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: r ? e(r) : "100%",
              })
              .append(
                m(a, { class: s.sScrollHeadInner })
                  .css({
                    "box-sizing": "content-box",
                    width: f.sXInner || "100%",
                  })
                  .append(
                    v
                      .removeAttr("id")
                      .css("margin-left", 0)
                      .append(h === "top" ? c : null)
                      .append(l.children("thead")),
                  ),
              ),
          )
          .append(
            m(a, { class: s.sScrollBody })
              .css({ position: "relative", overflow: "auto", width: e(r) })
              .append(l),
          )),
        p &&
          v.append(
            m(a, { class: s.sScrollFoot })
              .css({ overflow: "hidden", border: 0, width: r ? e(r) : "100%" })
              .append(
                m(a, { class: s.sScrollFootInner }).append(
                  d
                    .removeAttr("id")
                    .css("margin-left", 0)
                    .append(h === "bottom" ? c : null)
                    .append(l.children("tfoot")),
                ),
              ),
          ),
        (e = v.children()),
        (n = e[0]),
        (a = e[1]),
        (o = p ? e[2] : null),
        r &&
          m(a).on("scroll.DT", function (g) {
            var y = this.scrollLeft;
            (n.scrollLeft = y), p && (o.scrollLeft = y);
          }),
        m(a).css("max-height", i),
        f.bCollapse || m(a).css("height", i),
        (t.nScrollHead = n),
        (t.nScrollBody = a),
        (t.nScrollFoot = o),
        t.aoDrawCallback.push({ fn: Zt, sName: "scrolling" }),
        v[0]);
  }
  function Zt(t) {
    function r(q) {
      ((q = q.style).paddingTop = "0"),
        (q.paddingBottom = "0"),
        (q.borderTopWidth = "0"),
        (q.borderBottomWidth = "0"),
        (q.height = 0);
    }
    var i,
      s,
      c,
      h,
      d,
      n = t.oScroll,
      p = n.sX,
      v = n.sXInner,
      e = n.sY,
      n = n.iBarWidth,
      a = m(t.nScrollHead),
      o = a[0].style,
      f = a.children("div"),
      l = f[0].style,
      f = f.children("table"),
      g = t.nScrollBody,
      y = m(g),
      b = g.style,
      w = m(t.nScrollFoot).children("div"),
      S = w.children("table"),
      C = m(t.nTHead),
      T = m(t.nTable),
      _ = T[0],
      F = _.style,
      E = t.nTFoot ? m(t.nTFoot) : null,
      W = t.oBrowser,
      X = W.bScrollOversize,
      Q = (we(t.aoColumns, "nTh"), []),
      le = [],
      re = [],
      G = [],
      oe = g.scrollHeight > g.clientHeight;
    t.scrollBarVis !== oe && t.scrollBarVis !== L
      ? ((t.scrollBarVis = oe), jt(t))
      : ((t.scrollBarVis = oe),
        T.children("thead, tfoot").remove(),
        E &&
          ((oe = E.clone().prependTo(T)),
          (d = E.find("tr")),
          (s = oe.find("tr")),
          oe.find("[id]").removeAttr("id")),
        (oe = C.clone().prependTo(T)),
        (C = C.find("tr")),
        (i = oe.find("tr")),
        oe.find("th, td").removeAttr("tabindex"),
        oe.find("[id]").removeAttr("id"),
        p || ((b.width = "100%"), (a[0].style.width = "100%")),
        m.each(Ge(t, oe), function (q, Z) {
          (c = ht(t, q)), (Z.style.width = t.aoColumns[c].sWidth);
        }),
        E &&
          Ue(function (q) {
            q.style.width = "";
          }, s),
        (a = T.outerWidth()),
        p === ""
          ? ((F.width = "100%"),
            X &&
              (T.find("tbody").height() > g.offsetHeight ||
                y.css("overflow-y") == "scroll") &&
              (F.width = ue(T.outerWidth() - n)),
            (a = T.outerWidth()))
          : v !== "" && ((F.width = ue(v)), (a = T.outerWidth())),
        Ue(r, i),
        Ue(function (q) {
          var Z = se.getComputedStyle
            ? se.getComputedStyle(q).width
            : ue(m(q).width());
          re.push(q.innerHTML), Q.push(Z);
        }, i),
        Ue(function (q, Z) {
          q.style.width = Q[Z];
        }, C),
        m(i).css("height", 0),
        E &&
          (Ue(r, s),
          Ue(function (q) {
            G.push(q.innerHTML), le.push(ue(m(q).css("width")));
          }, s),
          Ue(function (q, Z) {
            q.style.width = le[Z];
          }, d),
          m(s).height(0)),
        Ue(function (q, Z) {
          (q.innerHTML = '<div class="dataTables_sizing">' + re[Z] + "</div>"),
            (q.childNodes[0].style.height = "0"),
            (q.childNodes[0].style.overflow = "hidden"),
            (q.style.width = Q[Z]);
        }, i),
        E &&
          Ue(function (q, Z) {
            (q.innerHTML = '<div class="dataTables_sizing">' + G[Z] + "</div>"),
              (q.childNodes[0].style.height = "0"),
              (q.childNodes[0].style.overflow = "hidden"),
              (q.style.width = le[Z]);
          }, s),
        Math.round(T.outerWidth()) < Math.round(a)
          ? ((h =
              g.scrollHeight > g.offsetHeight || y.css("overflow-y") == "scroll"
                ? a + n
                : a),
            X &&
              (g.scrollHeight > g.offsetHeight ||
                y.css("overflow-y") == "scroll") &&
              (F.width = ue(h - n)),
            (p !== "" && v === "") ||
              Ae(t, 1, "Possible column misalignment", 6))
          : (h = "100%"),
        (b.width = ue(h)),
        (o.width = ue(h)),
        E && (t.nScrollFoot.style.width = ue(h)),
        e || (X && (b.height = ue(_.offsetHeight + n))),
        (oe = T.outerWidth()),
        (f[0].style.width = ue(oe)),
        (l.width = ue(oe)),
        (C = T.height() > g.clientHeight || y.css("overflow-y") == "scroll"),
        (l[(d = "padding" + (W.bScrollbarLeft ? "Left" : "Right"))] = C
          ? n + "px"
          : "0px"),
        E &&
          ((S[0].style.width = ue(oe)),
          (w[0].style.width = ue(oe)),
          (w[0].style[d] = C ? n + "px" : "0px")),
        T.children("colgroup").insertBefore(T.children("thead")),
        y.trigger("scroll"),
        (!t.bSorted && !t.bFiltered) || t._drawHold || (g.scrollTop = 0));
  }
  function Ue(t, r, i) {
    for (var s, c, h = 0, d = 0, p = r.length; d < p; ) {
      for (s = r[d].firstChild, c = i ? i[d].firstChild : null; s; )
        s.nodeType === 1 && (i ? t(s, c, h) : t(s, h), h++),
          (s = s.nextSibling),
          (c = i ? c.nextSibling : null);
      d++;
    }
  }
  var Un = /<.*?>/g;
  function Mt(t) {
    var r,
      i,
      s = t.nTable,
      c = t.aoColumns,
      p = t.oScroll,
      h = p.sY,
      d = p.sX,
      p = p.sXInner,
      v = c.length,
      e = cn(t, "bVisible"),
      n = m("th", t.nTHead),
      a = s.getAttribute("width"),
      o = s.parentNode,
      l = !1,
      f = t.oBrowser,
      g = f.bScrollOversize,
      y = s.style.width,
      b = (y && y.indexOf("%") !== -1 && (a = y), pr(we(c, "sWidthOrig"), o));
    for (_ = 0; _ < e.length; _++)
      (r = c[e[_]]).sWidth !== null && ((r.sWidth = b[_]), (l = !0));
    if (g || (!l && !d && !h && v == Ft(t) && v == n.length))
      for (_ = 0; _ < v; _++) {
        var w = ht(t, _);
        w !== null && (c[w].sWidth = ue(n.eq(_).width()));
      }
    else {
      var y = m(s).clone().css("visibility", "hidden").removeAttr("id"),
        S = (y.find("tbody tr").remove(), m("<tr/>").appendTo(y.find("tbody")));
      for (
        y.find("thead, tfoot").remove(),
          y.append(m(t.nTHead).clone()).append(m(t.nTFoot).clone()),
          y.find("tfoot th, tfoot td").css("width", ""),
          n = Ge(t, y.find("thead")[0]),
          _ = 0;
        _ < e.length;
        _++
      )
        (r = c[e[_]]),
          (n[_].style.width =
            r.sWidthOrig !== null && r.sWidthOrig !== ""
              ? ue(r.sWidthOrig)
              : ""),
          r.sWidthOrig &&
            d &&
            m(n[_]).append(
              m("<div/>").css({
                width: r.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1,
              }),
            );
      if (t.aoData.length)
        for (_ = 0; _ < e.length; _++)
          (r = c[(i = e[_])]),
            m(qt(t, i)).clone(!1).append(r.sContentPadding).appendTo(S);
      m("[name]", y).removeAttr("name");
      for (
        var C = m("<div/>")
            .css(
              d || h
                ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: "hidden",
                  }
                : {},
            )
            .append(y)
            .appendTo(o),
          T =
            (d && p
              ? y.width(p)
              : d
                ? (y.css("width", "auto"),
                  y.removeAttr("width"),
                  y.width() < o.clientWidth && a && y.width(o.clientWidth))
                : h
                  ? y.width(o.clientWidth)
                  : a && y.width(a),
            0),
          _ = 0;
        _ < e.length;
        _++
      ) {
        var E = m(n[_]),
          F = E.outerWidth() - E.width(),
          E = f.bBounding
            ? Math.ceil(n[_].getBoundingClientRect().width)
            : E.outerWidth();
        (T += E), (c[e[_]].sWidth = ue(E - F));
      }
      (s.style.width = ue(T)), C.remove();
    }
    a && (s.style.width = ue(a)),
      (!a && !d) ||
        t._reszEvt ||
        ((p = function () {
          m(se).on(
            "resize.DT-" + t.sInstance,
            mn(function () {
              jt(t);
            }),
          );
        }),
        g ? setTimeout(p, 1e3) : p(),
        (t._reszEvt = !0));
  }
  var mn = I.util.throttle;
  function pr(t, r) {
    for (var i = [], s = [], c = 0; c < t.length; c++)
      t[c]
        ? i.push(
            m("<div/>")
              .css("width", ue(t[c]))
              .appendTo(r || ee.body),
          )
        : i.push(null);
    for (c = 0; c < t.length; c++) s.push(i[c] ? i[c][0].offsetWidth : null);
    return m(i).remove(), s;
  }
  function qt(t, r) {
    var i,
      s = $n(t, r);
    return s < 0
      ? null
      : (i = t.aoData[s]).nTr
        ? i.anCells[r]
        : m("<td/>").html(ye(t, s, r, "display"))[0];
  }
  function $n(t, r) {
    for (var i, s = -1, c = -1, h = 0, d = t.aoData.length; h < d; h++)
      (i = (i = (i = ye(t, h, r, "display") + "").replace(Un, "")).replace(
        /&nbsp;/g,
        " ",
      )).length > s && ((s = i.length), (c = h));
    return c;
  }
  function ue(t) {
    return t === null
      ? "0px"
      : typeof t == "number"
        ? t < 0
          ? "0px"
          : t + "px"
        : t.match(/\d$/)
          ? t + "px"
          : t;
  }
  function xt(t) {
    function r(f) {
      f.length && !Array.isArray(f[0]) ? l.push(f) : m.merge(l, f);
    }
    var i,
      s,
      c,
      h,
      d,
      p,
      v,
      e = [],
      n = t.aoColumns,
      a = t.aaSortingFixed,
      o = m.isPlainObject(a),
      l = [];
    for (
      Array.isArray(a) && r(a),
        o && a.pre && r(a.pre),
        r(t.aaSorting),
        o && a.post && r(a.post),
        i = 0;
      i < l.length;
      i++
    )
      for (c = (h = n[(v = l[i][(s = 0)])].aDataSort).length; s < c; s++)
        (p = n[(d = h[s])].sType || "string"),
          l[i]._idx === L && (l[i]._idx = m.inArray(l[i][1], n[d].asSorting)),
          e.push({
            src: v,
            col: d,
            dir: l[i][1],
            index: l[i]._idx,
            type: p,
            formatter: I.ext.type.order[p + "-pre"],
          });
    return e;
  }
  function Hn(t) {
    var r,
      i,
      s,
      c,
      h,
      d = [],
      p = I.ext.type.order,
      v = t.aoData,
      e = (t.aoColumns, 0),
      n = t.aiDisplayMaster;
    for (jn(t), r = 0, i = (h = xt(t)).length; r < i; r++)
      (c = h[r]).formatter && e++, Jn(t, c.col);
    if (xe(t) != "ssp" && h.length !== 0) {
      for (r = 0, s = n.length; r < s; r++) d[n[r]] = r;
      e === h.length
        ? n.sort(function (a, o) {
            for (
              var l,
                f,
                g,
                y,
                b = h.length,
                w = v[a]._aSortData,
                S = v[o]._aSortData,
                C = 0;
              C < b;
              C++
            )
              if (
                (g =
                  (l = w[(y = h[C]).col]) < (f = S[y.col])
                    ? -1
                    : f < l
                      ? 1
                      : 0) != 0
              )
                return y.dir === "asc" ? g : -g;
            return (l = d[a]) < (f = d[o]) ? -1 : f < l ? 1 : 0;
          })
        : n.sort(function (a, o) {
            for (
              var l,
                f,
                g,
                y = h.length,
                b = v[a]._aSortData,
                w = v[o]._aSortData,
                S = 0;
              S < y;
              S++
            )
              if (
                ((l = b[(g = h[S]).col]),
                (f = w[g.col]),
                (g = (p[g.type + "-" + g.dir] || p["string-" + g.dir])(
                  l,
                  f,
                )) !== 0)
              )
                return g;
            return (l = d[a]) < (f = d[o]) ? -1 : f < l ? 1 : 0;
          });
    }
    t.bSorted = !0;
  }
  function vn(t) {
    for (
      var r = t.aoColumns,
        i = xt(t),
        s = t.oLanguage.oAria,
        c = 0,
        h = r.length;
      c < h;
      c++
    ) {
      var d = r[c],
        p = d.asSorting,
        v = d.ariaTitle || d.sTitle.replace(/<.*?>/g, ""),
        e = d.nTh;
      e.removeAttribute("aria-sort"),
        (d = d.bSortable
          ? v +
            (((0 < i.length &&
              i[0].col == c &&
              (e.setAttribute(
                "aria-sort",
                i[0].dir == "asc" ? "ascending" : "descending",
              ),
              p[i[0].index + 1])) ||
              p[0]) === "asc"
              ? s.sSortAscending
              : s.sSortDescending)
          : v),
        e.setAttribute("aria-label", d);
    }
  }
  function Xn(t, r, i, s) {
    function c(e, n) {
      var a = e._idx;
      return (a = a === L ? m.inArray(e[1], v) : a) + 1 < v.length
        ? a + 1
        : n
          ? null
          : 0;
    }
    var h,
      d = t.aoColumns[r],
      p = t.aaSorting,
      v = d.asSorting;
    typeof p[0] == "number" && (p = t.aaSorting = [p]),
      i && t.oFeatures.bSortMulti
        ? (d = m.inArray(r, we(p, "0"))) !== -1
          ? (h = (h = c(p[d], !0)) === null && p.length === 1 ? 0 : h) === null
            ? p.splice(d, 1)
            : ((p[d][1] = v[h]), (p[d]._idx = h))
          : (p.push([r, v[0], 0]), (p[p.length - 1]._idx = 0))
        : p.length && p[0][0] == r
          ? ((h = c(p[0])), (p.length = 1), (p[0][1] = v[h]), (p[0]._idx = h))
          : ((p.length = 0), p.push([r, v[0]]), (p[0]._idx = 0)),
      st(t),
      typeof s == "function" && s(t);
  }
  function Vn(t, r, i, s) {
    var c = t.aoColumns[i];
    Gn(r, {}, function (h) {
      c.bSortable !== !1 &&
        (t.oFeatures.bProcessing
          ? (Ee(t, !0),
            setTimeout(function () {
              Xn(t, i, h.shiftKey, s), xe(t) !== "ssp" && Ee(t, !1);
            }, 0))
          : Xn(t, i, h.shiftKey, s));
    });
  }
  function Kt(t) {
    var r,
      i,
      s,
      c = t.aLastSort,
      h = t.oClasses.sSortColumn,
      d = xt(t),
      p = t.oFeatures;
    if (p.bSort && p.bSortClasses) {
      for (r = 0, i = c.length; r < i; r++)
        (s = c[r].src),
          m(we(t.aoData, "anCells", s)).removeClass(h + (r < 2 ? r + 1 : 3));
      for (r = 0, i = d.length; r < i; r++)
        (s = d[r].src),
          m(we(t.aoData, "anCells", s)).addClass(h + (r < 2 ? r + 1 : 3));
    }
    t.aLastSort = d;
  }
  function Jn(t, r) {
    for (
      var i,
        s,
        c,
        h = t.aoColumns[r],
        d = I.ext.order[h.sSortDataType],
        p =
          (d && (i = d.call(t.oInstance, t, r, kt(t, r))),
          I.ext.type.order[h.sType + "-pre"]),
        v = 0,
        e = t.aoData.length;
      v < e;
      v++
    )
      (s = t.aoData[v])._aSortData || (s._aSortData = []),
        (s._aSortData[r] && !d) ||
          ((c = d ? i[v] : ye(t, v, r, "sort")),
          (s._aSortData[r] = p ? p(c) : c));
  }
  function St(t) {
    var r;
    t._bLoadingState ||
      ((r = {
        time: +new Date(),
        start: t._iDisplayStart,
        length: t._iDisplayLength,
        order: m.extend(!0, [], t.aaSorting),
        search: Mn(t.oPreviousSearch),
        columns: m.map(t.aoColumns, function (i, s) {
          return { visible: i.bVisible, search: Mn(t.aoPreSearchCols[s]) };
        }),
      }),
      (t.oSavedState = r),
      te(t, "aoStateSaveParams", "stateSaveParams", [t, r]),
      t.oFeatures.bStateSave &&
        !t.bDestroying &&
        t.fnStateSaveCallback.call(t.oInstance, t, r));
  }
  function zn(t, r, i) {
    var s;
    if (t.oFeatures.bStateSave)
      return (
        (s = t.fnStateLoadCallback.call(t.oInstance, t, function (c) {
          qe(t, c, i);
        })) !== L && qe(t, s, i),
        !0
      );
    i();
  }
  function qe(t, r, i) {
    var s,
      c,
      h = t.aoColumns,
      d = ((t._bLoadingState = !0), t._bInitComplete ? new I.Api(t) : null);
    if (r && r.time) {
      var p = te(t, "aoStateLoadParams", "stateLoadParams", [t, r]);
      if (m.inArray(!1, p) !== -1) t._bLoadingState = !1;
      else if (
        ((p = t.iStateDuration), 0 < p && r.time < +new Date() - 1e3 * p)
      )
        t._bLoadingState = !1;
      else if (r.columns && h.length !== r.columns.length)
        t._bLoadingState = !1;
      else {
        if (
          ((t.oLoadedState = m.extend(!0, {}, r)),
          r.length !== L &&
            (d ? d.page.len(r.length) : (t._iDisplayLength = r.length)),
          r.start !== L &&
            (d === null
              ? ((t._iDisplayStart = r.start), (t.iInitDisplayStart = r.start))
              : gn(t, r.start / t._iDisplayLength)),
          r.order !== L &&
            ((t.aaSorting = []),
            m.each(r.order, function (e, n) {
              t.aaSorting.push(n[0] >= h.length ? [0, n[1]] : n);
            })),
          r.search !== L && m.extend(t.oPreviousSearch, qn(r.search)),
          r.columns)
        ) {
          for (s = 0, c = r.columns.length; s < c; s++) {
            var v = r.columns[s];
            v.visible !== L &&
              (d
                ? d.column(s).visible(v.visible, !1)
                : (h[s].bVisible = v.visible)),
              v.search !== L && m.extend(t.aoPreSearchCols[s], qn(v.search));
          }
          d && d.columns.adjust();
        }
        (t._bLoadingState = !1), te(t, "aoStateLoaded", "stateLoaded", [t, r]);
      }
    } else t._bLoadingState = !1;
    i();
  }
  function tt(i) {
    var r = I.settings,
      i = m.inArray(i, we(r, "nTable"));
    return i !== -1 ? r[i] : null;
  }
  function Ae(t, r, i, s) {
    if (
      ((i =
        "DataTables warning: " +
        (t ? "table id=" + t.sTableId + " - " : "") +
        i),
      s &&
        (i +=
          ". For more information about this error, please see https://datatables.net/tn/" +
          s),
      r)
    )
      se.console && console.log && console.log(i);
    else if (
      ((r = I.ext),
      (r = r.sErrMode || r.errMode),
      t && te(t, null, "error", [t, s, i]),
      r == "alert")
    )
      alert(i);
    else {
      if (r == "throw") throw new Error(i);
      typeof r == "function" && r(t, s, i);
    }
  }
  function Te(t, r, i, s) {
    Array.isArray(i)
      ? m.each(i, function (c, h) {
          Array.isArray(h) ? Te(t, r, h[0], h[1]) : Te(t, r, h);
        })
      : (s === L && (s = i), r[i] !== L && (t[s] = r[i]));
  }
  function yn(t, r, i) {
    var s, c;
    for (c in r)
      r.hasOwnProperty(c) &&
        ((s = r[c]),
        m.isPlainObject(s)
          ? (m.isPlainObject(t[c]) || (t[c] = {}), m.extend(!0, t[c], s))
          : i && c !== "data" && c !== "aaData" && Array.isArray(s)
            ? (t[c] = s.slice())
            : (t[c] = s));
    return t;
  }
  function Gn(t, r, i) {
    m(t)
      .on("click.DT", r, function (s) {
        m(t).trigger("blur"), i(s);
      })
      .on("keypress.DT", r, function (s) {
        s.which === 13 && (s.preventDefault(), i(s));
      })
      .on("selectstart.DT", function () {
        return !1;
      });
  }
  function Ie(t, r, i, s) {
    i && t[r].push({ fn: i, sName: s });
  }
  function te(t, r, i, s) {
    var c = [];
    return (
      r &&
        (c = m.map(t[r].slice().reverse(), function (h, d) {
          return h.fn.apply(t.oInstance, s);
        })),
      i !== null &&
        ((r = m.Event(i + ".dt")),
        (i = m(t.nTable)).trigger(r, s),
        i.parents("body").length === 0 && m("body").trigger(r, s),
        c.push(r.result)),
      c
    );
  }
  function bn(t) {
    var r = t._iDisplayStart,
      i = t.fnDisplayEnd(),
      s = t._iDisplayLength;
    i <= r && (r = i - s),
      (r -= r % s),
      (t._iDisplayStart = r = s === -1 || r < 0 ? 0 : r);
  }
  function Wt(i, r) {
    var i = i.renderer,
      s = I.ext.renderer[r];
    return m.isPlainObject(i) && i[r]
      ? s[i[r]] || s._
      : (typeof i == "string" && s[i]) || s._;
  }
  function xe(t) {
    return t.oFeatures.bServerSide
      ? "ssp"
      : t.ajax || t.sAjaxSource
        ? "ajax"
        : "dom";
  }
  function $e(t, r) {
    var i;
    return Array.isArray(t)
      ? m.map(t, function (s) {
          return $e(s, r);
        })
      : typeof t == "number"
        ? [r[t]]
        : ((i = m.map(r, function (s, c) {
            return s.nTable;
          })),
          m(i)
            .filter(t)
            .map(function (s) {
              var c = m.inArray(this, i);
              return r[c];
            })
            .toArray());
  }
  function Yn(t, r, i) {
    var s, c;
    i &&
      (s = new P(t)).one("draw", function () {
        i(s.ajax.json());
      }),
      xe(t) == "ssp"
        ? st(t, r)
        : (Ee(t, !0),
          (c = t.jqXHR) && c.readyState !== 4 && c.abort(),
          et(t, [], function (h) {
            fn(t);
            for (var d = Rt(t, h), p = 0, v = d.length; p < v; p++) ve(t, d[p]);
            st(t, r), Ee(t, !1);
          }));
  }
  function wt(t, r, i, s, c) {
    for (
      var h,
        d,
        p,
        v,
        e = [],
        n = typeof r,
        a = 0,
        o = (r =
          r && n != "string" && n != "function" && r.length !== L ? r : [r])
          .length;
      a < o;
      a++
    )
      for (
        p = 0,
          v = (d =
            r[a] && r[a].split && !r[a].match(/[\[\(:]/)
              ? r[a].split(",")
              : [r[a]]).length;
        p < v;
        p++
      )
        (h = i(typeof d[p] == "string" ? d[p].trim() : d[p])) &&
          h.length &&
          (e = e.concat(h));
    var l = pe.selector[t];
    if (l.length) for (a = 0, o = l.length; a < o; a++) e = l[a](s, c, e);
    return sn(e);
  }
  function Qn(t) {
    return (
      (t = t || {}).filter && t.search === L && (t.search = t.filter),
      m.extend({ search: "none", order: "current", page: "all" }, t)
    );
  }
  function Zn(t) {
    for (var r = 0, i = t.length; r < i; r++)
      if (0 < t[r].length)
        return (
          (t[0] = t[r]),
          (t[0].length = 1),
          (t.length = 1),
          (t.context = [t.context[r]]),
          t
        );
    return (t.length = 0), t;
  }
  function Dt(t, r, i, s) {
    function c(d, p) {
      var v;
      if (Array.isArray(d) || d instanceof m)
        for (var e = 0, n = d.length; e < n; e++) c(d[e], p);
      else
        d.nodeName && d.nodeName.toLowerCase() === "tr"
          ? h.push(d)
          : ((v = m("<tr><td></td></tr>").addClass(p)),
            (m("td", v).addClass(p).html(d)[0].colSpan = Ft(t)),
            h.push(v[0]));
    }
    var h = [];
    c(i, s),
      r._details && r._details.detach(),
      (r._details = m(h)),
      r._detailsShow && r._details.insertAfter(r.nTr);
  }
  function ut(t, r) {
    var i = t.context;
    if (i.length && t.length) {
      var s = i[0].aoData[t[0]];
      if (s._details) {
        (s._detailsShow = r)
          ? (s._details.insertAfter(s.nTr), m(s.nTr).addClass("dt-hasChild"))
          : (s._details.detach(), m(s.nTr).removeClass("dt-hasChild")),
          te(i[0], null, "childRow", [r, t.row(t[0])]);
        var c = i[0],
          h = new P(c),
          s = ".dt.DT_details",
          r = "draw" + s,
          t = "column-sizing" + s,
          s = "destroy" + s,
          d = c.aoData;
        h.off(r + " " + t + " " + s),
          we(d, "_details").length > 0 &&
            (h.on(r, function (n, a) {
              c === a &&
                h
                  .rows({ page: "current" })
                  .eq(0)
                  .each(function (o) {
                    var l = d[o];
                    l._detailsShow && l._details.insertAfter(l.nTr);
                  });
            }),
            h.on(t, function (n, a, o, l) {
              if (c === a)
                for (var f, g = Ft(a), y = 0, b = d.length; y < b; y++)
                  (f = d[y]),
                    f._details &&
                      f._details.each(function () {
                        var w = m(this).children("td");
                        w.length == 1 && w.attr("colspan", g);
                      });
            }),
            h.on(s, function (n, a) {
              if (c === a)
                for (var o = 0, l = d.length; o < l; o++)
                  d[o]._details && Sn(h, o);
            })),
          Kn(i);
      }
    }
  }
  function xn(t, r, i, s, c) {
    for (var h = [], d = 0, p = c.length; d < p; d++) h.push(ye(t, c[d], r));
    return h;
  }
  var hr = [],
    de = Array.prototype,
    P = function (t, r) {
      if (!(this instanceof P)) return new P(t, r);
      function i(d) {
        var p, v, e, n;
        (d = d),
          (e = I.settings),
          (n = m.map(e, function (a, o) {
            return a.nTable;
          })),
          (d = d
            ? d.nTable && d.oApi
              ? [d]
              : d.nodeName && d.nodeName.toLowerCase() === "table"
                ? (p = m.inArray(d, n)) !== -1
                  ? [e[p]]
                  : null
                : d && typeof d.settings == "function"
                  ? d.settings().toArray()
                  : (typeof d == "string"
                      ? (v = m(d))
                      : d instanceof m && (v = d),
                    v
                      ? v
                          .map(function (a) {
                            return (p = m.inArray(this, n)) !== -1
                              ? e[p]
                              : null;
                          })
                          .toArray()
                      : void 0)
            : []) && s.push.apply(s, d);
      }
      var s = [];
      if (Array.isArray(t)) for (var c = 0, h = t.length; c < h; c++) i(t[c]);
      else i(t);
      (this.context = sn(s)),
        r && m.merge(this, r),
        (this.selector = { rows: null, cols: null, opts: null }),
        P.extend(this, this, hr);
    },
    Bt =
      ((I.Api = P),
      m.extend(P.prototype, {
        any: function () {
          return this.count() !== 0;
        },
        concat: de.concat,
        context: [],
        count: function () {
          return this.flatten().length;
        },
        each: function (t) {
          for (var r = 0, i = this.length; r < i; r++)
            t.call(this, this[r], r, this);
          return this;
        },
        eq: function (t) {
          var r = this.context;
          return r.length > t ? new P(r[t], this[t]) : null;
        },
        filter: function (t) {
          var r = [];
          if (de.filter) r = de.filter.call(this, t, this);
          else
            for (var i = 0, s = this.length; i < s; i++)
              t.call(this, this[i], i, this) && r.push(this[i]);
          return new P(this.context, r);
        },
        flatten: function () {
          var t = [];
          return new P(this.context, t.concat.apply(t, this.toArray()));
        },
        join: de.join,
        indexOf:
          de.indexOf ||
          function (t, r) {
            for (var i = r || 0, s = this.length; i < s; i++)
              if (this[i] === t) return i;
            return -1;
          },
        iterator: function (t, r, i, s) {
          var c,
            h,
            d,
            p,
            v,
            e,
            n,
            a,
            o = [],
            l = this.context,
            f = this.selector;
          for (
            typeof t == "string" && ((s = i), (i = r), (r = t), (t = !1)),
              h = 0,
              d = l.length;
            h < d;
            h++
          ) {
            var g = new P(l[h]);
            if (r === "table") (c = i.call(g, l[h], h)) !== L && o.push(c);
            else if (r === "columns" || r === "rows")
              (c = i.call(g, l[h], this[h], h)) !== L && o.push(c);
            else if (
              r === "column" ||
              r === "column-rows" ||
              r === "row" ||
              r === "cell"
            )
              for (
                n = this[h],
                  r === "column-rows" && (e = Bt(l[h], f.opts)),
                  p = 0,
                  v = n.length;
                p < v;
                p++
              )
                (a = n[p]),
                  (c =
                    r === "cell"
                      ? i.call(g, l[h], a.row, a.column, h, p)
                      : i.call(g, l[h], a, h, p, e)) !== L && o.push(c);
          }
          return o.length || s
            ? (((t = (s = new P(l, t ? o.concat.apply([], o) : o))
                .selector).rows = f.rows),
              (t.cols = f.cols),
              (t.opts = f.opts),
              s)
            : this;
        },
        lastIndexOf:
          de.lastIndexOf ||
          function (t, r) {
            return this.indexOf.apply(this.toArray.reverse(), arguments);
          },
        length: 0,
        map: function (t) {
          var r = [];
          if (de.map) r = de.map.call(this, t, this);
          else
            for (var i = 0, s = this.length; i < s; i++)
              r.push(t.call(this, this[i], i));
          return new P(this.context, r);
        },
        pluck: function (t) {
          var r = I.util.get(t);
          return this.map(function (i) {
            return r(i);
          });
        },
        pop: de.pop,
        push: de.push,
        reduce:
          de.reduce ||
          function (t, r) {
            return pt(this, t, r, 0, this.length, 1);
          },
        reduceRight:
          de.reduceRight ||
          function (t, r) {
            return pt(this, t, r, this.length - 1, -1, -1);
          },
        reverse: de.reverse,
        selector: null,
        shift: de.shift,
        slice: function () {
          return new P(this.context, this);
        },
        sort: de.sort,
        splice: de.splice,
        toArray: function () {
          return de.slice.call(this);
        },
        to$: function () {
          return m(this);
        },
        toJQuery: function () {
          return m(this);
        },
        unique: function () {
          return new P(this.context, sn(this));
        },
        unshift: de.unshift,
      }),
      (P.extend = function (t, r, i) {
        if (i.length && r && (r instanceof P || r.__dt_wrapper))
          for (var s, c = 0, h = i.length; c < h; c++)
            (r[(s = i[c]).name] =
              s.type === "function"
                ? (function (d, p, v) {
                    return function () {
                      var e = p.apply(d, arguments);
                      return P.extend(e, e, v.methodExt), e;
                    };
                  })(t, s.val, s)
                : s.type === "object"
                  ? {}
                  : s.val),
              (r[s.name].__dt_wrapper = !0),
              P.extend(t, r[s.name], s.propExt);
      }),
      (P.register = $ =
        function (t, r) {
          if (Array.isArray(t))
            for (var i = 0, s = t.length; i < s; i++) P.register(t[i], r);
          else
            for (
              var c = t.split("."), h = hr, d = 0, p = c.length;
              d < p;
              d++
            ) {
              var v,
                e,
                n = (function (a, o) {
                  for (var l = 0, f = a.length; l < f; l++)
                    if (a[l].name === o) return a[l];
                  return null;
                })(
                  h,
                  (e = (v = c[d].indexOf("()") !== -1)
                    ? c[d].replace("()", "")
                    : c[d]),
                );
              n ||
                h.push(
                  (n = {
                    name: e,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object",
                  }),
                ),
                d === p - 1
                  ? ((n.val = r),
                    (n.type =
                      typeof r == "function"
                        ? "function"
                        : m.isPlainObject(r)
                          ? "object"
                          : "other"))
                  : (h = v ? n.methodExt : n.propExt);
            }
        }),
      (P.registerPlural = M =
        function (t, r, i) {
          P.register(t, i),
            P.register(r, function () {
              var s = i.apply(this, arguments);
              return s === this
                ? this
                : s instanceof P
                  ? s.length
                    ? Array.isArray(s[0])
                      ? new P(s.context, s[0])
                      : s[0]
                    : L
                  : s;
            });
        }),
      $("tables()", function (t) {
        return t !== L && t !== null ? new P($e(t, this.context)) : this;
      }),
      $("table()", function (r) {
        var r = this.tables(r),
          i = r.context;
        return i.length ? new P(i[0]) : r;
      }),
      M("tables().nodes()", "table().node()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTable;
          },
          1,
        );
      }),
      M("tables().body()", "table().body()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTBody;
          },
          1,
        );
      }),
      M("tables().header()", "table().header()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTHead;
          },
          1,
        );
      }),
      M("tables().footer()", "table().footer()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTFoot;
          },
          1,
        );
      }),
      M("tables().containers()", "table().container()", function () {
        return this.iterator(
          "table",
          function (t) {
            return t.nTableWrapper;
          },
          1,
        );
      }),
      $("draw()", function (t) {
        return this.iterator("table", function (r) {
          t === "page"
            ? Pe(r)
            : st(r, (t = typeof t == "string" ? t !== "full-hold" : t) === !1);
        });
      }),
      $("page()", function (t) {
        return t === L
          ? this.page.info().page
          : this.iterator("table", function (r) {
              gn(r, t);
            });
      }),
      $("page.info()", function (t) {
        var r, i, s, c, h;
        return this.context.length === 0
          ? L
          : ((i = (r = this.context[0])._iDisplayStart),
            (s = r.oFeatures.bPaginate ? r._iDisplayLength : -1),
            (c = r.fnRecordsDisplay()),
            {
              page: (h = s === -1) ? 0 : Math.floor(i / s),
              pages: h ? 1 : Math.ceil(c / s),
              start: i,
              end: r.fnDisplayEnd(),
              length: s,
              recordsTotal: r.fnRecordsTotal(),
              recordsDisplay: c,
              serverSide: xe(r) === "ssp",
            });
      }),
      $("page.len()", function (t) {
        return t === L
          ? this.context.length !== 0
            ? this.context[0]._iDisplayLength
            : L
          : this.iterator("table", function (r) {
              Wn(r, t);
            });
      }),
      $("ajax.json()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].json;
      }),
      $("ajax.params()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].oAjaxData;
      }),
      $("ajax.reload()", function (t, r) {
        return this.iterator("table", function (i) {
          Yn(i, r === !1, t);
        });
      }),
      $("ajax.url()", function (t) {
        var r = this.context;
        return t === L
          ? r.length === 0
            ? L
            : (r = r[0]).ajax
              ? m.isPlainObject(r.ajax)
                ? r.ajax.url
                : r.ajax
              : r.sAjaxSource
          : this.iterator("table", function (i) {
              m.isPlainObject(i.ajax) ? (i.ajax.url = t) : (i.ajax = t);
            });
      }),
      $("ajax.url().load()", function (t, r) {
        return this.iterator("table", function (i) {
          Yn(i, r === !1, t);
        });
      }),
      function (t, v) {
        var i,
          s = [],
          c = t.aiDisplay,
          h = t.aiDisplayMaster,
          d = v.search,
          p = v.order,
          v = v.page;
        if (xe(t) == "ssp") return d === "removed" ? [] : Qe(0, h.length);
        if (v == "current")
          for (n = t._iDisplayStart, a = t.fnDisplayEnd(); n < a; n++)
            s.push(c[n]);
        else if (p == "current" || p == "applied") {
          if (d == "none") s = h.slice();
          else if (d == "applied") s = c.slice();
          else if (d == "removed") {
            for (var e = {}, n = 0, a = c.length; n < a; n++) e[c[n]] = null;
            s = m.map(h, function (o) {
              return e.hasOwnProperty(o) ? null : o;
            });
          }
        } else if (p == "index" || p == "original")
          for (n = 0, a = t.aoData.length; n < a; n++)
            (d == "none" ||
              ((i = m.inArray(n, c)) === -1 && d == "removed") ||
              (0 <= i && d == "applied")) &&
              s.push(n);
        return s;
      }),
    Kn =
      ($("rows()", function (t, r) {
        t === L ? (t = "") : m.isPlainObject(t) && ((r = t), (t = "")),
          (r = Qn(r));
        var i = this.iterator(
          "table",
          function (s) {
            return wt(
              "row",
              t,
              function (p) {
                var v = Le(p),
                  e = c.aoData;
                if (v !== null && !h) return [v];
                if (((d = d || Bt(c, h)), v !== null && m.inArray(v, d) !== -1))
                  return [v];
                if (p === null || p === L || p === "") return d;
                if (typeof p == "function")
                  return m.map(d, function (a) {
                    var o = e[a];
                    return p(a, o._aData, o.nTr) ? a : null;
                  });
                if (p.nodeName)
                  return (
                    (v = p._DT_RowIndex),
                    (n = p._DT_CellIndex),
                    v !== L
                      ? e[v] && e[v].nTr === p
                        ? [v]
                        : []
                      : n
                        ? e[n.row] && e[n.row].nTr === p.parentNode
                          ? [n.row]
                          : []
                        : (v = m(p).closest("*[data-dt-row]")).length
                          ? [v.data("dt-row")]
                          : []
                  );
                if (typeof p == "string" && p.charAt(0) === "#") {
                  var n = c.aIds[p.replace(/^#/, "")];
                  if (n !== L) return [n.idx];
                }
                return (
                  (v = Ln(Re(c.aoData, d, "nTr"))),
                  m(v)
                    .filter(p)
                    .map(function () {
                      return this._DT_RowIndex;
                    })
                    .toArray()
                );
              },
              (c = s),
              (h = r),
            );
            var c, h, d;
          },
          1,
        );
        return (i.selector.rows = t), (i.selector.opts = r), i;
      }),
      $("rows().nodes()", function () {
        return this.iterator(
          "row",
          function (t, r) {
            return t.aoData[r].nTr || L;
          },
          1,
        );
      }),
      $("rows().data()", function () {
        return this.iterator(
          !0,
          "rows",
          function (t, r) {
            return Re(t.aoData, r, "_aData");
          },
          1,
        );
      }),
      M("rows().cache()", "row().cache()", function (t) {
        return this.iterator(
          "row",
          function (r, i) {
            return (
              (r = r.aoData[i]), t === "search" ? r._aFilterData : r._aSortData
            );
          },
          1,
        );
      }),
      M("rows().invalidate()", "row().invalidate()", function (t) {
        return this.iterator("row", function (r, i) {
          Ke(r, i, t);
        });
      }),
      M("rows().indexes()", "row().index()", function () {
        return this.iterator(
          "row",
          function (t, r) {
            return r;
          },
          1,
        );
      }),
      M("rows().ids()", "row().id()", function (t) {
        for (var r = [], i = this.context, s = 0, c = i.length; s < c; s++)
          for (var h = 0, d = this[s].length; h < d; h++) {
            var p = i[s].rowIdFn(i[s].aoData[this[s][h]]._aData);
            r.push((t === !0 ? "#" : "") + p);
          }
        return new P(i, r);
      }),
      M("rows().remove()", "row().remove()", function () {
        var t = this;
        return (
          this.iterator("row", function (r, i, s) {
            var c,
              h,
              d,
              p,
              v,
              e,
              n = r.aoData,
              a = n[i];
            for (n.splice(i, 1), c = 0, h = n.length; c < h; c++)
              if (
                ((e = (v = n[c]).anCells),
                v.nTr !== null && (v.nTr._DT_RowIndex = c),
                e !== null)
              )
                for (d = 0, p = e.length; d < p; d++)
                  e[d]._DT_CellIndex.row = c;
            Oe(r.aiDisplayMaster, i),
              Oe(r.aiDisplay, i),
              Oe(t[s], i, !1),
              0 < r._iRecordsDisplay && r._iRecordsDisplay--,
              bn(r),
              (s = r.rowIdFn(a._aData)),
              s !== L && delete r.aIds[s];
          }),
          this.iterator("table", function (r) {
            for (var i = 0, s = r.aoData.length; i < s; i++)
              r.aoData[i].idx = i;
          }),
          this
        );
      }),
      $("rows.add()", function (t) {
        var r = this.iterator(
            "table",
            function (s) {
              for (var c, h = [], d = 0, p = t.length; d < p; d++)
                (c = t[d]).nodeName && c.nodeName.toUpperCase() === "TR"
                  ? h.push(Ze(s, c)[0])
                  : h.push(ve(s, c));
              return h;
            },
            1,
          ),
          i = this.rows(-1);
        return i.pop(), m.merge(i, r), i;
      }),
      $("row()", function (t, r) {
        return Zn(this.rows(t, r));
      }),
      $("row().data()", function (t) {
        var r,
          i = this.context;
        return t === L
          ? i.length && this.length
            ? i[0].aoData[this[0]]._aData
            : L
          : (((r = i[0].aoData[this[0]])._aData = t),
            Array.isArray(t) &&
              r.nTr &&
              r.nTr.id &&
              it(i[0].rowId)(t, r.nTr.id),
            Ke(i[0], this[0], "data"),
            this);
      }),
      $("row().node()", function () {
        var t = this.context;
        return (t.length && this.length && t[0].aoData[this[0]].nTr) || null;
      }),
      $("row.add()", function (t) {
        t instanceof m && t.length && (t = t[0]);
        var r = this.iterator("table", function (i) {
          return t.nodeName && t.nodeName.toUpperCase() === "TR"
            ? Ze(i, t)[0]
            : ve(i, t);
        });
        return this.row(r[0]);
      }),
      m(ee).on("plugin-init.dt", function (t, r) {
        var i = new P(r),
          h = "on-plugin-init",
          s = "stateSaveParams." + h,
          c = "destroy. " + h,
          h =
            (i.on(s, function (d, p, v) {
              for (
                var e = p.rowIdFn, n = p.aoData, a = [], o = 0;
                o < n.length;
                o++
              )
                n[o]._detailsShow && a.push("#" + e(n[o]._aData));
              v.childRows = a;
            }),
            i.on(c, function () {
              i.off(s + " " + c);
            }),
            i.state.loaded());
        h &&
          h.childRows &&
          i
            .rows(
              m.map(h.childRows, function (d) {
                return d.replace(/:/g, "\\:");
              }),
            )
            .every(function () {
              te(r, null, "requestChild", [this]);
            });
      }),
      I.util.throttle(function (t) {
        St(t[0]);
      }, 500)),
    Sn = function (t, r) {
      var i = t.context;
      i.length &&
        (r = i[0].aoData[r !== L ? r : t[0]]) &&
        r._details &&
        (r._details.remove(),
        (r._detailsShow = L),
        (r._details = L),
        m(r.nTr).removeClass("dt-hasChild"),
        Kn(i));
    },
    Pt = "row().child",
    en = Pt + "()",
    Dr =
      ($(en, function (t, r) {
        var i = this.context;
        return t === L
          ? i.length && this.length
            ? i[0].aoData[this[0]]._details
            : L
          : (t === !0
              ? this.child.show()
              : t === !1
                ? Sn(this)
                : i.length &&
                  this.length &&
                  Dt(i[0], i[0].aoData[this[0]], t, r),
            this);
      }),
      $([Pt + ".show()", en + ".show()"], function (t) {
        return ut(this, !0), this;
      }),
      $([Pt + ".hide()", en + ".hide()"], function () {
        return ut(this, !1), this;
      }),
      $([Pt + ".remove()", en + ".remove()"], function () {
        return Sn(this), this;
      }),
      $(Pt + ".isShown()", function () {
        var t = this.context;
        return (
          (t.length && this.length && t[0].aoData[this[0]]._detailsShow) || !1
        );
      }),
      /^([^:]+):(name|visIdx|visible)$/),
    gr =
      ($("columns()", function (t, r) {
        t === L ? (t = "") : m.isPlainObject(t) && ((r = t), (t = "")),
          (r = Qn(r));
        var i = this.iterator(
          "table",
          function (s) {
            return (
              (h = t),
              (d = r),
              (p = (c = s).aoColumns),
              (v = we(p, "sName")),
              (e = we(p, "nTh")),
              wt(
                "column",
                h,
                function (n) {
                  var a,
                    o = Le(n);
                  if (n === "") return Qe(p.length);
                  if (o !== null) return [0 <= o ? o : p.length + o];
                  if (typeof n == "function")
                    return (
                      (a = Bt(c, d)),
                      m.map(p, function (y, b) {
                        return n(b, xn(c, b, 0, 0, a), e[b]) ? b : null;
                      })
                    );
                  var l = typeof n == "string" ? n.match(Dr) : "";
                  if (l)
                    switch (l[2]) {
                      case "visIdx":
                      case "visible":
                        var f,
                          g = parseInt(l[1], 10);
                        return g < 0
                          ? [
                              (f = m.map(p, function (y, b) {
                                return y.bVisible ? b : null;
                              }))[f.length + g],
                            ]
                          : [ht(c, g)];
                      case "name":
                        return m.map(v, function (y, b) {
                          return y === l[1] ? b : null;
                        });
                      default:
                        return [];
                    }
                  return n.nodeName && n._DT_CellIndex
                    ? [n._DT_CellIndex.column]
                    : (o = m(e)
                          .filter(n)
                          .map(function () {
                            return m.inArray(this, e);
                          })
                          .toArray()).length || !n.nodeName
                      ? o
                      : (o = m(n).closest("*[data-dt-column]")).length
                        ? [o.data("dt-column")]
                        : [];
                },
                c,
                d,
              )
            );
            var c, h, d, p, v, e;
          },
          1,
        );
        return (i.selector.cols = t), (i.selector.opts = r), i;
      }),
      M("columns().header()", "column().header()", function (t, r) {
        return this.iterator(
          "column",
          function (i, s) {
            return i.aoColumns[s].nTh;
          },
          1,
        );
      }),
      M("columns().footer()", "column().footer()", function (t, r) {
        return this.iterator(
          "column",
          function (i, s) {
            return i.aoColumns[s].nTf;
          },
          1,
        );
      }),
      M("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", xn, 1);
      }),
      M("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator(
          "column",
          function (t, r) {
            return t.aoColumns[r].mData;
          },
          1,
        );
      }),
      M("columns().cache()", "column().cache()", function (t) {
        return this.iterator(
          "column-rows",
          function (r, i, s, c, h) {
            return Re(
              r.aoData,
              h,
              t === "search" ? "_aFilterData" : "_aSortData",
              i,
            );
          },
          1,
        );
      }),
      M("columns().nodes()", "column().nodes()", function () {
        return this.iterator(
          "column-rows",
          function (t, r, i, s, c) {
            return Re(t.aoData, c, "anCells", r);
          },
          1,
        );
      }),
      M("columns().visible()", "column().visible()", function (t, r) {
        var i = this,
          s = this.iterator("column", function (c, e) {
            if (t === L) return c.aoColumns[e].bVisible;
            var d,
              p,
              v = e,
              e = t,
              n = c.aoColumns,
              a = n[v],
              o = c.aoData;
            if (e === L) a.bVisible;
            else if (a.bVisible !== e) {
              if (e)
                for (
                  var l = m.inArray(!0, we(n, "bVisible"), v + 1),
                    f = 0,
                    g = o.length;
                  f < g;
                  f++
                )
                  (p = o[f].nTr),
                    (d = o[f].anCells),
                    p && p.insertBefore(d[v], d[l] || null);
              else m(we(c.aoData, "anCells", v)).detach();
              a.bVisible = e;
            }
          });
        return (
          t !== L &&
            this.iterator("table", function (c) {
              Gt(c, c.aoHeader),
                Gt(c, c.aoFooter),
                c.aiDisplay.length ||
                  m(c.nTBody).find("td[colspan]").attr("colspan", Ft(c)),
                St(c),
                i.iterator("column", function (h, d) {
                  te(h, null, "column-visibility", [h, d, t, r]);
                }),
                (r !== L && !r) || i.columns.adjust();
            }),
          s
        );
      }),
      M("columns().indexes()", "column().index()", function (t) {
        return this.iterator(
          "column",
          function (r, i) {
            return t === "visible" ? kt(r, i) : i;
          },
          1,
        );
      }),
      $("columns.adjust()", function () {
        return this.iterator(
          "table",
          function (t) {
            jt(t);
          },
          1,
        );
      }),
      $("column.index()", function (t, r) {
        var i;
        if (this.context.length !== 0)
          return (
            (i = this.context[0]),
            t === "fromVisible" || t === "toData"
              ? ht(i, r)
              : t === "fromData" || t === "toVisible"
                ? kt(i, r)
                : void 0
          );
      }),
      $("column()", function (t, r) {
        return Zn(this.columns(t, r));
      }),
      $("cells()", function (t, r, i) {
        var s, c, h, d, p, v, e;
        return (
          m.isPlainObject(t) &&
            (t.row === L ? ((i = t), (t = null)) : ((i = r), (r = null))),
          m.isPlainObject(r) && ((i = r), (r = null)),
          r === null || r === L
            ? this.iterator("table", function (n) {
                return (
                  (a = n),
                  (n = t),
                  (o = Qn(i)),
                  (C = a.aoData),
                  (T = Bt(a, o)),
                  (_ = Ln(Re(C, T, "anCells"))),
                  (F = m(ir([], _))),
                  (E = a.aoColumns.length),
                  wt(
                    "cell",
                    n,
                    function (W) {
                      var X,
                        Q = typeof W == "function";
                      if (W === null || W === L || Q) {
                        for (f = [], g = 0, y = T.length; g < y; g++)
                          for (l = T[g], b = 0; b < E; b++)
                            (w = { row: l, column: b }),
                              (!Q ||
                                ((S = C[l]),
                                W(
                                  w,
                                  ye(a, l, b),
                                  S.anCells ? S.anCells[b] : null,
                                ))) &&
                                f.push(w);
                        return f;
                      }
                      return m.isPlainObject(W)
                        ? W.column !== L &&
                          W.row !== L &&
                          m.inArray(W.row, T) !== -1
                          ? [W]
                          : []
                        : (X = F.filter(W)
                              .map(function (le, re) {
                                return {
                                  row: re._DT_CellIndex.row,
                                  column: re._DT_CellIndex.column,
                                };
                              })
                              .toArray()).length || !W.nodeName
                          ? X
                          : (S = m(W).closest("*[data-dt-row]")).length
                            ? [
                                {
                                  row: S.data("dt-row"),
                                  column: S.data("dt-column"),
                                },
                              ]
                            : [];
                    },
                    a,
                    o,
                  )
                );
                var a, o, l, f, g, y, b, w, S, C, T, _, F, E;
              })
            : ((e = i
                ? { page: i.page, order: i.order, search: i.search }
                : {}),
              (s = this.columns(r, e)),
              (c = this.rows(t, e)),
              (e = this.iterator(
                "table",
                function (n, a) {
                  var o = [];
                  for (h = 0, d = c[a].length; h < d; h++)
                    for (p = 0, v = s[a].length; p < v; p++)
                      o.push({ row: c[a][h], column: s[a][p] });
                  return o;
                },
                1,
              )),
              (e = i && i.selected ? this.cells(e, i) : e),
              m.extend(e.selector, { cols: r, rows: t, opts: i }),
              e)
        );
      }),
      M("cells().nodes()", "cell().node()", function () {
        return this.iterator(
          "cell",
          function (t, r, i) {
            return (t = t.aoData[r]), t && t.anCells ? t.anCells[i] : L;
          },
          1,
        );
      }),
      $("cells().data()", function () {
        return this.iterator(
          "cell",
          function (t, r, i) {
            return ye(t, r, i);
          },
          1,
        );
      }),
      M("cells().cache()", "cell().cache()", function (t) {
        return (
          (t = t === "search" ? "_aFilterData" : "_aSortData"),
          this.iterator(
            "cell",
            function (r, i, s) {
              return r.aoData[i][t][s];
            },
            1,
          )
        );
      }),
      M("cells().render()", "cell().render()", function (t) {
        return this.iterator(
          "cell",
          function (r, i, s) {
            return ye(r, i, s, t);
          },
          1,
        );
      }),
      M("cells().indexes()", "cell().index()", function () {
        return this.iterator(
          "cell",
          function (t, r, i) {
            return { row: r, column: i, columnVisible: kt(t, i) };
          },
          1,
        );
      }),
      M("cells().invalidate()", "cell().invalidate()", function (t) {
        return this.iterator("cell", function (r, i, s) {
          Ke(r, i, t, s);
        });
      }),
      $("cell()", function (t, r, i) {
        return Zn(this.cells(t, r, i));
      }),
      $("cell().data()", function (t) {
        var r = this.context,
          i = this[0];
        return t === L
          ? r.length && i.length
            ? ye(r[0], i[0].row, i[0].column)
            : L
          : (Fn(r[0], i[0].row, i[0].column, t),
            Ke(r[0], i[0].row, "data", i[0].column),
            this);
      }),
      $("order()", function (t, r) {
        var i = this.context;
        return t === L
          ? i.length !== 0
            ? i[0].aaSorting
            : L
          : (typeof t == "number"
              ? (t = [[t, r]])
              : t.length &&
                !Array.isArray(t[0]) &&
                (t = Array.prototype.slice.call(arguments)),
            this.iterator("table", function (s) {
              s.aaSorting = t.slice();
            }));
      }),
      $("order.listener()", function (t, r, i) {
        return this.iterator("table", function (s) {
          Vn(s, t, r, i);
        });
      }),
      $("order.fixed()", function (t) {
        var r;
        return t
          ? this.iterator("table", function (i) {
              i.aaSortingFixed = m.extend(!0, {}, t);
            })
          : ((r = (r = this.context).length ? r[0].aaSortingFixed : L),
            Array.isArray(r) ? { pre: r } : r);
      }),
      $(["columns().order()", "column().order()"], function (t) {
        var r = this;
        return this.iterator("table", function (i, s) {
          var c = [];
          m.each(r[s], function (h, d) {
            c.push([d, t]);
          }),
            (i.aaSorting = c);
        });
      }),
      $("search()", function (t, r, i, s) {
        var c = this.context;
        return t === L
          ? c.length !== 0
            ? c[0].oPreviousSearch.sSearch
            : L
          : this.iterator("table", function (h) {
              h.oFeatures.bFilter &&
                Xe(
                  h,
                  m.extend({}, h.oPreviousSearch, {
                    sSearch: t + "",
                    bRegex: r !== null && r,
                    bSmart: i === null || i,
                    bCaseInsensitive: s === null || s,
                  }),
                  1,
                );
            });
      }),
      M("columns().search()", "column().search()", function (t, r, i, s) {
        return this.iterator("column", function (c, h) {
          var d = c.aoPreSearchCols;
          if (t === L) return d[h].sSearch;
          c.oFeatures.bFilter &&
            (m.extend(d[h], {
              sSearch: t + "",
              bRegex: r !== null && r,
              bSmart: i === null || i,
              bCaseInsensitive: s === null || s,
            }),
            Xe(c, c.oPreviousSearch, 1));
        });
      }),
      $("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null;
      }),
      $("state.clear()", function () {
        return this.iterator("table", function (t) {
          t.fnStateSaveCallback.call(t.oInstance, t, {});
        });
      }),
      $("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
      }),
      $("state.save()", function () {
        return this.iterator("table", function (t) {
          St(t);
        });
      }),
      (I.use = function (t, r) {
        r === "lib" || t.fn
          ? (m = t)
          : r == "win" || t.document
            ? (ee = (se = t).document)
            : (r !== "datetime" && t.type !== "DateTime") || (I.DateTime = t);
      }),
      (I.factory = function (t, r) {
        var i = !1;
        return (
          t && t.document && (ee = (se = t).document),
          r && r.fn && r.fn.jquery && ((m = r), (i = !0)),
          i
        );
      }),
      (I.versionCheck = I.fnVersionCheck =
        function (t) {
          for (
            var r,
              i,
              s = I.version.split("."),
              c = t.split("."),
              h = 0,
              d = c.length;
            h < d;
            h++
          )
            if ((r = parseInt(s[h], 10) || 0) !== (i = parseInt(c[h], 10) || 0))
              return i < r;
          return !0;
        }),
      (I.isDataTable = I.fnIsDataTable =
        function (t) {
          var r = m(t).get(0),
            i = !1;
          return (
            t instanceof I.Api ||
            (m.each(I.settings, function (s, c) {
              var h = c.nScrollHead ? m("table", c.nScrollHead)[0] : null,
                d = c.nScrollFoot ? m("table", c.nScrollFoot)[0] : null;
              (c.nTable !== r && h !== r && d !== r) || (i = !0);
            }),
            i)
          );
        }),
      (I.tables = I.fnTables =
        function (t) {
          var r = !1,
            i =
              (m.isPlainObject(t) && ((r = t.api), (t = t.visible)),
              m.map(I.settings, function (s) {
                if (!t || m(s.nTable).is(":visible")) return s.nTable;
              }));
          return r ? new P(i) : i;
        }),
      (I.camelToHungarian = K),
      $("$()", function (t, r) {
        return (
          (r = this.rows(r).nodes()),
          (r = m(r)),
          m([].concat(r.filter(t).toArray(), r.find(t).toArray()))
        );
      }),
      m.each(["on", "one", "off"], function (t, r) {
        $(r + "()", function () {
          var i = Array.prototype.slice.call(arguments),
            s =
              ((i[0] = m
                .map(i[0].split(/\s/), function (c) {
                  return c.match(/\.dt\b/) ? c : c + ".dt";
                })
                .join(" ")),
              m(this.tables().nodes()));
          return s[r].apply(s, i), this;
        });
      }),
      $("clear()", function () {
        return this.iterator("table", function (t) {
          fn(t);
        });
      }),
      $("settings()", function () {
        return new P(this.context, this.context);
      }),
      $("init()", function () {
        var t = this.context;
        return t.length ? t[0].oInit : null;
      }),
      $("data()", function () {
        return this.iterator("table", function (t) {
          return we(t.aoData, "_aData");
        }).flatten();
      }),
      $("destroy()", function (t) {
        return (
          (t = t || !1),
          this.iterator("table", function (r) {
            var i,
              s = r.oClasses,
              c = r.nTable,
              d = r.nTBody,
              e = r.nTHead,
              v = r.nTFoot,
              h = m(c),
              d = m(d),
              p = m(r.nTableWrapper),
              n = m.map(r.aoData, function (a) {
                return a.nTr;
              }),
              v =
                ((r.bDestroying = !0),
                te(r, "aoDestroyCallback", "destroy", [r]),
                t || new P(r).columns().visible(!0),
                p.off(".DT").find(":not(tbody *)").off(".DT"),
                m(se).off(".DT-" + r.sInstance),
                c != e.parentNode &&
                  (h.children("thead").detach(), h.append(e)),
                v &&
                  c != v.parentNode &&
                  (h.children("tfoot").detach(), h.append(v)),
                (r.aaSorting = []),
                (r.aaSortingFixed = []),
                Kt(r),
                m(n).removeClass(r.asStripeClasses.join(" ")),
                m("th, td", e).removeClass(
                  s.sSortable +
                    " " +
                    s.sSortableAsc +
                    " " +
                    s.sSortableDesc +
                    " " +
                    s.sSortableNone,
                ),
                d.children().detach(),
                d.append(n),
                r.nTableWrapper.parentNode),
              e = t ? "remove" : "detach",
              n =
                (h[e](),
                p[e](),
                !t &&
                  v &&
                  (v.insertBefore(c, r.nTableReinsertBefore),
                  h.css("width", r.sDestroyWidth).removeClass(s.sTable),
                  (i = r.asDestroyStripes.length)) &&
                  d.children().each(function (a) {
                    m(this).addClass(r.asDestroyStripes[a % i]);
                  }),
                m.inArray(r, I.settings));
            n !== -1 && I.settings.splice(n, 1);
          })
        );
      }),
      m.each(["column", "row", "cell"], function (t, r) {
        $(r + "s().every()", function (i) {
          var s = this.selector.opts,
            c = this;
          return this.iterator(r, function (h, d, p, v, e) {
            i.call(
              c[r](d, r === "cell" ? p : s, r === "cell" ? s : L),
              d,
              p,
              v,
              e,
            );
          });
        });
      }),
      $("i18n()", function (c, r, i) {
        var s = this.context[0],
          c = ke(c)(s.oLanguage);
        return (
          c === L && (c = r),
          typeof (c =
            i !== L && m.isPlainObject(c) ? (c[i] !== L ? c[i] : c._) : c) ==
          "string"
            ? c.replace("%d", i)
            : c
        );
      }),
      (I.version = "1.13.10"),
      (I.settings = []),
      (I.models = {}),
      (I.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0,
        return: !1,
      }),
      (I.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1,
      }),
      (I.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null,
      }),
      (I.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (t) {
          return t
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (t) {
          try {
            return JSON.parse(
              (t.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
                "DataTables_" + t.sInstance + "_" + location.pathname,
              ),
            );
          } catch {
            return {};
          }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (t, r) {
          try {
            (t.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
              "DataTables_" + t.sInstance + "_" + location.pathname,
              JSON.stringify(r),
            );
          } catch {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
          oAria: {
            sSortAscending: ": activate to sort column ascending",
            sSortDescending: ": activate to sort column descending",
          },
          oPaginate: {
            sFirst: "First",
            sLast: "Last",
            sNext: "Next",
            sPrevious: "Previous",
          },
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
          sInfoEmpty: "Showing 0 to 0 of 0 entries",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "Show _MENU_ entries",
          sLoadingRecords: "Loading...",
          sProcessing: "",
          sSearch: "Search:",
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found",
        },
        oSearch: m.extend({}, I.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId",
      }),
      Vt(I.defaults),
      (I.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null,
      }),
      Vt(I.defaults.column),
      (I.models.oSettings = {
        oFeatures: {
          bAutoWidth: null,
          bDeferRender: null,
          bFilter: null,
          bInfo: null,
          bLengthChange: null,
          bPaginate: null,
          bProcessing: null,
          bServerSide: null,
          bSort: null,
          bSortMulti: null,
          bSortClasses: null,
          bStateSave: null,
        },
        oScroll: {
          bCollapse: null,
          iBarWidth: 0,
          sX: null,
          sXInner: null,
          sY: null,
        },
        oLanguage: { fnInfoCallback: null },
        oBrowser: {
          bScrollOversize: !1,
          bScrollbarLeft: !1,
          bBounding: !1,
          barWidth: 0,
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        jqXHR: null,
        json: L,
        oAjaxData: L,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
          return xe(this) == "ssp"
            ? +this._iRecordsTotal
            : this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function () {
          return xe(this) == "ssp"
            ? +this._iRecordsDisplay
            : this.aiDisplay.length;
        },
        fnDisplayEnd: function () {
          var t = this._iDisplayLength,
            r = this._iDisplayStart,
            i = r + t,
            s = this.aiDisplay.length,
            c = this.oFeatures,
            h = c.bPaginate;
          return c.bServerSide
            ? h === !1 || t === -1
              ? r + s
              : Math.min(r + t, this._iRecordsDisplay)
            : !h || s < i || t === -1
              ? s
              : i;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null,
      }),
      (I.ext = pe =
        {
          buttons: {},
          classes: {},
          builder: "-source-",
          errMode: "alert",
          feature: [],
          search: [],
          selector: { cell: [], column: [], row: [] },
          internal: {},
          legacy: { ajax: null },
          pager: {},
          renderer: { pageButton: {}, header: {} },
          order: {},
          type: { detect: [], search: {}, order: {} },
          _unique: 0,
          fnVersionCheck: I.fnVersionCheck,
          iApiIndex: 0,
          oJUIClasses: {},
          sVersion: I.version,
        }),
      m.extend(pe, {
        afnFiltering: pe.search,
        aTypes: pe.type.detect,
        ofnSearch: pe.type.search,
        oSort: pe.type.order,
        afnSortData: pe.order,
        aoFeatures: pe.feature,
        oApi: pe.internal,
        oStdClasses: pe.classes,
        oPagination: pe.pager,
      }),
      m.extend(I.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_desc_disabled",
        sSortableDesc: "sorting_asc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: "",
      }),
      I.ext.pager);
  function Tt(t, r) {
    var i = [],
      s = gr.numbers_length,
      c = Math.floor(s / 2);
    return (
      r <= s
        ? (i = Qe(0, r))
        : t <= c
          ? ((i = Qe(0, s - 2)).push("ellipsis"), i.push(r - 1))
          : ((r - 1 - c <= t
              ? (i = Qe(r - (s - 2), r))
              : ((i = Qe(t - c + 2, t + c - 1)).push("ellipsis"),
                i.push(r - 1),
                i)
            ).splice(0, 0, "ellipsis"),
            i.splice(0, 0, 0)),
      (i.DT_el = "span"),
      i
    );
  }
  m.extend(gr, {
    simple: function (t, r) {
      return ["previous", "next"];
    },
    full: function (t, r) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (t, r) {
      return [Tt(t, r)];
    },
    simple_numbers: function (t, r) {
      return ["previous", Tt(t, r), "next"];
    },
    full_numbers: function (t, r) {
      return ["first", "previous", Tt(t, r), "next", "last"];
    },
    first_last_numbers: function (t, r) {
      return ["first", Tt(t, r), "last"];
    },
    _numbers: Tt,
    numbers_length: 7,
  }),
    m.extend(!0, I.ext.renderer, {
      pageButton: {
        _: function (t, r, i, s, c, h) {
          function d(l, f) {
            for (
              var g,
                y = n.sPageButtonDisabled,
                b = function (_) {
                  gn(t, _.data.action, !0);
                },
                w = 0,
                S = f.length;
              w < S;
              w++
            )
              if (((g = f[w]), Array.isArray(g))) {
                var C = m("<" + (g.DT_el || "div") + "/>").appendTo(l);
                d(C, g);
              } else {
                var T = !1;
                switch (((p = null), (v = g))) {
                  case "ellipsis":
                    l.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    (p = a.sFirst), c === 0 && (T = !0);
                    break;
                  case "previous":
                    (p = a.sPrevious), c === 0 && (T = !0);
                    break;
                  case "next":
                    (p = a.sNext), (h !== 0 && c !== h - 1) || (T = !0);
                    break;
                  case "last":
                    (p = a.sLast), (h !== 0 && c !== h - 1) || (T = !0);
                    break;
                  default:
                    (p = t.fnFormatNumber(g + 1)),
                      (v = c === g ? n.sPageButtonActive : "");
                }
                p !== null &&
                  ((C = t.oInit.pagingTag || "a"),
                  T && (v += " " + y),
                  Gn(
                    m("<" + C + ">", {
                      class: n.sPageButton + " " + v,
                      "aria-controls": t.sTableId,
                      "aria-disabled": T ? "true" : null,
                      "aria-label": o[g],
                      role: "link",
                      "aria-current": v === n.sPageButtonActive ? "page" : null,
                      "data-dt-idx": g,
                      tabindex: T ? -1 : t.iTabIndex,
                      id:
                        i === 0 && typeof g == "string"
                          ? t.sTableId + "_" + g
                          : null,
                    })
                      .html(p)
                      .appendTo(l),
                    { action: g },
                    b,
                  ));
              }
          }
          var p,
            v,
            e,
            n = t.oClasses,
            a = t.oLanguage.oPaginate,
            o = t.oLanguage.oAria.paginate || {};
          try {
            e = m(r).find(ee.activeElement).data("dt-idx");
          } catch {}
          d(m(r).empty(), s),
            e !== L &&
              m(r)
                .find("[data-dt-idx=" + e + "]")
                .trigger("focus");
        },
      },
    }),
    m.extend(I.ext.type.detect, [
      function (t, r) {
        return (r = r.oLanguage.sDecimal), rn(t, r) ? "num" + r : null;
      },
      function (t, r) {
        var i;
        return (!t || t instanceof Date || or.test(t)) &&
          (((i = Date.parse(t)) !== null && !isNaN(i)) || Je(t))
          ? "date"
          : null;
      },
      function (t, r) {
        return (r = r.oLanguage.sDecimal), rn(t, r, !0) ? "num-fmt" + r : null;
      },
      function (t, r) {
        return (r = r.oLanguage.sDecimal), Xt(t, r) ? "html-num" + r : null;
      },
      function (t, r) {
        return (
          (r = r.oLanguage.sDecimal), Xt(t, r, !0) ? "html-num-fmt" + r : null
        );
      },
      function (t, r) {
        return Je(t) || (typeof t == "string" && t.indexOf("<") !== -1)
          ? "html"
          : null;
      },
    ]),
    m.extend(I.ext.type.search, {
      html: function (t) {
        return Je(t)
          ? t
          : typeof t == "string"
            ? t.replace(J, " ").replace(an, "")
            : "";
      },
      string: function (t) {
        return !Je(t) && typeof t == "string" ? t.replace(J, " ") : t;
      },
    });
  function wn(t, r, i, s) {
    var c;
    return t === 0 || (t && t !== "-")
      ? (c = typeof t) == "number" || c == "bigint"
        ? t
        : +(t =
            (t = r ? u(t, r) : t).replace && (i && (t = t.replace(i, "")), s)
              ? t.replace(s, "")
              : t)
      : -1 / 0;
  }
  function Pn(t) {
    m.each(
      {
        num: function (r) {
          return wn(r, t);
        },
        "num-fmt": function (r) {
          return wn(r, t, on);
        },
        "html-num": function (r) {
          return wn(r, t, an);
        },
        "html-num-fmt": function (r) {
          return wn(r, t, an, on);
        },
      },
      function (r, i) {
        (pe.type.order[r + t + "-pre"] = i),
          r.match(/^html\-/) && (pe.type.search[r + t] = pe.type.search.html);
      },
    );
  }
  m.extend(pe.type.order, {
    "date-pre": function (t) {
      return (t = Date.parse(t)), isNaN(t) ? -1 / 0 : t;
    },
    "html-pre": function (t) {
      return Je(t)
        ? ""
        : t.replace
          ? t.replace(/<.*?>/g, "").toLowerCase()
          : t + "";
    },
    "string-pre": function (t) {
      return Je(t)
        ? ""
        : typeof t == "string"
          ? t.toLowerCase()
          : t.toString
            ? t.toString()
            : "";
    },
    "string-asc": function (t, r) {
      return t < r ? -1 : r < t ? 1 : 0;
    },
    "string-desc": function (t, r) {
      return t < r ? 1 : r < t ? -1 : 0;
    },
  }),
    Pn(""),
    m.extend(!0, I.ext.renderer, {
      header: {
        _: function (t, r, i, s) {
          m(t.nTable).on("order.dt.DT", function (c, h, d, p) {
            t === h &&
              ((h = i.idx),
              r
                .removeClass(s.sSortAsc + " " + s.sSortDesc)
                .addClass(
                  p[h] == "asc"
                    ? s.sSortAsc
                    : p[h] == "desc"
                      ? s.sSortDesc
                      : i.sSortingClass,
                ));
          });
        },
        jqueryui: function (t, r, i, s) {
          m("<div/>")
            .addClass(s.sSortJUIWrapper)
            .append(r.contents())
            .append(
              m("<span/>").addClass(s.sSortIcon + " " + i.sSortingClassJUI),
            )
            .appendTo(r),
            m(t.nTable).on("order.dt.DT", function (c, h, d, p) {
              t === h &&
                ((h = i.idx),
                r
                  .removeClass(s.sSortAsc + " " + s.sSortDesc)
                  .addClass(
                    p[h] == "asc"
                      ? s.sSortAsc
                      : p[h] == "desc"
                        ? s.sSortDesc
                        : i.sSortingClass,
                  ),
                r
                  .find("span." + s.sSortIcon)
                  .removeClass(
                    s.sSortJUIAsc +
                      " " +
                      s.sSortJUIDesc +
                      " " +
                      s.sSortJUI +
                      " " +
                      s.sSortJUIAscAllowed +
                      " " +
                      s.sSortJUIDescAllowed,
                  )
                  .addClass(
                    p[h] == "asc"
                      ? s.sSortJUIAsc
                      : p[h] == "desc"
                        ? s.sSortJUIDesc
                        : i.sSortingClassJUI,
                  ));
            });
        },
      },
    });
  function Dn(t) {
    return typeof (t = Array.isArray(t) ? t.join(",") : t) == "string"
      ? t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
      : t;
  }
  function mr(t, r, i, s, c) {
    return se.moment ? t[r](c) : se.luxon ? t[i](c) : s ? t[s](c) : t;
  }
  var vr = !1;
  function Tn(t, r, i) {
    var s;
    if (se.moment) {
      if (!(s = se.moment.utc(t, r, i, !0)).isValid()) return null;
    } else if (se.luxon) {
      if (
        !(s =
          r && typeof t == "string"
            ? se.luxon.DateTime.fromFormat(t, r)
            : se.luxon.DateTime.fromISO(t)).isValid
      )
        return null;
      s.setLocale(i);
    } else
      r
        ? (vr ||
            alert(
              "DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17",
            ),
          (vr = !0))
        : (s = new Date(t));
    return s;
  }
  function Cn(t) {
    return function (r, i, s, c) {
      arguments.length === 0
        ? ((s = "en"), (r = i = null))
        : arguments.length === 1
          ? ((s = "en"), (i = r), (r = null))
          : arguments.length === 2 && ((s = i), (i = r), (r = null));
      var h = "datetime-" + i;
      return (
        I.ext.type.order[h] ||
          (I.ext.type.detect.unshift(function (d) {
            return d === h && h;
          }),
          (I.ext.type.order[h + "-asc"] = function (d, p) {
            return (
              (d = d.valueOf()), (p = p.valueOf()), d === p ? 0 : d < p ? -1 : 1
            );
          }),
          (I.ext.type.order[h + "-desc"] = function (d, p) {
            return (
              (d = d.valueOf()), (p = p.valueOf()), d === p ? 0 : p < d ? -1 : 1
            );
          })),
        function (d, p) {
          var v;
          return (
            (d !== null && d !== L) ||
              (d =
                c === "--now"
                  ? ((v = new Date()),
                    new Date(
                      Date.UTC(
                        v.getFullYear(),
                        v.getMonth(),
                        v.getDate(),
                        v.getHours(),
                        v.getMinutes(),
                        v.getSeconds(),
                      ),
                    ))
                  : ""),
            p === "type"
              ? h
              : d === ""
                ? p !== "sort"
                  ? ""
                  : Tn("0000-01-01 00:00:00", null, s)
                : !(
                      i === null ||
                      r !== i ||
                      p === "sort" ||
                      p === "type" ||
                      d instanceof Date
                    ) || (v = Tn(d, r, s)) === null
                  ? d
                  : p === "sort"
                    ? v
                    : ((d =
                        i === null
                          ? mr(v, "toDate", "toJSDate", "")[t]()
                          : mr(v, "format", "toFormat", "toISOString", i)),
                      p === "display" ? Dn(d) : d)
          );
        }
      );
    };
  }
  var _n = ",",
    er = ".";
  if (se.Intl !== L)
    try {
      for (
        var Ct = new Intl.NumberFormat().formatToParts(100000.1), _t = 0;
        _t < Ct.length;
        _t++
      )
        Ct[_t].type === "group"
          ? (_n = Ct[_t].value)
          : Ct[_t].type === "decimal" && (er = Ct[_t].value);
    } catch {}
  function tr(t) {
    return function () {
      var r = [tt(this[I.ext.iApiIndex])].concat(
        Array.prototype.slice.call(arguments),
      );
      return I.ext.internal[t].apply(this, r);
    };
  }
  return (
    (I.datetime = function (t, r) {
      var i = "datetime-detect-" + t;
      (r = r || "en"),
        I.ext.type.order[i] ||
          (I.ext.type.detect.unshift(function (s) {
            var c = Tn(s, t, r);
            return !(s !== "" && !c) && i;
          }),
          (I.ext.type.order[i + "-pre"] = function (s) {
            return Tn(s, t, r) || 0;
          }));
    }),
    (I.render = {
      date: Cn("toLocaleDateString"),
      datetime: Cn("toLocaleString"),
      time: Cn("toLocaleTimeString"),
      number: function (t, r, i, s, c) {
        return (
          (t !== null && t !== L) || (t = _n),
          (r !== null && r !== L) || (r = er),
          {
            display: function (h) {
              if (
                (typeof h != "number" && typeof h != "string") ||
                h === "" ||
                h === null
              )
                return h;
              var d = h < 0 ? "-" : "",
                p = parseFloat(h);
              return isNaN(p)
                ? Dn(h)
                : ((p = p.toFixed(i)),
                  (h = Math.abs(p)),
                  (p = parseInt(h, 10)),
                  (h = i ? r + (h - p).toFixed(i).substring(2) : ""),
                  (d = p === 0 && parseFloat(h) === 0 ? "" : d) +
                    (s || "") +
                    p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) +
                    h +
                    (c || ""));
            },
          }
        );
      },
      text: function () {
        return { display: Dn, filter: Dn };
      },
    }),
    m.extend(I.ext.internal, {
      _fnExternApiFunc: tr,
      _fnBuildAjax: et,
      _fnAjaxUpdate: ur,
      _fnAjaxParameters: Yt,
      _fnAjaxUpdateDraw: Nn,
      _fnAjaxDataSrc: Rt,
      _fnAddColumn: un,
      _fnColumnOptions: Jt,
      _fnAdjustColumnSizing: jt,
      _fnVisibleToColumnIndex: ht,
      _fnColumnIndexToVisible: kt,
      _fnVisbleColumns: Ft,
      _fnGetColumns: cn,
      _fnColumnTypes: jn,
      _fnApplyColumnDefs: kn,
      _fnHungarianMap: Vt,
      _fnCamelToHungarian: K,
      _fnLanguageCompat: dt,
      _fnBrowserDetect: ln,
      _fnAddData: ve,
      _fnAddTr: Ze,
      _fnNodeToDataIndex: function (t, r) {
        return r._DT_RowIndex !== L ? r._DT_RowIndex : null;
      },
      _fnNodeToColumnIndex: function (t, r, i) {
        return m.inArray(i, t.aoData[r].anCells);
      },
      _fnGetCellData: ye,
      _fnSetCellData: Fn,
      _fnSplitObjNotation: Et,
      _fnGetObjectDataFn: ke,
      _fnSetObjectDataFn: it,
      _fnGetDataMaster: En,
      _fnClearTable: fn,
      _fnDeleteIndex: Oe,
      _fnInvalidate: Ke,
      _fnGetRowElements: gt,
      _fnCreateTr: B,
      _fnBuildHead: lr,
      _fnDrawHead: Gt,
      _fnDraw: Pe,
      _fnReDraw: st,
      _fnAddOptionsHtml: Nt,
      _fnDetectHeader: Me,
      _fnGetUniqueThs: Ge,
      _fnFeatureHtmlFilter: mt,
      _fnFilterComplete: Xe,
      _fnFilterCustom: Qt,
      _fnFilterColumn: Ot,
      _fnFilter: Rn,
      _fnFilterCreateSearch: dn,
      _fnEscapeRegex: Fe,
      _fnFilterData: cr,
      _fnFeatureHtmlInfo: vt,
      _fnUpdateInfo: yt,
      _fnInfoMacros: pn,
      _fnInitialise: lt,
      _fnInitComplete: hn,
      _fnLengthChange: Wn,
      _fnFeatureHtmlLength: fr,
      _fnFeatureHtmlPaginate: Bn,
      _fnPageChange: gn,
      _fnFeatureHtmlProcessing: dr,
      _fnProcessingDisplay: Ee,
      _fnFeatureHtmlTable: bt,
      _fnScrollDraw: Zt,
      _fnApplyToChildren: Ue,
      _fnCalculateColumnWidths: Mt,
      _fnThrottle: mn,
      _fnConvertToWidth: pr,
      _fnGetWidestNode: qt,
      _fnGetMaxLenString: $n,
      _fnStringToCss: ue,
      _fnSortFlatten: xt,
      _fnSort: Hn,
      _fnSortAria: vn,
      _fnSortListener: Xn,
      _fnSortAttachListener: Vn,
      _fnSortingClasses: Kt,
      _fnSortData: Jn,
      _fnSaveState: St,
      _fnLoadState: zn,
      _fnImplementState: qe,
      _fnSettingsFromNode: tt,
      _fnLog: Ae,
      _fnMap: Te,
      _fnBindAction: Gn,
      _fnCallbackReg: Ie,
      _fnCallbackFire: te,
      _fnLengthOverflow: bn,
      _fnRenderer: Wt,
      _fnDataSource: xe,
      _fnRowAttributes: De,
      _fnExtend: yn,
      _fnCalculateEnd: function () {},
    }),
    (((m.fn.dataTable = I).$ = m).fn.dataTableSettings = I.settings),
    (m.fn.dataTableExt = I.ext),
    (m.fn.DataTable = function (t) {
      return m(this).dataTable(t).api();
    }),
    m.each(I, function (t, r) {
      m.fn.DataTable[t] = r;
    }),
    I
  );
});
