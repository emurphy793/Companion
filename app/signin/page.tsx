"use client"

import { SignIn } from '@clerk/nextjs' //this is a Clerk component
import React from 'react'

function page() {
  return (
    <div>
      <SignIn />
    </div>
  )
}

export default page
