import React from 'react'

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';



const BOOKS = gql`
  {
    books {
      title
      author
    }
    authors {
      name
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>
  <h1>Los mejores libros</h1>
  <ul>
  {data.books.map(({ title, author}) => <li key={title}>{title} / {author}</li>)}
  </ul>
  <h1>Autores</h1>
  <ul>{data.authors.map(({ name }) => <li key={name}>{name}</li>)}
  </ul>
  </>

  
}