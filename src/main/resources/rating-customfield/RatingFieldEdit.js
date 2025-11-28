import { defineComponent as x, mergeModels as C, useModel as M, ref as V, computed as r, createElementBlock as d, openBlock as s, createElementVNode as y, createCommentVNode as I, Fragment as E, renderList as $, normalizeClass as F, toDisplayString as O } from "vue";
const b = { class: "rating-customfield rating-customfield-edit" }, B = ["onClick", "onMouseenter"], N = {
  key: 0,
  class: "label"
}, h = /* @__PURE__ */ x({
  name: "RatingFieldEdit",
  __name: "RatingFieldEdit",
  props: /* @__PURE__ */ C({
    field: Object
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    const t = n, u = M(n, "modelValue"), l = V(null), c = r(() => t.field?.options && u.value ? t.field.options.findIndex((e) => e.id == u.value?.id) : -1), v = r(() => t.field?.options && l.value ? t.field.options.findIndex((e) => e.id == l.value?.id) : -1), a = r(() => v.value > -1 ? v.value : c.value > -1 ? c.value : -1), p = (e) => {
      l.value = e;
    }, f = (e) => {
      u.value = e;
    }, g = () => {
      l.value = null;
    };
    return (e, i) => (s(), d("div", b, [
      (s(!0), d(E, null, $(n.field?.options, (o, k) => (s(), d("div", {
        class: F(["star", [k <= a.value ? "icon-star-full" : "icon-star-empty"]]),
        onClick: (m) => f(o),
        onMouseenter: (m) => p(o),
        onMouseleave: i[0] || (i[0] = (m) => g()),
        key: o.id
      }, null, 42, B))), 128)),
      y("div", {
        class: "icon-cancel-circle",
        onClick: i[1] || (i[1] = (o) => f(null))
      }),
      a.value > -1 && n.field ? (s(), d("div", N, O(n.field.options[a.value].name), 1)) : I("", !0)
    ]));
  }
});
export {
  h as default
};
