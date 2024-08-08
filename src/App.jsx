
const userInfo = [
  {
    id:1,
    name: "Amirxon",
    age: 18,
    job: "O'quvchi",
    nationality: "O'zbek",
    isMarried: false,
  },
  {
    id:2,
    name: "Amirxon",
    age: 18,
    job: "O'quvchi",
    nationality: "O'zbek",
    isMarried: true,
  },
  {
    id:3,
    name: "Amirxon",
    age: 18,
    job: "O'quvchi",
    nationality: "O'zbek",
    isMarried: false,
  },
  {
    id:4,
    name: "Amirxon",
    age: 18,
    job: "O'quvchi",
    nationality: "O'zbek",
    isMarried: false,
  }
]

function App() {
  return (
    <div className="container">
      <h1>Users information</h1>

      <div className="cards">
        {userInfo.map((user) => {
          return (
            <div key={user.id} className="card">
              <div>
                <h2>Ism: <span className="span">{user.name}</span></h2>
                <h2>Yoshi: <span className="span">{user.age}</span></h2>
                <h2>Faoliyat: <span className="span">{user.job}</span></h2>
                <h2>Millati: <span className="span">{user.nationality}</span></h2>
                <h2>Oilalimi?: <span className="span">{user.isMarried ? "Ha" : "Yo'q"}</span></h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
