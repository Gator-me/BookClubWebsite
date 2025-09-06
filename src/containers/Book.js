import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Book() {
  const { book } = useRouteData()
  return (
    <div>
      <Link to="/books/">{'<'} Back</Link>
      <br />
      <h3>{book.title}</h3>
      <p>{book.blurb}</p>
        <p>{book.thoughts}</p>
        <p>{book.rating}</p>
    </div>
  )
}
