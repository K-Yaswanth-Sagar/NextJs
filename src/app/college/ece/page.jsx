import ece from "./ece.module.css"

export const sampleData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json()
}

const eceBranch = async () => {

  const data = await sampleData()

  return (
    <div>
      <h1 className={ece.branch}>This is ECE branch</h1>
      <h2>student names</h2>
      {data.map((item, idx) => (
        <div key={item.id}>
          {`${idx + 1} - ${item.name}`}
          <br />
          Company: {item.company.name}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default eceBranch
