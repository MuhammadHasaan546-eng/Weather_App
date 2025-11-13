export default function AboutPage() {
  return (
    <div className="min-h-screen  from-indigo-50 to-indigo-100">
      <section className="text-center py-20 px-4 bg-indigo-100">
        <h1 className="text-5xl sm:text-6xl font-bold text-indigo-700 mb-4">
          About Weather App &#127757;
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Weather App helps you check real-time weather conditions for any city
          or ZIP code. Designed with modern UI and responsive layouts.
        </p>
      </section>
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://cdn.dribbble.com/userupload/42979691/file/original-62d6f19a670950f375e0838ac33a0fc0.jpg?resize=1024x768&vertical=center"
              alt="Weather Logo"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600">
              Why Choose Our Weather App?
            </h2>
            <p className="text-gray-700 text-lg">
              - Get real-time weather updates for cities and ZIP codes
              worldwide. - Beautiful, interactive, and 3D-enabled UI elements. -
              Tailwind CSS based responsive design for all devices. - Easy to
              use and visually appealing interface.
            </p>
            <p className="text-gray-700 text-lg">
              Whether it's sunny, rainy, or snowy, you'll always have the latest
              weather information with our app. Stay informed and plan your day
              efficiently!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-indigo-50">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              &#127774; Sunny Forecast
            </h3>
            <p className="text-gray-700">
              Accurate sunny day predictions for planning your activities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              {" "}
              &#127783;&#65039; Rain Alerts
            </h3>
            <p className="text-gray-700">
              Receive timely alerts for rain and storms in your area.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              &#127783;&#65039; Snow Tracker
            </h3>
            <p className="text-gray-700">
              Track snowfall and temperatures in cold regions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
