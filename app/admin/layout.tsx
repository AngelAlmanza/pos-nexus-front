import AdminProvider from "@/providers/AdminProvider"

type Props = {
  children: React.ReactNode;
}

function AdminLayout({ children }: Props) {
  return (
    <AdminProvider>
      {children}
    </AdminProvider>
  )
}

export default AdminLayout