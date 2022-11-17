import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  FlatList,
  ImageBackground,
  TextInput,
  placeholderTextColor,
  placeholder,
} from 'react-native';
import {AppContext} from '../context/AppData';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import image from '../image/background3.png';
export default function Users() {

    const users = [
        {
          id: 1,
          name: "Jack",
          isActive: true,
          age: 20,
        },
        {
          id: 2,
          name: "John",
          isActive: true,
          age: 18,
        },
        {
          id: 3,
          name: "Mike",
          isActive: false,
          age: 30,
        },
      ];

console.log("TASK 1 :")

function task1(){
  console.log('Names Before add',users.map((item)=>{return item.name}))

console.log("\n\n\n")
  users.push({
      id:4,
      name:"kiran",
      isActive:true,
      age:21
  })
    // console.log([...users,{
    //     id:4,
    //     name:"kiran",
    //     isActive:true,
    //     age:21
    // }])
     console.log("Push New Name",users)

     console.log("\n\n\n")
      console.log('Names After Adding:',users.map((item)=>{return item.name}),"\n")
      return users;
}
console.log("\n\n\n")

console.log("TASK 2 : \n\n")

const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
  ];

  books.sort(function(a,b){
    if(a.author.split(' ')[1] < b.author.split(' ')[1])
    return -1;
    else(a.author.split(' ')[1] > b.author.split(' ')[1])
    return 1;
  return 0;  
  });
  const book=books
  console.log({book},"\n\n")

 // const strAscending = [...books].sort((a, b) =>a.author < b.author ? 1 : -1,);
 // console.log("Author : ",strAscending);
 // console.log([...books,author.split(" ")])
 console.log("\n\n\n")

console.log("TASK 3 :\n\n")

const profile = {name:'Rohit',age:'20',company:'Indium',salary:'15000',};
console.log("My name is ",Object.values(profile)[0]," i'm ",profile.age,"years old. I work as ",profile.company," and make $",profile.salary,".\n\n")

console.log("\n\n\n")
console.log("TASK 4 :\n\n")
const players = [
    {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
    {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
    {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
    {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
    {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
  ]

players.forEach(item => {
      console.log(item.jersey," - ",item.name,"-- Position:",item.position,"-- PPG:",Math.floor(item.PPG))
  }); 

  console.log("\n\n\n")
  const employee = [
    {
        name: "Ravi",
        salary: 15000
    },
    {
        name: "Teja",
        salary: 25000
    },
    {
      name: "Rishi",
      salary: 20000
    }
  ]
  console.log("TASK 5 : (reduce)")

  console.log(employee.reduce((a,emp)=>{
  return a+=emp.salary
},0))

const mul=(num1) => {
  return (num1=num1*2)
}
console.log("Mul", mul(3))

console.log("\n\n\n")

console.log("TASK 6 : (currying)")

const multiply=(x)=>{
  return(y)=>{
  return x * y
} 
}

console.log("Currying 2 arguments : ",multiply(2)(4))


function multiple(x) {
    return (y) => {
        return (z) => {
          return (a) =>{
            return x * y * z*a
          }
        }
    }
}
console.log("Currying 4 arguments : ",multiple(1)(2)(3)(4))

console.log("\n\n\n")
console.log("Array Helpers : (some)")
const names = ["Alex","Jimm","Johnny"]
const aa = names.some(name => name.length < 3)
// names.some(a =>console.log(a))
console.log(aa)

console.log("\n\n\n")

console.log("Array Helpers : (every)")
const Games = ["Football","cricket","Tennis"]
const g=Games.every(name => name.Games)
console.log(g)
// Games.every(name =>console.log(name))

console.log("\n\n\n")

console.log("Array Helpers : (foreach)")
const subject = ["Maths","Computer","Engish"]
subject.forEach(item => console.log(item))

console.log("\n\n\n")

console.log("Array Helpers : (map)")
const student = [{name:"sanjith",age:15}, {name:"Nithish",age:17}]
const stud = student.map(a => a.age)
console.log(stud)

console.log("\n\n\n")

function fil(){
console.log("Array Helpers : (filter)")
const stu=student.filter(b=>b.age<17)
console.log(stu)
return stud 
}
console.log("\n\n\n")
console.log("Array Helpers : (find)")
const emp = [
  {name:"jay",age:1},
  {name:"hulu",age:30}
]
const record = emp.find(a => a.name === "jay")
console.log(record)

console.log("\n\n\n")
console.log("Template String : (')")
const voter={
 name : 'Bob',
 age : 80,
 gender : 'male'
}
const result=( `${ voter.name } is a ${voter.age } year old ${ voter.gender }`)
console.log(result)
 
return (
   
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'\n\n'}</Text>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 70, fontWeight: '600', color: 'black'}}>login</Text>
          <Text style={{color:'black',fontSize:20}}>Filter : Age of students {fil()}{' '}</Text>  

          {/* {employee.map(name => ({name}))}     */}


        {/* <Text>{getplayers()}</Text> */}
        <FlatList
          data={players}
          //renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        {/* <FlatList
          data={books}
          // renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}
        </View>
      </View>
      
      
  );

}