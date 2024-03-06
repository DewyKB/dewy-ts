export default function SearchCard({ query, count }) {
    return <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <div className="grid gap-2">
          <h3 className="font-semibold text-sm">Product Search</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Search Query: {query}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Max Results: {count}</p>
          <div className="flex justify-center items-center">
            <div className="animate-spin h-5 w-5 border-t-2 border-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  }