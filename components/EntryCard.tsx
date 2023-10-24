const EntryCard = ({ entry }: any) => {
  const date = new Date(entry.createdAt).toDateString()

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 flex items-center justify-between">
        {date}
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: entry.analysis.color }}
        ></div>
      </div>
      <div className="px-4 py-5">{entry.analysis.summary}</div>
      <div className="px-4 py-5">{entry.analysis.summary}</div>
    </div>
  )
}

export default EntryCard
