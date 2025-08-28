import React from 'react'

function QuoteCard({ title,text }) {
  return (
    <div className=" text-lg font-semibold italic border-l-4 border-orange-400 bg-orange-50 inline-block px-4 py-4 rounded mb-8">
      <p className="text-orange-500 ">
        "{title}"
        
      </p>
      <p>{text}</p>
      </div>
  )
}

export default QuoteCard
