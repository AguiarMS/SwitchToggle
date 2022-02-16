import React, { useState, useEffect } from 'react';
import { RepositoriesStyle } from './styles';


const MyRepositories = () => {

  const [repositories, setRespositories] = useState<any>([])

  useEffect(() => {
    fetch('https://api.github.com/users/aguiarMS/repos')
      .then(response => response.json())
      .then(data => setRespositories(data))
  }, [])


  return (
    <RepositoriesStyle>
      <div>
        {repositories.map((repository: { name: string }) => {
          return (
            <li>{repository.name}</li>
          )
        })}
      </div>
    </RepositoriesStyle>
  )
}

export default MyRepositories