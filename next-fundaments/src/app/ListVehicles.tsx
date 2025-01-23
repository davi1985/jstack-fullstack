async function getVehicles() {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return [
    { id: 1, name: 'RS5' },
    { id: 2, name: 'A4' },
    { id: 3, name: 'Q7' }
  ]
}

export default async function ListVehicles() {
  const vehicles = await getVehicles()

  return (
    <div>
      <ul>
        {vehicles.map(v => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  )
}
