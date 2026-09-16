const ContactSection = () => {
    return (
        <div className="flex flex-col items-center pt-20 px-6 h-[70vh] bg-dark-gray">
            <div className="w-full max-w-xl rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Us</h2>
                <form className="flex flex-col space-y-6">
                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            placeholder="Write your message here..."
                            className="px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-accent-blue hover:bg-blue-700 transition text-white py-3 rounded-md font-medium"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
