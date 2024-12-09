import Link from 'next/link'
import { Home, Keyboard } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r bg-background p-4">
      <nav className="space-y-2">
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
        >
          <Home className="h-5 w-5" />
          Home
        </Link>
        <Link 
          href="/typing-game" 
          className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent"
        >
          <Keyboard className="h-5 w-5" />
          Typing Game
        </Link>
      </nav>
    </div>
  )
} 