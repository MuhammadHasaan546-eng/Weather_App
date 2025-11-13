export default function HomePage() {
  return (
    <div className="min-h-screen  from-indigo-50 to-indigo-100 flex flex-col items-center">
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-indigo-700 mb-4">
          Welcome to Weather App &#127757;
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
          Check real-time weather information with beautiful interactive
          visuals.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
        <div className="perspective-1000">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-700 hover:rotate-y-12 hover:scale-105">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              {" "}
              &#127774; Sunny
            </h2>
            <p className="text-gray-600">
              Get accurate sunny day predictions for your city.
            </p>
          </div>
        </div>

        <div className="perspective-1000">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-700 hover:rotate-y-12 hover:scale-105">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              &#127783;&#65039; Rainy
            </h2>
            <p className="text-gray-600">
              Check the rainfall and storm alerts for your area.
            </p>
          </div>
        </div>

        <div className="perspective-1000">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-700 hover:rotate-y-12 hover:scale-105">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              &#10052;&#65039;Snowy
            </h2>
            <p className="text-gray-600">
              See snowy weather conditions and temperature trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
