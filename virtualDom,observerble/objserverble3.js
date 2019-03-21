
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





