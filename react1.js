const avatar =("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4");

const name = "Mireia";

const online = false;

const element = (
  <div className="person-item">
    <img class="avatar" src={avatar}/>
    <div>
      <h4> {name} </h4>
      <p> {online ? "Online" : "Offline"}
      </p>
     </div>
  </div>
);
