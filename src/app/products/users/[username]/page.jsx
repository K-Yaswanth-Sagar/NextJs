const page = ({params}) => {

    console.log({params})
  return (
    <div>
        <h1>The name is {params.username}</h1>
    </div>
  )
}

export default page