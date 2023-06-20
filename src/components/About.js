import React, { useState } from 'react'

export default function About(props) {
    const [myStyle,setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    }); 
    const [text,setMyText] = useState("Dark Mode");
  const toggleStyle = ()=>{
if(myStyle.color === 'white'){
    setMyStyle({
        color: 'black',
        backgroundColor : 'white'
    })
    setMyText("Bright Mode")
    

}
else{
    setMyStyle({
        color: 'white',
        backgroundColor : 'black'
    })
    setMyText("Dark Mode");
}
    }
  return (
    <>
    <div className="container my-3" style={{backgroundColor:props.mode === 'dark'?'#042743':'white',color:props.mode === 'dark'?'white':'black'}}>
        <h2>About us</h2>

<p>Welcome to Text Utils, a web application created by Subrahmanya&#10084;. At Text Utils, our mission is to provide you with powerful and efficient text manipulation tools that make your life easier. Whether you're a writer, student, or professional, our webapp is designed to enhance your productivity and streamline your text-related tasks.</p> 
<p>As a passionate developer,I embarked on a journey to create a user-friendly and feature-rich web application using the popular React framework. With a keen eye for detail and a deep understanding of user needs, Subrahmanya carefully crafted Text Utils to cater to a wide range of text processing requirements.</p>
<p>At Text Utils, we believe in simplicity and accessibility. We understand that working with text can sometimes be time-consuming and challenging, which is why we have incorporated a range of essential tools that can handle various text operations effortlessly. Whether you need to convert text case, remove duplicates, count characters or words, add line breaks Text Utils has got you covered.</p>
<p>One of our primary goals is to ensure that Text Utils is user-friendly and intuitive. We have focused on creating a clean and modern interface that enables you to navigate through the application seamlessly. Our carefully designed layout ensures that you can access the tools you need with ease, allowing you to accomplish your tasks quickly and efficiently.</p>
Thank you for choosing Text Utils. We hope that our web app becomes your go-to resource for all your text-related needs. Start exploring the power of efficient text processing today and unlock a world of possibilities with Text Utils!
</div>
    
    </>
    
  )
}
