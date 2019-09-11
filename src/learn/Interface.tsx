import React from "react";
//接口
const Interface: React.FC = () => {
    console.log("--------接口篇--------");
    //1. 类的接口
    interface Animal {
        isBreath: boolean;
    }
    //接口也可以继承接口，用 extends
    interface WaterAnimal extends Animal {
        isSwim: boolean;
        //? 代表可选属性
        sex?: string;
    }
    //类可以继承接口，用 implements
    class Duck implements WaterAnimal {
        isBreath = true;
        isSwim = true;
    }
    //也可以单独使用接口
    let goose: WaterAnimal = { isBreath: true, isSwim: true };

    //2. *** 泛型接口
    //可以理解为广泛的类型
    //主要作用为 类型的参数化
    interface AnimalModel {
        id: number;
        name: string;
        sex?: string;
    }
    interface RoadAnimal<T> {
        getAll(): T;
        getById(id: number): T;
    }
    class Rabbit implements RoadAnimal<AnimalModel> {
        getAll(): AnimalModel {
            const data: AnimalModel = {
                id: 1,
                name: "小了白了兔"
            };
            return data;
        }
        getById(id: number): AnimalModel {
            const data: AnimalModel = {
                id,
                name: "白了又了白"
            };
            return data;
        }
    }
    let rabbit = new Rabbit();
    console.log(rabbit.getAll());
    console.log(rabbit.getById(3));

    return (
        <>
            <div style={{ margin: 10 }}>Learn TypeScript Interface</div>
        </>
    );
};

export default Interface;
