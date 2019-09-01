import React from "react";

const Type: React.FC = () => {
    //数值 类型  与  字符串 类型
    let num1: number = 20;
    let num2: string = "30";
    console.log(num1,num2);
    //布尔 类型
    let isCheckNumber: boolean = true;
    console.log(isCheckNumber);
    //枚举 类型
    //为了数值的语义化，增加代码可读性
    enum weekDays {
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        all = Monday | Tuesday | Wednesday | Thursday | Friday
    }
    let days: weekDays = 1;
    switch (days) {
        case weekDays.Monday:
            console.log("Monday");
            break;
        case weekDays.Tuesday:
            console.log("Tuesday");
            break;
        case weekDays.Wednesday:
            console.log("Wednesday");
            break;
        case weekDays.Thursday:
            console.log("Thursday");
            break;
        case weekDays.Friday:
            console.log("Friday");
            break;
    }
    //Symbol 类型
    //用来当做唯一标识
    let key1 = Symbol('first key');
    let key2 = Symbol('second key');
    let key3 = Symbol('first key');
    console.log(key1 === key2 ,key1 === key3 , key2 === key3);
    //any 类型
    //可以任意更改类型的类型
    let any:any = 'any';
    console.log(any);
    any = 123;
    console.log(any);
    any = false;
    console.log(any);
    //void null undefined never
    let test1:any = null;
    let test2:null = null;
    let test3:undefined  = undefined;
    console.log(test1,test2 ,test3);
        //never 
        //用来表示永远无返回值 的类型
    function error():never{
        throw new Error('error');
    }
    //数组 类型
    let array : string [] = ['a','b','c'];
    let list :Array<string> = ['a','b','c'];
    console.log(array,list);
    //元祖 类型
    //表示多种类型的数组
    let array2 : [number,string] = [123,'b'];
    console.log(array2);
    return (
        <>
            <div>Learn TypeScript types</div>
        </>
    );
};

export default Type;
