export default function Feedback() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Provide your feedback</h3>
              <p className="text-sm text-gray-500 mt-1">Was this page helpful?</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#9e1b66] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#801650]">Yes</button>
              <button className="bg-[#9e1b66] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#801650]">No</button>
            </div>
          </div>
        </div>
    )
}