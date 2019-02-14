var app = new Vue({
    el: '#app',
    data: {
        myChoice: null,
        count: 3,
        comChoice: null,
        winner: null,
        lifeOfMe: 3,
        lifeOfCom: 3,
        isSelectable: true,
        logs: [],

    },
    watch: {
        count: function (newVal) {

            if (newVal === 0) {
                var number = Math.random()
                if (number < 0.33) {
                    this.comChoice = "rock"
                } else if (number < 0.66) {
                    this.comChoice = "paper"
                } else {
                    this.comChoice = "scissor"
                }

                if (this.myChoice === this.comChoice) { this.winner = 'no one'; this.count = 3 }
                else if (this.myChoice === "scissor" && this.comChoice === "paper") { this.winner = 'me' }
                else if (this.myChoice === "rock" && this.comChoice === "scissor") { this.winner = 'me' }
                else if (this.myChoice === "paper" && this.comChoice === "rock") { this.winner = 'me' }
                else if (this.myChoice === "paper" && this.comChoice === "scissor") { this.winner = 'com' }
                else if (this.myChoice === "scissor" && this.comChoice === "rock") { this.winner = 'com' }
                else if (this.myChoice === "rock" && this.comChoice === "paper") { this.winner = 'com' }
                else { this.winner = null }


                if (this.winner === "me") {
                    this.lifeOfCom--;

                } else if (this.winner === "com") {
                    this.lifeOfMe--;
                }

                this.count = 3
                this.isSelectable = true;

                var log = {
                    message: `You:${this.myChoice}, Computer:${this.comChoice}`,
                    winner: this.winner
                }

                this.logs.unshift(log)
            }
        },
        lifeOfMe: function (newVal) {
            if (newVal === 0) {
                setTimeout(() => {
                    confirm('당신이 패배')
                    this.lifeOfMe = 3;
                    this.lifeOfCom = 3;
                    this.myChoice = null;
                    this.comChoice = null;
                    this.winner = null;
                    this.logs = []
                }, 500)
            }
        },
        lifeOfCom: function (newVal) {
            if (newVal === 0) {
                setTimeout(() => {
                    confirm('당신이 승리')
                    this.lifeOfMe = 3;
                    this.lifeOfCom = 3;
                    this.myChoice = null;
                    this.comChoice = null;
                    this.winner = null;
                    this.logs = []
                }, 500)
            }
        }
    },

    methods: {
        startGame: function () {
            this.isSelectable = false;
            if (this.myChoice === null) {
                alert('선택하세요')
                return false;
            } else {
                var timer = setInterval(() => {
                    this.count--;
                    if (this.count === 0) {
                        clearInterval(timer)

                    }
                }, 400)
            }
        },


    }
})

