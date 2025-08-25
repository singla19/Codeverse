import { useState } from "react";
import "./App.css";
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

const App = () => {
  const [joined, setJoined] = useState(false);

  if(!joined){
    return <div>User not Joined</div>
  }
  return (
    <div>User Joined</div>
  )
}

export default App;
