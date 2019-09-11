//4. 抽象方法

interface IPerson{
    //接口里不能写方法体
    cry():string;
    run():string;
}

abstract class ABSPerson implements IPerson{
    name:string='';
    //接口中没有构造方法，抽象类可以有构造方法。
    constructor(name:string){
        this.name = name;
    }
    cry(): string {
        return `${this.name}会哭！`;
    }
    abstract run():string;
    abstract walk():string;
    
}
    //  一般是抽象类实现接口，普通类继承抽象类；这样就可以实现接口中的部分方法(即抽象类中没有具体实现的方法)
export default class Person extends ABSPerson{
    run(): string {
        return  `${this.name}会跑~`;
    }
    walk(): string {
        return  `${this.name}会走~`;
    }
}