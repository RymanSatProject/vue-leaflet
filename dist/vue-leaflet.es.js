import { watch as tt, ref as h, provide as D, inject as G, onUnmounted as Le, h as Z, onBeforeUnmount as ne, defineComponent as I, onMounted as A, markRaw as U, nextTick as M, render as Ut, reactive as Nt, computed as ie } from "vue";
import zt from "leaflet";
const ge = (o, t) => {
  for (const e of Object.keys(t))
    o.on(e, t[e]);
}, Oe = (o) => {
  for (const t of Object.keys(o)) {
    const e = o[t];
    e && q(e.cancel) && e.cancel();
  }
}, rt = (o) => !o || typeof o.charAt != "function" ? o : o.charAt(0).toUpperCase() + o.slice(1), q = (o) => typeof o == "function", C = (o, t, e) => {
  for (const n in e) {
    const r = "set" + rt(n);
    o[r] ? tt(
      () => e[n],
      (s, i) => {
        o[r](s, i);
      }
    ) : t[r] && tt(
      () => e[n],
      (s) => {
        t[r](s);
      }
    );
  }
}, T = (o, t, e = {}) => {
  const n = { ...e };
  for (const r in o) {
    const s = t[r], i = o[r];
    s && (s && s.custom === !0 || i !== void 0 && (n[r] = i));
  }
  return n;
}, z = (o) => {
  const t = {}, e = {};
  for (const n in o)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const r = n.slice(2).toLocaleLowerCase();
      t[r] = o[n];
    } else
      e[n] = o[n];
  return { listeners: t, attrs: e };
}, st = async (o) => {
  const t = await Promise.all([
    import("leaflet/dist/images/marker-icon-2x.png"),
    import("leaflet/dist/images/marker-icon.png"),
    import("leaflet/dist/images/marker-shadow.png")
  ]);
  delete o.Default.prototype._getIconUrl, o.Default.mergeOptions({
    iconRetinaUrl: t[0].default,
    iconUrl: t[1].default,
    shadowUrl: t[2].default
  });
}, ee = (o) => {
  const t = h(
    (...n) => console.warn(`Method ${o} has been invoked without being replaced`)
  ), e = (...n) => t.value(...n);
  return e.wrapped = t, D(o, e), e;
}, te = (o, t) => o.wrapped.value = t, j = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, _ = (o) => {
  const t = G(o);
  if (t === void 0)
    throw new Error(
      `Attempt to inject ${o.description} before it was provided.`
    );
  return t;
}, Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WINDOW_OR_GLOBAL: j,
  assertInject: _,
  bindEventHandlers: ge,
  cancelDebounces: Oe,
  capitalizeFirstLetter: rt,
  isFunction: q,
  propsBinder: C,
  propsToLeafletOptions: T,
  provideLeafletWrapper: ee,
  remapEvents: z,
  resetWebpackIcon: st,
  updateLeafletWrapper: te
}, Symbol.toStringTag, { value: "Module" })), w = Symbol(
  "useGlobalLeaflet"
), $ = Symbol("addLayer"), re = Symbol("removeLayer"), H = Symbol(
  "registerControl"
), _e = Symbol(
  "registerLayerControl"
), Se = Symbol(
  "canSetParentHtml"
), Pe = Symbol("setParentHtml"), je = Symbol("setIcon"), Te = Symbol("bindPopup"), Me = Symbol("bindTooltip"), Ce = Symbol("unbindPopup"), we = Symbol("unbindTooltip"), Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLayerInjection: $,
  BindPopupInjection: Te,
  BindTooltipInjection: Me,
  CanSetParentHtmlInjection: Se,
  RegisterControlInjection: H,
  RegisterLayerControlInjection: _e,
  RemoveLayerInjection: re,
  SetIconInjection: je,
  SetParentHtmlInjection: Pe,
  UnbindPopupInjection: Ce,
  UnbindTooltipInjection: we,
  UseGlobalLeafletInjection: w
}, Symbol.toStringTag, { value: "Module" })), K = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, Y = (o) => ({ options: o.options, methods: {} }), $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  componentProps: K,
  setupComponent: Y
}, Symbol.toStringTag, { value: "Module" })), W = {
  ...K,
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
}, X = (o, t, e) => {
  const n = _($), r = _(re), { options: s, methods: i } = Y(o), a = T(
    o,
    W,
    s
  ), l = () => n({ leafletObject: t.value }), u = () => r({ leafletObject: t.value }), d = {
    ...i,
    setAttribution(c) {
      u(), t.value.options.attribution = c, o.visible && l();
    },
    setName() {
      u(), o.visible && l();
    },
    setLayerType() {
      u(), o.visible && l();
    },
    setVisible(c) {
      t.value && (c ? l() : u());
    },
    bindPopup(c) {
      if (!t.value || !q(t.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      t.value.bindPopup(c);
    },
    bindTooltip(c) {
      if (!t.value || !q(t.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      t.value.bindTooltip(c);
    },
    unbindTooltip() {
      t.value && (q(t.value.closeTooltip) && t.value.closeTooltip(), q(t.value.unbindTooltip) && t.value.unbindTooltip());
    },
    unbindPopup() {
      t.value && (q(t.value.closePopup) && t.value.closePopup(), q(t.value.unbindPopup) && t.value.unbindPopup());
    },
    updateVisibleProp(c) {
      e.emit("update:visible", c);
    }
  };
  return D(Te, d.bindPopup), D(Me, d.bindTooltip), D(Ce, d.unbindPopup), D(we, d.unbindTooltip), Le(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: a, methods: d };
}, x = (o, t) => {
  if (o && t.default)
    return Z("div", { style: { display: "none" } }, t.default());
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerProps: W,
  render: x,
  setupLayer: X
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  ...W,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, at = (o, t, e) => {
  const { options: n, methods: r } = X(
    o,
    t,
    e
  );
  return { options: T(
    o,
    Ge,
    n
  ), methods: r };
}, xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  interactiveLayerProps: Ge,
  setupInteractiveLayer: at
}, Symbol.toStringTag, { value: "Module" })), se = {
  ...Ge,
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
}, ce = (o, t, e) => {
  const { options: n, methods: r } = at(o, t, e), s = T(
    o,
    se,
    n
  ), i = _(re), a = {
    ...r,
    setStroke(l) {
      t.value.setStyle({ stroke: l });
    },
    setColor(l) {
      t.value.setStyle({ color: l });
    },
    setWeight(l) {
      t.value.setStyle({ weight: l });
    },
    setOpacity(l) {
      t.value.setStyle({ opacity: l });
    },
    setLineCap(l) {
      t.value.setStyle({ lineCap: l });
    },
    setLineJoin(l) {
      t.value.setStyle({ lineJoin: l });
    },
    setDashArray(l) {
      t.value.setStyle({ dashArray: l });
    },
    setDashOffset(l) {
      t.value.setStyle({ dashOffset: l });
    },
    setFill(l) {
      t.value.setStyle({ fill: l });
    },
    setFillColor(l) {
      t.value.setStyle({ fillColor: l });
    },
    setFillOpacity(l) {
      t.value.setStyle({ fillOpacity: l });
    },
    setFillRule(l) {
      t.value.setStyle({ fillRule: l });
    },
    setClassName(l) {
      t.value.setStyle({ className: l });
    }
  };
  return ne(() => {
    i({ leafletObject: t.value });
  }), { options: s, methods: a };
}, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pathProps: se,
  setupPath: ce
}, Symbol.toStringTag, { value: "Module" })), de = {
  ...se,
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
}, Ie = (o, t, e) => {
  const { options: n, methods: r } = ce(
    o,
    t,
    e
  ), s = T(
    o,
    de,
    n
  ), i = {
    ...r,
    setRadius(a) {
      t.value.setRadius(a);
    },
    setLatLng(a) {
      t.value.setLatLng(a);
    }
  };
  return { options: s, methods: i };
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleMarkerProps: de,
  setupCircleMarker: Ie
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  ...de,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, it = (o, t, e) => {
  const { options: n, methods: r } = Ie(o, t, e), s = T(
    o,
    Ae,
    n
  ), i = {
    ...r
  };
  return { options: s, methods: i };
}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circleProps: Ae,
  setupCircle: it
}, Symbol.toStringTag, { value: "Module" })), _o = I({
  name: "LCircle",
  props: Ae,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = it(o, e, t);
    return A(async () => {
      const { circle: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(l(o.latLng, i));
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), So = I({
  name: "LCircleMarker",
  props: de,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = Ie(
      o,
      e,
      t
    );
    return A(async () => {
      const { circleMarker: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        l(o.latLng, i)
      );
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), J = {
  ...K,
  position: {
    type: String
  }
}, V = (o, t) => {
  const { options: e, methods: n } = Y(o), r = T(
    o,
    J,
    e
  ), s = {
    ...n,
    setPosition(i) {
      t.value && t.value.setPosition(i);
    }
  };
  return Le(() => {
    t.value && t.value.remove();
  }), { options: r, methods: s };
}, lt = (o) => o.default ? Z("div", { ref: "root" }, o.default()) : null, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlProps: J,
  renderLControl: lt,
  setupControl: V
}, Symbol.toStringTag, { value: "Module" })), Po = I({
  name: "LControl",
  props: {
    ...J,
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
  setup(o, t) {
    const e = h(), n = h(), r = G(w), s = _(H), { options: i, methods: a } = V(o, e);
    return A(async () => {
      const { Control: l, DomEvent: u } = r ? j.L : await import("leaflet/dist/leaflet-src.esm"), d = l.extend({
        onAdd() {
          return n.value;
        }
      });
      e.value = U(new d(i)), C(a, e.value, o), s({ leafletObject: e.value }), o.disableClickPropagation && n.value && u.disableClickPropagation(n.value), o.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), M(() => t.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return lt(this.$slots);
  }
}), Be = {
  ...J,
  prefix: {
    type: String
  }
}, ut = (o, t) => {
  const { options: e, methods: n } = V(
    o,
    t
  ), r = T(
    o,
    Be,
    e
  ), s = {
    ...n,
    setPrefix(i) {
      t.value.setPrefix(i);
    }
  };
  return { options: r, methods: s };
}, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlAttributionProps: Be,
  setupControlAttribution: ut
}, Symbol.toStringTag, { value: "Module" })), jo = I({
  name: "LControlAttribution",
  props: Be,
  setup(o, t) {
    const e = h(), n = G(w), r = _(H), { options: s, methods: i } = ut(o, e);
    return A(async () => {
      const { control: a } = n ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        a.attribution(s)
      ), C(i, e.value, o), r({ leafletObject: e.value }), M(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Ue = {
  ...J,
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
}, ct = (o, t) => {
  const { options: e } = V(o, t);
  return { options: T(
    o,
    Ue,
    e
  ), methods: {
    addLayer(s) {
      s.layerType === "base" ? t.value.addBaseLayer(s.leafletObject, s.name) : s.layerType === "overlay" && t.value.addOverlay(s.leafletObject, s.name);
    },
    removeLayer(s) {
      t.value.removeLayer(s.leafletObject);
    }
  } };
}, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlLayersProps: Ue,
  setupControlLayers: ct
}, Symbol.toStringTag, { value: "Module" })), To = I({
  name: "LControlLayers",
  props: Ue,
  setup(o, t) {
    const e = h(), n = G(w), r = _(_e), { options: s, methods: i } = ct(o, e);
    return A(async () => {
      const { control: a } = n ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        a.layers(void 0, void 0, s)
      ), C(i, e.value, o), r({
        ...o,
        ...i,
        leafletObject: e.value
      }), M(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Ne = {
  ...J,
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
}, dt = (o, t) => {
  const { options: e, methods: n } = V(
    o,
    t
  );
  return { options: T(
    o,
    Ne,
    e
  ), methods: n };
}, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlScaleProps: Ne,
  setupControlScale: dt
}, Symbol.toStringTag, { value: "Module" })), Mo = I({
  name: "LControlScale",
  props: Ne,
  setup(o, t) {
    const e = h(), n = G(w), r = _(H), { options: s, methods: i } = dt(o, e);
    return A(async () => {
      const { control: a } = n ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(a.scale(s)), C(i, e.value, o), r({ leafletObject: e.value }), M(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), ze = {
  ...J,
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
}, yt = (o, t) => {
  const { options: e, methods: n } = V(
    o,
    t
  );
  return { options: T(
    o,
    ze,
    e
  ), methods: n };
}, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  controlZoomProps: ze,
  setupControlZoom: yt
}, Symbol.toStringTag, { value: "Module" })), Co = I({
  name: "LControlZoom",
  props: ze,
  setup(o, t) {
    const e = h(), n = G(w), r = _(H), { options: s, methods: i } = yt(o, e);
    return A(async () => {
      const { control: a } = n ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(a.zoom(s)), C(i, e.value, o), r({ leafletObject: e.value }), M(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), ae = {
  ...W
}, ye = (o, t, e) => {
  const { options: n, methods: r } = X(
    o,
    t,
    e
  ), s = T(
    o,
    ae,
    n
  ), i = {
    ...r,
    addLayer(a) {
      t.value.addLayer(a.leafletObject);
    },
    removeLayer(a) {
      t.value.removeLayer(a.leafletObject);
    }
  };
  return D($, i.addLayer), D(re, i.removeLayer), { options: s, methods: i };
}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  layerGroupProps: ae,
  setupLayerGroup: ye
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...ae
}, pt = (o, t, e) => {
  const { options: n, methods: r } = ye(
    o,
    t,
    e
  ), s = T(
    o,
    $e,
    n
  ), i = {
    ...r
  };
  return { options: s, methods: i };
}, Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  featureGroupProps: $e,
  setupFeatureGroup: pt
}, Symbol.toStringTag, { value: "Module" })), wo = I({
  props: $e,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { methods: i, options: a } = pt(
      o,
      e,
      t
    );
    return A(async () => {
      const { featureGroup: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        l(void 0, a)
      );
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(i, e.value, o), s({
        ...o,
        ...i,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), ke = {
  ...ae,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, ft = (o, t, e) => {
  const { options: n, methods: r } = ye(
    o,
    t,
    e
  ), s = T(
    o,
    ke,
    n
  );
  Object.prototype.hasOwnProperty.call(o, "optionsStyle") && (s.style = o.optionsStyle);
  const i = {
    ...r,
    setGeojson(a) {
      t.value.clearLayers(), t.value.addData(a);
    },
    setOptionsStyle(a) {
      t.value.setStyle(a);
    },
    getGeoJSONData() {
      return t.value.toGeoJSON();
    },
    getBounds() {
      return t.value.getBounds();
    }
  };
  return { options: s, methods: i };
}, Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  geoJSONProps: ke,
  setupGeoJSON: ft
}, Symbol.toStringTag, { value: "Module" })), Go = I({
  props: ke,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { methods: i, options: a } = ft(o, e, t);
    return A(async () => {
      const { geoJSON: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(l(o.geojson, a));
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(i, e.value, o), s({
        ...o,
        ...i,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), pe = {
  ...W,
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
}, xe = (o, t, e) => {
  const { options: n, methods: r } = X(
    o,
    t,
    e
  ), s = T(
    o,
    pe,
    n
  ), i = {
    ...r,
    setTileComponent() {
      var a;
      (a = t.value) == null || a.redraw();
    }
  };
  return Le(() => {
    t.value.off();
  }), { options: s, methods: i };
}, mt = (o, t, e, n) => o.extend({
  initialize(r) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, r);
  },
  createTile(r) {
    const s = this._tileCoordsToKey(r);
    this.tileComponents[s] = t.create("div");
    const i = Z({ setup: n, props: ["coords"] }, { coords: r });
    return Ut(i, this.tileComponents[s]), this.tileComponents[s];
  },
  _unloadTile(r) {
    const s = this._tileCoordsToKey(r.coords);
    this.tileComponents[s] && (this.tileComponents[s].innerHTML = "", this.tileComponents[s] = void 0);
  }
}), Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CreateVueGridLayer: mt,
  gridLayerProps: pe,
  setupGridLayer: xe
}, Symbol.toStringTag, { value: "Module" })), Io = I({
  props: {
    ...pe,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(o, t) {
    const e = h(), n = h(null), r = h(!1), s = G(w), i = _($), { options: a, methods: l } = xe(o, e, t);
    return A(async () => {
      const { GridLayer: u, DomUtil: d, Util: c } = s ? j.L : await import("leaflet/dist/leaflet-src.esm"), y = mt(
        u,
        d,
        c,
        o.childRender
      );
      e.value = U(new y(a));
      const { listeners: p } = z(t.attrs);
      e.value.on(p), C(l, e.value, o), i({
        ...o,
        ...l,
        leafletObject: e.value
      }), r.value = !0, M(() => t.emit("ready", e.value));
    }), { root: n, ready: r, leafletObject: e };
  },
  render() {
    return this.ready ? Z("div", { style: { display: "none" }, ref: "root" }) : null;
  }
}), be = {
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
}, Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  iconProps: be
}, Symbol.toStringTag, { value: "Module" })), Ao = I({
  name: "LIcon",
  props: {
    ...be,
    ...K
  },
  setup(o, t) {
    const e = h(), n = G(w), r = _(Se), s = _(Pe), i = _(je);
    let a, l, u, d, c;
    const y = (O, v, g) => {
      const k = O && O.innerHTML;
      if (!v) {
        g && c && r() && s(k);
        return;
      }
      const { listeners: E } = z(t.attrs);
      c && l(c, E);
      const { options: Q } = Y(o), S = T(
        o,
        be,
        Q
      );
      k && (S.html = k), c = S.html ? u(S) : d(S), a(c, E), i(c);
    }, p = () => {
      M(() => y(e.value, !0, !1));
    }, m = () => {
      M(() => y(e.value, !1, !0));
    }, B = {
      setIconUrl: p,
      setIconRetinaUrl: p,
      setIconSize: p,
      setIconAnchor: p,
      setPopupAnchor: p,
      setTooltipAnchor: p,
      setShadowUrl: p,
      setShadowRetinaUrl: p,
      setShadowAnchor: p,
      setBgPos: p,
      setClassName: p,
      setHtml: p
    };
    return A(async () => {
      const {
        DomEvent: O,
        divIcon: v,
        icon: g
      } = n ? j.L : await import("leaflet/dist/leaflet-src.esm");
      a = O.on, l = O.off, u = v, d = g, C(B, {}, o), new MutationObserver(m).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), p();
    }), { root: e };
  },
  render() {
    const o = this.$slots.default ? this.$slots.default() : void 0;
    return Z("div", { ref: "root" }, o);
  }
}), fe = {
  ...W,
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
}, Fe = (o, t, e) => {
  const { options: n, methods: r } = X(
    o,
    t,
    e
  ), s = T(
    o,
    fe,
    n
  ), i = {
    ...r,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(a) {
      return t.value.setOpacity(a);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(a) {
      return t.value.setUrl(a);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(a) {
      return t.value.setBounds(a);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return t.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return t.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return t.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return t.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(a) {
      return t.value.setZIndex(a);
    }
  };
  return { options: s, methods: i };
}, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  imageOverlayProps: fe,
  setupImageOverlay: Fe
}, Symbol.toStringTag, { value: "Module" })), Bo = I({
  name: "LImageOverlay",
  props: fe,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = Fe(
      o,
      e,
      t
    );
    return A(async () => {
      const { imageOverlay: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        l(o.url, o.bounds, i)
      );
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), ht = {
  ...fe,
  url: {
    type: [SVGElement, String],
    required: !0,
    custom: !0
  }
}, eo = (o, t, e) => {
  const { options: n, methods: r } = Fe(o, t, e), s = T(
    o,
    ht,
    n
  ), i = {
    ...r,
    /**
     * Returns the instance of SVGElement used by this overlay.
     * @returns {SVGElement}
     */
    getElement() {
      return t.value.getElement();
    }
  };
  return { options: s, methods: i };
}, Uo = I({
  name: "LSVGOverlay",
  props: ht,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = eo(o, e, t);
    return A(async () => {
      const { svgOverlay: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        l(o.url, o.bounds, i)
      );
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), No = I({
  props: ae,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { methods: i } = ye(o, e, t);
    return A(async () => {
      const { layerGroup: a } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        a(void 0, o.options)
      );
      const { listeners: l } = z(t.attrs);
      e.value.on(l), C(i, e.value, o), s({
        ...o,
        ...i,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
});
function vt(o, t, e) {
  var n, r, s;
  t === void 0 && (t = 50), e === void 0 && (e = {});
  var i = (n = e.isImmediate) != null && n, a = (r = e.callback) != null && r, l = e.maxWait, u = Date.now(), d = [];
  function c() {
    if (l !== void 0) {
      var p = Date.now() - u;
      if (p + t >= l)
        return l - p;
    }
    return t;
  }
  var y = function() {
    var p = [].slice.call(arguments), m = this;
    return new Promise(function(B, O) {
      var v = i && s === void 0;
      if (s !== void 0 && clearTimeout(s), s = setTimeout(function() {
        if (s = void 0, u = Date.now(), !i) {
          var k = o.apply(m, p);
          a && a(k), d.forEach(function(E) {
            return (0, E.resolve)(k);
          }), d = [];
        }
      }, c()), v) {
        var g = o.apply(m, p);
        return a && a(g), B(g);
      }
      d.push({ resolve: B, reject: O });
    });
  };
  return y.cancel = function(p) {
    s !== void 0 && clearTimeout(s), d.forEach(function(m) {
      return (0, m.reject)(p);
    }), d = [];
  }, y;
}
const ot = {
  ...K,
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
}, zo = I({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: ot,
  setup(o, t) {
    const e = h(), n = Nt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: r } = Y(o), s = T(
      o,
      ot,
      r
    ), { listeners: i, attrs: a } = z(t.attrs), l = ee($), u = ee(re), d = ee(H), c = ee(
      _e
    );
    D(w, o.useGlobalLeaflet);
    const y = ie(() => {
      const v = {};
      return o.noBlockingAnimations && (v.animate = !1), v;
    }), p = ie(() => {
      const v = y.value;
      return o.padding && (v.padding = o.padding), o.paddingTopLeft && (v.paddingTopLeft = o.paddingTopLeft), o.paddingBottomRight && (v.paddingBottomRight = o.paddingBottomRight), v;
    }), m = {
      moveend: vt((v) => {
        n.leafletRef && (t.emit("update:zoom", n.leafletRef.getZoom()), t.emit("update:center", n.leafletRef.getCenter()), t.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(v) {
        const g = n.layersInControl.find((k) => k.name === v.name);
        g && g.updateVisibleProp(!0);
      },
      overlayremove(v) {
        const g = n.layersInControl.find((k) => k.name === v.name);
        g && g.updateVisibleProp(!1);
      }
    };
    A(async () => {
      o.useGlobalLeaflet && (j.L = j.L || await import("leaflet"));
      const { map: v, CRS: g, Icon: k, latLngBounds: E, latLng: Q, stamp: S } = o.useGlobalLeaflet ? j.L : await import("leaflet/dist/leaflet-src.esm");
      try {
        s.beforeMapMount && await s.beforeMapMount();
      } catch (f) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${f.message}`
        );
      }
      await st(k);
      const b = typeof s.crs == "string" ? g[s.crs] : s.crs;
      s.crs = b || g.EPSG3857;
      const N = {
        addLayer(f) {
          f.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(f) : n.layersInControl.find(
            (F) => S(F.leafletObject) === S(f.leafletObject)
          ) || (n.layerControl.addLayer(f), n.layersInControl.push(f))), f.visible !== !1 && n.leafletRef.addLayer(f.leafletObject);
        },
        removeLayer(f) {
          f.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (P) => P.name !== f.name
          ) : (n.layerControl.removeLayer(f.leafletObject), n.layersInControl = n.layersInControl.filter(
            (P) => S(P.leafletObject) !== S(f.leafletObject)
          ))), n.leafletRef.removeLayer(f.leafletObject);
        },
        registerLayerControl(f) {
          n.layerControl = f, n.layersToAdd.forEach((P) => {
            n.layerControl.addLayer(P);
          }), n.layersToAdd = [], d(f);
        },
        registerControl(f) {
          n.leafletRef.addControl(f.leafletObject);
        },
        setZoom(f) {
          const P = n.leafletRef.getZoom();
          f !== P && n.leafletRef.setZoom(f, y.value);
        },
        setCrs(f) {
          const P = n.leafletRef.getBounds();
          n.leafletRef.options.crs = f, n.leafletRef.fitBounds(P, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(f) {
          n.leafletRef.fitBounds(f, p.value);
        },
        setBounds(f) {
          if (!f)
            return;
          const P = E(f);
          if (!P.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(P, 0) && (n.lastSetBounds = P, n.leafletRef.fitBounds(P));
        },
        setCenter(f) {
          if (f == null)
            return;
          const P = Q(f), F = n.lastSetCenter || n.leafletRef.getCenter();
          (F.lat !== P.lat || F.lng !== P.lng) && (n.lastSetCenter = P, n.leafletRef.panTo(P, y.value));
        }
      };
      te(l, N.addLayer), te(u, N.removeLayer), te(d, N.registerControl), te(c, N.registerLayerControl), n.leafletRef = U(v(e.value, s)), C(N, n.leafletRef, o), ge(n.leafletRef, m), ge(n.leafletRef, i), n.ready = !0, M(() => t.emit("ready", n.leafletRef));
    }), ne(() => {
      Oe(m), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const B = ie(() => n.leafletRef), O = ie(() => n.ready);
    return { root: e, ready: O, leafletObject: B, attrs: a };
  },
  render({ attrs: o }) {
    return o.style || (o.style = {}), o.style.width || (o.style.width = "100%"), o.style.height || (o.style.height = "100%"), Z(
      "div",
      {
        ...o,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), to = ["Symbol(Comment)", "Symbol(Text)"], oo = ["LTooltip", "LPopup"], De = {
  ...W,
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
}, gt = (o, t, e) => {
  const { options: n, methods: r } = X(
    o,
    t,
    e
  ), s = T(
    o,
    De,
    n
  ), i = {
    ...r,
    setDraggable(a) {
      t.value.dragging && (a ? t.value.dragging.enable() : t.value.dragging.disable());
    },
    latLngSync(a) {
      e.emit("update:latLng", a.latlng), e.emit("update:lat-lng", a.latlng);
    },
    setLatLng(a) {
      if (a != null && t.value) {
        const l = t.value.getLatLng();
        (!l || !l.equals(a)) && t.value.setLatLng(a);
      }
    }
  };
  return { options: s, methods: i };
}, bt = (o, t) => {
  const e = t.slots.default && t.slots.default();
  return e && e.length && e.some(no);
};
function no(o) {
  return !(to.includes(o.type.toString()) || oo.includes(o.type.name));
}
const ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  markerProps: De,
  setupMarker: gt,
  shouldBlankIcon: bt
}, Symbol.toStringTag, { value: "Module" })), $o = I({
  name: "LMarker",
  props: De,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($);
    D(
      Se,
      () => {
        var u;
        return !!((u = e.value) != null && u.getElement());
      }
    ), D(Pe, (u) => {
      var c, y;
      const d = q((c = e.value) == null ? void 0 : c.getElement) && ((y = e.value) == null ? void 0 : y.getElement());
      d && (d.innerHTML = u);
    }), D(
      je,
      (u) => {
        var d;
        return ((d = e.value) == null ? void 0 : d.setIcon) && e.value.setIcon(u);
      }
    );
    const { options: i, methods: a } = gt(o, e, t), l = {
      moveHandler: vt(a.latLngSync)
    };
    return A(async () => {
      const { marker: u, divIcon: d } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      bt(i, t) && (i.icon = d({ className: "" })), e.value = U(u(o.latLng, i));
      const { listeners: c } = z(t.attrs);
      e.value.on(c), e.value.on("move", l.moveHandler), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), ne(() => Oe(l)), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), me = {
  ...se,
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
}, Ee = (o, t, e) => {
  const { options: n, methods: r } = ce(
    o,
    t,
    e
  ), s = T(
    o,
    me,
    n
  ), i = {
    ...r,
    setSmoothFactor(a) {
      t.value.setStyle({ smoothFactor: a });
    },
    setNoClip(a) {
      t.value.setStyle({ noClip: a });
    },
    addLatLng(a) {
      t.value.addLatLng(a);
    }
  };
  return { options: s, methods: i };
}, so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polylineProps: me,
  setupPolyline: Ee
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ...me
}, qe = (o, t, e) => {
  const { options: n, methods: r } = Ee(
    o,
    t,
    e
  ), s = T(
    o,
    oe,
    n
  ), i = {
    ...r,
    toGeoJSON(a) {
      return t.value.toGeoJSON(a);
    }
  };
  return { options: s, methods: i };
}, ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polygonProps: oe,
  setupPolygon: qe
}, Symbol.toStringTag, { value: "Module" })), ko = I({
  name: "LPolygon",
  props: oe,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = qe(o, e, t);
    return A(async () => {
      const { polygon: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(l(o.latLngs, i));
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), xo = I({
  name: "LPolyline",
  props: me,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = Ee(o, e, t);
    return A(async () => {
      const { polyline: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        l(o.latLngs, i)
      );
      const { listeners: u } = z(t.attrs);
      e.value.on(u), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
});
var io = { exports: {} };
(function(o) {
  (function(t) {
    var e;
    e = zt, o.exports = t(e);
  })(function(t) {
    return t.Polyline._flat = t.LineUtil.isFlat || t.Polyline._flat || function(e) {
      return !t.Util.isArray(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
    }, t.GeometryUtil = t.extend(t.GeometryUtil || {}, {
      /**
      	        Shortcut function for planar distance between two {L.LatLng} at current zoom.
      
      	        @tutorial distance-length
      
      	        @param {L.Map} map Leaflet map to be used for this method
      	        @param {L.LatLng} latlngA geographical point A
      	        @param {L.LatLng} latlngB geographical point B
      	        @returns {Number} planar distance
      	     */
      distance: function(e, n, r) {
        return e.latLngToLayerPoint(n).distanceTo(e.latLngToLayerPoint(r));
      },
      /**
          Shortcut function for planar distance between a {L.LatLng} and a segment (A-B).
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.LatLng} latlng - The position to search
          @param {L.LatLng} latlngA geographical point A of the segment
          @param {L.LatLng} latlngB geographical point B of the segment
          @returns {Number} planar distance
      */
      distanceSegment: function(e, n, r, s) {
        var i = e.latLngToLayerPoint(n), a = e.latLngToLayerPoint(r), l = e.latLngToLayerPoint(s);
        return t.LineUtil.pointToSegmentDistance(i, a, l);
      },
      /**
          Shortcut function for converting distance to readable distance.
          @param {Number} distance distance to be converted
          @param {String} unit 'metric' or 'imperial'
          @returns {String} in yard or miles
      */
      readableDistance: function(e, n) {
        var r = n !== "imperial", s;
        return r ? e > 1e3 ? s = (e / 1e3).toFixed(2) + " km" : s = e.toFixed(1) + " m" : (e *= 1.09361, e > 1760 ? s = (e / 1760).toFixed(2) + " miles" : s = e.toFixed(1) + " yd"), s;
      },
      /**
          Returns true if the latlng belongs to segment A-B
          @param {L.LatLng} latlng - The position to search
          @param {L.LatLng} latlngA geographical point A of the segment
          @param {L.LatLng} latlngB geographical point B of the segment
          @param {?Number} [tolerance=0.2] tolerance to accept if latlng belongs really
          @returns {boolean}
       */
      belongsSegment: function(e, n, r, s) {
        s = s === void 0 ? 0.2 : s;
        var i = n.distanceTo(r), a = n.distanceTo(e) + e.distanceTo(r) - i;
        return a / i < s;
      },
      /**
       * Returns total length of line
       * @tutorial distance-length
       *
       * @param {L.Polyline|Array<L.Point>|Array<L.LatLng>} coords Set of coordinates
       * @returns {Number} Total length (pixels for Point, meters for LatLng)
       */
      length: function(e) {
        var n = t.GeometryUtil.accumulatedLengths(e);
        return n.length > 0 ? n[n.length - 1] : 0;
      },
      /**
       * Returns a list of accumulated length along a line.
       * @param {L.Polyline|Array<L.Point>|Array<L.LatLng>} coords Set of coordinates
       * @returns {Array<Number>} Array of accumulated lengths (pixels for Point, meters for LatLng)
       */
      accumulatedLengths: function(e) {
        if (typeof e.getLatLngs == "function" && (e = e.getLatLngs()), e.length === 0)
          return [];
        for (var n = 0, r = [0], s = 0, i = e.length - 1; s < i; s++)
          n += e[s].distanceTo(e[s + 1]), r.push(n);
        return r;
      },
      /**
      	        Returns the closest point of a {L.LatLng} on the segment (A-B)
      
      	        @tutorial closest
      
      	        @param {L.Map} map Leaflet map to be used for this method
      	        @param {L.LatLng} latlng - The position to search
      	        @param {L.LatLng} latlngA geographical point A of the segment
      	        @param {L.LatLng} latlngB geographical point B of the segment
      	        @returns {L.LatLng} Closest geographical point
      	    */
      closestOnSegment: function(e, n, r, s) {
        var i = e.getMaxZoom();
        i === 1 / 0 && (i = e.getZoom());
        var a = e.project(n, i), l = e.project(r, i), u = e.project(s, i), d = t.LineUtil.closestPointOnSegment(a, l, u);
        return e.unproject(d, i);
      },
      /**
      	    Returns the closest point of a {L.LatLng} on a {L.Circle}
      
      	    @tutorial closest
      
      	    @param {L.LatLng} latlng - The position to search
      	    @param {L.Circle} circle - A Circle defined by a center and a radius
      	    @returns {L.LatLng} Closest geographical point on the circle circumference
      	    */
      closestOnCircle: function(e, n) {
        const r = e.getLatLng(), s = e.getRadius(), i = typeof s == "number" ? s : s.radius, a = n.lng, l = n.lat, u = r.lng, d = r.lat, c = a - u, y = l - d, p = Math.sqrt(c * c + y * y), m = u + c / p * i, B = d + y / p * i;
        return new t.LatLng(B, m);
      },
      /**
      	        Returns the closest latlng on layer.
      
      	        Accept nested arrays
      
      	        @tutorial closest
      
      	        @param {L.Map} map Leaflet map to be used for this method
      	        @param {Array<L.LatLng>|Array<Array<L.LatLng>>|L.PolyLine|L.Polygon} layer - Layer that contains the result
      	        @param {L.LatLng} latlng - The position to search
      	        @param {?boolean} [vertices=false] - Whether to restrict to path vertices.
      	        @returns {L.LatLng} Closest geographical point or null if layer param is incorrect
      	    */
      closest: function(e, n, r, s) {
        var i, a = 1 / 0, l = null, u, d, c, y;
        if (n instanceof Array)
          if (n[0] instanceof Array && typeof n[0][0] != "number") {
            for (u = 0; u < n.length; u++)
              y = t.GeometryUtil.closest(e, n[u], r, s), y && y.distance < a && (a = y.distance, l = y);
            return l;
          } else if (n[0] instanceof t.LatLng || typeof n[0][0] == "number" || typeof n[0].lat == "number")
            n = t.polyline(n);
          else
            return l;
        if (!(n instanceof t.Polyline))
          return l;
        if (i = JSON.parse(JSON.stringify(n.getLatLngs().slice(0))), n instanceof t.Polygon) {
          var p = function(v) {
            if (t.Polyline._flat(v))
              v.push(v[0]);
            else
              for (var g = 0; g < v.length; g++)
                p(v[g]);
          };
          p(i);
        }
        if (t.Polyline._flat(i)) {
          if (s) {
            for (u = 0, d = i.length; u < d; u++) {
              var m = i[u];
              c = t.GeometryUtil.distance(e, r, m), c < a && (a = c, l = m, l.distance = c);
            }
            return l;
          }
          for (u = 0, d = i.length; u < d - 1; u++) {
            var B = i[u], O = i[u + 1];
            c = t.GeometryUtil.distanceSegment(e, r, B, O), c <= a && (a = c, l = t.GeometryUtil.closestOnSegment(e, r, B, O), l.distance = c);
          }
          return l;
        } else {
          for (u = 0; u < i.length; u++)
            y = t.GeometryUtil.closest(e, i[u], r, s), y.distance < a && (a = y.distance, l = y);
          return l;
        }
      },
      /**
      	        Returns the closest layer to latlng among a list of layers.
      
      	        @tutorial closest
      
      	        @param {L.Map} map Leaflet map to be used for this method
      	        @param {Array<L.ILayer>} layers Set of layers
      	        @param {L.LatLng} latlng - The position to search
      	        @returns {object} ``{layer, latlng, distance}`` or ``null`` if list is empty;
      	    */
      closestLayer: function(e, n, r) {
        for (var s = 1 / 0, i = null, a = null, l = 1 / 0, u = 0, d = n.length; u < d; u++) {
          var c = n[u];
          if (c instanceof t.LayerGroup) {
            var y = t.GeometryUtil.closestLayer(e, c.getLayers(), r);
            y.distance < s && (s = y.distance, i = y);
          } else
            c instanceof t.Circle ? (a = this.closestOnCircle(c, r), l = t.GeometryUtil.distance(e, r, a)) : typeof c.getLatLng == "function" ? (a = c.getLatLng(), l = t.GeometryUtil.distance(e, r, a)) : (a = t.GeometryUtil.closest(e, c, r), a && (l = a.distance)), l < s && (s = l, i = { layer: c, latlng: a, distance: l });
        }
        return i;
      },
      /**
      	        Returns the n closest layers to latlng among a list of input layers.
      
      	        @param {L.Map} map - Leaflet map to be used for this method
      	        @param {Array<L.ILayer>} layers - Set of layers
      	        @param {L.LatLng} latlng - The position to search
      	        @param {?Number} [n=layers.length] - the expected number of output layers.
      	        @returns {Array<object>} an array of objects ``{layer, latlng, distance}`` or ``null`` if the input is invalid (empty list or negative n)
      	    */
      nClosestLayers: function(e, n, r, s) {
        if (s = typeof s == "number" ? s : n.length, s < 1 || n.length < 1)
          return null;
        for (var i = [], a, l, u = 0, d = n.length; u < d; u++) {
          var c = n[u];
          if (c instanceof t.LayerGroup) {
            var y = t.GeometryUtil.closestLayer(e, c.getLayers(), r);
            i.push(y);
          } else
            c instanceof t.Circle ? (l = this.closestOnCircle(c, r), a = t.GeometryUtil.distance(e, r, l)) : typeof c.getLatLng == "function" ? (l = c.getLatLng(), a = t.GeometryUtil.distance(e, r, l)) : (l = t.GeometryUtil.closest(e, c, r), l && (a = l.distance)), i.push({ layer: c, latlng: l, distance: a });
        }
        return i.sort(function(p, m) {
          return p.distance - m.distance;
        }), i.length > s ? i.slice(0, s) : i;
      },
      /**
       * Returns all layers within a radius of the given position, in an ascending order of distance.
         @param {L.Map} map Leaflet map to be used for this method
         @param {Array<ILayer>} layers - A list of layers.
         @param {L.LatLng} latlng - The position to search
         @param {?Number} [radius=Infinity] - Search radius in pixels
         @return {object[]} an array of objects including layer within the radius, closest latlng, and distance
       */
      layersWithin: function(e, n, r, s) {
        s = typeof s == "number" ? s : 1 / 0;
        for (var i = [], a = null, l = 0, u = 0, d = n.length; u < d; u++) {
          var c = n[u];
          typeof c.getLatLng == "function" ? (a = c.getLatLng(), l = t.GeometryUtil.distance(e, r, a)) : (a = t.GeometryUtil.closest(e, c, r), a && (l = a.distance)), a && l < s && i.push({ layer: c, latlng: a, distance: l });
        }
        var y = i.sort(function(p, m) {
          return p.distance - m.distance;
        });
        return y;
      },
      /**
      	        Returns the closest position from specified {LatLng} among specified layers,
      	        with a maximum tolerance in pixels, providing snapping behaviour.
      
      	        @tutorial closest
      
      	        @param {L.Map} map Leaflet map to be used for this method
      	        @param {Array<ILayer>} layers - A list of layers to snap on.
      	        @param {L.LatLng} latlng - The position to snap
      	        @param {?Number} [tolerance=Infinity] - Maximum number of pixels.
      	        @param {?boolean} [withVertices=true] - Snap to layers vertices or segment points (not only vertex)
      	        @returns {object} with snapped {LatLng} and snapped {Layer} or null if tolerance exceeded.
      	    */
      closestLayerSnap: function(e, n, r, s, i) {
        s = typeof s == "number" ? s : 1 / 0, i = typeof i == "boolean" ? i : !0;
        var a = t.GeometryUtil.closestLayer(e, n, r);
        if (!a || a.distance > s)
          return null;
        if (i && typeof a.layer.getLatLngs == "function") {
          var l = t.GeometryUtil.closest(e, a.layer, a.latlng, !0);
          l.distance < s && (a.latlng = l, a.distance = t.GeometryUtil.distance(e, l, r));
        }
        return a;
      },
      /**
          Returns the Point located on a segment at the specified ratio of the segment length.
          @param {L.Point} pA coordinates of point A
          @param {L.Point} pB coordinates of point B
          @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.
          @returns {L.Point} the interpolated point.
      */
      interpolateOnPointSegment: function(e, n, r) {
        return t.point(
          e.x * (1 - r) + r * n.x,
          e.y * (1 - r) + r * n.y
        );
      },
      /**
          Returns the coordinate of the point located on a line at the specified ratio of the line length.
          @param {L.Map} map Leaflet map to be used for this method
          @param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points
          @param {Number} ratio the length ratio, expressed as a decimal between 0 and 1, inclusive
          @returns {Object} an object with latLng ({LatLng}) and predecessor ({Number}), the index of the preceding vertex in the Polyline
          (-1 if the interpolated point is the first vertex)
      */
      interpolateOnLine: function(e, n, r) {
        n = n instanceof t.Polyline ? n.getLatLngs() : n;
        var s = n.length;
        if (s < 2)
          return null;
        if (r = Math.max(Math.min(r, 1), 0), r === 0)
          return {
            latLng: n[0] instanceof t.LatLng ? n[0] : t.latLng(n[0]),
            predecessor: -1
          };
        if (r == 1)
          return {
            latLng: n[n.length - 1] instanceof t.LatLng ? n[n.length - 1] : t.latLng(n[n.length - 1]),
            predecessor: n.length - 2
          };
        var i = e.getMaxZoom();
        i === 1 / 0 && (i = e.getZoom());
        for (var a = [], l = 0, u = 0; u < s; u++)
          a[u] = e.project(n[u], i), u > 0 && (l += a[u - 1].distanceTo(a[u]));
        for (var d = l * r, c = 0, y = 0, u = 0; y < d; u++) {
          var p = a[u], m = a[u + 1];
          c = y, y += p.distanceTo(m);
        }
        if (p == null && m == null)
          var p = a[0], m = a[1], u = 1;
        var B = y - c !== 0 ? (d - c) / (y - c) : 0, O = t.GeometryUtil.interpolateOnPointSegment(p, m, B);
        return {
          latLng: e.unproject(O, i),
          predecessor: u - 1
        };
      },
      /**
          Returns a float between 0 and 1 representing the location of the
          closest point on polyline to the given latlng, as a fraction of total line length.
          (opposite of L.GeometryUtil.interpolateOnLine())
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.PolyLine} polyline Polyline on which the latlng will be search
          @param {L.LatLng} latlng The position to search
          @returns {Number} Float between 0 and 1
      */
      locateOnLine: function(e, n, r) {
        var s = n.getLatLngs();
        if (r.equals(s[0]))
          return 0;
        if (r.equals(s[s.length - 1]))
          return 1;
        for (var i = t.GeometryUtil.closest(e, n, r, !1), a = t.GeometryUtil.accumulatedLengths(s), l = a[a.length - 1], u = 0, d = !1, c = 0, y = s.length - 1; c < y; c++) {
          var p = s[c], m = s[c + 1];
          if (u = a[c], t.GeometryUtil.belongsSegment(i, p, m, 1e-3)) {
            u += p.distanceTo(i), d = !0;
            break;
          }
        }
        if (!d)
          throw "Could not interpolate " + r.toString() + " within " + n.toString();
        return u / l;
      },
      /**
          Returns a clone with reversed coordinates.
          @param {L.PolyLine} polyline polyline to reverse
          @returns {L.PolyLine} polyline reversed
      */
      reverse: function(e) {
        return t.polyline(e.getLatLngs().slice(0).reverse());
      },
      /**
          Returns a sub-part of the polyline, from start to end.
          If start is superior to end, returns extraction from inverted line.
          @param {L.Map} map Leaflet map to be used for this method
          @param {L.PolyLine} polyline Polyline on which will be extracted the sub-part
          @param {Number} start ratio, expressed as a decimal between 0 and 1, inclusive
          @param {Number} end ratio, expressed as a decimal between 0 and 1, inclusive
          @returns {Array<L.LatLng>} new polyline
       */
      extract: function(e, n, r, s) {
        if (r > s)
          return t.GeometryUtil.extract(e, t.GeometryUtil.reverse(n), 1 - r, 1 - s);
        r = Math.max(Math.min(r, 1), 0), s = Math.max(Math.min(s, 1), 0);
        var i = n.getLatLngs(), a = t.GeometryUtil.interpolateOnLine(e, n, r), l = t.GeometryUtil.interpolateOnLine(e, n, s);
        if (r == s) {
          var u = t.GeometryUtil.interpolateOnLine(e, n, s);
          return [u.latLng];
        }
        a.predecessor == -1 && (a.predecessor = 0), l.predecessor == -1 && (l.predecessor = 0);
        var d = i.slice(a.predecessor + 1, l.predecessor + 1);
        return d.unshift(a.latLng), d.push(l.latLng), d;
      },
      /**
          Returns true if first polyline ends where other second starts.
          @param {L.PolyLine} polyline First polyline
          @param {L.PolyLine} other Second polyline
          @returns {bool}
      */
      isBefore: function(e, n) {
        if (!n)
          return !1;
        var r = e.getLatLngs(), s = n.getLatLngs();
        return r[r.length - 1].equals(s[0]);
      },
      /**
          Returns true if first polyline starts where second ends.
          @param {L.PolyLine} polyline First polyline
          @param {L.PolyLine} other Second polyline
          @returns {bool}
      */
      isAfter: function(e, n) {
        if (!n)
          return !1;
        var r = e.getLatLngs(), s = n.getLatLngs();
        return r[0].equals(s[s.length - 1]);
      },
      /**
          Returns true if first polyline starts where second ends or start.
          @param {L.PolyLine} polyline First polyline
          @param {L.PolyLine} other Second polyline
          @returns {bool}
      */
      startsAtExtremity: function(e, n) {
        if (!n)
          return !1;
        var r = e.getLatLngs(), s = n.getLatLngs(), i = r[0];
        return i.equals(s[0]) || i.equals(s[s.length - 1]);
      },
      /**
          Returns horizontal angle in degres between two points.
          @param {L.Point} a Coordinates of point A
          @param {L.Point} b Coordinates of point B
          @returns {Number} horizontal angle
       */
      computeAngle: function(e, n) {
        return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
      },
      /**
         Returns slope (Ax+B) between two points.
          @param {L.Point} a Coordinates of point A
          @param {L.Point} b Coordinates of point B
          @returns {Object} with ``a`` and ``b`` properties.
       */
      computeSlope: function(e, n) {
        var r = (n.y - e.y) / (n.x - e.x), s = e.y - r * e.x;
        return { a: r, b: s };
      },
      /**
         Returns LatLng of rotated point around specified LatLng center.
          @param {L.LatLng} latlngPoint: point to rotate
          @param {double} angleDeg: angle to rotate in degrees
          @param {L.LatLng} latlngCenter: center of rotation
          @returns {L.LatLng} rotated point
       */
      rotatePoint: function(e, n, r, s) {
        var i = e.getMaxZoom();
        i === 1 / 0 && (i = e.getZoom());
        var a = r * Math.PI / 180, l = e.project(n, i), u = e.project(s, i), d = Math.cos(a) * (l.x - u.x) - Math.sin(a) * (l.y - u.y) + u.x, c = Math.sin(a) * (l.x - u.x) + Math.cos(a) * (l.y - u.y) + u.y;
        return e.unproject(new t.Point(d, c), i);
      },
      /**
         Returns the bearing in degrees clockwise from north (0 degrees)
         from the first L.LatLng to the second, at the first LatLng
         @param {L.LatLng} latlng1: origin point of the bearing
         @param {L.LatLng} latlng2: destination point of the bearing
         @returns {float} degrees clockwise from north.
      */
      bearing: function(e, n) {
        var r = Math.PI / 180, s = e.lat * r, i = n.lat * r, a = e.lng * r, l = n.lng * r, u = Math.sin(l - a) * Math.cos(i), d = Math.cos(s) * Math.sin(i) - Math.sin(s) * Math.cos(i) * Math.cos(l - a), c = (Math.atan2(u, d) * 180 / Math.PI + 360) % 360;
        return c >= 180 ? c - 360 : c;
      },
      /**
         Returns the point that is a distance and heading away from
         the given origin point.
         @param {L.LatLng} latlng: origin point
         @param {float} heading: heading in degrees, clockwise from 0 degrees north.
         @param {float} distance: distance in meters
         @returns {L.latLng} the destination point.
         Many thanks to Chris Veness at http://www.movable-type.co.uk/scripts/latlong.html
         for a great reference and examples.
      */
      destination: function(e, n, r) {
        n = (n + 360) % 360;
        var s = Math.PI / 180, i = 180 / Math.PI, a = t.CRS.Earth.R, l = e.lng * s, u = e.lat * s, d = n * s, c = Math.sin(u), y = Math.cos(u), p = Math.cos(r / a), m = Math.sin(r / a), B = Math.asin(c * p + y * m * Math.cos(d)), O = l + Math.atan2(Math.sin(d) * m * y, p - c * Math.sin(B));
        return O = O * i, O = O > 180 ? O - 360 : O < -180 ? O + 360 : O, t.latLng([B * i, O]);
      },
      /**
         Returns the the angle of the given segment and the Equator in degrees,
         clockwise from 0 degrees north.
         @param {L.Map} map: Leaflet map to be used for this method
         @param {L.LatLng} latlngA: geographical point A of the segment
         @param {L.LatLng} latlngB: geographical point B of the segment
         @returns {Float} the angle in degrees.
      */
      angle: function(e, n, r) {
        var s = e.latLngToContainerPoint(n), i = e.latLngToContainerPoint(r), a = Math.atan2(i.y - s.y, i.x - s.x) * 180 / Math.PI + 90;
        return a += a < 0 ? 360 : 0, a;
      },
      /**
         Returns a point snaps on the segment and heading away from the given origin point a distance.
         @param {L.Map} map: Leaflet map to be used for this method
         @param {L.LatLng} latlngA: geographical point A of the segment
         @param {L.LatLng} latlngB: geographical point B of the segment
         @param {float} distance: distance in meters
         @returns {L.latLng} the destination point.
      */
      destinationOnSegment: function(e, n, r, s) {
        var i = t.GeometryUtil.angle(e, n, r), a = t.GeometryUtil.destination(n, i, s);
        return t.GeometryUtil.closestOnSegment(e, a, n, r);
      }
    }), t.GeometryUtil;
  });
})(io);
function lo(o, t) {
  return (o % t + t) % t;
}
function uo(o) {
  return Object.fromEntries(
    Object.entries(o).filter(([t, e]) => e !== void 0)
  );
}
function le(o) {
  return o.toString().trim().slice(o.toString().length - 1, o.toString().length) === "m";
}
function nt(o) {
  return o.toString().trim().slice(o.toString().length - 1, o.toString().length) === "%";
}
function ue(o) {
  return o.toString().trim().slice(o.toString().length - 2, o.toString().length) === "px";
}
function ve(o, t) {
  let e = t.getCenter(), n = t.latLngToLayerPoint(e), r = {
    x: n.x + Number(o),
    y: n.y
  }, s = t.layerPointToLatLng(r);
  return t.distance(e, s);
}
L.Polyline.include({
  /**
   * Adds arrowheads to an L.polyline
   * @param {object} options The options for the arrowhead.  See documentation for details
   * @returns The L.polyline instance that they arrowheads are attached to
   */
  arrowheads: function(o = {}) {
    const t = {
      yawn: 60,
      size: "15%",
      frequency: "allvertices",
      proportionalToTotal: !1
    };
    this.options.noClip = !0;
    let e = Object.assign({}, t, o);
    return this._arrowheadOptions = e, this._hatsApplied = !0, this;
  },
  buildVectorHats: function(o) {
    this._arrowheads && this._arrowheads.remove(), this._ghosts && this._ghosts.remove();
    let t = Object.getPrototypeOf(
      Object.getPrototypeOf(this.options)
    ), e = Object.assign({}, t, this.options), n = Object.assign({}, e, o);
    n.smoothFactor = 1, n.fillOpacity = 1, n.fill = !!o.fill, n.interactive = !1;
    let r = o.size.toString(), s = [];
    const { frequency: i, offsets: a } = o;
    (a != null && a.start || a != null && a.end) && this._buildGhosts({ start: a.start, end: a.end }), (this._ghosts || this)._parts.forEach((d, c) => {
      const y = d.map((S) => this._map.layerPointToLatLng(S)), p = (() => {
        let S = 0;
        for (var b = 0; b < d.length - 1; b++)
          S += this._map.distance(y[b], y[b + 1]);
        return S;
      })();
      let m, B, O, v;
      if (isNaN(i) ? nt(i) ? console.error(
        "Error: arrowhead frequency option cannot be given in percent.  Try another unit."
      ) : le(i) ? (O = i.slice(0, i.length - 1) / p, v = 1 / O, v = Math.floor(v), O = 1 / v) : ue(i) && (O = (() => {
        let S = i.slice(0, i.length - 2);
        return ve(S, this._map) / p;
      })(), v = 1 / O, v = Math.floor(v), O = 1 / v) : (O = 1 / i, v = i), o.frequency === "allvertices")
        B = (() => {
          let S = [];
          for (var b = 1; b < y.length; b++) {
            let N = L.GeometryUtil.angle(
              this._map,
              y[lo(b - 1, y.length)],
              y[b]
            ) + 180;
            S.push(N);
          }
          return S;
        })(), m = y, m.shift();
      else if (o.frequency === "endonly" && y.length >= 2)
        m = [y[y.length - 1]], B = [
          L.GeometryUtil.angle(
            this._map,
            y[y.length - 2],
            y[y.length - 1]
          ) + 180
        ];
      else {
        m = [];
        let S = [];
        for (var g = 0; g < v; g++) {
          let b = L.GeometryUtil.interpolateOnLine(
            this._map,
            y,
            O * (g + 1)
          );
          b && (S.push(b), m.push(b.latLng));
        }
        B = (() => {
          let b = [];
          for (var N = 0; N < S.length; N++) {
            let f = L.GeometryUtil.angle(
              this._map,
              y[S[N].predecessor + 1],
              y[S[N].predecessor]
            );
            b.push(f);
          }
          return b;
        })();
      }
      let k = [];
      const E = (S, b = {}) => {
        let N = b.yawn ?? o.yawn, f = L.GeometryUtil.destination(
          m[g],
          B[g] - N / 2,
          S
        ), P = L.GeometryUtil.destination(
          m[g],
          B[g] + N / 2,
          S
        ), F = [
          [f.lat, f.lng],
          [m[g].lat, m[g].lng],
          [P.lat, P.lng]
        ], R = o.fill ? L.polygon(F, { ...n, ...b }) : L.polyline(F, { ...n, ...b });
        k.push(R);
      }, Q = (S, b = {}) => {
        let N = S.slice(0, S.length - 2), f = b.yawn ?? o.yawn, P = this._map.latLngToLayerPoint(m[g]), F = B[g], R = (180 - F - f / 2) * (Math.PI / 180), Ve = (180 - F + f / 2) * (Math.PI / 180), Mt = N * Math.sin(R), Ct = N * Math.cos(R), wt = N * Math.sin(Ve), Gt = N * Math.cos(Ve), It = {
          x: P.x + Mt,
          y: P.y + Ct
        }, At = {
          x: P.x + wt,
          y: P.y + Gt
        }, Qe = this._map.layerPointToLatLng(It), Re = this._map.layerPointToLatLng(At), et = [
          [Qe.lat, Qe.lng],
          [m[g].lat, m[g].lng],
          [Re.lat, Re.lng]
        ], Bt = o.fill ? L.polygon(et, { ...n, ...b }) : L.polyline(et, { ...n, ...b });
        k.push(Bt);
      };
      for (var g = 0; g < m.length; g++) {
        let { perArrowheadOptions: b, ...N } = o;
        if (b = b ? b(g) : {}, b = Object.assign(
          N,
          uo(b)
        ), r = b.size ?? r, le(r)) {
          let f = r.slice(0, r.length - 1);
          E(f, b);
        } else if (nt(r)) {
          let f = r.slice(0, r.length - 1), P = (() => o.frequency === "endonly" && o.proportionalToTotal ? p * f / 100 : p / (d.length - 1) * f / 100)();
          E(P, b);
        } else
          ue(r) ? Q(o.size, b) : console.error(
            "Error: Arrowhead size unit not defined.  Check your arrowhead options."
          );
      }
      s.push(...k);
    });
    let u = L.layerGroup(s);
    return this._arrowheads = u, this;
  },
  getArrowheads: function() {
    return this._arrowheads ? this._arrowheads : console.error(
      "Error: You tried to call '.getArrowheads() on a shape that does not have a arrowhead.  Use '.arrowheads()' to add a arrowheads before trying to call '.getArrowheads()'"
    );
  },
  /**
   * Builds ghost polylines that are clipped versions of the polylines based on the offsets
   * If offsets are used, arrowheads are drawn from 'this._ghosts' rather than 'this'
   */
  _buildGhosts: function({ start: o, end: t }) {
    if (o || t) {
      let e = this.getLatLngs();
      e = Array.isArray(e[0]) ? e : [e];
      const n = e.map((r) => {
        const s = (() => {
          let i = 0;
          for (var a = 0; a < r.length - 1; a++)
            i += this._map.distance(r[a], r[a + 1]);
          return i;
        })();
        if (o) {
          let i = (() => {
            if (le(o))
              return Number(o.slice(0, o.length - 1));
            if (ue(o)) {
              let l = Number(o.slice(0, o.length - 2));
              return ve(l, this._map);
            }
          })(), a = L.GeometryUtil.interpolateOnLine(
            this._map,
            r,
            i / s
          );
          r = r.slice(
            a.predecessor === -1 ? 1 : a.predecessor + 1,
            r.length
          ), r.unshift(a.latLng);
        }
        if (t) {
          let i = (() => {
            if (le(t))
              return Number(t.slice(0, t.length - 1));
            if (ue(t)) {
              let l = Number(t.slice(0, t.length - 2));
              return ve(l, this._map);
            }
          })(), a = L.GeometryUtil.interpolateOnLine(
            this._map,
            r,
            (s - i) / s
          );
          r = r.slice(0, a.predecessor + 1), r.push(a.latLng);
        }
        return r;
      });
      this._ghosts = L.polyline(n, {
        ...this.options,
        color: "rgba(0,0,0,0)",
        stroke: 0,
        smoothFactor: 0,
        interactive: !1
      }), this._ghosts.addTo(this._map);
    }
  },
  deleteArrowheads: function() {
    this._arrowheads && (this._arrowheads.remove(), delete this._arrowheads, delete this._arrowheadOptions, this._hatsApplied = !1), this._ghosts && this._ghosts.remove();
  },
  _update: function() {
    this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath(), this._hatsApplied && (this.buildVectorHats(this._arrowheadOptions), this._map.addLayer(this._arrowheads)));
  },
  remove: function() {
    return this._arrowheads && this._arrowheads.remove(), this._ghosts && this._ghosts.remove(), this.removeFrom(this._map || this._mapToAdd);
  }
});
L.LayerGroup.include({
  removeLayer: function(o) {
    var t = o in this._layers ? o : this.getLayerId(o);
    return this._map && this._layers[t] && (this._layers[t]._arrowheads && this._layers[t]._arrowheads.remove(), this._map.removeLayer(this._layers[t])), delete this._layers[t], this;
  },
  onRemove: function(o, t) {
    for (var t in this._layers)
      this._layers[t] && this._layers[t].remove();
    this.eachLayer(o.removeLayer, o);
  }
});
L.Map.include({
  removeLayer: function(o) {
    var t = L.Util.stamp(o);
    return o._arrowheads && o._arrowheads.remove(), o._ghosts && o._ghosts.remove(), this._layers[t] ? (this._loaded && o.onRemove(this), o.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(o.getAttribution()), delete this._layers[t], this._loaded && (this.fire("layerremove", { layer: o }), o.fire("remove")), o._map = o._mapToAdd = null, this) : this;
  }
});
L.GeoJSON.include({
  geometryToLayer: function(o, t) {
    var e = o.type === "Feature" ? o.geometry : o, n = e ? e.coordinates : null, r = [], s = t && t.pointToLayer, i = t && t.coordsToLatLng || L.GeoJSON.coordsToLatLng, a, l, u, d;
    if (!n && !e)
      return null;
    switch (e.type) {
      case "Point":
        return a = i(n), this._pointToLayer(s, o, a, t);
      case "MultiPoint":
        for (u = 0, d = n.length; u < d; u++)
          a = i(n[u]), r.push(
            this._pointToLayer(s, o, a, t)
          );
        return new L.FeatureGroup(r);
      case "LineString":
      case "MultiLineString":
        l = L.GeoJSON.coordsToLatLngs(
          n,
          e.type === "LineString" ? 0 : 1,
          i
        );
        var c = new L.Polyline(l, t);
        return t.arrowheads && c.arrowheads(t.arrowheads), c;
      case "Polygon":
      case "MultiPolygon":
        return l = L.GeoJSON.coordsToLatLngs(
          n,
          e.type === "Polygon" ? 1 : 2,
          i
        ), new L.Polygon(l, t);
      case "GeometryCollection":
        for (u = 0, d = e.geometries.length; u < d; u++) {
          var y = this.geometryToLayer(
            {
              geometry: e.geometries[u],
              type: "Feature",
              properties: o.properties
            },
            t
          );
          y && r.push(y);
        }
        return new L.FeatureGroup(r);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  },
  addData: function(o) {
    var t = L.Util.isArray(o) ? o : o.features, e, n, r;
    if (t) {
      for (e = 0, n = t.length; e < n; e++)
        r = t[e], (r.geometries || r.geometry || r.features || r.coordinates) && this.addData(r);
      return this;
    }
    var s = this.options;
    if (s.filter && !s.filter(o))
      return this;
    var i = this.geometryToLayer(o, s);
    return i ? (i.feature = L.GeoJSON.asFeature(o), i.defaultOptions = i.options, this.resetStyle(i), s.onEachFeature && s.onEachFeature(o, i), this.addLayer(i)) : this;
  },
  _pointToLayer: function(o, t, e, n) {
    return o ? o(t, e) : new L.Marker(
      e,
      n && n.markersInheritOptions && n
    );
  }
});
const Ze = {
  ...se,
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
  },
  arrowheadsOptions: {
    type: Object,
    default: () => ({})
  }
}, Lt = (o, t, e) => {
  const { options: n, methods: r } = ce(
    o,
    t,
    e
  ), s = T(
    o,
    Ze,
    n
  ), i = {
    ...r,
    setSmoothFactor(a) {
      t.value.setStyle({ smoothFactor: a });
    },
    setNoClip(a) {
      t.value.setStyle({ noClip: a });
    },
    addLatLng(a) {
      t.value.addLatLng(a);
    },
    setArrowheadsOptions(a) {
      t.value.arrowheads(a);
    }
  };
  return { options: s, methods: i };
}, co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrowheadsProps: Ze,
  setupArrowheads: Lt
}, Symbol.toStringTag, { value: "Module" })), Fo = I({
  name: "LArrowheads",
  props: Ze,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = Lt(o, e, t);
    return A(async () => {
      const { polyline: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      await import("./index-97c07ecc.mjs"), e.value = U(
        l(o.latLngs, i)
      );
      const { listeners: u } = z(t.attrs);
      e.value.on(u), e.value.arrowheads(o.arrowheadsOptions), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), We = {
  ...K,
  content: {
    type: String,
    default: null
  }
}, Je = (o, t) => {
  const { options: e, methods: n } = Y(o), r = {
    ...n,
    setContent(s) {
      t.value && s !== null && s !== void 0 && t.value.setContent(s);
    }
  };
  return { options: e, methods: r };
}, He = (o) => o.default ? Z("div", { ref: "root" }, o.default()) : null, yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperProps: We,
  render: He,
  setupPopper: Je
}, Symbol.toStringTag, { value: "Module" })), Ot = {
  ...We,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, _t = (o, t) => {
  const { options: e, methods: n } = Je(o, t);
  return { options: e, methods: n };
}, po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popupProps: Ot,
  setupPopup: _t
}, Symbol.toStringTag, { value: "Module" })), Do = I({
  name: "LPopup",
  props: Ot,
  setup(o, t) {
    const e = h(), n = h(null), r = G(w), s = _(Te), i = _(Ce), { options: a, methods: l } = _t(o, e);
    return A(async () => {
      const { popup: u } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(u(a)), o.latLng !== void 0 && e.value.setLatLng(o.latLng), C(l, e.value, o);
      const { listeners: d } = z(t.attrs);
      e.value.on(d), e.value.setContent(o.content || n.value || ""), s(e.value), M(() => t.emit("ready", e.value));
    }), ne(() => {
      i();
    }), { root: n, leafletObject: e };
  },
  render() {
    return He(this.$slots);
  }
}), Ke = {
  ...oe,
  latLngs: {
    ...oe.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, St = (o, t, e) => {
  const { options: n, methods: r } = qe(
    o,
    t,
    e
  ), s = T(
    o,
    Ke,
    n
  ), i = {
    ...r,
    setBounds(a) {
      t.value.setBounds(a);
    },
    setLatLngs(a) {
      t.value.setBounds(a);
    }
  };
  return { options: s, methods: i };
}, fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  rectangleProps: Ke,
  setupRectangle: St
}, Symbol.toStringTag, { value: "Module" })), Eo = I({
  name: "LRectangle",
  props: Ke,
  setup(o, t) {
    const e = h(), n = h(!1), r = G(w), s = _($), { options: i, methods: a } = St(o, e, t);
    return A(async () => {
      const { rectangle: l, latLngBounds: u } = r ? j.L : await import("leaflet/dist/leaflet-src.esm"), d = o.bounds ? u(o.bounds) : u(o.latLngs || []);
      e.value = U(l(d, i));
      const { listeners: c } = z(t.attrs);
      e.value.on(c), C(a, e.value, o), s({
        ...o,
        ...a,
        leafletObject: e.value
      }), n.value = !0, M(() => t.emit("ready", e.value));
    }), { ready: n, leafletObject: e };
  },
  render() {
    return x(this.ready, this.$slots);
  }
}), he = {
  ...pe,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (o) => typeof o == "string" ? !0 : Array.isArray(o) ? o.every((t) => typeof t == "string") : !1
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
}, Ye = (o, t, e) => {
  const { options: n, methods: r } = xe(o, t, e), s = T(
    o,
    he,
    n
  ), i = {
    ...r
  };
  return { options: s, methods: i };
}, mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTileLayer: Ye,
  tileLayerProps: he
}, Symbol.toStringTag, { value: "Module" })), qo = I({
  props: he,
  setup(o, t) {
    const e = h(), n = G(w), r = _($), { options: s, methods: i } = Ye(o, e, t);
    return A(async () => {
      const { tileLayer: a } = n ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(a(o.url, s));
      const { listeners: l } = z(t.attrs);
      e.value.on(l), C(i, e.value, o), r({
        ...o,
        ...i,
        leafletObject: e.value
      }), M(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Pt = {
  ...We
}, jt = (o, t) => {
  const { options: e, methods: n } = Je(o, t), r = _(we);
  return ne(() => {
    r();
  }), { options: e, methods: n };
}, ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupTooltip: jt,
  tooltipProps: Pt
}, Symbol.toStringTag, { value: "Module" })), Zo = I({
  name: "LTooltip",
  props: Pt,
  setup(o, t) {
    const e = h(), n = h(null), r = G(w), s = _(Me), { options: i, methods: a } = jt(o, e);
    return A(async () => {
      const { tooltip: l } = r ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(l(i)), C(a, e.value, o);
      const { listeners: u } = z(t.attrs);
      e.value.on(u), e.value.setContent(o.content || n.value || ""), s(e.value), M(() => t.emit("ready", e.value));
    }), { root: n, leafletObject: e };
  },
  render() {
    return He(this.$slots);
  }
}), Xe = {
  ...he,
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
}, Tt = (o, t, e) => {
  const { options: n, methods: r } = Ye(o, t, e);
  return {
    options: T(
      o,
      Xe,
      n
    ),
    methods: {
      ...r
    }
  };
}, vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setupWMSTileLayer: Tt,
  wmsTileLayerProps: Xe
}, Symbol.toStringTag, { value: "Module" })), Wo = I({
  props: Xe,
  setup(o, t) {
    const e = h(), n = G(w), r = _($), { options: s, methods: i } = Tt(
      o,
      e,
      t
    );
    return A(async () => {
      const { tileLayer: a } = n ? j.L : await import("leaflet/dist/leaflet-src.esm");
      e.value = U(
        a.wms(o.url, s)
      );
      const { listeners: l } = z(t.attrs);
      e.value.on(l), C(i, e.value, o), r({
        ...o,
        ...i,
        leafletObject: e.value
      }), M(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arrowheads: co,
  Circle: Et,
  CircleMarker: Dt,
  Component: $t,
  Control: qt,
  ControlAttribution: Zt,
  ControlLayers: Wt,
  ControlScale: Jt,
  ControlZoom: Ht,
  FeatureGroup: Yt,
  GeoJSON: Xt,
  GridLayer: Vt,
  Icon: Qt,
  ImageOverlay: Rt,
  InteractiveLayer: xt,
  Layer: kt,
  LayerGroup: Kt,
  Marker: ro,
  Path: Ft,
  Polygon: ao,
  Polyline: so,
  Popper: yo,
  Popup: po,
  Rectangle: fo,
  TileLayer: mo,
  Tooltip: ho,
  WmsTileLayer: vo
}, Symbol.toStringTag, { value: "Module" }));
export {
  Jo as Functions,
  Oo as InjectionKeys,
  Fo as LArrowheads,
  _o as LCircle,
  So as LCircleMarker,
  Po as LControl,
  jo as LControlAttribution,
  To as LControlLayers,
  Mo as LControlScale,
  Co as LControlZoom,
  wo as LFeatureGroup,
  Go as LGeoJson,
  Io as LGridLayer,
  Ao as LIcon,
  Bo as LImageOverlay,
  No as LLayerGroup,
  zo as LMap,
  $o as LMarker,
  ko as LPolygon,
  xo as LPolyline,
  Do as LPopup,
  Eo as LRectangle,
  Uo as LSVGOverlay,
  qo as LTileLayer,
  Zo as LTooltip,
  Wo as LWmsTileLayer,
  Lo as Utilities
};
