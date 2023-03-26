// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  {id : "parent"},
  [React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I'm in tag 1"),
    React.createElement("h2", {}, "I'm in tag 2"),
  ]),
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I'm in tag 1"),
    React.createElement("h2", {}, "I'm in tag 2"),
  ])]
);

root.render(parent);

// console.log(heading);
