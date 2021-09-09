import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import "./spinner.css"

const Spinner = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <FontAwesomeIcon spin icon={faSpinner} />
      </div>
    </div>
  )
}

export default Spinner
