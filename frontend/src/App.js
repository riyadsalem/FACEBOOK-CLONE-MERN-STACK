const App = () => {
  const getJson = async () => {
    const res = fetch("http://localhost:8000/user");
    console.log(res);
  };
  getJson();
  return (
    <>
      <div>WELCOME FRONTEND</div>
    </>
  );
};

export default App;
