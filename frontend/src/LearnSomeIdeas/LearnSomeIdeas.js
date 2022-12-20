import React, { useEffect, useState } from "react";

export class LearnSomeIdeasClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

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
          <h2>Class Example</h2>
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
        </div>
      </>
    );
  }
}

export const LearnSomeIdeasFunction = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Did Mount
  useEffect(() => {
    console.log("Function Component did Mount");
    return () => {
      console.log("Function Component Will Unmount");
    };
  }, []);

  // Did Update
  /*
  useEffect(() => {
    if(email === '') return;
    console.log("Function Component did update");
  });
  */

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

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Fucntion Example</h2>
        <input value={email} onChange={handelEmail} placeholder="Email" />
        <input
          value={password}
          onChange={handePassword}
          placeholder="Password"
        />
      </div>
    </>
  );
};
