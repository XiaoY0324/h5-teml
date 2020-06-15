// 问诊页
import examPageRouter from "@/views/exam.vue";

// 导出集合
export default [
  {
    path: "/exam",
    name: "exam",
    meta: {
      title: "示例页面"
    },
    component: examPageRouter
  }
];
