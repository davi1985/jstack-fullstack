'use client'

export const Checkout = ({ list }: { list: React.ReactNode }) => {
  return (
    <div>
      {list}

      <button onClick={() => alert('opaaaa')}>Click me</button>
    </div>
  )
}
