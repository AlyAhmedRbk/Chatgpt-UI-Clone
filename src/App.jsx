import React, { useState } from 'react';
import ChatGptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import send from "./assets/send.svg"
import userIcon from "./assets/user-icon.png";
import chatGpt from "./assets/chatgptLogo.svg";

const App = () => {

  return (
    <div className='app'>
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={ChatGptLogo} alt="" className='logo'/><span className="brand">Chat Gpt</span>
          </div>
            <button className='midBtn'><img src={addBtn} alt="" className="addBtn" />New Chat</button>
            <div className="upperSideQuery">
              <button className="query"><img src={msgIcon} alt="" />What is Programming ?</button><br />
              <button className="query"><img src={msgIcon} alt="" />How To Use an API ?</button>
          </div>
      </div>
        <div className="lowerSide">
          <div className="listItems">
            <img className='listItemsImg' src={home} alt="" />
            Home
          </div>
          <div className="listItems">
            <img className='listItemsImg' src={saved} alt="" />
            Saved
          </div>
          <div className="listItems">
            <img className='listItemsImg' src={rocket} alt="" />
            Upgrade To Pro
          </div>
          </div>
        </div>

          <div className="main">
            <div className="chats">
              <div className="chat">  
              <img className='chatImg' src={userIcon} alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus magnam qui praesentium dolor excepturi fugit enim animi nisi. Omnis.</p>
              </div>
              <div className="chat bot">
              <img className='chatImg' src={chatGpt} alt="" /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem cumque ab labore numquam eligendi quis doloremque ratione deleniti voluptas perspiciatis error? Nostrum tempora ipsa, iste harum officia cum ullam nihil soluta sed molestias temporibus impedit rem quis a libero expedita fuga error ad, facere dicta nam, sequi animi vel? Eius illo architecto eaque provident similique quae reiciendis maxime, ab quos ipsa, a tempore rem ratione ullam asperiores adipisci nesciunt cupiditate quas itaque minus commodi et beatae non! Rem minus architecto fugiat ipsam, labore maiores distinctio velit repellat maxime a eveniet beatae esse totam quo consequatur similique impedit iusto ullam?</p>
              </div>
            </div>
            
            <div className="chatFooter">
              <div className="inp send">
                <input type="text" placeholder='Send a message'
                />
                <button><img src={send} alt="" className='send'/></button>
              </div>
              <p>Chat may produce inaccurate info about people, place or fact.ChatGpt August 2024 Version</p>
            </div>
          </div>
  </div>
  )
}

export default App
