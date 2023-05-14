import { useState } from "react";
import passwordeye from "./assets/password.eye.svg"


function App() {
  const [username, setusername] = useState("");
  const [usernameinvalid, setUsernameInvalid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailinvalid, setEmailInvalid] = useState(false);

  const [password, setPassword] = useState("");
  const [ispassword, setIspassword] = useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  console.log(emailRegex.test(email))
  return (
    <div style={styles.wrapper}>
      <form>
        <div>
          <label>username:</label>
          <input style= {usernameinvalid ? styles.inputInvalid : null} onChange={(event) => {
          setusername(event.target.value);
          setUsernameInvalid(false);
          }}/>
        </div>
        <div>
          <label>Email:</label>
          <input style= {emailinvalid ? styles.inputInvalid : null} onChange={(event) => {
          setEmail(event.target.value)
          }}/>
        </div>
        <div style={styles.passwordDivi}>
          <label>Password:</label>
          <input type={ispassword ? "text" : "password"} onChange={(event) => {
          setusername(event.target.value)
          }}/>
          <img src={passwordeye} style={styles.passwordIcon} onClick={() => {setIspassword(!ispassword)}}/>
        </div>
        <button type="submit" onClick={(event) => {
          event.preventDefault();
          if(username.length < 4) {
            setUsernameInvalid(true)
          } else {
            setUsernameInvalid(false)
          }
          if(emailRegex.test(email)) {
            setEmailInvalid(false)
          } else {
            setEmailInvalid(true)
          }
        }}>SUBMIT</button>
      </form>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "green"  },

  inputInvalid: {
    border: "2px solid red"
  },


  heading: {
    color: "green"
  },

  passwordIcon: {
    width: "10px",
    height: "10px",
    position: "absolute",
    left: "220px",
    top: "10px"
  },

  passwordDivi: {
    position: "relative",
    minWidth: "100px"
  }

}
export default App;
