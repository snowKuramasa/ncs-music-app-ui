'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Button from '@mui/material/Button'

// use the songs here
console.log(songs)

export default function Page() {
  const { data: session, status } = useSession()

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status !== 'loading' && session && (
        <div>
          <p>Welcome!! NCS MUSIC App, {session?.user?.name}</p>
          <Button variant='contained' onClick={() => signOut()}>
            logout👋
          </Button>
        </div>
      )}
    </>
  )
}
