<template>
  <v-container>
    <v-alert
      type="info"
      :value="true"
    >
      레벨 3 손님용
    </v-alert>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  mounted() {
    console.log(new Date());
    console.log(moment()._d);
    console.log(moment().toDate());
    console.log(moment().format("YYMMDD"));
    console.log(moment().minutes());
    console.log(
      moment()
        .add(3, "hours")
        .toString()
    );
    console.log(moment().fromNow());
    moment.locale("ko");
    console.log(moment().fromNow());
    console.log(
      moment()
        .add(-4, "hours")
        .fromNow()
    );
    // const ct = moment();
    const bt = moment().add(-4, "hours");
    console.log(bt.diff(moment(), "minutes"));
  }
};
</script>