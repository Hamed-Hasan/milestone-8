import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import LoadApi from './Component/API/Json-api';

// ১. তুমি create react app দিয়ে রিএক্ট এর প্রজেক্ট বানাতে পারো কিনা 

// ২. JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখতে পারো কিনা 

// ৩. তুমি css ক্লাস লিখবে যেটার নাম হবে blog তারপর তোমার JSX এর মধ্যে গিয়ে article ট্যাগ এর মধ্যে blog ক্লাস যোগ করবে। 

// ৪. তুমি জাভাস্ক্রিপ্ট অবজেক্ট দিয়ে স্টাইল article ট্যাগ এর মধ্যে একটা h2 এর মধ্যে কিছু স্টাইল দাও। মিনিমাম ৩টা স্টাইল দিব। 

// ৫. article ট্যাগ এর মধ্যে একটা প্যারাগ্রাফ ট্যাগ যোগ করো। তারপর inline স্টাইল সেখানে যোগ করো। 

// ৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও

// ৭. সেই ব্লগ কম্পোনেন্ট দিয়ে মিনিমাম তিনটা কম্পোনেন্ট বানাবে। 

// ৮. প্রত্যেকটা কম্পোনেন্ট এ heading এবং author নামে দুইটা প্রপার্টি সেন্ড করবে। এবং সেই প্রপার্টিগুলো দেখাবে। 



const blog = {
  backgroundColor: 'grey',
  color: 'white',
  padding: '50px'
}
const head ={
  fontSize: '29px'
}

function App() {
  return (
    <div className="App">
     <LoadApi></LoadApi>

     <div className='blog-container'>
     <div>
     <Componen name={'Our Blog'} number={'1'}></Componen>
     
     </div>
   <div>
   <Compo1 heading={'This Second Component'} author={'hamed'}></Compo1>
   <Compo2 heading1={'this is third component'}></Compo2>
   <Compo2 heading1={'this is fourth component'}></Compo2>
   <Mobile></Mobile>
   </div>
     </div>
    </div>
  );
}

function Mobile(){
  const [charge, getCharge] = useState(100)
  const handleCharge = () => {
    // const decreaseCharge = charge - 10
   
 if(charge>0){
  getCharge(charge - 10)
 }
// ;
  }
  return(
    <div>
      <h2>{charge}</h2>
      <button onClick={handleCharge}>Battery Down</button>
    </div>
  )
}

function Compo1(props){
  return <h2>{props.heading} author: {props.author}</h2>
}
function Compo2(props){
  return <h2>{props.heading1} </h2>
}

function Componen(props){
  return(
    <div>
      <h2 className='bg' style={head} style={{color: 'tomato'}}>{props.name} {props.number}</h2>
       <article style={blog}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis hic excepturi. Doloribus libero deleniti nihil id magnam, delectus saepe aspernatur maxime natus non. Officiis dolore neque alias esse perspiciatis.
       <p><i style={{fontWeight:'bold'}}>
    
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas doloremque beatae rerum, rem culpa omnis dolorem libero tenetur assumenda iusto similique fugit deleniti odio autem! Amet nihil rem sint.</i></p>
       </article>
    </div>
   
  )
}

export default App;
