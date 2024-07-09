! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).MeasureTool = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, l(i.key), i)
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function o(t, e, n) {
        return (e = l(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function a(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var i, o, r, a, s = [],
                    l = !0,
                    c = !1;
                try {
                    if (r = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        l = !1
                    } else
                        for (; !(l = (i = r.call(n)).done) && (s.push(i.value), s.length !== e); l = !0);
                } catch (t) {
                    c = !0, o = t
                } finally {
                    try {
                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (c) throw o
                    }
                }
                return s
            }
        }(t, e) || u(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return t(e)
        }(e) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(e) || u(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(t) {
        var e = function(t, e) {
            if ("object" != typeof t || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, e || "default");
                if ("object" != typeof i) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : e + ""
    }

    function c(t) {
        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, c(t)
    }

    function u(e, n) {
        if (e) {
            if ("string" == typeof e) return t(e, n);
            var i = {}.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, n) : void 0
        }
    }
    var h = {
        value: () => {}
    };

    function p() {
        for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in i || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            i[t] = []
        }
        return new f(i)
    }

    function f(t) {
        this._ = t
    }

    function g(t, e) {
        for (var n, i = 0, o = t.length; i < o; ++i)
            if ((n = t[i]).name === e) return n.value
    }

    function _(t, e, n) {
        for (var i = 0, o = t.length; i < o; ++i)
            if (t[i].name === e) {
                t[i] = h, t = t.slice(0, i).concat(t.slice(i + 1));
                break
            } return null != n && t.push({
            name: e,
            value: n
        }), t
    }
    f.prototype = p.prototype = {
        constructor: f,
        on: function(t, e) {
            var n, i, o = this._,
                r = (i = o, (t + "").trim().split(/^|\s+/).map((function(t) {
                    var e = "",
                        n = t.indexOf(".");
                    if (n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), t && !i.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    return {
                        type: t,
                        name: e
                    }
                }))),
                a = -1,
                s = r.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                for (; ++a < s;)
                    if (n = (t = r[a]).type) o[n] = _(o[n], t.name, e);
                    else if (null == e)
                    for (n in o) o[n] = _(o[n], t.name, null);
                return this
            }
            for (; ++a < s;)
                if ((n = (t = r[a]).type) && (n = g(o[n], t.name))) return n
        },
        copy: function() {
            var t = {},
                e = this._;
            for (var n in e) t[n] = e[n].slice();
            return new f(t)
        },
        call: function(t, e) {
            if ((n = arguments.length - 2) > 0)
                for (var n, i, o = new Array(n), r = 0; r < n; ++r) o[r] = arguments[r + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (r = 0, n = (i = this._[t]).length; r < n; ++r) i[r].value.apply(e, o)
        },
        apply: function(t, e, n) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var i = this._[t], o = 0, r = i.length; o < r; ++o) i[o].value.apply(e, n)
        }
    };
    var d = "http://www.w3.org/1999/xhtml",
        v = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: d,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };

    function y(t) {
        var e = t += "",
            n = e.indexOf(":");
        return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), v.hasOwnProperty(e) ? {
            space: v[e],
            local: t
        } : t
    }

    function m(t) {
        return function() {
            var e = this.ownerDocument,
                n = this.namespaceURI;
            return n === d && e.documentElement.namespaceURI === d ? e.createElement(t) : e.createElementNS(n, t)
        }
    }

    function x(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }

    function b(t) {
        var e = y(t);
        return (e.local ? x : m)(e)
    }

    function w() {}

    function T(t) {
        return null == t ? w : function() {
            return this.querySelector(t)
        }
    }

    function L(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t)
    }

    function k() {
        return []
    }

    function C(t) {
        return function(e) {
            return e.matches(t)
        }
    }
    var P = Array.prototype.find;

    function A() {
        return this.firstElementChild
    }
    var S = Array.prototype.filter;

    function j() {
        return this.children
    }

    function O(t) {
        return new Array(t.length)
    }

    function M(t, e) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
    }

    function E(t, e, n, i, o, r) {
        for (var a, s = 0, l = e.length, c = r.length; s < c; ++s)(a = e[s]) ? (a.__data__ = r[s], i[s] = a) : n[s] = new M(t, r[s]);
        for (; s < l; ++s)(a = e[s]) && (o[s] = a)
    }

    function D(t, e, n, i, o, r, a) {
        var s, l, c, u = new Map,
            h = e.length,
            p = r.length,
            f = new Array(h);
        for (s = 0; s < h; ++s)(l = e[s]) && (f[s] = c = a.call(l, l.__data__, s, e) + "", u.has(c) ? o[s] = l : u.set(c, l));
        for (s = 0; s < p; ++s) c = a.call(t, r[s], s, r) + "", (l = u.get(c)) ? (i[s] = l, l.__data__ = r[s], u.delete(c)) : n[s] = new M(t, r[s]);
        for (s = 0; s < h; ++s)(l = e[s]) && u.get(f[s]) === l && (o[s] = l)
    }

    function U(t) {
        return t.__data__
    }

    function N(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }

    function I(t) {
        return function() {
            this.removeAttribute(t)
        }
    }

    function B(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function R(t, e) {
        return function() {
            this.setAttribute(t, e)
        }
    }

    function z(t, e) {
        return function() {
            this.setAttributeNS(t.space, t.local, e)
        }
    }

    function q(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
        }
    }

    function H(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
        }
    }

    function V(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    }

    function Y(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }

    function X(t, e, n) {
        return function() {
            this.style.setProperty(t, e, n)
        }
    }

    function F(t, e, n) {
        return function() {
            var i = e.apply(this, arguments);
            null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, n)
        }
    }

    function G(t) {
        return function() {
            delete this[t]
        }
    }

    function Z(t, e) {
        return function() {
            this[t] = e
        }
    }

    function J(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : this[t] = n
        }
    }

    function K(t) {
        return t.trim().split(/^|\s+/)
    }

    function Q(t) {
        return t.classList || new W(t)
    }

    function W(t) {
        this._node = t, this._names = K(t.getAttribute("class") || "")
    }

    function $(t, e) {
        for (var n = Q(t), i = -1, o = e.length; ++i < o;) n.add(e[i])
    }

    function tt(t, e) {
        for (var n = Q(t), i = -1, o = e.length; ++i < o;) n.remove(e[i])
    }

    function et(t) {
        return function() {
            $(this, t)
        }
    }

    function nt(t) {
        return function() {
            tt(this, t)
        }
    }

    function it(t, e) {
        return function() {
            (e.apply(this, arguments) ? $ : tt)(this, t)
        }
    }

    function ot() {
        this.textContent = ""
    }

    function rt(t) {
        return function() {
            this.textContent = t
        }
    }

    function at(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e
        }
    }

    function st() {
        this.innerHTML = ""
    }

    function lt(t) {
        return function() {
            this.innerHTML = t
        }
    }

    function ct(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e
        }
    }

    function ut() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function ht() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function pt() {
        return null
    }

    function ft() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function gt() {
        var t = this.cloneNode(!1),
            e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t
    }

    function _t() {
        var t = this.cloneNode(!0),
            e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t
    }

    function dt(t) {
        return function() {
            var e = this.__on;
            if (e) {
                for (var n, i = 0, o = -1, r = e.length; i < r; ++i) n = e[i], t.type && n.type !== t.type || n.name !== t.name ? e[++o] = n : this.removeEventListener(n.type, n.listener, n.options);
                ++o ? e.length = o : delete this.__on
            }
        }
    }

    function vt(t, e, n) {
        return function() {
            var i, o = this.__on,
                r = function(t) {
                    return function(e) {
                        t.call(this, e, this.__data__)
                    }
                }(e);
            if (o)
                for (var a = 0, s = o.length; a < s; ++a)
                    if ((i = o[a]).type === t.type && i.name === t.name) return this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = r, i.options = n), void(i.value = e);
            this.addEventListener(t.type, r, n), i = {
                type: t.type,
                name: t.name,
                value: e,
                listener: r,
                options: n
            }, o ? o.push(i) : this.__on = [i]
        }
    }

    function yt(t, e, n) {
        var i = V(t),
            o = i.CustomEvent;
        "function" == typeof o ? o = new o(e, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o)
    }

    function mt(t, e) {
        return function() {
            return yt(this, t, e)
        }
    }

    function xt(t, e) {
        return function() {
            return yt(this, t, e.apply(this, arguments))
        }
    }
    M.prototype = {
        constructor: M,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, e) {
            return this._parent.insertBefore(t, e)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    }, W.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var bt = [null];

    function wt(t, e) {
        this._groups = t, this._parents = e
    }

    function Tt(t) {
        return "string" == typeof t ? new wt([
            [document.querySelector(t)]
        ], [document.documentElement]) : new wt([
            [t]
        ], bt)
    }

    function Lt(t, e) {
        if (t = function(t) {
                let e;
                for (; e = t.sourceEvent;) t = e;
                return t
            }(t), void 0 === e && (e = t.currentTarget), e) {
            var n = e.ownerSVGElement || e;
            if (n.createSVGPoint) {
                var i = n.createSVGPoint();
                return i.x = t.clientX, i.y = t.clientY, [(i = i.matrixTransform(e.getScreenCTM().inverse())).x, i.y]
            }
            if (e.getBoundingClientRect) {
                var o = e.getBoundingClientRect();
                return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop]
            }
        }
        return [t.pageX, t.pageY]
    }

    function kt(t) {
        t.stopImmediatePropagation()
    }

    function Ct(t) {
        t.preventDefault(), t.stopImmediatePropagation()
    }
    wt.prototype = {
        constructor: wt,
        select: function(t) {
            "function" != typeof t && (t = T(t));
            for (var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)
                for (var r, a, s = e[o], l = s.length, c = i[o] = new Array(l), u = 0; u < l; ++u)(r = s[u]) && (a = t.call(r, r.__data__, u, s)) && ("__data__" in r && (a.__data__ = r.__data__), c[u] = a);
            return new wt(i, this._parents)
        },
        selectAll: function(t) {
            t = "function" == typeof t ? function(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return null == e ? [] : L(e)
                }
            }(t) : function(t) {
                return null == t ? k : function() {
                    return this.querySelectorAll(t)
                }
            }(t);
            for (var e = this._groups, n = e.length, i = [], o = [], r = 0; r < n; ++r)
                for (var a, s = e[r], l = s.length, c = 0; c < l; ++c)(a = s[c]) && (i.push(t.call(a, a.__data__, c, s)), o.push(a));
            return new wt(i, o)
        },
        selectChild: function(t) {
            return this.select(null == t ? A : function(t) {
                return function() {
                    return P.call(this.children, t)
                }
            }("function" == typeof t ? t : C(t)))
        },
        selectChildren: function(t) {
            return this.selectAll(null == t ? j : function(t) {
                return function() {
                    return S.call(this.children, t)
                }
            }("function" == typeof t ? t : C(t)))
        },
        filter: function(t) {
            "function" != typeof t && (t = function(t) {
                return function() {
                    return this.matches(t)
                }
            }(t));
            for (var e = this._groups, n = e.length, i = new Array(n), o = 0; o < n; ++o)
                for (var r, a = e[o], s = a.length, l = i[o] = [], c = 0; c < s; ++c)(r = a[c]) && t.call(r, r.__data__, c, a) && l.push(r);
            return new wt(i, this._parents)
        },
        data: function(t, e) {
            if (!arguments.length) return Array.from(this, U);
            var n, i = e ? D : E,
                o = this._parents,
                r = this._groups;
            "function" != typeof t && (n = t, t = function() {
                return n
            });
            for (var a = r.length, s = new Array(a), l = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
                var h = o[u],
                    p = r[u],
                    f = p.length,
                    g = L(t.call(h, h && h.__data__, u, o)),
                    _ = g.length,
                    d = l[u] = new Array(_),
                    v = s[u] = new Array(_);
                i(h, p, d, v, c[u] = new Array(f), g, e);
                for (var y, m, x = 0, b = 0; x < _; ++x)
                    if (y = d[x]) {
                        for (x >= b && (b = x + 1); !(m = v[b]) && ++b < _;);
                        y._next = m || null
                    }
            }
            return (s = new wt(s, o))._enter = l, s._exit = c, s
        },
        enter: function() {
            return new wt(this._enter || this._groups.map(O), this._parents)
        },
        exit: function() {
            return new wt(this._exit || this._groups.map(O), this._parents)
        },
        join: function(t, e, n) {
            var i = this.enter(),
                o = this,
                r = this.exit();
            return i = "function" == typeof t ? t(i) : i.append(t + ""), null != e && (o = e(o)), null == n ? r.remove() : n(r), i && o ? i.merge(o).order() : o
        },
        merge: function(t) {
            if (!(t instanceof wt)) throw new Error("invalid merge");
            for (var e = this._groups, n = t._groups, i = e.length, o = n.length, r = Math.min(i, o), a = new Array(i), s = 0; s < r; ++s)
                for (var l, c = e[s], u = n[s], h = c.length, p = a[s] = new Array(h), f = 0; f < h; ++f)(l = c[f] || u[f]) && (p[f] = l);
            for (; s < i; ++s) a[s] = e[s];
            return new wt(a, this._parents)
        },
        selection: function() {
            return this
        },
        order: function() {
            for (var t = this._groups, e = -1, n = t.length; ++e < n;)
                for (var i, o = t[e], r = o.length - 1, a = o[r]; --r >= 0;)(i = o[r]) && (a && 4 ^ i.compareDocumentPosition(a) && a.parentNode.insertBefore(i, a), a = i);
            return this
        },
        sort: function(t) {
            function e(e, n) {
                return e && n ? t(e.__data__, n.__data__) : !e - !n
            }
            t || (t = N);
            for (var n = this._groups, i = n.length, o = new Array(i), r = 0; r < i; ++r) {
                for (var a, s = n[r], l = s.length, c = o[r] = new Array(l), u = 0; u < l; ++u)(a = s[u]) && (c[u] = a);
                c.sort(e)
            }
            return new wt(o, this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        },
        nodes: function() {
            return Array.from(this)
        },
        node: function() {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                for (var i = t[e], o = 0, r = i.length; o < r; ++o) {
                    var a = i[o];
                    if (a) return a
                }
            return null
        },
        size: function() {
            let t = 0;
            for (const e of this) ++t;
            return t
        },
        empty: function() {
            return !this.node()
        },
        each: function(t) {
            for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
                for (var o, r = e[n], a = 0, s = r.length; a < s; ++a)(o = r[a]) && t.call(o, o.__data__, a, r);
            return this
        },
        attr: function(t, e) {
            var n = y(t);
            if (arguments.length < 2) {
                var i = this.node();
                return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n)
            }
            return this.each((null == e ? n.local ? B : I : "function" == typeof e ? n.local ? H : q : n.local ? z : R)(n, e))
        },
        style: function(t, e, n) {
            return arguments.length > 1 ? this.each((null == e ? Y : "function" == typeof e ? F : X)(t, e, null == n ? "" : n)) : function(t, e) {
                return t.style.getPropertyValue(e) || V(t).getComputedStyle(t, null).getPropertyValue(e)
            }(this.node(), t)
        },
        property: function(t, e) {
            return arguments.length > 1 ? this.each((null == e ? G : "function" == typeof e ? J : Z)(t, e)) : this.node()[t]
        },
        classed: function(t, e) {
            var n = K(t + "");
            if (arguments.length < 2) {
                for (var i = Q(this.node()), o = -1, r = n.length; ++o < r;)
                    if (!i.contains(n[o])) return !1;
                return !0
            }
            return this.each(("function" == typeof e ? it : e ? et : nt)(n, e))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? ot : ("function" == typeof t ? at : rt)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? st : ("function" == typeof t ? ct : lt)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(ut)
        },
        lower: function() {
            return this.each(ht)
        },
        append: function(t) {
            var e = "function" == typeof t ? t : b(t);
            return this.select((function() {
                return this.appendChild(e.apply(this, arguments))
            }))
        },
        insert: function(t, e) {
            var n = "function" == typeof t ? t : b(t),
                i = null == e ? pt : "function" == typeof e ? e : T(e);
            return this.select((function() {
                return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null)
            }))
        },
        remove: function() {
            return this.each(ft)
        },
        clone: function(t) {
            return this.select(t ? _t : gt)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, e, n) {
            var i, o, r = function(t) {
                    return t.trim().split(/^|\s+/).map((function(t) {
                        var e = "",
                            n = t.indexOf(".");
                        return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {
                            type: t,
                            name: e
                        }
                    }))
                }(t + ""),
                a = r.length;
            if (!(arguments.length < 2)) {
                for (s = e ? vt : dt, i = 0; i < a; ++i) this.each(s(r[i], e, n));
                return this
            }
            var s = this.node().__on;
            if (s)
                for (var l, c = 0, u = s.length; c < u; ++c)
                    for (i = 0, l = s[c]; i < a; ++i)
                        if ((o = r[i]).type === l.type && o.name === l.name) return l.value
        },
        dispatch: function(t, e) {
            return this.each(("function" == typeof e ? xt : mt)(t, e))
        },
        [Symbol.iterator]: function*() {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                for (var i, o = t[e], r = 0, a = o.length; r < a; ++r)(i = o[r]) && (yield i)
        }
    };
    var Pt = t => () => t;

    function At(t, {
        sourceEvent: e,
        subject: n,
        target: i,
        identifier: o,
        active: r,
        x: a,
        y: s,
        dx: l,
        dy: c,
        dispatch: u
    }) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            subject: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: i,
                enumerable: !0,
                configurable: !0
            },
            identifier: {
                value: o,
                enumerable: !0,
                configurable: !0
            },
            active: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            x: {
                value: a,
                enumerable: !0,
                configurable: !0
            },
            y: {
                value: s,
                enumerable: !0,
                configurable: !0
            },
            dx: {
                value: l,
                enumerable: !0,
                configurable: !0
            },
            dy: {
                value: c,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: u
            }
        })
    }

    function St(t) {
        return !t.ctrlKey && !t.button
    }

    function jt() {
        return this.parentNode
    }

    function Ot(t, e) {
        return null == e ? {
            x: t.x,
            y: t.y
        } : e
    }

    function Mt() {
        return navigator.maxTouchPoints || "ontouchstart" in this
    }

    function Et() {
        var t, e, n, i, o = St,
            r = jt,
            a = Ot,
            s = Mt,
            l = {},
            c = p("start", "drag", "end"),
            u = 0,
            h = 0;

        function f(t) {
            t.on("mousedown.drag", g).filter(s).on("touchstart.drag", v).on("touchmove.drag", y).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }

        function g(a, s) {
            if (!i && o.call(this, a, s)) {
                var l = x(this, r.call(this, a, s), a, s, "mouse");
                l && (Tt(a.view).on("mousemove.drag", _, !0).on("mouseup.drag", d, !0), function(t) {
                    var e = t.document.documentElement,
                        n = Tt(t).on("dragstart.drag", Ct, !0);
                    "onselectstart" in e ? n.on("selectstart.drag", Ct, !0) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none")
                }(a.view), kt(a), n = !1, t = a.clientX, e = a.clientY, l("start", a))
            }
        }

        function _(i) {
            if (Ct(i), !n) {
                var o = i.clientX - t,
                    r = i.clientY - e;
                n = o * o + r * r > h
            }
            l.mouse("drag", i)
        }

        function d(t) {
            Tt(t.view).on("mousemove.drag mouseup.drag", null),
                function(t, e) {
                    var n = t.document.documentElement,
                        i = Tt(t).on("dragstart.drag", null);
                    e && (i.on("click.drag", Ct, !0), setTimeout((function() {
                        i.on("click.drag", null)
                    }), 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect)
                }(t.view, n), Ct(t), l.mouse("end", t)
        }

        function v(t, e) {
            if (o.call(this, t, e)) {
                var n, i, a = t.changedTouches,
                    s = r.call(this, t, e),
                    l = a.length;
                for (n = 0; n < l; ++n)(i = x(this, s, t, e, a[n].identifier, a[n])) && (kt(t), i("start", t, a[n]))
            }
        }

        function y(t) {
            var e, n, i = t.changedTouches,
                o = i.length;
            for (e = 0; e < o; ++e)(n = l[i[e].identifier]) && (Ct(t), n("drag", t, i[e]))
        }

        function m(t) {
            var e, n, o = t.changedTouches,
                r = o.length;
            for (i && clearTimeout(i), i = setTimeout((function() {
                    i = null
                }), 500), e = 0; e < r; ++e)(n = l[o[e].identifier]) && (kt(t), n("end", t, o[e]))
        }

        function x(t, e, n, i, o, r) {
            var s, h, p, g = c.copy(),
                _ = Lt(r || n, e);
            if (null != (p = a.call(t, new At("beforestart", {
                    sourceEvent: n,
                    target: f,
                    identifier: o,
                    active: u,
                    x: _[0],
                    y: _[1],
                    dx: 0,
                    dy: 0,
                    dispatch: g
                }), i))) return s = p.x - _[0] || 0, h = p.y - _[1] || 0,
                function n(r, a, c) {
                    var d, v = _;
                    switch (r) {
                        case "start":
                            l[o] = n, d = u++;
                            break;
                        case "end":
                            delete l[o], --u;
                        case "drag":
                            _ = Lt(c || a, e), d = u
                    }
                    g.call(r, t, new At(r, {
                        sourceEvent: a,
                        subject: p,
                        target: f,
                        identifier: o,
                        active: d,
                        x: _[0] + s,
                        y: _[1] + h,
                        dx: _[0] - v[0],
                        dy: _[1] - v[1],
                        dispatch: g
                    }), i)
                }
        }
        return f.filter = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : Pt(!!t), f) : o
        }, f.container = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : Pt(t), f) : r
        }, f.subject = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : Pt(t), f) : a
        }, f.touchable = function(t) {
            return arguments.length ? (s = "function" == typeof t ? t : Pt(!!t), f) : s
        }, f.on = function() {
            var t = c.on.apply(c, arguments);
            return t === c ? f : t
        }, f.clickDistance = function(t) {
            return arguments.length ? (h = (t = +t) * t, f) : Math.sqrt(h)
        }, f
    }
    At.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    };
    var Dt = {
            en: {
                tooltipText1: "Drag to change, click to remove",
                tooltipText2: "Drag to change"
            },
            it: {
                tooltipText1: "Trascina per modificare, fai clic per rimuovere",
                tooltipText2: "Trascina per modificare"
            },
            zh: {
                tooltipText1: "拖动即可更改，点击即可删除",
                tooltipText2: "拖动即可更改"
            },
            es: {
                tooltipText1: "Arrastra para cambiar, haz clic para quitar",
                tooltipText2: "Arrastra para cambiar"
            },
            de: {
                tooltipText1: "Zum Ändern ziehen, zum Entfernen klicken",
                tooltipText2: "Zum Ändern ziehen"
            },
            fr: {
                tooltipText1: "Faites glisser pour modifier, cliquez pour supprimer",
                tooltipText2: "Faites glisser pour modifier"
            },
            pt: {
                tooltipText1: "Arraste para alterar, clique para remover",
                tooltipText2: "Arraste para alterar"
            },
            uk: {
                tooltipText1: "Перетягніть, щоб змінити, натисніть, щоб видалити",
                tooltipText2: "Перетягніть, щоб змінити"
            },
            ru: {
                tooltipText1: "Перетащите, чтобы изменить, нажмите, чтобы удалить",
                tooltipText2: "Перетащите, чтобы изменить"
            }
        },
        Ut = "en",
        Nt = function(t, e) {
            if (Dt[t]) return Dt[t][e];
            var n = t.split("-")[0];
            return Dt[n] ? Dt[n][e] : Dt[Ut][e]
        },
        It = "measure-tool",
        Bt = function() {
            return Nt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ut, "tooltipText1")
        },
        Rt = function() {
            return Nt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ut, "tooltipText2")
        },
        zt = [],
        qt = [];

    function Ht(t, e) {
        if (t && "undefined" != typeof document) {
            var n, i = !0 === e.prepend ? "prepend" : "append",
                o = !0 === e.singleTag,
                r = "string" == typeof e.container ? document.querySelector(e.container) : document.getElementsByTagName("head")[0];
            if (o) {
                var a = zt.indexOf(r); - 1 === a && (a = zt.push(r) - 1, qt[a] = {}), n = qt[a] && qt[a][i] ? qt[a][i] : qt[a][i] = s()
            } else n = s();
            65279 === t.charCodeAt(0) && (t = t.substring(1)), n.styleSheet ? n.styleSheet.cssText += t : n.appendChild(document.createTextNode(t))
        }

        function s() {
            var t = document.createElement("style");
            if (t.setAttribute("type", "text/css"), e.attributes)
                for (var n = Object.keys(e.attributes), o = 0; o < n.length; o++) t.setAttribute(n[o], e.attributes[n[o]]);
            var a = "prepend" === i ? "afterbegin" : "beforeend";
            return r.insertAdjacentElement(a, t), t
        }
    }
    var Vt = ".measure-tool-context-menu {\n  font-family: Roboto, Arial, sans-serif;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  outline: none;\n  position: fixed;\n  display: none;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n  transform: translate3d(0, 0, 0);\n  max-width: 265px;\n  z-index: 1;\n  outline-offset: -2px;\n  background: #fff;\n  padding: 6px 0;\n  white-space: nowrap;\n  cursor: default;\n  margin: 0; }\n  .measure-tool-context-menu ul {\n    padding: 0px;\n    margin: 0px;\n    background-color: white; }\n    .measure-tool-context-menu ul li {\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      border-color: transparent;\n      border-style: dotted;\n      border-width: 1px 0;\n      color: #333;\n      font-size: 13px;\n      font-weight: normal;\n      margin: 0;\n      padding: 4px 44px 4px 16px;\n      position: relative;\n      white-space: nowrap; }\n      .measure-tool-context-menu ul li:hover {\n        background-color: #f1f1f1;\n        border-color: #f1f1f1;\n        color: #222;\n        transition: background 0s; }\n";
    Ht(Vt, {});
    var Yt = function() {
            return i((function t(n, i) {
                e(this, t), this._defaultOptions = {
                    width: 150
                }, this._options = Object.assign({}, this._defaultOptions, i || {}), this._parentDiv = n, this._containerDiv = document.createElement("div"), this._containerDiv.classList.add("".concat(It, "-context-menu")), this._containerDiv.stylesheet = Vt, this._containerDiv.oncontextmenu = function(t) {
                    return t.preventDefault()
                }, this._list = document.createElement("ul"), this._containerDiv.appendChild(this._list), n.appendChild(this._containerDiv), this._isVisible = !1
            }), [{
                key: "left",
                get: function() {
                    return this._containerDiv.getBoundingClientRect().left
                }
            }, {
                key: "top",
                get: function() {
                    return this._containerDiv.getBoundingClientRect().top
                }
            }, {
                key: "width",
                get: function() {
                    return this._containerDiv.getBoundingClientRect().width
                }
            }, {
                key: "height",
                get: function() {
                    return this._containerDiv.getBoundingClientRect().height
                }
            }, {
                key: "addItem",
                value: function(t, e, n) {
                    var i = this,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this,
                        r = document.createElement("li"),
                        a = document.createTextNode(t);
                    return r.appendChild(a), r.onclick = function(t) {
                        t.preventDefault(), n.apply(o), i.hide()
                    }, e ? this.showItem(r) : this.hideItem(r), this._list.appendChild(r), r
                }
            }, {
                key: "hideItem",
                value: function(t) {
                    t.style.cssText = "display: none"
                }
            }, {
                key: "showItem",
                value: function(t) {
                    t.style.cssText = "display: block"
                }
            }, {
                key: "toggleItems",
                value: function(t, e) {
                    var n = this;
                    t.forEach((function(t) {
                        return n.showItem(t)
                    })), e.forEach((function(t) {
                        return n.hideItem(t)
                    }))
                }
            }, {
                key: "show",
                value: function(t) {
                    this._isVisible = !0, this._containerDiv.style.cssText = "\n      display: block;\n      visibility: hidden;\n      position: absolute;\n      width: ".concat(this._options.width, "px; \n    ");
                    var e = this._parentDiv.getBoundingClientRect().width <= t.x + this.width,
                        n = this._parentDiv.getBoundingClientRect().height <= t.y + this.height;
                    this._containerDiv.style.cssText += "\n      ".concat(e ? "right: 0px;" : "left: " + t.x + "px;", "\n      ").concat(n ? "bottom: 14px;" : "top: " + t.y + "px;", "\n      visibility: visible;\n    ")
                }
            }, {
                key: "hide",
                value: function() {
                    this._isVisible = !1, this._containerDiv.style.cssText = "display: none"
                }
            }, {
                key: "toggle",
                value: function(t) {
                    this._isVisible ? this.hide() : this.show(t)
                }
            }])
        }(),
        Xt = ".measure-tool-tooltip {\n  display: none;\n  font-family: Roboto, Arial, sans-serif;\n  margin: 6px 15px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  overflow: hidden;\n  pointer-events: none;\n  font-size: 0.7rem;\n  z-index: 999; }\n";
    Ht(Xt, {});
    var Ft = function() {
            return i((function t(n) {
                e(this, t), this._parentDiv = n, this._containerDiv = document.createElement("div"), this._containerDiv.classList.add("".concat(It, "-tooltip")), this._containerDiv.stylesheet = Xt, n.appendChild(this._containerDiv)
            }), [{
                key: "show",
                value: function(t, e) {
                    this._containerDiv.innerHTML = e, this._containerDiv.style.cssText = "\n      display: block;\n      visibility: hidden;\n      position: absolute;\n    ";
                    var n = this._parentDiv.getBoundingClientRect().width,
                        i = this._parentDiv.getBoundingClientRect().height;
                    this._containerDiv.style.cssText += t.x < n / 2 ? "left: ".concat(t.x, "px;") : "right: ".concat(n - t.x, "px;"), this._containerDiv.style.cssText += t.y < i / 2 ? "top: ".concat(t.y, "px") : "bottom: ".concat(i - t.y, "px;"), this._containerDiv.style.cssText += "visibility: visible;"
                }
            }, {
                key: "hide",
                value: function() {
                    this._containerDiv.style.cssText = "display: none"
                }
            }])
        }(),
        Gt = function() {
            return i((function t(n, i, o) {
                e(this, t), this._defaultOptions = {
                    offsetRate: 8e3
                }, this._options = Object.assign({}, this._defaultOptions, o || {}), this._container = n, this._projection = i
            }), [{
                key: "latLngToSvgPoint",
                value: function(t) {
                    var e = this._options.offsetRate / 2,
                        n = new google.maps.LatLng(t[1], t[0]),
                        i = this._projection.fromLatLngToDivPixel(n);
                    return [i.x + e, i.y + e]
                }
            }, {
                key: "svgPointToLatLng",
                value: function(t) {
                    var e = this._options.offsetRate / 2,
                        n = new google.maps.Point(t[0] - e, t[1] - e),
                        i = this._projection.fromDivPixelToLatLng(n);
                    return [i.lng(), i.lat()]
                }
            }, {
                key: "svgPointToContainerPoint",
                value: function(t) {
                    var e = this.svgPointToLatLng(t);
                    return this._projection.fromLatLngToContainerPixel(new google.maps.LatLng(e[1], e[0]))
                }
            }, {
                key: "latLngToContainerPoint",
                value: function(t) {
                    return this._projection.fromLatLngToContainerPixel(new google.maps.LatLng(t[1], t[0]))
                }
            }])
        }(),
        Zt = function() {
            return i((function t() {
                e(this, t), this._nodes = []
            }), [{
                key: "nodes",
                get: function() {
                    return Object.assign([], this._nodes)
                }
            }, {
                key: "lines",
                get: function() {
                    var t = [];
                    if (this._nodes.length > 1)
                        for (var e = 1; e < this._nodes.length; e++) t.push([this._nodes[e - 1], this._nodes[e]]);
                    return t
                }
            }, {
                key: "addNode",
                value: function(t) {
                    this._nodes.push(t)
                }
            }, {
                key: "updateNode",
                value: function(t, e) {
                    this._nodes[t] = e
                }
            }, {
                key: "removeNode",
                value: function(t) {
                    this._nodes.splice(t, 1)
                }
            }, {
                key: "insertNode",
                value: function(t, e) {
                    this._nodes.splice(t, 0, e)
                }
            }])
        }(),
        Jt = function() {
            return i((function t(n, i, o, r) {
                e(this, t), this._start = n, this._end = i, this._length = o, this._lengthText = r
            }), [{
                key: "toJSON",
                value: function() {
                    return {
                        start_location: {
                            lat: this._start[1],
                            lng: this._start[0]
                        },
                        end_location: {
                            lat: this._end[1],
                            lng: this._end[0]
                        },
                        length: {
                            text: this._lengthText,
                            value: this._length
                        }
                    }
                }
            }])
        }(),
        Kt = {
            METRIC: "metric",
            IMPERIAL: "imperial",
            NAUTICAL: "nautical"
        },
        Qt = function() {
            function t(n) {
                e(this, t), this._options = {
                    unit: Kt.METRIC
                }, Object.assign(this._options, n), this.init()
            }
            return i(t, [{
                key: "init",
                value: function() {
                    this.initUnits()
                }
            }, {
                key: "initUnits",
                value: function() {
                    switch (this._options.unit.toLowerCase()) {
                        case Kt.METRIC:
                            this._lengthMultiplier = 1, this.formatLength = this._formatLengthMetric, this._areaMultiplier = 1, this.formatArea = this._formatAreaMetric;
                            break;
                        case Kt.IMPERIAL:
                            this._lengthMultiplier = 3.28084, this.formatLength = this._formatLengthImperial, this._areaMultiplier = 10.7639, this.formatArea = this._formatAreaImperial;
                            break;
                        case Kt.NAUTICAL:
                            this._lengthMultiplier = 1, this.formatLength = this._formatLengthNautical, this._areaMultiplier = 1, this.formatArea = this._formatAreaMetric;
                            break;
                        default:
                            this._lengthMultiplier = 1, this.formatLength = this._formatLengthMetric, this._areaMultiplier = 1, this.formatArea = this._formatAreaMetric
                    }
                }
            }, {
                key: "setOption",
                value: function(t, e) {
                    if (!this._options[t]) throw new Error("".concat(t, " is not a valid option on MeasureTool helper"));
                    this._options[t] = e, this.initUnits()
                }
            }, {
                key: "computeLengthBetween",
                value: function(t, e) {
                    return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(t[1], t[0]), new google.maps.LatLng(e[1], e[0])) * this._lengthMultiplier
                }
            }, {
                key: "computePathLength",
                value: function(t) {
                    for (var e = 0, n = 1; n < t.length; n++) e += google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(t[n - 1][1], t[n - 1][0]), new google.maps.LatLng(t[n][1], t[n][0]));
                    return e * this._lengthMultiplier
                }
            }, {
                key: "computeArea",
                value: function(t) {
                    return google.maps.geometry.spherical.computeArea(t.map((function(t) {
                        return new google.maps.LatLng(t[1], t[0])
                    }))) * this._areaMultiplier
                }
            }, {
                key: "_formatLengthMetric",
                value: function(t) {
                    var e;
                    return t / 1e3 >= 1 ? (e = "km", t /= 1e3) : e = "m", this._numberToLocale(this._roundUp(t, 2)) + " " + e
                }
            }, {
                key: "_formatLengthImperial",
                value: function(t) {
                    var e;
                    return t / 5280 >= 1 ? (e = "mi", t /= 5280) : e = "ft", this._numberToLocale(this._roundUp(t, 2)) + " " + e
                }
            }, {
                key: "_formatLengthNautical",
                value: function(t) {
                    return t /= 1852, this._numberToLocale(this._roundUp(t, 2)) + " NM"
                }
            }, {
                key: "_formatAreaMetric",
                value: function(t) {
                    var e;
                    return t / 1e6 >= 1 ? (e = "km²", t /= 1e6) : e = "m²", this._numberToLocale(this._roundUp(t, 2)) + " " + e
                }
            }, {
                key: "_formatAreaImperial",
                value: function(t) {
                    var e;
                    return 3.587e-8 * t >= 1 ? (e = "mi²", t *= 3.587e-8) : e = "ft²", this._numberToLocale(this._roundUp(t, 2)) + " " + e
                }
            }, {
                key: "_roundUp",
                value: function(t, e) {
                    return Number(Math.round(t + "e" + e) + "e-" + e).toFixed(e)
                }
            }, {
                key: "_numberToLocale",
                value: function(t) {
                    return (new Intl.NumberFormat).format(t)
                }
            }], [{
                key: "findTouchPoint",
                value: function(t, e) {
                    var n = ((t[1][1] - t[0][1]) * (e[0] - t[0][0]) - (t[1][0] - t[0][0]) * (e[1] - t[0][1])) / (Math.pow(t[1][1] - t[0][1], 2) + Math.pow(t[1][0] - t[0][0], 2));
                    return [e[0] - n * (t[1][1] - t[0][1]), e[1] + n * (t[1][0] - t[0][0])]
                }
            }, {
                key: "findMidPoint",
                value: function(t) {
                    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
                }
            }, {
                key: "transformText",
                value: function(e, n) {
                    var i, o = t.findMidPoint([e, n]);
                    return i = e[0] === n[0] ? n[1] > e[1] ? 90 : n[1] < e[1] ? 270 : 0 : 180 * Math.atan((n[1] - e[1]) / (n[0] - e[0])) / Math.PI, "translate(".concat(o[0], ", ").concat(o[1], ") rotate(").concat(i, ")")
                }
            }, {
                key: "makeId",
                value: function(t) {
                    return (Math.random().toString(36) + "00000000000000000").slice(2, t + 2)
                }
            }, {
                key: "_interpolate",
                value: function(t, e, n) {
                    var i = google.maps.geometry.spherical.interpolate(new google.maps.LatLng(t[1], t[0]), new google.maps.LatLng(e[1], e[0]), n);
                    return [i.lng(), i.lat()]
                }
            }])
        }(),
        Wt = "measure_start",
        $t = "measure_end",
        te = "measure_change",
        ee = function t(e) {
            if (!e) return e;
            var n;
            if ([Number, String, Boolean].forEach((function(t) {
                    e instanceof t && (n = t(e))
                })), void 0 === n)
                if ("[object Array]" === Object.prototype.toString.call(e)) n = [], e.forEach((function(e, i, o) {
                    n[i] = t(e)
                }));
                else if ("object" === c(e))
                if (e.nodeType && "function" == typeof e.cloneNode) n = e.cloneNode(!0);
                else if (e.prototype) n = e;
            else if (e instanceof Date) n = new Date(e);
            else
                for (var i in n = {}, e) n[i] = t(e[i]);
            else n = e;
            return n
        },
        ne = function(t) {
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "".concat(t, " inverted") : t
        };
    Ht(".measure-tool-svg-overlay {\n  position: absolute;\n  top: -4000px;\n  left: -4000px;\n  width: 8000px;\n  height: 8000px; }\n\n.cover-circle {\n  fill: white;\n  stroke: black;\n  stroke-width: 2.5px; }\n\n.touch-circle {\n  fill: transparent;\n  cursor: pointer; }\n\n.grey-circle {\n  fill: #fcfcfc;\n  stroke: #646464;\n  stroke-width: 2.5px;\n  pointer-events: none; }\n\n.base-line {\n  fill: none;\n  stroke: black;\n  stroke-width: 2.5px; }\n  .base-line.inverted {\n    stroke: white; }\n\n.aux-line {\n  fill: none;\n  stroke: transparent;\n  stroke-width: 12px;\n  cursor: pointer; }\n\n.segment-measure-text {\n  pointer-events: none;\n  stroke: black;\n  font-size: 16px;\n  text-shadow: -2.4px -2.4px rgba(255, 255, 255, 0.4), -2.4px 2.4px rgba(255, 255, 255, 0.4), 2.4px 2.4px rgba(255, 255, 255, 0.4), 2.4px -2.4px rgba(255, 255, 255, 0.4), -2.4px 0 rgba(255, 255, 255, 0.4), 0 2.4px rgba(255, 255, 255, 0.4), 2.4px 0 rgba(255, 255, 255, 0.4), 0 -2.4px rgba(255, 255, 255, 0.4); }\n  .segment-measure-text.inverted {\n    stroke: white;\n    text-shadow: -2.4px -2.4px black, -2.4px 2.4px black, 2.4px 2.4px black, 2.4px -2.4px black, -2.4px 0 black, 0 2.4px black, 2.4px 0 black, 0 -2.4px black; }\n\n.node-measure-text {\n  stroke: black;\n  font-size: 20px;\n  text-shadow: -2.4px -2.4px rgba(255, 255, 255, 0.4), -2.4px 2.4px rgba(255, 255, 255, 0.4), 2.4px 2.4px rgba(255, 255, 255, 0.4), 2.4px -2.4px rgba(255, 255, 255, 0.4), -2.4px 0 rgba(255, 255, 255, 0.4), 0 2.4px rgba(255, 255, 255, 0.4), 2.4px 0 rgba(255, 255, 255, 0.4), 0 -2.4px rgba(255, 255, 255, 0.4);\n  pointer-events: none; }\n  .node-measure-text.inverted {\n    stroke: white;\n    text-shadow: -2.4px -2.4px black, -2.4px 2.4px black, 2.4px 2.4px black, 2.4px -2.4px black, -2.4px 0 black, 0 2.4px black, 2.4px 0 black, 0 -2.4px black; }\n  .node-measure-text.head-text {\n    visibility: hidden; }\n", {});
    var ie = function() {
        return i((function t(n, i) {
            e(this, t), t._initPolyfills(), this._options = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) {
                        o(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({
                showSegmentLength: !0,
                showAccumulativeLength: !0,
                contextMenu: !0,
                tooltip: !0,
                unit: Kt.METRIC,
                initialSegments: [],
                language: navigator ? navigator.language : "en",
                invertColor: !1
            }, i), this._map = n, this._map.setClickableIcons(!1), this._id = Qt.makeId(4), this._events = new Map, this._geometry = new Zt, this._init()
        }), [{
            key: "lengthText",
            get: function() {
                return this._helper.formatLength(this._length || 0)
            }
        }, {
            key: "areaText",
            get: function() {
                return this._helper.formatArea(this._area || 0)
            }
        }, {
            key: "length",
            get: function() {
                return this._length || 0
            }
        }, {
            key: "area",
            get: function() {
                return this._area || 0
            }
        }, {
            key: "segments",
            get: function() {
                return ee(this._segments) || []
            }
        }, {
            key: "points",
            get: function() {
                return ee(this._geometry.nodes.map((function(t) {
                    return {
                        lat: t[1],
                        lng: t[0]
                    }
                }))) || []
            }
        }, {
            key: "_init",
            value: function() {
                this._containerDiv = this._map.getDiv().querySelector("div:first-child"), this._options.contextMenu && (this._contextMenu = new Yt(this._containerDiv, {
                    width: 160
                }), this._startElementNode = this._contextMenu.addItem("Measure distance", !0, this.start, this), this._endElementNode = this._contextMenu.addItem("Clear measurement", !1, this.end, this), this._bindToggleContextMenu()), this._options.tooltip && (this._tooltip = new Ft(this._containerDiv)), this._helper = new Qt({
                    unit: this._options.unit
                }), this._initOverlay()
            }
        }, {
            key: "_bindToggleContextMenu",
            value: function() {
                var t = this;
                this._map.addListener("contextmenu", (function(e) {
                    t._firstClick = e, t._contextMenu.show(t._projection.fromLatLngToContainerPixel(e.latLng))
                })), document.addEventListener("keydown", (function(e) {
                    "Escape" !== e.key && 27 !== e.which || t._contextMenu.hide()
                })), this._containerDiv.addEventListener("mousedown", (function(e) {
                    e.clientX >= t._contextMenu.left && e.clientX <= t._contextMenu.left + t._contextMenu.width && e.clientY >= t._contextMenu.top && e.clientY <= t._contextMenu.top + t._contextMenu.height || t._contextMenu.hide()
                }))
            }
        }, {
            key: "start",
            value: function(t) {
                var e = this;
                if (!this._started) {
                    this._overlay.setMap(this._map), this._geometry = new Zt, this._segments = [];
                    var n = t && t.length > 0;
                    if (!this._options.contextMenu && n)
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i];
                            if (this._geometry.addNode([o.lng, o.lat]), i > 0) {
                                var r = t[i - 1];
                                this._updateSegment([r, o])
                            }
                        }
                    this._options.contextMenu && this._firstClick && (this._checkClick(this._firstClick), this._contextMenu.toggleItems([this._endElementNode], [this._startElementNode])), this._mapClickEvent = this._map.addListener("click", (function(t) {
                        return e._checkClick(t)
                    })), this._map.setOptions({
                        draggableCursor: "default"
                    }), this._started = !0, "function" == typeof this._events.get(Wt) && this._events.get(Wt)()
                }
            }
        }, {
            key: "end",
            value: function() {
                this._started && ("function" == typeof this._events.get($t) && this._events.get($t)(this._getResults()), this._options.contextMenu && this._contextMenu.toggleItems([this._startElementNode], [this._endElementNode]), this._mapClickEvent.remove(), this._geometry = new Zt, this._onRemoveOverlay(), this._setOverlay(), this._overlay.setMap(null), this._map.setOptions({
                    draggableCursor: null
                }), this._hideTooltip(), this._started = !1)
            }
        }, {
            key: "addListener",
            value: function(t, e) {
                this._events.set(t, e)
            }
        }, {
            key: "removeListener",
            value: function(t) {
                this._events.delete(t)
            }
        }, {
            key: "setOption",
            value: function(t, e) {
                if (void 0 === this._options[t]) throw new Error("".concat(t, " is not a valid option on MeasureTool"));
                this._options[t] = e, this._helper._options[t] && this._helper.setOption(t, e), this._overlay && this._nodeCircles && this._redrawOverlay()
            }
        }, {
            key: "_initOverlay",
            value: function() {
                this._setOverlay(), this._initComplete = !1
            }
        }, {
            key: "_setOverlay",
            value: function() {
                this._overlay = new google.maps.OverlayView, this._overlay.onAdd = this._onAddOverlay.bind(this), this._overlay.draw = this._onDrawOverlay.bind(this), this._overlay.onRemove = this._onRemoveOverlay.bind(this), this._overlay.setMap(this._map)
            }
        }, {
            key: "_onAddOverlay",
            value: function() {
                this._initComplete || (this._initComplete = !0), this._projection = this._overlay.getProjection(), this._projectionUtility = new Gt(this._containerDiv, this._projection), this._svgOverlay = Tt(this._overlay.getPanes().overlayMouseTarget).append("div").attr("class", "".concat(It, "-measure-points-").concat(this._id)).append("svg").attr("class", "".concat(It, "-svg-overlay")), this._linesBase = this._svgOverlay.append("g").attr("class", "base"), this._linesBase.selectAll("line").data(this._geometry.lines), this._linesAux = this._svgOverlay.append("g").attr("class", "aux"), this._linesAux.selectAll("line").data(this._geometry.lines), this._lineDrag = this._svgOverlay.append("g").attr("class", "drag"), this._lineDrag.selectAll("line").data(this._geometry.lines), this._nodeCircles = this._svgOverlay.append("g").attr("class", "node-circle"), this._nodeCircles.selectAll("circle").data(this._geometry.nodes), this._touchCircles = this._svgOverlay.append("g").attr("class", "touch-circle"), this._options.showSegmentLength && (this._segmentText = this._svgOverlay.append("g").attr("class", "segment-text"), this._segmentText.selectAll("text").data(this._geometry.lines)), this._options.showAccumulativeLength && (this._nodeText = this._svgOverlay.append("g").attr("class", "node-text"), this._nodeText.selectAll("text").data(this._geometry.nodes)), this._hoverCircle = this._svgOverlay.append("g").attr("class", "hover-circle"), this._hoverCircle.append("circle").attr("class", ne("grey-circle", this._options.invertColor)).attr("r", 5), this._initComplete && !this._started && this._overlay.setMap(null)
            }
        }, {
            key: "_onDrawOverlay",
            value: function() {
                this._updateCircles(), this._updateTouchCircles(), this._updateLine(), this._options.showSegmentLength && this._updateSegmentText(), this._options.showAccumulativeLength && this._updateNodeText(), this._geometry && this._updateArea(this._geometry.nodes.length - 1, this._geometry.nodes[this._geometry.nodes.length - 1]), this._dispatchMeasureEvent()
            }
        }, {
            key: "_onRemoveOverlay",
            value: function() {
                (function(t) {
                    return "string" == typeof t ? new wt([document.querySelectorAll(t)], [document.documentElement]) : new wt([null == t ? [] : L(t)], bt)
                })(".".concat(It, "-measure-points-").concat(this._id)).remove()
            }
        }, {
            key: "_redrawOverlay",
            value: function() {
                this._onRemoveOverlay(), this._setOverlay(), this._overlay.draw()
            }
        }, {
            key: "_checkClick",
            value: function(t) {
                if (!this._dragged && 0 === this._touchCircles.selectAll('circle[r="'.concat(6, '"]')).size() && !this._hoverCircle.select("circle").attr("cx")) {
                    var e = [t.latLng.lng(), t.latLng.lat()];
                    this._geometry.addNode(e), this._overlay.draw()
                }
                this._dragged = !1
            }
        }, {
            key: "_updateCircles",
            value: function() {
                var t = this,
                    e = this;
                this._nodeCircles.selectAll("circle").data(this._geometry.nodes).join("circle").datum((function(t, e) {
                    return [t, e]
                })).attr("class", (function(e) {
                    return 0 === a(e, 2)[1] ? "".concat(ne("cover-circle", t._options.invertColor), " head-circle") : ne("cover-circle", t._options.invertColor)
                })).attr("r", 5).attr("cx", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[0]
                })).attr("cy", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[1]
                })).on("mouseover", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOverCircle(o, r, this)
                })).on("mouseout", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOutCircle(o, r, this)
                })).on("mousedown", (function() {
                    return t._hideTooltip()
                })).enter().append("circle").attr("class", ne("cover-circle", this._options.invertColor)).attr("r", 5).attr("cx", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[0]
                })).attr("cy", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[1]
                })).on("mouseover", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOverCircle(o, r, this)
                })).on("mouseout", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOutCircle(o, r, this)
                })).on("mousedown", (function() {
                    return t._hideTooltip()
                })), this._nodeCircles.selectAll(".removed-circle").remove()
            }
        }, {
            key: "_updateTouchCircles",
            value: function() {
                var t = this,
                    e = this;
                this._touchCircles.selectAll("circle").data(this._geometry.nodes).join("circle").datum((function(t, e) {
                    return [t, e]
                })).attr("class", (function(e) {
                    return 0 === a(e, 2)[1] ? "".concat(ne("touch-circle", t._options.invertColor), " head-circle") : ne("touch-circle", t._options.invertColor)
                })).attr("r", 12).attr("cx", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[0]
                })).attr("cy", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[1]
                })).on("mouseover", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOverCircle(o, r, this)
                })).on("mouseout", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOutCircle(o, r, this)
                })).on("touchstart", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    t.preventDefault(), e._onOverCircle(o, r, this, !0)
                })).on("touchend", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    t.preventDefault(), e._onOutCircle(o, r, this)
                })).on("mousedown", (function() {
                    return t._hideTooltip()
                })).call(this._onDragCircle()).enter().append("circle").attr("class", ne("touch-circle", this._options.invertColor)).attr("r", 12).attr("cx", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[0]
                })).attr("cy", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n)[1]
                })).on("mouseover", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOverCircle(o, r, this)
                })).on("mouseout", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    e._onOutCircle(o, r, this)
                })).on("touchstart", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    t.preventDefault(), e._onOverCircle(o, r, this, !0)
                })).on("touchend", (function(t, n) {
                    var i = a(n, 2),
                        o = i[0],
                        r = i[1];
                    t.preventDefault(), e._onOutCircle(o, r, this)
                })).on("mousedown", (function() {
                    return t._hideTooltip()
                })).call(this._onDragCircle()), this._touchCircles.selectAll(".removed-circle").remove()
            }
        }, {
            key: "_updateLine",
            value: function() {
                var t = this;
                this._segments = [];
                var e = this._linesBase.selectAll("line").data(this._geometry.lines).attr("class", ne("base-line", this._options.invertColor)).attr("x1", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[0])[0]
                })).attr("y1", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[0])[1]
                })).attr("x2", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[1])[0]
                })).attr("y2", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[1])[1]
                })).each((function(e) {
                    return t._updateSegment(e)
                }));
                e.exit().remove(), e.enter().append("line").attr("class", ne("base-line", this._options.invertColor)).attr("x1", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[0])[0]
                })).attr("y1", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[0])[1]
                })).attr("x2", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[1])[0]
                })).attr("y2", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e[1])[1]
                })).each((function(e) {
                    return t._updateSegment(e)
                }));
                var n = this._linesAux.selectAll("line").data(this._geometry.lines).join("line").datum((function(t, e) {
                    return [t, e]
                })).attr("class", "aux-line").attr("x1", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[0])[0]
                })).attr("y1", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[0])[1]
                })).attr("x2", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[1])[0]
                })).attr("y2", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[1])[1]
                }));
                n.on("mousemove", (function(e, n) {
                    var i = a(n, 1)[0],
                        o = Qt.findTouchPoint([t._projectionUtility.latLngToSvgPoint(i[0]), t._projectionUtility.latLngToSvgPoint(i[1])], [e.offsetX, e.offsetY]);
                    t._updateHoverCirclePosition(o[0], o[1])
                })).on("mouseout", (function() {
                    return t._hideHoverCircle()
                })).on("mousedown", (function() {
                    return t._hideTooltip()
                })).on("touchstart", (function(t) {
                    t.preventDefault()
                })).call(this._onDragLine(n, e)), n.exit().remove(), n.enter().append("line").join("line").datum((function(t, e) {
                    return [t, e]
                })).attr("class", "aux-line").attr("x1", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[0])[0]
                })).attr("y1", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[0])[1]
                })).attr("x2", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[1])[0]
                })).attr("y2", (function(e) {
                    var n = a(e, 1)[0];
                    return t._projectionUtility.latLngToSvgPoint(n[1])[1]
                })), this._lineDrag.selectAll("line").data([]).exit().remove()
            }
        }, {
            key: "_updateSegmentText",
            value: function() {
                var t = this,
                    e = this._segmentText.selectAll("text").data(this._geometry.lines).attr("class", ne("segment-measure-text", this._options.invertColor)).attr("text-anchor", "middle").attr("dominant-baseline", "text-before-edge").attr("transform", (function(e) {
                        var n = t._projectionUtility.latLngToSvgPoint(e[0]),
                            i = t._projectionUtility.latLngToSvgPoint(e[1]);
                        return Qt.transformText(n, i)
                    })).text((function(e, n) {
                        return t._helper.formatLength(t._helper.computeLengthBetween(e[0], e[1]))
                    }));
                e.enter().append("text").attr("class", ne("segment-measure-text", this._options.invertColor)).attr("text-anchor", "middle").attr("dominant-baseline", "text-before-edge").attr("transform", (function(e) {
                    var n = t._projectionUtility.latLngToSvgPoint(e[0]),
                        i = t._projectionUtility.latLngToSvgPoint(e[1]);
                    return Qt.transformText(n, i)
                })).text((function(e, n) {
                    return t._helper.formatLength(t._helper.computeLengthBetween(e[0], e[1]))
                })), e.exit().remove()
            }
        }, {
            key: "_updateNodeText",
            value: function() {
                var t = this,
                    e = this._nodeText.selectAll("text").data(this._geometry.nodes).attr("class", (function(e, n) {
                        return 0 === n ? "".concat(ne("node-measure-text", t._options.invertColor), " head-text") : ne("node-measure-text", t._options.invertColor)
                    })).attr("text-anchor", "middle").attr("dominant-baseline", "text-after-edge").attr("x", (function(e) {
                        return t._projectionUtility.latLngToSvgPoint(e)[0]
                    })).attr("y", this._transformNodeTextY.bind(this)).text((function(e, n) {
                        var i = t._helper.computePathLength(t._geometry.nodes.slice(0, n + 1));
                        return n === t._geometry.nodes.length - 1 && (t._length = i), t._helper.formatLength(i)
                    }));
                e.enter().append("text").attr("class", (function(e, n) {
                    return 0 === n ? "".concat(ne("node-measure-text", t._options.invertColor), " head-text") : ne("node-measure-text", t._options.invertColor)
                })).attr("text-anchor", "middle").attr("dominant-baseline", "text-after-edge").attr("x", (function(e) {
                    return t._projectionUtility.latLngToSvgPoint(e)[0]
                })).attr("y", this._transformNodeTextY.bind(this)).text((function(e, n) {
                    var i = t._helper.computePathLength(t._geometry.nodes.slice(0, n + 1));
                    return n === t._geometry.nodes.length - 1 && (t._length = i), t._helper.formatLength(i)
                })), e.exit().remove()
            }
        }, {
            key: "_onOverCircle",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (!this._dragging) {
                    var o = Tt(n);
                    o.classed("base") || (o = this._nodeCircles.select("circle:nth-child(".concat(e + 1, ")"))), o.attr("r", 6), this._options.tooltip && !i && this._tooltip.show(this._projectionUtility.latLngToContainerPoint(t), 0 === e ? Rt(this._options.language) : Bt(this._options.language))
                }
            }
        }, {
            key: "_onOutCircle",
            value: function(t, e, n) {
                var i = Tt(n);
                i.classed("base") || (i = this._nodeCircles.select("circle:nth-child(".concat(e + 1, ")"))), i.attr("r", 5), this._hideTooltip()
            }
        }, {
            key: "_onDragCircle",
            value: function() {
                var t = this,
                    e = !1,
                    n = Et().on("drag", (function(n, i) {
                        var o = a(i, 2)[1];
                        e = !0, t._dragging = !0, Tt(this).attr("cx", n.x).attr("cy", n.y), t._updateLinePosition.call(t, t._linesBase, o, n), t._updateLinePosition.call(t, t._linesAux, o, n), t._updateNodeCirclePosition(o, n), t._options.showSegmentLength && t._updateSegmentTextPosition(o, n), t._options.showAccumulativeLength && t._updateNodeTextPosition(o, n), t._updateArea(o, t._projectionUtility.svgPointToLatLng([n.x, n.y]))
                    }));
                return n.on("start", (function(e) {
                    e.sourceEvent.stopPropagation(), Tt(this).raise().attr("r", 6), t._disableMapScroll()
                })), n.on("end", (function(n, i) {
                    var o = a(i, 2),
                        r = o[0],
                        s = o[1];
                    t._enableMapScroll(), e ? (t._geometry.updateNode(s, t._projectionUtility.svgPointToLatLng([n.x, n.y])), t._showTooltipOnEvent(0 === s ? Rt(t._options.language) : Bt(t._options.language), n)) : s > 0 ? (t._geometry.removeNode(s), Tt(this).classed("removed-circle", !0)) : (t._geometry.addNode(r), t._dragged = !0), e = !1, t._dragging = !1, t._overlay.draw()
                })), n
            }
        }, {
            key: "_onDragLine",
            value: function() {
                var t = this,
                    e = !1,
                    n = Et().on("drag", (function(n, i) {
                        var o = a(i, 2)[1];
                        if (t._dragging = !0, !e) {
                            e = !0, t._geometry.insertNode(o + 1, t._projectionUtility.svgPointToLatLng([n.x, n.y]));
                            var r = t._lineDrag.selectAll("line").data(t._geometry.lines);
                            r.exit().remove(), r.enter().append("line").attr("class", ne("base-line", t._options.invertColor)).attr("x1", (function(e) {
                                return t._projectionUtility.latLngToSvgPoint(e[0])[0]
                            })).attr("y1", (function(e) {
                                return t._projectionUtility.latLngToSvgPoint(e[0])[1]
                            })).attr("x2", (function(e) {
                                return t._projectionUtility.latLngToSvgPoint(e[1])[0]
                            })).attr("y2", (function(e) {
                                return t._projectionUtility.latLngToSvgPoint(e[1])[1]
                            })), t._linesBase.selectAll("line").style("display", "none"), t._linesAux.selectAll("line").style("display", "none"), t._options.showSegmentLength && t._updateSegmentText(), t._options.showAccumulativeLength && t._updateNodeText()
                        }
                        t._updateHoverCirclePosition(n.x, n.y), t._updateLinePosition(t._lineDrag, o + 1, n), t._options.showSegmentLength && t._updateSegmentTextPosition(o + 1, n), t._options.showAccumulativeLength && t._updateNodeTextPosition(o + 1, n), t._updateArea(o + 1, t._projectionUtility.svgPointToLatLng([n.x, n.y]))
                    }));
                return n.on("start", (function(e) {
                    e.sourceEvent.stopPropagation(), t._hoverCircle.select("circle").attr("class", ne("cover-circle", t._options.invertColor)), t._disableMapScroll()
                })), n.on("end", (function(n, i) {
                    var o = a(i, 2)[1];
                    t._enableMapScroll(), e && (t._geometry.updateNode(o + 1, t._projectionUtility.svgPointToLatLng([n.x, n.y])), t._hideHoverCircle(), t._overlay.draw(), e = !1, t._showTooltipOnEvent(Bt(t._options.language), n)), t._updateArea(o + 1, t._projectionUtility.svgPointToLatLng([n.x, n.y])), t._hoverCircle.select("circle").attr("class", ne("grey-circle", t._options.invertColor)), t._linesBase.selectAll("line").style("display", "inline"), t._linesAux.selectAll("line").style("display", "inline"), t._dragging = !1
                })), n
            }
        }, {
            key: "_updateLinePosition",
            value: function(t, e, n) {
                e < this._geometry.lines.length && t.select("line:nth-child(".concat(e + 1, ")")).attr("x1", n.x).attr("y1", n.y), e > 0 && t.select("line:nth-child(".concat(e, ")")).attr("x2", n.x).attr("y2", n.y)
            }
        }, {
            key: "_updateSegmentTextPosition",
            value: function(t, e) {
                var n = this;
                t < this._geometry.lines.length && this._segmentText.select("text:nth-child(".concat(t + 1, ")")).attr("transform", (function(t) {
                    var i = [e.x, e.y],
                        o = n._projectionUtility.latLngToSvgPoint(t[1]);
                    return Qt.transformText(i, o)
                })).text((function(t) {
                    return n._helper.formatLength(n._helper.computeLengthBetween(n._projectionUtility.svgPointToLatLng([e.x, e.y]), t[1]))
                })), t > 0 && this._segmentText.select("text:nth-child(".concat(t, ")")).attr("transform", (function(t) {
                    var i = n._projectionUtility.latLngToSvgPoint(t[0]),
                        o = [e.x, e.y];
                    return Qt.transformText(i, o)
                })).text((function(t) {
                    return n._helper.formatLength(n._helper.computeLengthBetween(t[0], n._projectionUtility.svgPointToLatLng([e.x, e.y])))
                }))
            }
        }, {
            key: "_updateNodeTextPosition",
            value: function(t, e) {
                var n = this;
                this._nodeText.select("text:nth-child(".concat(t + 1, ")")).attr("x", e.x).attr("y", (function() {
                    var i;
                    return i = t > 0 && n._projectionUtility.latLngToSvgPoint(n._geometry.nodes[t - 1])[1] < e.y ? 23 : -7, e.y + i
                })), this._nodeText.select("text:nth-child(".concat(t + 2, ")")).attr("y", (function(i) {
                    var o;
                    return o = t + 1 > 0 && e.y < n._projectionUtility.latLngToSvgPoint(i)[1] ? 23 : -7, n._projectionUtility.latLngToSvgPoint(i)[1] + o
                })), this._nodeText.selectAll("text").filter((function(e, n) {
                    return n >= t
                })).text((function(i, o) {
                    var r = n._helper.computePathLength([].concat(s(n._geometry.nodes.slice(0, t)), [n._projectionUtility.svgPointToLatLng([e.x, e.y])], s(n._geometry.nodes.slice(t + 1, t + 1 + o))));
                    return t + o === n._geometry.nodes.length - 1 && (n._length = r), n._helper.formatLength(r)
                }))
            }
        }, {
            key: "_updateNodeCirclePosition",
            value: function(t, e) {
                this._nodeCircles.select("circle:nth-child(".concat(t + 1, ")")).attr("cx", e.x).attr("cy", e.y)
            }
        }, {
            key: "_updateHoverCirclePosition",
            value: function(t, e) {
                this._hoverCircle.select("circle").attr("cx", t).attr("cy", e), this._dragging || this._options.tooltip && this._tooltip.show(this._projectionUtility.svgPointToContainerPoint([t, e]), Rt(this._options.language))
            }
        }, {
            key: "_hideHoverCircle",
            value: function() {
                this._hoverCircle.select("circle").attr("cx", null).attr("cy", null), this._hideTooltip()
            }
        }, {
            key: "_disableMapScroll",
            value: function() {
                this._zoomControl = !!document.querySelector("button[aria-label='Zoom in']"), this._map.setOptions({
                    scrollwheel: !1,
                    gestureHandling: "none",
                    zoomControl: !1
                })
            }
        }, {
            key: "_enableMapScroll",
            value: function() {
                this._map.setOptions({
                    scrollwheel: !0,
                    gestureHandling: "auto",
                    zoomControl: this._zoomControl
                })
            }
        }, {
            key: "_transformNodeTextY",
            value: function(t, e) {
                var n;
                return n = e > 0 && this._geometry.nodes[e - 1][1] > t[1] ? 23 : -7, this._projectionUtility.latLngToSvgPoint(t)[1] + n
            }
        }, {
            key: "_updateArea",
            value: function(t, e) {
                if (this._geometry) {
                    var n = this._geometry.nodes.length,
                        i = 1 / 80 * this.length,
                        o = 0;
                    n > 2 && (o = 0 === t ? this._helper.computeLengthBetween(this._geometry.nodes[n - 1], e) > i ? 0 : this._helper.computeArea([e].concat(this._geometry.nodes.slice(1, n - 1))) : t === n - 1 ? this._helper.computeLengthBetween(e, this._geometry.nodes[0]) > i ? 0 : this._helper.computeArea(this._geometry.nodes.slice(0, n - 1)) : t > 0 && t < n - 1 ? this._helper.computeLengthBetween(this._geometry.nodes[0], this._geometry.nodes[n - 1]) > i ? 0 : this._helper.computeArea([].concat(this._geometry.nodes.slice(0, t), [e], this._geometry.nodes.slice(t + 1))) : this._helper.computeLengthBetween(this._geometry.nodes[0], this._geometry.nodes[n - 1]) > i ? 0 : this._helper.computeArea(this._geometry.nodes));
                    this._area = o;
                    if (o > 0) {
                        this._nodeText.select(":last-child").attr("class", "sqfoot").text("YARD Sq Ft: " + this.areaText + ".");
                    }
                }
            }
        }, {
            key: "_showTooltipOnEvent",
            value: function(t, e) {
                e.sourceEvent.type.startsWith("touch") || this._options.tooltip && this._tooltip.show(this._projectionUtility.svgPointToContainerPoint([e.x, e.y]), t)
            }
        }, {
            key: "_hideTooltip",
            value: function() {
                this._options.tooltip && this._tooltip.hide()
            }
        }, {
            key: "_dispatchMeasureEvent",
            value: function() {
                if (this._started) {
                    var t = this._getResults();
                    this._lastMeasure && this._lastMeasure.result.lengthText === this.lengthText && this._lastMeasure.result.areaText === this.areaText || "function" == typeof this._events.get(te) && this._events.get(te)(this._lastMeasure = t)
                }
            }
        }, {
            key: "_updateSegment",
            value: function(t) {
                var e = this._helper.computeLengthBetween(t[0], t[1]),
                    n = this._helper.formatLength(e);
                this._segments.push(new Jt(t[0], t[1], e, n).toJSON())
            }
        }, {
            key: "_getResults",
            value: function() {
                return {
                    result: {
                        length: this.length,
                        lengthText: this.lengthText,
                        area: this.area,
                        areaText: this.areaText,
                        segments: this.segments,
                        points: this.points
                    }
                }
            }
        }], [{
            key: "UnitTypeId",
            get: function() {
                return Kt
            }
        }, {
            key: "_initPolyfills",
            value: function() {
                "function" != typeof Object.assign && (Object.assign = function(t) {
                    if (null === t) throw new TypeError("Cannot convert undefined or null to object");
                    t = Object(t);
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (null !== n)
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                })
            }
        }])
    }();
    return ie
}));