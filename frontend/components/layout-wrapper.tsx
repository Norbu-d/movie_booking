'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Sidebar } from './sidebar'
import { MobileHeader } from './mobile-header'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [admin, setAdmin] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const adminData = localStorage.getItem('admin')
    if (!adminData) {
      router.push('/login')
      return
    }
    setAdmin(JSON.parse(adminData))
  }, [router])

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <MobileHeader 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        admin={admin}
      />
      
      <main className="lg:ml-64 p-4 lg:p-6 min-h-screen">
        {children}
      </main>
    </div>
  )
}