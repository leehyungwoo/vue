<template>
  <div>
    어바웃
    <treeComponent :subs="this.orgcharts"></treeComponent>
  </div>
</template>

<script>
import treeComponent from "./treeComponent";
export default {
  name: "about",
  components: {
    treeComponent
  },
  data() {
    return {
      orgcharts: [
        {
          name: "(주) OpenSG",
          type: "company",
          subs: [
            {
              name: "SI 사업부",
              type: "division",
              subs: [
                { name: "SI 1팀", type: "team" },
                { name: "SI 2팀", type: "team" }
              ]
            },
            {
              name: "BI 사업부",
              type: "division",
              subs: [
                { name: "BI 1팀", type: "team" },
                { name: "BI 2팀", type: "team" },
                { name: "BI 3팀", type: "team" }
              ]
            },
            {
              name: "솔루션 사업부",
              type: "division",
              subs: [
                { name: "ESM팀", type: "team" },
                { name: "MTS팀", type: "team" },
                { name: "ASF팀", type: "team" }
              ]
            },
            { name: "총무팀", type: "team" },
            { name: "인사팀", type: "team" }
          ]
        }
      ]
    };
  }
};
</script>