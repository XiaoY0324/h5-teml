<template>
  <div class="eaxm">
    <van-nav-bar title="我的店铺" left-arrow fixed @click-left="historyBack" />
    <div class="box">
      {{ txt }}
      <van-button type="primary" @click="modTxt('修改后的vuex数据')"
        >点我改变vuex中数据</van-button
      >
    </div>

    <van-circle
      v-model="currentRate"
      :rate="rate"
      layer-color="#ebedf0"
      text="颜色定制"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { examPostRequest, examGetRequest } from "@/api/exam";
import { Circle, Button, NavBar, Toast } from "vant";

Vue.use(Circle)
  .use(Button)
  .use(NavBar)
  .use(Toast);
export default {
  data() {
    return {
      currentRate: 30,
      rate: 50
    };
  },
  computed: {
  },
  methods: {
    historyBack() {
      Toast("返回");
    }
  },
  created() {
    examPostRequest();
    examGetRequest();
  }
};
</script>
<style scoped lang="scss">
.eaxm {
  padding-top: 46px;
  height: 100vh;
  width: 100vw;
  padding-left: 15px;

  .box {
    font-size: 18px;
  }
}
</style>
