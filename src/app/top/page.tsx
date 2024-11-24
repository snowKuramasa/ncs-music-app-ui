'use client'

import React from 'react'
import ncs from 'nocopyrightsounds-api'
import Link from 'next/link'
import Button from '@mui/material/Button' // Material-UI を使う場合
import axios from 'axios'
import fs from 'fs/promises'

const handleGetSongsClick = async () => {}

export default function Page() {
  return (
    <div>
      <Link href='/profile' passHref>
        <Button
          variant='contained'
          color='primary'
          onClick={handleGetSongsClick}
        >
          Go to profile Page
        </Button>
      </Link>
    </div>
  )
}
