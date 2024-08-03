import React from 'react'

const Services = () => {
  return (
    <>
      <div>
        <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
          {/* First Section */}
          <div className="relative mb-24">
            <div
              className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
              style={{ marginLeft: "4rem", marginBottom: "2rem" }}
            >
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Natural Language Processing (NLP):
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      The AI product utilizes advanced NLP algorithms to
                      understand and interpret human language, enabling it to
                      accurately process and analyze text-based inputs.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        href="/login"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-6 pr-6 lg:pr-0 lg:pl-0 lg:relative lg:m-0 lg:h-full">
                  <img
                    loading="lazy"
                    width={647}
                    height={486}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="relative mb-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div
                  className="pr-6 pl-6 lg:pl-0 lg:pr-0 lg:relative lg:m-0 lg:h-full"
                  style={{ marginLeft: "4rem", marginBottom: "2rem" }}
                >
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width={647}
                    height={486}
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                  />
                </div>
              </div>
              <div
                className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2"
                style={{ marginLeft: "6rem", marginBottom: "2rem" }}
              >
                <div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Sentiment Analysis:
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      The product has built-in sentiment analysis capabilities,
                      allowing it to determine the sentiment (positive,
                      negative, or neutral) expressed in text or customer
                      feedback.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        href="/login"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="relative mb-24">
            <div
              className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
              style={{ marginLeft: "4rem", marginBottom: "2rem" }}
            >
              <div
                className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"
               
              >
                <div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Natural Language Generation (NLG):
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      The AI product can generate human-like written content,
                      summaries, or reports based on structured data or analysis
                      results.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        href="/login"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div
                  className="pl-6 pr-6 lg:pr-0 lg:pl-0 lg:relative lg:m-0 lg:h-full"
                  style={{ marginLeft: "4rem" }}
                >
                  <img
                    loading="lazy"
                    width={646}
                    height={485}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services