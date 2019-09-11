import React from "react";
//变量
const Variable: React.FC = () => {
    console.log("--------变量篇--------");
    //1. 不用 var
        //因为 var 的作用域内会存在变量提升等问题，而 let 和 const 均不会
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 500);
    }   //执行结果出现5次5
    //2. 使用 let 声明变量
        // let 为块级作用域，不存在变量提升等问题
    let str = "string";
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 500);
    }
    //3. const
        //表示不想被改变的常量
    const str2 = '123';
    //str2 = 123123;  错误，不可被修改
    //4. 解构
        //数组 和 对象
        let x:number  = 1;
        let y:number = 3;
        [x,y] = [y,x];
        console.log(x,y);
        let arrary1:number[] = [1,2,3,4,5];
        let newArrary:number[] = [...arrary1,6,7,8,9,10];
        console.log(newArrary);
        let obj1 = {
            name:'mayige',
            age:19
        }
        let newObj = {...obj1,sex:'女'};
        console.log(newObj);
    return (
        <>
            <div style={{ margin: 10 }}>Learn TypeScript Variable</div>
        </>
    );
};

export default Variable;
