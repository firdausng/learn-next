
interface user{
    id: number
    name: string
}

async function fetchSpeakers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        next: {
            revalidate: 20
        }
    })
    const data: user[] = await response.json()
    return data;
}

export default async function Home() {
    const data = await fetchSpeakers();
  return (
    <>
      <h1>Welcome to speakers page</h1>
        <div>
            last rendered: {new Date().toLocaleTimeString()}
        </div>
        {data.map(({id, name}) =>(
            <div key={id}>
                <h1>{name}</h1>
            </div>
        ) )}
    </>
  )
}
