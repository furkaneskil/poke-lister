import './App.css'
import pokemon from './pokemon.json'

function App() {

  return (
    <div style={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem"
    }}>
      <h1 className="title">Pokemon List</h1>
      <table width="100%">
        <thead>
          <tr>
            <td>Name</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map( (pokemon) => 
            (
              <tr>
                <td>{pokemon.name.english}</td>
                <td>{pokemon.type.join(', ')}</td>
              </tr>
            ) )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App