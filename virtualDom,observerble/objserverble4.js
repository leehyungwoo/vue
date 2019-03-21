const update = () => (total = product.price * product.quantity)

const observerble = obj => {

    Object.keys(obj).forEach(key => {

        let value = obj[key]

        Object.defineProperty(obj, key, {
            get() {
                return value
            },
            set(v) {
                value = v
                update()
            }
        })
    })
    return obj
}

//observerble 패턴 chatper3., dependency 객체
const dep = {
    subscribers: new Set(), //중복이 되지않아야함으로 set 컬렉션.
    subscribe(fn) {
        if (typeof fn !== 'function') return
        fn()    //함수로 한번 받아서 
        this.subscribers.add(fn) //컬렉션에 추가를 한다.
    },
    notify() {
        this.subscribers.forEach(fn => fn()) // 모든 의존함수들을 한번씩 실행한다.
    }
}

//observerble 패턴 chatper2.  자주 돌고, 재사용성을 위해 observerble 함수화시킨것.
let product = observerble({
    price: 1000,
    quantity: 3
})

let total;

dep.subscribe(() => (total = product.price * product.quantity))

console.log(total)

product.price = 2000

console.log(total)

product.quantity = 1

console.log(total)
