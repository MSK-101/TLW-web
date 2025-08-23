import Navbar from "./components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-gray-200">
      <div className="px-20 py-10">
        <Navbar />
        {children}
      </div>
    </body>
  );
}
