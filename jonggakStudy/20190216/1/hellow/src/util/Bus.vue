<script>
import Vue from "vue";
import axios from "axios";

var Bus = new Vue({
  data() {
    return {
      currentView: "list",
      pk: 0,
      isLogin: false,
      u_id: "",
      u_name: ""
    };
  },
  methods: {
    Post(Addr, param) {
      return axios.post(Addr, param);
    },
    loginCheck() {
      if (!this.isLogin) {
        alert("로그인이 필요합니다");
        this.currentView = "list";
      }
    }
  }
});

export default Bus;
</script>
