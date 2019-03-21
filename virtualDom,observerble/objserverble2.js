//observerble 패턴 chatper2.  자주 돌고, 재사용성을 위해 observerble 함수화시킨것.

const update = () => (total = product.price * product.quantity)  //의존함수가 많아지면 어디에서인가 관리해야하는데, 다음챕터에 나온다.

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


let product = observerble({
    price: 1000,
    quantity: 3
})

