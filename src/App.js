import './App.css';
import { useEffect } from 'react';

function App() {
  function handCallbackResponse(response)
  {
    console.log("Encoded JWT ID  tokent:"+response.credential);
  }
  
  useEffect(()=>{
  google.accounts.id.initalize({
    client_id:"908073531216-aa77ui5tqhgau6kis4hkm3s5t6gb63j3.apps.googleusercontent.com",
    callback: handCallbackResponse
  });
  google.account.id.renderButton(
    document.getElementById("signInDiv"),
    {
      theme: "outline", size: "large" 
    }
  );
  },[]);
  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
