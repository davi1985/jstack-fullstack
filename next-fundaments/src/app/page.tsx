import { Checkout } from './Checkout'
import ListVehicles from './ListVehicles'

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Checkout list={<ListVehicles />} />
    </div>
  )
}
