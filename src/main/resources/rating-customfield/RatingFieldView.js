import { openBlock as i, createElementBlock as n, Fragment as c, renderList as u, normalizeClass as f } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const p = {
  name: "RatingFieldView",
  props: {
    value: Object,
    field: Object
  },
  computed: {
    starIndex() {
      var t;
      return (t = this.field) != null && t.options && this.value ? this.field.options.findIndex((r) => {
        var e;
        return r.id == ((e = this.value) == null ? void 0 : e.id);
      }) : -1;
    }
  }
}, _ = ["title"];
function h(t, r, e, v, x, l) {
  var s, a;
  return i(), n("div", {
    class: "rating-customfield",
    title: (s = e.value) == null ? void 0 : s.name
  }, [
    (i(!0), n(c, null, u((a = e.field) == null ? void 0 : a.options, (o, d) => (i(), n("div", {
      class: f(["star", [d <= l.starIndex ? "icon-star-full" : "icon-star-empty"]]),
      key: o.id
    }, null, 2))), 128))
  ], 8, _);
}
const F = /* @__PURE__ */ m(p, [["render", h]]);
export {
  F as default
};
