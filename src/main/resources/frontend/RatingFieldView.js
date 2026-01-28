const d = window.Vue.defineComponent, a = window.Vue.renderList, r = window.Vue.Fragment, t = window.Vue.openBlock, o = window.Vue.createElementBlock, u = window.Vue.normalizeClass, m = ["title"], w = window.Vue.computed, p = /* @__PURE__ */ d({
  name: "RatingFieldView",
  __name: "RatingFieldView",
  props: {
    value: Object,
    field: Object
  },
  setup(n) {
    const e = n, l = w(() => e.field?.options && e.value ? e.field.options.findIndex((i) => i.id == e.value?.id) : -1);
    return (i, f) => (t(), o("div", {
      class: "rating-customfield",
      title: n.value?.name
    }, [
      (t(!0), o(r, null, a(n.field?.options, (s, c) => (t(), o("div", {
        class: u(["star", [c <= l.value ? "icon-star-full" : "icon-star-empty"]]),
        key: s.id
      }, null, 2))), 128))
    ], 8, m));
  }
});
export {
  p as default
};
