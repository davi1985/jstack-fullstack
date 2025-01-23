'use client'

export default function Home() {
  const { userAgent } = window?.navigator

  return (
    <div className="flex h-screen justify-center items-center">
      <h1>JStack - Next Fundaments</h1>
      {JSON.stringify(userAgent)}
    </div>
  )
}
