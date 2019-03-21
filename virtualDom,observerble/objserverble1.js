
//observerble 패턴 chatper1.


Object.keys(product).forEach(key => {

    let value = product[key]

    Object.defineProperty(product, key, {
        get() {
            return value
        },
        set(v) {
            value = v
            update()
        }
    })
})

