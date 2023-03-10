import * as React from "react"
import { Link } from "gatsby"

function NonExistingPeriodic({params}) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>Couldn't find the Element</h1>
        <p>We couldn't locate the Element with the ID "{params.yamlId}"</p>
      </main>
    </div>
  )
}

export default NonExistingPeriodic
