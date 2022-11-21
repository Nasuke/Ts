// getters 和 setters 主要是为了服务私有属性 对其读写进行拦截
class Person {
    private _name = ''
    private _age = 21
    constructor(name: string, age: number) {
        this._name = name
        this._age = age
        // 1.3 不需要return 默认返回当前实例
    }
    show() {
        console.log(this._name);
    }
    set age(newValue: number) {
        if (newValue > 0 && newValue < 200) {
            this._age = newValue
        }
    }
    get age() {
        return this._age
    }
}

const p1 = new Person("sheldon", 30)
p1.show() // sheldon
p1.age = 22
console.log(p1.age); // 22

export { }