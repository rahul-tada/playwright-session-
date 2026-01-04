import { console } from "inspector";
import { stringify } from "querystring";
import { Interface } from "readline";

var TypescriptSession = /** @class */ (function () {
    function TypescriptSession() {
        this.ivar = 15;
    }
    TypescriptSession.prototype.M1 = function () {
        console.log("playwright");
        console.log(this.ivar);
    };
    TypescriptSession.prototype.M2 = function () {
        //const Lvar: number = 15
    };
    TypescriptSession.prototype.M3 = function () { };
    TypescriptSession.prototype.M4 = function () { };
    TypescriptSession.StaticMethod = function () {
        console.log("this is a print stament in static method");
    };
    TypescriptSession.prototype.dataTypefunct = function () {
        var numval = 10;
        var charval = "a";
        var stingval = "This is a string";
        var bolval = true;
        var nullval = null;
        var undefval = undefined;
        var symbolval = Symbol();
        //const biginval: bigint = 1111111234567890000n
        console.log(charval);
        console.log(symbolval.description);
        var anyval = "This is a any value";
        /*
    
        control statement
            conditional statement
            if
            if-else
            if-else-if
            nested if
            switch
    
            looping statements
            for
            for in
            for of
            while
            do while
    
             write a program to print number from 10 20
            where 10 and 20 are inclusive
            
    
            single-       => you are assingning a value
            double=>         this is to verify the value without considering the data type
                      e.g
                      const a=b
                      const b="10"
                      if(a==b)   => true
    
           triple=     => the value and the data type should be exactly equal
    
            */
    };
    TypescriptSession.prototype.conditionStatements = function () {
        var a = 10;
        var b = 20;
        var c = 30;
        if (a < b) {
            console.log("condition 1");
        }
        else if (b > c) {
            console.log("condition 2");
        }
        else if (c > a) {
            console.log("condition 3");
        }
        else {
            console.log("in else");
        }
    };
    TypescriptSession.prototype.forLoopFunc = function () {
        //(Syntax)for (initilization;this.conditionStatements;increment operator){}
        for (var indexval = 10; indexval < 21; indexval++) {
            if (indexval != 15) { }
            console.log(indexval);
        }
        /*let b=10
        while (b<=20){
            if(b===15){
                continue;
            }else{
                console.log(b)
            }
            b++*/
    };
    /*do {
        //code
        while(condition)
    }*/
    TypescriptSession.prototype.arrayDemo = function () {
        var arr1 = [24, 22, 20.29, 28];
        var arr2 = [1, 2, 3, 4, 5];
        var arr3 = [3, 2, [8, 9], 10];
        console.log(arr1);
        console.log(arr1[4]);
        console.log(arr1.map(function (val) { return val * 2; }));
        console.log(arr2.reduce(function (sumval, val) { return sumval + val; }, 1));
        console.log(arr1.map(function (val) { return val * 2; }));
        console.log(arr1.flatMap(val=>val*10))
        console.log(arr1.map(val=>val*arr2.reduce((sumval,val)=>sumval+val,0)))
        console.log(arr1.filter(val=>val>>22))
        console.log(arr1.concat(arr2))
        console.log(arr1.concat(arr2))
        const retval=[...arr1,...arr2]

        console.log(arr1.slice(1,3))
        console.log(arr3.flat())
        console.log(arr1.flatMap(val=>val*10))
        arr1.forEach((value,index)=>console.log(value, index))
        console.log(arr1.every(value=>value>19))
        console.log(arr1.some(val=>val>30))
        console.log(arr1.find(val=>val!=23))
        console.log(arr1.find(val=>val!=24))
        console.log(arr1.includes(30))
        console.log(arr1.join(", "))
        console.log(arr1.sort((a,b)=>(a-b)))
        console.log(arr1.sort((a,b)=>(b-a)))

    };

    
  

    
    return TypescriptSession;
}());
// ✅ object creation OUTSIDE class 
var obj = new TypescriptSession();
obj.M1();
obj.M2();
console.log(obj.ivar);
// ✅ static method call (correct case)
TypescriptSession.StaticMethod();
obj.dataTypefunct();
obj.conditionStatements();
obj.forLoopFunc();
obj.arrayDemo();
export {};
