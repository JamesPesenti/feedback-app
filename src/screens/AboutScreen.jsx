import React from 'react'
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutScreen() {
  return (
    <Card>
    <div className="about">
    <h1>About</h1>
    </div>
    <p>
        <Link to="/">Back To Home</Link>
    </p>
    </Card>
  )
}

export default AboutScreen