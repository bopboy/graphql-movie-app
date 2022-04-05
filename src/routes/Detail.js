import React from 'react'
import { useParams } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      summary
    }
  }
`;
const Detail = () => {
    const { id } = useParams()
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: parseInt(id)
        }
    })
    console.log(loading, data)
    if (loading) return "Loading..."
    if (data && data.movie) return data.movie.title
    return (
        <div>Detail</div>
    )
}
export default Detail