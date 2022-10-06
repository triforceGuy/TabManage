import './App.css';
import React, {useState} from "react" 

//start of function for login
function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "sarah",
      password: "bean123"
    },
    {
      username: "nick",
      password: "password1"
    },
    {
      username: "eri",
      password: "password2"
    },
    {
      username: "bianca",
      password: "password3"
    },
    {
      username: "jessy",
      password: "password4"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  //here is where we use the database to write the login code
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var {uname, pass} = document.forms[0];

    //Finding username info
    const userData = database.find((user) => user.username === uname.value);

    //Making sure what the user enters matches the database
    if (userData) {
      if (userData.password !== pass.value) {
        //Invalid password
        setErrorMessages({name: "pass", message: errors.pass});
      } else {
        setIsSubmitted(true);
      }
    } else {
      //Username not found
      setErrorMessages({name: "uname", message: errors.uname});
    }
  };

  //Javascript code for the error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //Javascript to show the login display
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username: </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password: </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In:</div>
        {isSubmitted ? <div>Sign In Successful</div> : renderForm}
      </div>
    </div>
  );
}

export default App;

