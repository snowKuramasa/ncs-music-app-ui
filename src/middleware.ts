import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/') {
    // 絶対URLを使用してリダイレクト
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}
