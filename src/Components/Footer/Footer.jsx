import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function FooterInfo() {
  return (
    <footer className="bg-indigo-600 text-white mt-10">
      {}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">WeatherApp &#127757;</h2>
          <p className="text-gray-200">
            Check real-time weather updates worldwide.
          </p>
        </div>

        {}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/weatherapp"
                className="hover:text-yellow-300 transition-colors"
              >
                Weather
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-yellow-300 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/MuhammadHasaan546-eng"
              className="hover:text-yellow-300 transition-colors"
            >
              {" "}
              <FaGithub />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hasaan-609a282a6/"
              className="hover:text-yellow-300 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {}
      <div className="bg-indigo-700 text-center py-4 text-gray-200 text-sm">
        © {new Date().getFullYear()} WeatherApp. All rights reserved.
      </div>
    </footer>
  );
}
