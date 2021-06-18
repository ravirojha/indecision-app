console.log("App.js is running");

//JSX -JavaScript XML

const app = {
  title: "Indecision App",
  subtitle: "Decision Making App",
  option: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.option.push(option);
    e.target.elements.option.value = "";
    renderForm();
  }
};

const wipe = () => {
  app.option = [];
  renderForm();
};

const appRoot = document.getElementById("app");

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random()*app.option.length);
  const option = app.option[randomNum];
  alert(option);
};

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.option.length===0} onClick={onMakeDecision}>What should I do?</button>

      <button onClick={wipe}>Remove All</button>
      <ol>
        {app.option.map((opt) => (
          <li key={opt}>{opt}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderForm();
