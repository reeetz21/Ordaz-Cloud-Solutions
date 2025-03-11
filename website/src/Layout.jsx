import { NavBars } from "./Components/NavBars"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBars/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-black text-white py-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm">
            Ordaz Cloud Solutions • Established 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
