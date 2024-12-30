const NewsletterSignup = () => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg mt-12 shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get the latest blogs delivered straight to your inbox.</p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  
  export default NewsletterSignup;
  