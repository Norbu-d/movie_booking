'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home,
  Film,
  Clock,
  Building,
  Grid3x3,
  Ticket,
  CreditCard,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Logo, LogoAlt } from './logo'

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Movies', href: '/movies', icon: Film },
  { name: 'Showtimes', href: '/showtimes', icon: Clock },
  { name: 'Theaters', href: '/theaters', icon: Building },
  { name: 'Seat Maps', href: '/seat-maps', icon: Grid3x3 },
  { name: 'Bookings', href: '/bookings', icon: Ticket },
  { name: 'Payments', href: '/payments', icon: CreditCard },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [admin, setAdmin] = useState<any>(null)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const adminData = localStorage.getItem('admin')
    if (adminData) {
      setAdmin(JSON.parse(adminData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('admin')
    router.push('/login')
  }

  return (
    <>
      {/* Overlay for mobile */}
      {!isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 transition-all duration-300 lg:translate-x-0",
        collapsed ? "w-20" : "w-64",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Brand/Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            {!collapsed ? <LogoAlt /> : <Logo size="md" showText={false} />}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10"
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Admin Info */}
        {admin && !collapsed && (
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="font-bold text-white">
                  {admin.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{admin.name}</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-220px)]">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-l-4 border-yellow-500"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50",
                  collapsed ? "justify-center p-3" : "space-x-3 px-3 py-3"
                )}
                onClick={() => onClose?.()}
                title={collapsed ? item.name : ''}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-yellow-400" : "text-gray-400 group-hover:text-yellow-300")} />
                {!collapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 border-t border-gray-800 bg-gradient-to-t from-black to-gray-900",
          collapsed ? "p-2" : "p-4"
        )}>
          <Button
            variant="ghost"
            className={cn(
              "w-full text-red-400 hover:text-red-300 hover:bg-red-500/10",
              collapsed ? "justify-center" : "justify-start"
            )}
            onClick={handleLogout}
            title={collapsed ? "Logout" : ""}
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </aside>
    </>
  )
}