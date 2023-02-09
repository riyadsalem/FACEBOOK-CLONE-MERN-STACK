import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";

export class LearnSomeIdeasClass extends React.Component {
  // export class LearnSomeIdeasClass extends React.PureComponent {

  /*
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
 */

  /*
  componentDidMount() {
    console.log("Class Component did Mount");
  }

  componentDidUpdate(preProps, preState) {
    if (preState.email !== this.state.email) {
      console.log("Class Component Email did Update");
    }

    if (preState.password !== this.state.password) {
      console.log("Class Component Password did Update");
    }

    // console.log("Class Component did Update");
  }

  componentWillUnmount() {
    console.log("Class Component will Unmount");
  }
  */
  /*
  handelEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  */
  ///////////////////////////////////// useCallback /////////////////////////////////////
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div>
          {/** 
          <h2>Class Example (useEffect)</h2>
          <input
            value={this.state.email}
            onChange={this.handelEmail}
            placeholder="Email"
          />
          <input
            value={this.state.password}
            onChange={this.handePassword}
            placeholder="Password"
          />
          <br /> <br />
          <h2>Class Example (useRef)</h2>
          <input />
          <button>RUN</button>
          */}
          <h2>Class Example (useCallback)</h2>
          count : {this.state.count}
          <Button onClick={this.increment}>Increment</Button>
        </div>
        <br />
        <hr />
      </>
    );
  }
}

export const LearnSomeIdeasFunction = (props) => {
  ///////////////////////////////////// useEffect /////////////////////////////////////

  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  */
  /*
  // Did Mount
  useEffect(() => {
    console.log("Function Component did Mount");
    return () => {
      console.log("Function Component Will Unmount");
    };
  }, []);

  // Did Update

  useEffect(() => {
    if(email === '') return;
    console.log("Function Component did update");
  });


  // On Changing the Email
  useEffect(() => {
    if (email === "") return;
    console.log("Function Component Email  did update");
  }, [email]);

  // On Changing the Password
  useEffect(() => {
    if (password === "") return;
    console.log("Function Component Password  did update");
  }, [password]);
  */

  /*
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handePassword = (e) => {
    setPassword(e.target.value);
  };
 */
  ///////////////////////////////////// useRef /////////////////////////////////////

  /*
  const dataInfo = {
    fName: "",
    lName: "",
  };
  const [data, setData] = useState(dataInfo);
  const fNameRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    // document.getElementById("fName").focus();
    fNameRef.current.focus();
  });

  const { fName, lName } = data;

  const handelData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const run = () => {
    console.log(data);
  };

  const onFirstInputKey = (e) => {
    if (e.key === "Enter") {
      lName.current.focus();
    }
  };

  const onLastInputKey = (e) => {
    if (e.key === "Enter") {
      buttonRef.current.focus();
    }
  };
 */

  ///////////////////////////////////// useCallback /////////////////////////////////////

  const [count, setCount] = useState(0);

  function increment() {
    return setCount((count) => count + 1);
  }

  const incrementCallback = useCallback(increment, []);

  return (
    <>
      <div>
        {/** 
        <br />
        <h2>Fucntion Example (useEffect)</h2>
        <input value={email} onChange={handelEmail} placeholder="Email" />
        <input
          value={password}
          onChange={handePassword}
          placeholder="Password"
        />

        <br />
        <br />

        <h2>Function Example (useRef)</h2>
        <input
          placeholder="First Name"
          name="fName"
          value={fName}
          ref={fNameRef}
          onChange={handelData}
          onKeyDown={onFirstInputKey}
          id="fName"
        />
        <input
          placeholder="Last Name"
          name="lName"
          value={lName}
          onChange={handelData}
          onKeyDown={onLastInputKey}
        />
        <button onClick={run} ref={buttonRef}>
          SAVE
        </button>
        */}
        <h2>Function Example (useCallback)</h2>
        Count : {count}
        {/**<Button onClick={() => setCount(count + 1)}>Increment</Button>*/}
        <Button onClick={incrementCallback}>Increment</Button>
      </div>
    </>
  );
};
