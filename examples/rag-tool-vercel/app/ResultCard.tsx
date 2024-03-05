export default function ResultCard({ query, results }) {
    return <div className="flex flex-col gap-2">
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <div className="grid gap-2">
          <h3 className="font-semibold text-sm">Search Results</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Search Query: {query} </p>
          <div className="overflow-auto max-h-[5rem]">
            <ul className="grid gap-4 list-none p-0">
              { results.map(result => {
                return <li className="flex gap-4">
                  <div className="grid gap-1.5">
                    <p className="text-xs text-gray-700 dark:text-gray-400">
                      <pre>{result}</pre>
                    </p>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  }