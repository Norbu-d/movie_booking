'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

interface MobileHeaderProps {
  onToggleSidebar: () => void
  admin: any
}

export function MobileHeader({ onToggleSidebar, admin }: MobileHeaderProps) {
  return (
    <header className="lg:hidden bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
      <div className="px-4 py-3 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="text-gray-400 hover:text-white"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="text-sm text-right">
            <p className="font-medium text-white">{admin?.name}</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">
              {admin?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}