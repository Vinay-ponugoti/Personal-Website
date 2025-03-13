"use client"

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}