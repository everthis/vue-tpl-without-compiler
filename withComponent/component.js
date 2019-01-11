// 因为没有编译，为了保证兼容性，需要使用ES5语法
Vue.component("todo-item", {
  props: ["todo"],
  template:
    "<li class='c-no-border normal-li todo-li' @click='logFn'" +
    ">{{ todo.text }}(click me.)</li>",
  methods: {
    logFn: function() {
      alert(this.todo.text);
    }
  },
  mounted: function() {
    console.log("component mounted.");
  }
});
