const userNames = ['anna', 'nini', 'luka', 'nika']

function UserList() {
  return (
    <section className="user-list">
      <h2>Users</h2>
      <ul>
        {userNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </section>
  )
}

export default UserList
