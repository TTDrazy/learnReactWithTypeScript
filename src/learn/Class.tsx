import * as React from "react";
import Person from './example/class/Person';

export interface IClassProps {}
//类
//1. 类
//由构造函数，属性，方法组成
//有三种访问权限： private,protected,public(默认)

class User {
    private newName: string='';
    constructor(public name: string, private password: string) {
        this.name = name;
        this.password = password;
    }
    //3.静态属性和方法 
    //不用实例化，可以直接通过类名来访问
    static permission = 'mayige';
    static setPermission = (perm:string)=>{
        User.permission = perm;
    }

    //2.类中的 get,set 存取器
    get getName():string{
        return this.newName;
    }
    set setName(name:string){
        this.newName = name;
    }
    checkLogin = (): boolean => {
        if (this.name === "mayige" && this.password === "1234567") {
            return true;
        } else {
            return false;
        }
    };    
}
    //5. 泛型类
        //仍然为了规范化数据
    class getMin<T>{
        array:T[] = [];
        addItem(item:T){
            this.array.push(item);
        }
        min():T{
            let min = this.array[0];
            this.array.forEach((item)=>{
                if(item<min){
                    min = item;
                }
            })
            return min;
        }
    }
export default class Class extends React.Component<IClassProps> {
    public render() {
        console.log("--------类篇--------");
        let mayige = new User("mayige", "ahahaha");
        mayige.name = '我是 set 进去的name';
        console.log(mayige.getName);
        console.log(mayige.checkLogin());
        let mayige2 = new User("mayige",'1234567');
        console.log(mayige2.checkLogin());

        console.log('old permission: '+User.permission);
        User.setPermission('admin');
        console.log('new permission: '+User.permission);
        User.setPermission('haha');
        console.log('new permission: '+User.permission);

        let mayige3 = new Person('马怡歌');
        console.log(mayige3.run()); 
        console.log(mayige3.cry()); 
        console.log(mayige3.walk()); 

        let getMin1 = new getMin<number>();
        getMin1.addItem(3);
        getMin1.addItem(5);  
        getMin1.addItem(1);
        //getMin1.addItem('2');    错误。'2' 不是number 类型
        console.log('min Value = '+getMin1.min());

        return (
            <>
                <div style={{ margin: 10 }}>Learn TypeScript Class</div>
            </>
        );
    }
}
