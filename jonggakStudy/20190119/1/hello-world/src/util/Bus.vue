
<script>
import Vue from "vue";
import axios from "axios";

var Bus = new Vue({
  data() {
    return { currentView: "list", pk: 0 };
  },
  methods: {
    Post(Addr, param) {
      return axios.post(Addr, param);
    }
  }
});

export default Bus;
</script>
