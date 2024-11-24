'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Page() {
  //NextAuth(Google Provider)を使った0Auth認証(GCPで設定)
  //GCP:https://console.cloud.google.com/
  //参考記事:https://reffect.co.jp/react/next-auth#Google_Provider
  const { data: session, status } = useSession()
  return (
    <div>
      {status !== 'loading' && !session && (
        <div>
          <p>You are not signed in.</p>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </div>
      )}
    </div>
  )
}
