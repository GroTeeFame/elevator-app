import { Logic } from './components/logic/Logic';

function App() {
  return (
    <>
    <div style={{
      margin: "20px 50px",
    }}>
      <h3>H<del>ELL</del>O</h3>
      <h4 style={{
        margin: "0 50px",
      }}
      ><sup>wel</sup><ins>come</ins> to</h4>
      <h2 style={{
        margin: "0 15px",
      }}
      >El<mark>eva</mark><sub>TOR</sub> <small><em>simula</em></small>KR </h2>
    </div>
      <Logic/>
    </>
  );
}

export default App;
