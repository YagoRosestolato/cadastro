import './style.css'
import Trash from '../../assets/trasher.svg'

export default function Home() {

  const users = [
    {
      id: '123',
      name: 'Yago',
      age: 33,
      email: 'yagorosestolato@icloud.com',
    },
    {
      id: '123',
      name: 'Yago',
      age: 33,
      email: 'yagorosestolato@icloud.com',
    }
  ]

  return (
    <div className='main'>

      <form action="">
        <h1>Cadastro de usuários</h1>
        <input type="text" placeholder='Nome' />
        <input type="number" placeholder='Idade' />
        <input type="email" placeholder='Email' />
        <button type="button">Cadastrar</button>
      </form>
      {users.map(user => (
        <div className='card'>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age} </p>
            <p>E-mail: {user.email}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  )
}


