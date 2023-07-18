"use client"
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

const QueryWrapper = ({ children }: Props) => (
  <ThemeProvider
    attribute="class"
    themes={["pink", "red", "purple", "light", "dark"]}
  >
    {children}

  </ThemeProvider>

)

export default QueryWrapper
