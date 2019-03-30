<template>
  <div style="padding-top:30px;width:600px;padding-left:30px;">

    <div>
      <Label for="id">아이디</Label>
      <input
        type="text"
        id="id"
        v-model="m_obj.id"
        @keypress.enter="pusharray"
      />
    </div>
    <div style="margin: 7px 0px">
      <Label for="name">이름</Label>
      <input
        type="text"
        id="name"
        v-model="m_obj.name"
        @keypress.enter="pusharray"
      />
    </div>
    <div style="margin-left: 50px">
      <button
        v-if="!this.uobj"
        v-on:click="pusharray"
      >추가</button>
      <button
        v-else
        v-on:click="updatearray"
      >수정</button>
    </div>
  </div>
</template>

<script>
import Bus from "@/bus";
export default {
  name: "headerCom",

  data() {
    return {
      m_obj: {
        id: "",
        name: ""
      },
      uobj: Bus.updateobj
    };
  },

  methods: {
    pusharray() {
      if (!this.vail()) return false;
      Bus.pusharray(this.m_obj);
      this.mobjreset();
    },
    mobjreset() {
      this.m_obj = { id: null, name: null };
    },
    vail() {
      if (!this.m_obj.id || !this.m_obj.id.trim()) {
        alert("아이디을 입력해 주세요.");
        return false;
      } else if (!this.m_obj.name || !this.m_obj.name.trim()) {
        alert("이름을 입력해 주세요.");
        return false;
      }
      return true;
    },
    updatearray() {
      if (this.obj) {
        this.obj.id = Bus.updateobj.id;
        this.obj.name = Bus.updateobj.name;
      }
    }
  }
};
</script>
 