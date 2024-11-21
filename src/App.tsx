function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-900">Bhagwati Trendz</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product Card */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={`https://via.placeholder.com/300x200?text=Product+${index + 1}`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="mt-4 text-lg font-semibold">Product {index + 1}</h2>
                <p className="text-gray-500">$99.99</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App;
