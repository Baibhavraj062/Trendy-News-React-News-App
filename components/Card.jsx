import React from 'react'

function Card({ data }) {
  if (!data ) {
    return (
      <p className="text-center mt-6 text-gray-600">
        No news available. Search something 🔍
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
        >
          {/* Image */}
          <img
            src={item.urlToImage || 'https://via.placeholder.com/400'}
            alt="news"
            className="w-full h-48 object-cover rounded-t-2xl"
          />

          {/* Content */}
          <div className="p-4">
            <h2 className="font-bold text-lg mb-2 line-clamp-2">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm line-clamp-3">
              {item.description || 'No description available'}
            </p>

            {/* Read More */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
            >
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card

