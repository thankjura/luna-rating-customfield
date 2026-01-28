const _ = window.Vue.useModel, g = window.Vue.mergeModels, k = window.Vue.defineComponent, C = window.Vue.renderList, M = window.Vue.Fragment, d = window.Vue.openBlock, s = window.Vue.createElementBlock, x = window.Vue.normalizeClass, y = window.Vue.createElementVNode, E = window.Vue.toDisplayString, I = window.Vue.createCommentVNode, B = { class: "rating-customfield rating-customfield-edit" }, F = ["onClick", "onMouseenter"], N = {
  key: 0,
  class: "label"
}, c = window.Vue.computed, $ = window.Vue.ref, O = /* @__PURE__ */ k({
  name: "RatingFieldEdit",
  __name: "RatingFieldEdit",
  props: /* @__PURE__ */ g({
    field: Object
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    const t = n, u = _(n, "modelValue"), o = $(null), r = c(() => t.field?.options && u.value ? t.field.options.findIndex((e) => e.id == u.value?.id) : -1), m = c(() => t.field?.options && o.value ? t.field.options.findIndex((e) => e.id == o.value?.id) : -1), a = c(() => m.value > -1 ? m.value : r.value > -1 ? r.value : -1), f = (e) => {
      o.value = e;
    }, v = (e) => {
      u.value = e;
    }, V = () => {
      o.value = null;
    };
    return (e, i) => (d(), s("div", B, [
      (d(!0), s(M, null, C(n.field?.options, (l, p) => (d(), s("div", {
        class: x(["star", [p <= a.value ? "icon-star-full" : "icon-star-empty"]]),
        onClick: (w) => v(l),
        onMouseenter: (w) => f(l),
        onMouseleave: i[0] || (i[0] = (w) => V()),
        key: l.id
      }, null, 42, F))), 128)),
      y("div", {
        class: "icon-cancel-circle",
        onClick: i[1] || (i[1] = (l) => v(null))
      }),
      a.value > -1 && n.field ? (d(), s("div", N, E(n.field.options[a.value].name), 1)) : I("", !0)
    ]));
  }
});
export {
  O as default
};
