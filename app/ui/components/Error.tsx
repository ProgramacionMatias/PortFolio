import React from 'react'



export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md text-xl">
    {children}
</div>
  )
}
