import { openBlock as s, createElementBlock as d, Fragment as u, renderList as c, normalizeClass as v, createElementVNode as m, toDisplayString as f, createCommentVNode as h } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const x = {
  name: "RatingFieldEdit",
  props: {
    modelValue: Object,
    field: Object
  },
  data() {
    return {
      active: null
    };
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "update:modelValue": (e) => !0
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    currentIndex() {
      var e;
      return (e = this.field) != null && e.options && this.value ? this.field.options.findIndex((n) => {
        var t;
        return n.id == ((t = this.value) == null ? void 0 : t.id);
      }) : -1;
    },
    activeIndex() {
      var e;
      return (e = this.field) != null && e.options && this.active ? this.field.options.findIndex((n) => {
        var t;
        return n.id == ((t = this.active) == null ? void 0 : t.id);
      }) : -1;
    },
    displayIndex() {
      if (this.activeIndex > -1)
        return this.activeIndex;
      if (this.currentIndex > -1)
        return this.currentIndex;
    }
  },
  methods: {
    hoverOpt(e) {
      this.active = e;
    },
    setValue(e) {
      console.log(e), this.value = e, console.log(this.value);
    },
    unHoverOpt(e) {
      this.active = null;
    }
  }
}, _ = { class: "rating-customfield rating-customfield-edit" }, I = ["onClick", "onMouseenter", "onMouseleave"], g = {
  key: 0,
  class: "label"
};
function V(e, n, t, y, k, i) {
  var r;
  return s(), d("div", _, [
    (s(!0), d(u, null, c((r = t.field) == null ? void 0 : r.options, (l, o) => (s(), d("div", {
      class: v(["star", [o <= i.displayIndex ? "icon-star-full" : "icon-star-empty"]]),
      onClick: (a) => i.setValue(l),
      onMouseenter: (a) => i.hoverOpt(l),
      onMouseleave: (a) => i.unHoverOpt(l),
      key: l.id
    }, null, 42, I))), 128)),
    m("div", {
      class: "icon-cancel-circle",
      onClick: n[0] || (n[0] = (l) => i.setValue(null))
    }),
    i.displayIndex > -1 ? (s(), d("div", g, f(t.field.options[i.displayIndex].name), 1)) : h("", !0)
  ]);
}
const E = /* @__PURE__ */ p(x, [["render", V]]);
export {
  E as default
};
