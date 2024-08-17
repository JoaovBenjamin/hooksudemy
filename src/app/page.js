"use client"

import { useState } from "react";


export default function Home() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((counter) => counter + 1)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>{counter}</button>
    </main>
  );
}
