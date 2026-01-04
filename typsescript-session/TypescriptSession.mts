import { Console } from "console"

class TypescriptSession{

    ivar = 15
    public M1(){
        console.log("playwright")
        console.log(this.ivar)
    }
    public M2(){
        //const Lvar: number = 15

    }
    public M3(){}
    public M4(){}
    public static StaticMethod(){
console.log("this is a print stament in static method")
    }
    public dataTypefunct(){
        const numval:number =10
        const charval:string = "a"
        const stingval: string = "This is a string"
        const bolval:boolean = true
        const nullval: null = null
        const undefval: undefined = undefined
        const symbolval: symbol = Symbol()
        //const biginval: bigint = 1111111234567890000n

        console.log(charval)
        console.log (symbolval.description)
        const anyval: any = "This is a any value"
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

}
        public conditionStatements(){
            const a=10
            const b=20
            const c=30

            if(a<b){
                console.log("condition 1")
            }else if(b>c){
                console.log("condition 2")
            }else if(c>a){
                console.log("condition 3")
                }
            else{
                console.log("in else")
            }
        }
         
        public forLoopFunc(){
            //(Syntax)for (initilization;this.conditionStatements;increment operator){}
            for (let indexval=10;indexval<21;indexval++){
                if (indexval!=15){}
                console.log(indexval)
            }
            /*let b=10
            while (b<=20){
                if(b===15){
                    continue;
                }else{
                    console.log(b)
                }
                b++*/
            }

            /*do {
                //code
                while(condition)
            }*/
        

        public arrayDemo(){
            const arr1:number[]=[24,22,20.29,28]
             const arr2:number[]=[1,2,3,4,5]
              const arr3: (number | number[])[] = [3, 2, [8, 9], 10];



              console.log(arr1)
              console.log(arr1[4])
              console.log(arr1.map(val=>val*2))
              console.log(arr2.reduce((sumval,val)=>sumval+val,1))
              console.log(arr1.map(val=>val*2))
              console.log(arr1.concat(arr2))
              const retval = [...arr1,...arr2]
              console.log(retval)
              console.log(arr1.slice(1,3))
              console.log(arr3.flat)
              console.log(arr1.flatMap(val=>val*10))
              arr1.forEach((value,index)=>console.log(value,index))
              console.log(arr1.every(val=>19))
              console.log(arr1.some(val=>25))
              console.log(arr1.find(val=>val!=22))
              console.log(arr1.findIndex(val=>val!=24))
              console.log(arr1.includes(30))
              console.log(arr1)
              console.log(arr1.splice(1,3,34,36,39,33))
              console.log(arr1)
              console.log(arr1.join(", "))
              console.log(arr1.sort((a,b)=>b-a))
              console.log(arr1.sort((a,b)=>a-b))

              console.log(arr1.push(30))
              console.log(arr1.length)
              console.log(arr1.length)
              console.log(arr1.pop())
        }
        }
            interface EmployeeInfo {
            empId: number;
            empName: string;
            empDept: string;
            salary?: number;
}

            class TypescriptSession1 {

            public objectDemo() {

            const employeeOne: EmployeeInfo = {
            empId: 1234,
            empName: "playwright",
            empDept: "24556",
            salary: 2345
        };

        console.log(employeeOne);

        const employeeTwo: EmployeeInfo = {
            empId: 1235,
            empName: "playwright",
            empDept: "24556",
            salary: 234554
        };

        console.log(employeeTwo);
    }
    public returnType(returnvalue:string): string{
        const value=returnvalue.toString()
        return value
    }


}
       
              
            
            
              


            
        
        
    
       
       



// ✅ object creation OUTSIDE class 
const obj = new TypescriptSession()
obj.M1();
obj.M2();
console.log(obj.ivar);



// ✅ static method call (correct case)
TypescriptSession.StaticMethod()


obj.dataTypefunct()
    
obj.conditionStatements()

obj.forLoopFunc()
obj.arrayDemo()
const obj1 = new TypescriptSession1();
obj1.objectDemo();
console.log(obj1.returnType("check"))


class P1{
    private P1M1(){
        //CODE
    }
    protected P1M2(){
        //CODE
    }
    public P1M3(){
        //CODE
    }

    public callingmethod(){
        console.log(this.P1M1);
        console.log(this.P1M2);
        console.log(this.P1M3);
        
    }
}
class P2 extends P1{
    public callingmethod(){
        console.log(this.P1M3)
        console.log(this.P1M2)
        

    }
}

const obj5 =new P1()
obj5.P1M3

const obj6 = new P2()
obj5.callingmethod