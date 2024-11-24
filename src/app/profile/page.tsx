'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'

export default function Page() {
  const { data: session, status } = useSession()

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status !== 'loading' && session && (
        <div>
          <p>Welcome!! NCS MUSIC App, {session?.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </>
  )
}
