'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function AdminLoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsLoading(true)
    
    // UI ONLY - No real authentication
    setTimeout(() => {
      localStorage.setItem('admin', JSON.stringify({ 
        email: 'admin@drunkcinema.com', 
        name: 'Admin',
        role: 'admin'
      }))
      setIsLoading(false)
      router.push('/')
    }, 500) // Shorter delay for UI
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background.png)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="flex items-center space-x-3 w-fit">
            <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/d85051f4-ab59-4ab5-ba71-37a73b784f97-removebg-preview.png" 
                alt="Drunk Cinema Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-orange-500">
                Drunk Cinema
              </span>
              <span className="text-sm text-blue-400 font-medium">
                Admin Portal
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Admin Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6 pb-8">
        <Card className="w-full max-w-md bg-black/80 border-gray-700 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <CardTitle className="text-3xl font-bold text-white">
              Admin Login
            </CardTitle>
            <p className="text-gray-400 mt-2">
              Restricted access - UI Demo Only
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Demo Note */}
            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-3 text-sm text-center">
              <p className="text-blue-300 font-medium">UI Demo Only - No Authentication</p>
              <p className="text-gray-300 mt-1">Just click the button below to access admin dashboard</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Optional fields for UI only */}
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter any email (optional)"
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 h-12 rounded focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <Input
                  type="password"
                  placeholder="Enter any password (optional)"
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 h-12 rounded focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded font-semibold text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Accessing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Access Dashboard (Demo)</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Back to Main Site */}
            <div className="text-center pt-4 border-t border-gray-800">
              <Link 
                href="/" 
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Main Website</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}