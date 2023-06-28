import React from 'react'

const List = ({user}) => {
  return (
    <div>
      {user?.map((item) => (
        <li key={item.codigo}>
          // {item.nomeCompleto}
          // {item.nomeSocial}
          // {item.sexo}
          // {item.dataNascimento}
          // {item.email}
          // {item.estado}
          // {item.municipio}
          // {item.numeroDeAcessos}
          //  {item.situacao}
          //  {item.dataDeVinculo}
        </li>
      ))}
    </div>
  )
}

export default List