export default function UserMessage({ children }) {
    return <div className="flex flex-col gap-2 mr-6">
      <div className="rounded-lg bg-blue-300 p-4 dark:bg-blue-800">
        <div className="grid gap-2">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {children}
          </p>
        </div>
      </div>
    </div>
  }