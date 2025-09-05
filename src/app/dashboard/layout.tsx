import Navbar from "./components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-7 md:px-20 py-10 min-h-screen bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
}
