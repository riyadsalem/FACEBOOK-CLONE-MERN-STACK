import React, { useEffect, useRef, useState } from "react";

export class LearnSomeIdeasClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

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
  handelEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <>
        <div>
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
        </div>
        <br />
        <hr />
      </>
    );
  }
}

export const LearnSomeIdeasFunction = (props) => {
  ///////////////////////////////////// useEffect /////////////////////////////////////

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handePassword = (e) => {
    setPassword(e.target.value);
  };

  ///////////////////////////////////// useRef /////////////////////////////////////

  const dataInfo = {
    fName: "",
    lName: "",
  };
  const [data, setData] = useState(dataInfo);
  const fNameRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
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

  return (
    <>
      <div>
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
          onChange={handelData}
          onKeyDown={onFirstInputKey}
        />
        <input
          placeholder="Last Name"
          name="lName"
          value={lName}
          onChange={handelData}
          ref={fNameRef}
          onKeyDown={onLastInputKey}
        />
        <button onClick={run} ref={buttonRef}>
          SAVE
        </button>
      </div>
    </>
  );
};
