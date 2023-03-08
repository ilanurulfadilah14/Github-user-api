import { useState, useEffect } from "react"
import Loading from "./Loading"
import Profile from "./Profile"


// const singleUser = `https://api.github.com/users/SankThomas`
// const repos = `https://api.github.com/users/sankthomas/repos?per_page=5`
// https://api.github.com/users/sankthomas/repos?page=1&per_page=10&sort=updated

function App() {
  const [items, setItems] = useState([])
  const [users] = useState("florinpop17")

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${users}/repos?page=1&per_page=6&sort=updated`)
      const data = await res.json()
      setItems(data)
    }

    fetchRepos()
  }, [])

  return (
    <>
    {!items ? ( 
    <Loading />
    ) : ( 
    <>
      <section className="pt-5 pb-5">
        <h1 className="text-2xl font-bold text-center">Viewing {users}'s repositories
        </h1>
          
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-3 mt-10">
          {items.map((item) => (
            <Profile  key={item.id} {...item}/>
          ))}
          
        </div>
      </section>

      
    </>  )}
    </>
  )
}

export default App
  