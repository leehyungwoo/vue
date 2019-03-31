import Vue from 'vue'

export default new Vue({
    data() {
        return {
            todos: [],
            m_obj: { id: null, name: null },
            updateobj: null
        };
    },

    methods: {
        pusharray: function (m_obj) {
            this.todos.push({
                pk: Date.now(),
                id: m_obj.id,
                name: m_obj.name,
                state: 1,
                RegTime: new Date().toLocaleTimeString(),
                WdTime: null
            });
            console.log(this.todos);
        },
        updatearray(obj) {
            this.updateobj = obj;
            if (this.updateobj) {
                this.updateobj.id = obj.id;
                this.updateobj.name = obj.name;
            }


        },
        withdraw(obj) {
            obj.state = "0";
            obj.WdTime = new Date().toLocaleTimeString();
        },
        mobjreset() {
            this.m_obj = { id: null, name: null };
        },
        vail() {
            if (!this.m_obj.id || !this.m_obj.id.trim()) {
                alert("아이디을 입력해 주세요.");
                return false;
            } else if (!this.m_obj.name || !this.m_obj.name.trim()) {
                alert("아이디을 입력해 주세요.");
                return false;
            }
            return true;
        }
    }
})