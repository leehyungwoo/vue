function asncrnouse() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var a = '123'
            resolve(a)
        }, 1000)
    })
}

asncrnouse().then((res) => {
    console.log(res)
    console.log('hi')
}).catch(err => console.log(err))


setTimeout(() => {
    function asncrnouse2() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                reject('에러')
            }, 0)
        })
    }

    asncrnouse2().then((res) => {

    }).catch(err => console.log(err))


}, 2000)


new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1);
    }, 3000);
})
    .then(function (result) {
        console.log(result); // 1
        return result + 10;
    })
    .then(function (result) {
        console.log(result); // 11
        return result + 20;
    })
    .then(function (result) {
        console.log(result); // 31
    });