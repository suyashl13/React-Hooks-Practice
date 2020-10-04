import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Repos({repos_url}) {
    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    } 

    useEffect(() => {
        fetchRepos()
    }, [repos_url])

    return (
        <ListGroup>
            {
                repos.map(
                    (repo, index) => <ListGroupItem key={repo.id}>
                        <div className="text-primary">{repo.name}</div>
                        <div className="text-primary">{repo.language}</div>
                        <div className="text-primary">{repo.description}</div>
                    </ListGroupItem>
                )
            }
        </ListGroup>
    )
}
