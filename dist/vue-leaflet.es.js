import { watch as We, ref as c, provide as A, inject as O, onUnmounted as ye, h as U, onBeforeUnmount as R, defineComponent as S, onMounted as _, markRaw as j, nextTick as g, render as vt, reactive as bt, computed as oe } from "vue";
const de = (t, o) => {
  for (const e of Object.keys(o))
    t.on(e, o[e]);
}, me = (t) => {
  for (const o of Object.keys(t)) {
    const e = t[o];
    e && k(e.cancel) && e.cancel();
  }
}, qe = (t) => !t || typeof t.charAt != "function" ? t : t.charAt(0).toUpperCase() + t.slice(1), k = (t) => typeof t == "function", L = (t, o, e) => {
  for (const n in e) {
    const s = "set" + qe(n);
    t[s] ? We(
      () => e[n],
      (r, l) => {
        t[s](r, l);
      }
    ) : o[s] && We(
      () => e[n],
      (r) => {
        o[s](r);
      }
    );
  }
}, f = (t, o, e = {}) => {
  const n = { ...e };
  for (const s in t) {
    const r = o[s], l = t[s];
    r && (r && r.custom === !0 || l !== void 0 && (n[s] = l));
  }
  return n;
}, T = (t) => {
  const o = {}, e = {};
  for (const n in t)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const s = n.slice(2).toLocaleLowerCase();
      o[s] = t[n];
    } else
      e[n] = t[n];
  return { listeners: o, attrs: e };
}, Ke = async (t) => {
  const o = await Promise.all([
    import("leaflet/dist/images/marker-icon-2x.png"),
    import("leaflet/dist/images/marker-icon.png"),
    import("leaflet/dist/images/marker-shadow.png")
  ]);
  delete t.Default.prototype._getIconUrl, t.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, X = (t) => {
  const o = c(
    (...n) => console.warn(`Method ${t} has been invoked without being replaced`)
  ), e = (...n) => o.value(...n);
  return e.wrapped = o, A(t, e), e;
}, Y = (t, o) => t.wrapped.value = o, v = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, y = (t) => {
  const o = O(t);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${t.description} before it was provided.`
    );
  return o;
}, Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WINDOW_OR_GLOBAL: v,
  assertInject: y,
  bindEventHandlers: de,
  cancelDebounces: me,
  capitalizeFirstLetter: qe,
  isFunction: k,
  propsBinder: L,
  propsToLeafletOptions: f,
  provideLeafletWrapper: X,
  remapEvents: T,
  resetWebpackIcon: Ke,
  updateLeafletWrapper: Y
}, Symbol.toStringTag, { value: "Module" })), h = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), ee = Symbol("removeLayer"), H = Symbol(
  "registerControl"
), ve = Symbol(
  "registerLayerControl"
), be = Symbol(
  "canSetParentHtml"
), fe = Symbol("setParentHtml"), ge = Symbol("setIcon"), Le = Symbol("bindPopup"), he = Symbol("bindTooltip"), Oe = Symbol("unbindPopup"), Se = Symbol("unbindTooltip"), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLayerInjection: M,
  BindPopupInjection: Le,
  BindTooltipInjection: he,
  CanSetParentHtmlInjection: be,
  RegisterControlInjection: H,
  RegisterLayerControlInjection: ve,
  RemoveLayerInjection: ee,
  SetIconInjection: ge,
  SetParentHtmlInjection: fe,
  UnbindPopupInjection: Oe,
  UnbindTooltipInjection: Se,
  UseGlobalLeafletInjection: h
}, Symbol.toStringTag, { value: "Module" })), W = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, J = (t) => ({ options: t.options, methods: {} }), ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  componentProps: W,
  setupComponent: J
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...W,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: !0
  },
  layerType: {
    type: String,
    custom: !0
  },
  visible: {
    type: Boolean,
    custom: !0,
    default: !0
  }
}, q = (t, o, e) => {
  const n = y(M), s = y(ee), { options: r, methods: l } = J(t), a = f(
    t,
    D,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => s({ leafletObject: o.value }), d = {
    ...l,
    setAttribution(m) {
      u(), o.value.options.attribution = m, t.visible && i();
    },
    setName() {
      u(), t.visible && i();
    },
    setLayerType() {
      u(), t.visible && i();
    },
    setVisible(m) {
      o.value && (m ? i() : u());
    },
    bindPopup(m) {
      if (!o.value || !k(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(m);
    },
    bindTooltip(m) {
      if (!o.value || !k(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(m);
    },
    unbindTooltip() {
      o.value && (k(o.value.closeTooltip) && o.value.closeTooltip(), k(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (k(o.value.closePopup) && o.value.closePopup(), k(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(m) {
      e.emit("update:visible", m);
    }
  };
  return A(Le, d.bindPopup), A(he, d.bindTooltip), A(Oe, d.unbindPopup), A(Se, d.unbindTooltip), ye(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: a, methods: d };
}, I = (t, o) => {
  if (t && o.default)
    return U("div", { style: { display: "none" } }, o.default());
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerProps: D,
  render: I,
  setupLayer: q
}, Symbol.toStringTag, { value: "Module" })), _e = {
  ...D,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Ve = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  );
  return { options: f(
    t,
    _e,
    n
  ), methods: s };
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interactiveLayerProps: _e,
  setupInteractiveLayer: Ve
}, Symbol.toStringTag, { value: "Module" })), ne = {
  ..._e,
  stroke: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String
  },
  weight: {
    type: Number
  },
  opacity: {
    type: Number
  },
  lineCap: {
    type: String
  },
  lineJoin: {
    type: String
  },
  dashArray: {
    type: String
  },
  dashOffset: {
    type: String
  },
  fill: {
    type: Boolean,
    default: void 0
  },
  fillColor: {
    type: String
  },
  fillOpacity: {
    type: Number
  },
  fillRule: {
    type: String
  },
  className: {
    type: String
  }
}, je = (t, o, e) => {
  const { options: n, methods: s } = Ve(t, o, e), r = f(
    t,
    ne,
    n
  ), l = y(ee), a = {
    ...s,
    setStroke(i) {
      o.value.setStyle({ stroke: i });
    },
    setColor(i) {
      o.value.setStyle({ color: i });
    },
    setWeight(i) {
      o.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      o.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      o.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      o.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      o.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      o.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      o.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      o.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      o.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      o.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      o.value.setStyle({ className: i });
    }
  };
  return R(() => {
    l({ leafletObject: o.value });
  }), { options: r, methods: a };
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pathProps: ne,
  setupPath: je
}, Symbol.toStringTag, { value: "Module" })), re = {
  ...ne,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: !0,
    custom: !0
  }
}, Pe = (t, o, e) => {
  const { options: n, methods: s } = je(
    t,
    o,
    e
  ), r = f(
    t,
    re,
    n
  ), l = {
    ...s,
    setRadius(a) {
      o.value.setRadius(a);
    },
    setLatLng(a) {
      o.value.setLatLng(a);
    }
  };
  return { options: r, methods: l };
}, Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleMarkerProps: re,
  setupCircleMarker: Pe
}, Symbol.toStringTag, { value: "Module" })), Ce = {
  ...re,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Qe = (t, o, e) => {
  const { options: n, methods: s } = Pe(t, o, e), r = f(
    t,
    Ce,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleProps: Ce,
  setupCircle: Qe
}, Symbol.toStringTag, { value: "Module" })), Yt = S({
  name: "LCircle",
  props: Ce,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { options: l, methods: a } = Qe(t, e, o);
    return _(async () => {
      const { circle: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.latLng, l));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), xt = S({
  name: "LCircleMarker",
  props: re,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { options: l, methods: a } = Pe(
      t,
      e,
      o
    );
    return _(async () => {
      const { circleMarker: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.latLng, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), E = {
  ...W,
  position: {
    type: String
  }
}, K = (t, o) => {
  const { options: e, methods: n } = J(t), s = f(
    t,
    E,
    e
  ), r = {
    ...n,
    setPosition(l) {
      o.value && o.value.setPosition(l);
    }
  };
  return ye(() => {
    o.value && o.value.remove();
  }), { options: s, methods: r };
}, Xe = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlProps: E,
  renderLControl: Xe,
  setupControl: K
}, Symbol.toStringTag, { value: "Module" })), Rt = S({
  name: "LControl",
  props: {
    ...E,
    disableClickPropagation: {
      type: Boolean,
      custom: !0,
      default: !0
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: !0,
      default: !1
    }
  },
  setup(t, o) {
    const e = c(), n = c(), s = O(h), r = y(H), { options: l, methods: a } = K(t, e);
    return _(async () => {
      const { Control: i, DomEvent: u } = s ? v.L : await import("leaflet/dist/leaflet-src.esm"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      e.value = j(new d(l)), L(a, e.value, t), r({ leafletObject: e.value }), t.disableClickPropagation && n.value && u.disableClickPropagation(n.value), t.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), g(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Xe(this.$slots);
  }
}), Te = {
  ...E,
  prefix: {
    type: String
  }
}, Ye = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  ), s = f(
    t,
    Te,
    e
  ), r = {
    ...n,
    setPrefix(l) {
      o.value.setPrefix(l);
    }
  };
  return { options: s, methods: r };
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlAttributionProps: Te,
  setupControlAttribution: Ye
}, Symbol.toStringTag, { value: "Module" })), eo = S({
  name: "LControlAttribution",
  props: Te,
  setup(t, o) {
    const e = c(), n = O(h), s = y(H), { options: r, methods: l } = Ye(t, e);
    return _(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a.attribution(r)
      ), L(l, e.value, t), s({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Me = {
  ...E,
  collapsed: {
    type: Boolean,
    default: void 0
  },
  autoZIndex: {
    type: Boolean,
    default: void 0
  },
  hideSingleBase: {
    type: Boolean,
    default: void 0
  },
  sortLayers: {
    type: Boolean,
    default: void 0
  },
  sortFunction: {
    type: Function
  }
}, xe = (t, o) => {
  const { options: e } = K(t, o);
  return { options: f(
    t,
    Me,
    e
  ), methods: {
    addLayer(r) {
      r.layerType === "base" ? o.value.addBaseLayer(r.leafletObject, r.name) : r.layerType === "overlay" && o.value.addOverlay(r.leafletObject, r.name);
    },
    removeLayer(r) {
      o.value.removeLayer(r.leafletObject);
    }
  } };
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlLayersProps: Me,
  setupControlLayers: xe
}, Symbol.toStringTag, { value: "Module" })), to = S({
  name: "LControlLayers",
  props: Me,
  setup(t, o) {
    const e = c(), n = O(h), s = y(ve), { options: r, methods: l } = xe(t, e);
    return _(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a.layers(void 0, void 0, r)
      ), L(l, e.value, t), s({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Be = {
  ...E,
  maxWidth: {
    type: Number
  },
  metric: {
    type: Boolean,
    default: void 0
  },
  imperial: {
    type: Boolean,
    default: void 0
  },
  updateWhenIdle: {
    type: Boolean,
    default: void 0
  }
}, Re = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  );
  return { options: f(
    t,
    Be,
    e
  ), methods: n };
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlScaleProps: Be,
  setupControlScale: Re
}, Symbol.toStringTag, { value: "Module" })), oo = S({
  name: "LControlScale",
  props: Be,
  setup(t, o) {
    const e = c(), n = O(h), s = y(H), { options: r, methods: l } = Re(t, e);
    return _(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(a.scale(r)), L(l, e.value, t), s({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), we = {
  ...E,
  zoomInText: {
    type: String
  },
  zoomInTitle: {
    type: String
  },
  zoomOutText: {
    type: String
  },
  zoomOutTitle: {
    type: String
  }
}, et = (t, o) => {
  const { options: e, methods: n } = K(
    t,
    o
  );
  return { options: f(
    t,
    we,
    e
  ), methods: n };
}, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlZoomProps: we,
  setupControlZoom: et
}, Symbol.toStringTag, { value: "Module" })), no = S({
  name: "LControlZoom",
  props: we,
  setup(t, o) {
    const e = c(), n = O(h), s = y(H), { options: r, methods: l } = et(t, e);
    return _(async () => {
      const { control: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(a.zoom(r)), L(l, e.value, t), s({ leafletObject: e.value }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), te = {
  ...D
}, se = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    te,
    n
  ), l = {
    ...s,
    addLayer(a) {
      o.value.addLayer(a.leafletObject);
    },
    removeLayer(a) {
      o.value.removeLayer(a.leafletObject);
    }
  };
  return A(M, l.addLayer), A(ee, l.removeLayer), { options: r, methods: l };
}, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerGroupProps: te,
  setupLayerGroup: se
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  ...te
}, tt = (t, o, e) => {
  const { options: n, methods: s } = se(
    t,
    o,
    e
  ), r = f(
    t,
    Ge,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  featureGroupProps: Ge,
  setupFeatureGroup: tt
}, Symbol.toStringTag, { value: "Module" })), ro = S({
  props: Ge,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { methods: l, options: a } = tt(
      t,
      e,
      o
    );
    return _(async () => {
      const { featureGroup: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(void 0, a)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), Ie = {
  ...te,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, ot = (t, o, e) => {
  const { options: n, methods: s } = se(
    t,
    o,
    e
  ), r = f(
    t,
    Ie,
    n
  );
  Object.prototype.hasOwnProperty.call(t, "optionsStyle") && (r.style = t.optionsStyle);
  const l = {
    ...s,
    setGeojson(a) {
      o.value.clearLayers(), o.value.addData(a);
    },
    setOptionsStyle(a) {
      o.value.setStyle(a);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: l };
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  geoJSONProps: Ie,
  setupGeoJSON: ot
}, Symbol.toStringTag, { value: "Module" })), so = S({
  props: Ie,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { methods: l, options: a } = ot(t, e, o);
    return _(async () => {
      const { geoJSON: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.geojson, a));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), ae = {
  ...D,
  opacity: {
    type: Number
  },
  zIndex: {
    type: Number
  },
  tileSize: {
    type: [Number, Array, Object]
  },
  noWrap: {
    type: Boolean,
    default: void 0
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  className: {
    type: String
  }
}, Ae = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    ae,
    n
  ), l = {
    ...s,
    setTileComponent() {
      var a;
      (a = o.value) == null || a.redraw();
    }
  };
  return ye(() => {
    o.value.off();
  }), { options: r, methods: l };
}, nt = (t, o, e, n) => t.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = o.create("div");
    const l = U({ setup: n, props: ["coords"] }, { coords: s });
    return vt(l, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
}), Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CreateVueGridLayer: nt,
  gridLayerProps: ae,
  setupGridLayer: Ae
}, Symbol.toStringTag, { value: "Module" })), ao = S({
  props: {
    ...ae,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(t, o) {
    const e = c(), n = c(null), s = c(!1), r = O(h), l = y(M), { options: a, methods: i } = Ae(t, e, o);
    return _(async () => {
      const { GridLayer: u, DomUtil: d, Util: m } = r ? v.L : await import("leaflet/dist/leaflet-src.esm"), w = nt(
        u,
        d,
        m,
        t.childRender
      );
      e.value = j(new w(a));
      const { listeners: b } = T(o.attrs);
      e.value.on(b), L(i, e.value, t), l({
        ...t,
        ...i,
        leafletObject: e.value
      }), s.value = !0, g(() => o.emit("ready", e.value));
    }), { root: n, ready: s, leafletObject: e };
  },
  render() {
    return this.ready ? U("div", { style: { display: "none" }, ref: "root" }) : null;
  }
}), pe = {
  iconUrl: {
    type: String
  },
  iconRetinaUrl: {
    type: String
  },
  iconSize: {
    type: [Object, Array]
  },
  iconAnchor: {
    type: [Object, Array]
  },
  popupAnchor: {
    type: [Object, Array]
  },
  tooltipAnchor: {
    type: [Object, Array]
  },
  shadowUrl: {
    type: String
  },
  shadowRetinaUrl: {
    type: String
  },
  shadowSize: {
    type: [Object, Array]
  },
  shadowAnchor: {
    type: [Object, Array]
  },
  bgPos: {
    type: [Object, Array]
  },
  className: {
    type: String
  }
}, It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  iconProps: pe
}, Symbol.toStringTag, { value: "Module" })), lo = S({
  name: "LIcon",
  props: {
    ...pe,
    ...W
  },
  setup(t, o) {
    const e = c(), n = O(h), s = y(be), r = y(fe), l = y(ge);
    let a, i, u, d, m;
    const w = (N, P, B) => {
      const G = N && N.innerHTML;
      if (!P) {
        B && m && s() && r(G);
        return;
      }
      const { listeners: Z } = T(o.attrs);
      m && i(m, Z);
      const { options: ce } = J(t), $ = f(
        t,
        pe,
        ce
      );
      G && ($.html = G), m = $.html ? u($) : d($), a(m, Z), l(m);
    }, b = () => {
      g(() => w(e.value, !0, !1));
    }, z = () => {
      g(() => w(e.value, !1, !0));
    }, F = {
      setIconUrl: b,
      setIconRetinaUrl: b,
      setIconSize: b,
      setIconAnchor: b,
      setPopupAnchor: b,
      setTooltipAnchor: b,
      setShadowUrl: b,
      setShadowRetinaUrl: b,
      setShadowAnchor: b,
      setBgPos: b,
      setClassName: b,
      setHtml: b
    };
    return _(async () => {
      const {
        DomEvent: N,
        divIcon: P,
        icon: B
      } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      a = N.on, i = N.off, u = P, d = B, L(F, {}, t), new MutationObserver(z).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), b();
    }), { root: e };
  },
  render() {
    const t = this.$slots.default ? this.$slots.default() : void 0;
    return U("div", { ref: "root" }, t);
  }
}), le = {
  ...D,
  opacity: {
    type: Number
  },
  alt: {
    type: String
  },
  interactive: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: {
    type: Boolean,
    default: void 0
  },
  errorOverlayUrl: {
    type: String
  },
  zIndex: {
    type: Number
  },
  className: {
    type: String
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  },
  bounds: {
    type: [Array, Object],
    required: !0,
    custom: !0
  }
}, ze = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    le,
    n
  ), l = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(a) {
      return o.value.setOpacity(a);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(a) {
      return o.value.setUrl(a);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(a) {
      return o.value.setBounds(a);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return o.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return o.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return o.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return o.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(a) {
      return o.value.setZIndex(a);
    }
  };
  return { options: r, methods: l };
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  imageOverlayProps: le,
  setupImageOverlay: ze
}, Symbol.toStringTag, { value: "Module" })), io = S({
  name: "LImageOverlay",
  props: le,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { options: l, methods: a } = ze(
      t,
      e,
      o
    );
    return _(async () => {
      const { imageOverlay: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.url, t.bounds, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), rt = {
  ...le,
  url: {
    type: [SVGElement, String],
    required: !0,
    custom: !0
  }
}, zt = (t, o, e) => {
  const { options: n, methods: s } = ze(t, o, e), r = f(
    t,
    rt,
    n
  ), l = {
    ...s,
    /**
     * Returns the instance of SVGElement used by this overlay.
     * @returns {SVGElement}
     */
    getElement() {
      return o.value.getElement();
    }
  };
  return { options: r, methods: l };
}, uo = S({
  name: "LSVGOverlay",
  props: rt,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { options: l, methods: a } = zt(t, e, o);
    return _(async () => {
      const { svgOverlay: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.url, t.bounds, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), co = S({
  props: te,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { methods: l } = se(t, e, o);
    return _(async () => {
      const { layerGroup: a } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a(void 0, t.options)
      );
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), r({
        ...t,
        ...l,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
});
function st(t, o, e) {
  var n, s, r;
  o === void 0 && (o = 50), e === void 0 && (e = {});
  var l = (n = e.isImmediate) != null && n, a = (s = e.callback) != null && s, i = e.maxWait, u = Date.now(), d = [];
  function m() {
    if (i !== void 0) {
      var b = Date.now() - u;
      if (b + o >= i)
        return i - b;
    }
    return o;
  }
  var w = function() {
    var b = [].slice.call(arguments), z = this;
    return new Promise(function(F, N) {
      var P = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var G = t.apply(z, b);
          a && a(G), d.forEach(function(Z) {
            return (0, Z.resolve)(G);
          }), d = [];
        }
      }, m()), P) {
        var B = t.apply(z, b);
        return a && a(B), F(B);
      }
      d.push({ resolve: F, reject: N });
    });
  };
  return w.cancel = function(b) {
    r !== void 0 && clearTimeout(r), d.forEach(function(z) {
      return (0, z.reject)(b);
    }), d = [];
  }, w;
}
const Je = {
  ...W,
  /**
   * The center of the map, supports .sync modifier
   */
  center: {
    type: [Object, Array]
  },
  /**
   * The bounds of the map, supports .sync modifier
   */
  bounds: {
    type: [Array, Object]
  },
  /**
   * The max bounds of the map
   */
  maxBounds: {
    type: [Array, Object]
  },
  /**
   * The zoom of the map, supports .sync modifier
   */
  zoom: {
    type: Number
  },
  /**
   * The minZoom of the map
   */
  minZoom: {
    type: Number
  },
  /**
   * The maxZoom of the map
   */
  maxZoom: {
    type: Number
  },
  /**
   * The paddingBottomRight of the map
   */
  paddingBottomRight: {
    type: [Object, Array]
  },
  /**
   * The paddingTopLeft of the map
   */
  paddingTopLeft: {
    type: Object
  },
  /**
   * The padding of the map
   */
  padding: {
    type: Object
  },
  /**
   * The worldCopyJump option for the map
   */
  worldCopyJump: {
    type: Boolean,
    default: void 0
  },
  /**
   * The CRS to use for the map. Can be an object that defines a coordinate reference
   * system for projecting geographical points into screen coordinates and back
   * (see https://leafletjs.com/reference-1.7.1.html#crs-l-crs-base), or a string
   * name identifying one of Leaflet's defined CRSs, such as "EPSG4326".
   */
  crs: {
    type: [String, Object]
  },
  maxBoundsViscosity: {
    type: Number
  },
  inertia: {
    type: Boolean,
    default: void 0
  },
  inertiaDeceleration: {
    type: Number
  },
  inertiaMaxSpeed: {
    type: Number
  },
  easeLinearity: {
    type: Number
  },
  zoomAnimation: {
    type: Boolean,
    default: void 0
  },
  zoomAnimationThreshold: {
    type: Number
  },
  fadeAnimation: {
    type: Boolean,
    default: void 0
  },
  markerZoomAnimation: {
    type: Boolean,
    default: void 0
  },
  noBlockingAnimations: {
    type: Boolean,
    default: void 0
  },
  useGlobalLeaflet: {
    type: Boolean,
    default: !0,
    custom: !0
  }
}, po = S({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Je,
  setup(t, o) {
    const e = c(), n = bt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = J(t), r = f(
      t,
      Je,
      s
    ), { listeners: l, attrs: a } = T(o.attrs), i = X(M), u = X(ee), d = X(H), m = X(
      ve
    );
    A(h, t.useGlobalLeaflet);
    const w = oe(() => {
      const P = {};
      return t.noBlockingAnimations && (P.animate = !1), P;
    }), b = oe(() => {
      const P = w.value;
      return t.padding && (P.padding = t.padding), t.paddingTopLeft && (P.paddingTopLeft = t.paddingTopLeft), t.paddingBottomRight && (P.paddingBottomRight = t.paddingBottomRight), P;
    }), z = {
      moveend: st((P) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(P) {
        const B = n.layersInControl.find((G) => G.name === P.name);
        B && B.updateVisibleProp(!0);
      },
      overlayremove(P) {
        const B = n.layersInControl.find((G) => G.name === P.name);
        B && B.updateVisibleProp(!1);
      }
    };
    _(async () => {
      t.useGlobalLeaflet && (v.L = v.L || await import("leaflet"));
      const { map: P, CRS: B, Icon: G, latLngBounds: Z, latLng: ce, stamp: $ } = t.useGlobalLeaflet ? v.L : await import("leaflet/dist/leaflet-src.esm");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (p) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${p.message}`
        );
      }
      await Ke(G);
      const mt = typeof r.crs == "string" ? B[r.crs] : r.crs;
      r.crs = mt || B.EPSG3857;
      const V = {
        addLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(p) : n.layersInControl.find(
            (Q) => $(Q.leafletObject) === $(p.leafletObject)
          ) || (n.layerControl.addLayer(p), n.layersInControl.push(p))), p.visible !== !1 && n.leafletRef.addLayer(p.leafletObject);
        },
        removeLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (C) => C.name !== p.name
          ) : (n.layerControl.removeLayer(p.leafletObject), n.layersInControl = n.layersInControl.filter(
            (C) => $(C.leafletObject) !== $(p.leafletObject)
          ))), n.leafletRef.removeLayer(p.leafletObject);
        },
        registerLayerControl(p) {
          n.layerControl = p, n.layersToAdd.forEach((C) => {
            n.layerControl.addLayer(C);
          }), n.layersToAdd = [], d(p);
        },
        registerControl(p) {
          n.leafletRef.addControl(p.leafletObject);
        },
        setZoom(p) {
          const C = n.leafletRef.getZoom();
          p !== C && n.leafletRef.setZoom(p, w.value);
        },
        setCrs(p) {
          const C = n.leafletRef.getBounds();
          n.leafletRef.options.crs = p, n.leafletRef.fitBounds(C, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(p) {
          n.leafletRef.fitBounds(p, b.value);
        },
        setBounds(p) {
          if (!p)
            return;
          const C = Z(p);
          if (!C.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(C, 0) && (n.lastSetBounds = C, n.leafletRef.fitBounds(C));
        },
        setCenter(p) {
          if (p == null)
            return;
          const C = ce(p), Q = n.lastSetCenter || n.leafletRef.getCenter();
          (Q.lat !== C.lat || Q.lng !== C.lng) && (n.lastSetCenter = C, n.leafletRef.panTo(C, w.value));
        }
      };
      Y(i, V.addLayer), Y(u, V.removeLayer), Y(d, V.registerControl), Y(m, V.registerLayerControl), n.leafletRef = j(P(e.value, r)), L(V, n.leafletRef, t), de(n.leafletRef, z), de(n.leafletRef, l), n.ready = !0, g(() => o.emit("ready", n.leafletRef));
    }), R(() => {
      me(z), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const F = oe(() => n.leafletRef), N = oe(() => n.ready);
    return { root: e, ready: N, leafletObject: F, attrs: a };
  },
  render({ attrs: t }) {
    return t.style || (t.style = {}), t.style.width || (t.style.width = "100%"), t.style.height || (t.style.height = "100%"), U(
      "div",
      {
        ...t,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Nt = ["Symbol(Comment)", "Symbol(Text)"], $t = ["LTooltip", "LPopup"], Ne = {
  ...D,
  draggable: {
    type: Boolean,
    default: void 0
  },
  icon: {
    type: [Object]
  },
  zIndexOffset: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    custom: !0,
    required: !0
  }
}, at = (t, o, e) => {
  const { options: n, methods: s } = q(
    t,
    o,
    e
  ), r = f(
    t,
    Ne,
    n
  ), l = {
    ...s,
    setDraggable(a) {
      o.value.dragging && (a ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(a) {
      e.emit("update:latLng", a.latlng), e.emit("update:lat-lng", a.latlng);
    },
    setLatLng(a) {
      if (a != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(a)) && o.value.setLatLng(a);
      }
    }
  };
  return { options: r, methods: l };
}, lt = (t, o) => {
  const e = o.slots.default && o.slots.default();
  return e && e.length && e.some(kt);
};
function kt(t) {
  return !(Nt.includes(t.type.toString()) || $t.includes(t.type.name));
}
const Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  markerProps: Ne,
  setupMarker: at,
  shouldBlankIcon: lt
}, Symbol.toStringTag, { value: "Module" })), yo = S({
  name: "LMarker",
  props: Ne,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M);
    A(
      be,
      () => {
        var u;
        return !!((u = e.value) != null && u.getElement());
      }
    ), A(fe, (u) => {
      var m, w;
      const d = k((m = e.value) == null ? void 0 : m.getElement) && ((w = e.value) == null ? void 0 : w.getElement());
      d && (d.innerHTML = u);
    }), A(
      ge,
      (u) => {
        var d;
        return ((d = e.value) == null ? void 0 : d.setIcon) && e.value.setIcon(u);
      }
    );
    const { options: l, methods: a } = at(t, e, o), i = {
      moveHandler: st(a.latLngSync)
    };
    return _(async () => {
      const { marker: u, divIcon: d } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      lt(l, o) && (l.icon = d({ className: "" })), e.value = j(u(t.latLng, l));
      const { listeners: m } = T(o.attrs);
      e.value.on(m), e.value.on("move", i.moveHandler), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), R(() => me(i)), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), ie = {
  ...ne,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: !0,
    custom: !0
  }
}, $e = (t, o, e) => {
  const { options: n, methods: s } = je(
    t,
    o,
    e
  ), r = f(
    t,
    ie,
    n
  ), l = {
    ...s,
    setSmoothFactor(a) {
      o.value.setStyle({ smoothFactor: a });
    },
    setNoClip(a) {
      o.value.setStyle({ noClip: a });
    },
    addLatLng(a) {
      o.value.addLatLng(a);
    }
  };
  return { options: r, methods: l };
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polylineProps: ie,
  setupPolyline: $e
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...ie
}, ke = (t, o, e) => {
  const { options: n, methods: s } = $e(
    t,
    o,
    e
  ), r = f(
    t,
    x,
    n
  ), l = {
    ...s,
    toGeoJSON(a) {
      return o.value.toGeoJSON(a);
    }
  };
  return { options: r, methods: l };
}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polygonProps: x,
  setupPolygon: ke
}, Symbol.toStringTag, { value: "Module" })), mo = S({
  name: "LPolygon",
  props: x,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { options: l, methods: a } = ke(t, e, o);
    return _(async () => {
      const { polygon: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(t.latLngs, l));
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), vo = S({
  name: "LPolyline",
  props: ie,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { options: l, methods: a } = $e(t, e, o);
    return _(async () => {
      const { polyline: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        i(t.latLngs, l)
      );
      const { listeners: u } = T(o.attrs);
      e.value.on(u), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), Ue = {
  ...W,
  content: {
    type: String,
    default: null
  }
}, De = (t, o) => {
  const { options: e, methods: n } = J(t), s = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: e, methods: s };
}, Ee = (t) => t.default ? U("div", { ref: "root" }, t.default()) : null, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperProps: Ue,
  render: Ee,
  setupPopper: De
}, Symbol.toStringTag, { value: "Module" })), it = {
  ...Ue,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, ut = (t, o) => {
  const { options: e, methods: n } = De(t, o);
  return { options: e, methods: n };
}, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popupProps: it,
  setupPopup: ut
}, Symbol.toStringTag, { value: "Module" })), bo = S({
  name: "LPopup",
  props: it,
  setup(t, o) {
    const e = c(), n = c(null), s = O(h), r = y(Le), l = y(Oe), { options: a, methods: i } = ut(t, e);
    return _(async () => {
      const { popup: u } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(u(a)), t.latLng !== void 0 && e.value.setLatLng(t.latLng), L(i, e.value, t);
      const { listeners: d } = T(o.attrs);
      e.value.on(d), e.value.setContent(t.content || n.value || ""), r(e.value), g(() => o.emit("ready", e.value));
    }), R(() => {
      l();
    }), { root: n, leafletObject: e };
  },
  render() {
    return Ee(this.$slots);
  }
}), Fe = {
  ...x,
  latLngs: {
    ...x.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, ct = (t, o, e) => {
  const { options: n, methods: s } = ke(
    t,
    o,
    e
  ), r = f(
    t,
    Fe,
    n
  ), l = {
    ...s,
    setBounds(a) {
      o.value.setBounds(a);
    },
    setLatLngs(a) {
      o.value.setBounds(a);
    }
  };
  return { options: r, methods: l };
}, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  rectangleProps: Fe,
  setupRectangle: ct
}, Symbol.toStringTag, { value: "Module" })), fo = S({
  name: "LRectangle",
  props: Fe,
  setup(t, o) {
    const e = c(), n = c(!1), s = O(h), r = y(M), { options: l, methods: a } = ct(t, e, o);
    return _(async () => {
      const { rectangle: i, latLngBounds: u } = s ? v.L : await import("leaflet/dist/leaflet-src.esm"), d = t.bounds ? u(t.bounds) : u(t.latLngs || []);
      e.value = j(i(d, l));
      const { listeners: m } = T(o.attrs);
      e.value.on(m), L(a, e.value, t), r({
        ...t,
        ...a,
        leafletObject: e.value
      }), n.value = !0, g(() => o.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return I(this.ready, this.$slots);
  }
}), ue = {
  ...ae,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (t) => typeof t == "string" ? !0 : Array.isArray(t) ? t.every((o) => typeof o == "string") : !1
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  }
}, Ze = (t, o, e) => {
  const { options: n, methods: s } = Ae(t, o, e), r = f(
    t,
    ue,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTileLayer: Ze,
  tileLayerProps: ue
}, Symbol.toStringTag, { value: "Module" })), go = S({
  props: ue,
  setup(t, o) {
    const e = c(), n = O(h), s = y(M), { options: r, methods: l } = Ze(t, e, o);
    return _(async () => {
      const { tileLayer: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(a(t.url, r));
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), s({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), dt = {
  ...Ue
}, pt = (t, o) => {
  const { options: e, methods: n } = De(t, o), s = y(Se);
  return R(() => {
    s();
  }), { options: e, methods: n };
}, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTooltip: pt,
  tooltipProps: dt
}, Symbol.toStringTag, { value: "Module" })), Lo = S({
  name: "LTooltip",
  props: dt,
  setup(t, o) {
    const e = c(), n = c(null), s = O(h), r = y(he), { options: l, methods: a } = pt(t, e);
    return _(async () => {
      const { tooltip: i } = s ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(i(l)), L(a, e.value, t);
      const { listeners: u } = T(o.attrs);
      e.value.on(u), e.value.setContent(t.content || n.value || ""), r(e.value), g(() => o.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return Ee(this.$slots);
  }
}), He = {
  ...ue,
  layers: {
    type: String,
    required: !0
  },
  styles: {
    type: String
  },
  format: {
    type: String
  },
  transparent: {
    type: Boolean,
    default: void 0
  },
  version: {
    type: String
  },
  crs: {
    type: Object
  },
  uppercase: {
    type: Boolean,
    default: void 0
  }
}, yt = (t, o, e) => {
  const { options: n, methods: s } = Ze(t, o, e);
  return {
    options: f(
      t,
      He,
      n
    ),
    methods: {
      ...s
    }
  };
}, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupWMSTileLayer: yt,
  wmsTileLayerProps: He
}, Symbol.toStringTag, { value: "Module" })), ho = S({
  props: He,
  setup(t, o) {
    const e = c(), n = O(h), s = y(M), { options: r, methods: l } = yt(
      t,
      e,
      o
    );
    return _(async () => {
      const { tileLayer: a } = n ? v.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = j(
        a.wms(t.url, r)
      );
      const { listeners: i } = T(o.attrs);
      e.value.on(i), L(l, e.value, t), s({
        ...t,
        ...l,
        leafletObject: e.value
      }), g(() => o.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Circle: St,
  CircleMarker: Ot,
  Component: ft,
  Control: _t,
  ControlAttribution: jt,
  ControlLayers: Pt,
  ControlScale: Ct,
  ControlZoom: Tt,
  FeatureGroup: Bt,
  GeoJSON: wt,
  GridLayer: Gt,
  Icon: It,
  ImageOverlay: At,
  InteractiveLayer: Lt,
  Layer: gt,
  LayerGroup: Mt,
  Marker: Ut,
  Path: ht,
  Polygon: Et,
  Polyline: Dt,
  Popper: Ft,
  Popup: Zt,
  Rectangle: Ht,
  TileLayer: Wt,
  Tooltip: Jt,
  WmsTileLayer: qt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Oo as Functions,
  Xt as InjectionKeys,
  Yt as LCircle,
  xt as LCircleMarker,
  Rt as LControl,
  eo as LControlAttribution,
  to as LControlLayers,
  oo as LControlScale,
  no as LControlZoom,
  ro as LFeatureGroup,
  so as LGeoJson,
  ao as LGridLayer,
  lo as LIcon,
  io as LImageOverlay,
  co as LLayerGroup,
  po as LMap,
  yo as LMarker,
  mo as LPolygon,
  vo as LPolyline,
  bo as LPopup,
  fo as LRectangle,
  uo as LSVGOverlay,
  go as LTileLayer,
  Lo as LTooltip,
  ho as LWmsTileLayer,
  Qt as Utilities
};
