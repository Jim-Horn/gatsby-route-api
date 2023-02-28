import * as React from "react"
import { Link } from "gatsby"

function PeriodicView({ periodic }) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
       <h1>{periodic.name}</h1>
        <p><Link to={`/periodic/name/${periodic.name.toLowerCase()}`}>{periodic.name}</Link>, with the symbol "<Link to={`/periodic/symbol/${periodic.symbol.toLowerCase()}`}>{periodic.symbol}</Link>", has the atomic number <Link to={`/periodic/id/${periodic.yamlId}`}>{periodic.yamlId}</Link></p>
      </main>
      <footer>These elements all brought to you by Nature. Well... mostly.</footer>
    </div>
  )
}

export default PeriodicView
