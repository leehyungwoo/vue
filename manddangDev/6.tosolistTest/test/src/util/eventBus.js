import Vue from 'vue'

export default new Vue({
    methods: {
        updateTodo(todo, index) {
            this.$emit('updateTodo', todo, index)
        }
    }
})
