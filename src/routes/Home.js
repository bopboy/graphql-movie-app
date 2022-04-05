import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`
const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES)
    if (loading) return "Loading..."
    if (data && data.movies) return data.movies.map(m => <h1 key={m.id}>{m.id}</h1>)
    return (
        <div>Home</div>
    )
}
export default Home