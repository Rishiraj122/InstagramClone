import logo from './InstagramLogo.webp';
import './App.css';

function App() {
  async function buttonClicked(){
    window.location.href='https://www.google.com';
  }
  return (
    <div className="App">
      <center><img src={logo} className="App-logo" alt="logo" /></center>
      <h1>Thank you for your reporting</h1>
      <h4>Thank you for taking the time to report savijoshnarani's account. While 
        we reviewed the account you reported for harassment or bullying and found 
        it does violate our Community Guidlines, reports like yours 
        are an important part of making Instagram a safe and welcoming place for 
        everyone.
      </h4>
      <center><h5>Verify if you want savijoshnarani's account to get removed from Instagram</h5></center>
      <center><button onClick={buttonClicked}>Verify</button></center>
    </div>
  );
}

export default App;
