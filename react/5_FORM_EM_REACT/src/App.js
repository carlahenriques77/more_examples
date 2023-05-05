import './App.css';

// import / component
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
        <h2>Form</h2>
        <MyForm 
        mfProp={{ 
          mfName: "ddd", 
          mfMail: "ppp@mail.com", 
          mfBio: "mmm",
          mfRole: "optAdmin"
          // The "mfRole" has to be the Corresponding Name on the Option
          }}/>
        {/* Will make it start with this written on it */}
    </div>
  );
}

export default App;
