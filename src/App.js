import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/Features/loginButton.component';
import LogOutButton from './Components/Features/logOutButton.component';
import Register from './Components/Features/register.component';
import FirebaseProvider from './Contex/firebaseContex';



function App() {

 
  return (
    <div className="App">
      <FirebaseProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button onClick={signInWithGoogle}>Go</button> */}
          <LoginButton />
          <LogOutButton/>
          <button >Go</button>
          <Register />
        </header>
      </FirebaseProvider>
    </div>
  );
}

export default App;
