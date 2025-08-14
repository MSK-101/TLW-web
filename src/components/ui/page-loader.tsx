export default function PageLoader({ loading }: { loading: boolean }) {
  if (!loading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#282828] p-[24px] flex items-center justify-center fixed inset-0 overflow-hidden">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">
          Page Loading...
        </h2>
        <div className="space-y-3">
          <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded animate-pulse w-5/6"></div>
          <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
