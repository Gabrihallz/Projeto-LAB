import React from 'react'

const List = ({user}) => {
  return (
    <div>
        <ul>
          {user?.map((item)=> {
            <li key={item.codigo}>
              <h1>Nome social = {item.nomeSocial}</h1>
            </li>
          })}
        </ul>
    </div>
  )
}

export default List