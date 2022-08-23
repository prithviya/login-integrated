import './App.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';

function App() {
  const [loginData, setloginData]= useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    : null
  );
  const handleFailure = (result) =>
  {
    // alert(result);
  }
  const handleLogin = async(googleData) =>
  {
    const res =await fetch('/api/google-login',{
      method:'POST',
      body: JSON.stringify({
        token:googleData.tokenID,
      }),
      headers:
      {
          'Content-Type' : 'application/json',
      },
    });
    const data = await res.json();
    setloginData(data);
    localStorage.getItem('loginData',JSON.stringify(data));
  };
  const handleLogout =() =>
  {
    localStorage.removeItem('loginData');
    setloginData(null);
  }
  return (
    <div className="App">
      <div className='App-header'>
        <h1>React used to Google Login Integration</h1>
        <div>
          {
            loginData ?(
              <div>
                <h3>you are Logged in{loginData.email}</h3>
                <button onClick={handleLogout}>Logout</button>
              </div>  
            ):(
              <GoogleLogin
          clientId="908073531216-aa77ui5tqhgau6kis4hkm3s5t6gb63j3.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
            )
          }          
        </div>
      </div>
    </div>
  );
}

export default App;
