// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-400 rounded-lg p-8 flex justify-between items-center mt-6">
      <div className="text-white max-w-md">
        <h2 className="text-3xl font-bold mb-4">Ready to Scan?</h2>
        <p className="mb-6">
          Point your camera at a food label or upload an image to get instant
          nutritional details.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100">
            Start Live Scan
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-100">
            Upload Image
          </button>
        </div>
      </div>
      <img
        src="https://media.istockphoto.com/id/1162988183/photo/woman-wearing-fitness-clothing-scanning-qr-code-on-food-packaging-to-find-nutritional.jpg?s=612x612&w=0&k=20&c=uSekT3JRgIOPAAecC0nMUDZR2qbsguc7vxiIJKZXMkE="
        alt="Scanning food"
        className="w-1/3  shadow-lg rounded-4xl"
      />
    </section>
  );
};
export default Hero;
