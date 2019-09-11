import React from "react";
//高级类型
const HighTypes: React.FC = () => {
    console.log('--------高级类型篇--------');
    //1.联合类型
        //就是多个类型联合在一起
    let strOrNum: string | number = "我可能是字符串类型也可能是数字类型";
        //联合类型的字段只能调用这些类型共同拥有的方法
    let getStr = (params:string | number):string | number=>{
        return params.toString();
    }
    //联合类型不光是可以联合基本类型，也可以是用户自定义的class, interace等
    console.log(getStr(strOrNum));
    //2.交叉类型
    //3.类型转换
        //也是类型断言
        //as 关键字
    let test1 :any = '123';
    //as 
    let str1:string =test1 as unknown as string;
    console.log(str1,typeof(str1));
    //4.类型推论
        //TypeScript可以根据赋值或上下文推论出变量的类型,类似于原始JS中的动态类型
        let a= 123; //自动推论出 a 为 number
        console.log(typeof(a));
        let get=()=>{
            return [1,2,3];
        }   
        let arrary = get();              //自动推论出 arrary 为 number[]
        console.log(typeof(arrary));
    return (
        <>
            <div style={{margin:10}}>Learn TypeScript HighLevels-types</div>
        </>
    );
};

export default HighTypes;
