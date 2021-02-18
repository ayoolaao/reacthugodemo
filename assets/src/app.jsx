const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <span>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </span>
    </div>
  );
}

ReactDOM.render(React.createElement(App),
  document.getElementById("root"));
