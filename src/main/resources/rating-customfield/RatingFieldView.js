import { defineComponent as s, computed as d, createElementBlock as n, openBlock as i, Fragment as c, renderList as u, normalizeClass as m } from "vue";
const f = ["title"], g = /* @__PURE__ */ s({
  name: "RatingFieldView",
  __name: "RatingFieldView",
  props: {
    value: Object,
    field: Object
  },
  setup(t) {
    const e = t, a = d(() => e.field?.options && e.value ? e.field.options.findIndex((l) => l.id == e.value?.id) : -1);
    return (l, p) => (i(), n("div", {
      class: "rating-customfield",
      title: t.value?.name
    }, [
      (i(!0), n(c, null, u(t.field?.options, (o, r) => (i(), n("div", {
        class: m(["star", [r <= a.value ? "icon-star-full" : "icon-star-empty"]]),
        key: o.id
      }, null, 2))), 128))
    ], 8, f));
  }
});
export {
  g as default
};
