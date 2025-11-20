import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-orange-400">Home</Link>
              <Link href="/movies" className="block hover:text-orange-400">Movies</Link>
              <Link href="/new" className="block hover:text-orange-400">New & Popular</Link>
              <Link href="/mylist" className="block hover:text-orange-400">My List</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Account</h3>
            <div className="space-y-2 text-sm">
              <Link href="/profile" className="block hover:text-orange-400">Profile</Link>
              <Link href="/settings" className="block hover:text-orange-400">Settings</Link>
              <Link href="/help" className="block hover:text-orange-400">Help Center</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-orange-400">About Us</Link>
              <Link href="/careers" className="block hover:text-orange-400">Careers</Link>
              <Link href="/contact" className="block hover:text-orange-400">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block hover:text-orange-400">Privacy</Link>
              <Link href="/terms" className="block hover:text-orange-400">Terms of Use</Link>
              <Link href="/cookies" className="block hover:text-orange-400">Cookie Preferences</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 <span className="text-orange-500">Drunk Cinema</span>. All rights reserved.</p>
          <p className="mt-2 text-xs">The best place for comedy and party movies!</p>
        </div>
      </div>
    </footer>
  )
}