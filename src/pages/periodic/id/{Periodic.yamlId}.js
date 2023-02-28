import * as React from "react"
import { graphql } from "gatsby"
import PeriodicView from "../../../views/periodic-view";


function Element(props) {
  const { periodic } = props.data;
  return <PeriodicView periodic={periodic}/>
}

export default Element

export const query = graphql`
  query($yamlId: Int!) {
    periodic(yamlId: { eq: $yamlId }) {
      yamlId
      name
      symbol
    }
  }
`