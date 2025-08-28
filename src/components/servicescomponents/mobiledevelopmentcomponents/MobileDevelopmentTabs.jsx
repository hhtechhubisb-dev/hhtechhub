import React from "react";

const MobileDevelopmentTabs = ({ activeTab, setActiveTab, reactNativeData, flutterData }) => (
  <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center mb-4">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Our Mobile Technology Stack
        </h2>
      </div>
      <p className="text-gray-600 max-w-3xl text-center mb-8">
        We specialize in the leading cross-platform mobile frameworks to deliver efficient, high-quality solutions.
      </p>

      <div className="flex mb-12 border-b border-gray-200 w-full">
        <button
          onClick={() => setActiveTab("react-native")}
          className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${activeTab === "react-native" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          React Native
        </button>
        <button
          onClick={() => setActiveTab("flutter")}
          className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${activeTab === "flutter" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Flutter
        </button>
      </div>

      <div className="w-full">
        <div className="grid md:grid-cols-1 gap-8">
          {activeTab === "react-native" ? (
            <div className="flex flex-col md:flex-row gap-6 group items-stretch">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 mr-3 border border-gray-100 hover:shadow-md transition-all duration-300 w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-1 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
                  <h3 className="font-semibold text-xl text-gray-800">React Native</h3>
                </div>
                <p className="text-gray-600 mb-4">{reactNativeData.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Strengths:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {reactNativeData.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Ideal For:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {reactNativeData.useCases.map((useCase, i) => (
                      <li key={i}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl w-full md:w-1/2 h-64 md:h-auto shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="React Native Development"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg">React Native Apps</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-6 group items-stretch">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 border border-gray-100 hover:shadow-md transition-all duration-300 w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-1 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
                  <h3 className="font-semibold text-xl text-gray-800">Flutter</h3>
                </div>
                <p className="text-gray-600 mb-4">{flutterData.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Strengths:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {flutterData.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Ideal For:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {flutterData.useCases.map((useCase, i) => (
                      <li key={i}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl w-full md:w-1/2 h-64 md:h-auto shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Flutter Development"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Flutter Apps</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default MobileDevelopmentTabs;