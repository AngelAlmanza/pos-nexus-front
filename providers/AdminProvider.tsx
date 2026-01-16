"use client"

import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
}

export default function AdminProvider({ children }: Props) {
  return (
    <SidebarProvider>
      <aside>
        <AppSidebar />
      </aside>
      <div className="w-full p-4">
        <header className="w-full">
          <SidebarTrigger />
        </header>
        <main className="w-full">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}