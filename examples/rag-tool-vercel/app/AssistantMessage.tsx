export default function AssistantMessage({children}) {
    return <div className="flex flex-col gap-2 ml-6">
      <div className="rounded-lg bg-purple-300 p-4 ml-auto dark:bg-gray-800">
        <div className="grid gap-2">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {children}
          </p>
        </div>
      </div>
    </div>
  }