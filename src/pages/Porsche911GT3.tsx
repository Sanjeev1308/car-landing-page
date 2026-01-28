export default function Porsche911GT3() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo and CTA */}
      <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-cyan-400/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[74px]">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 neon-cyan-bg rounded-lg flex items-center justify-center">
                <span className="font-bold text-black text-base">M</span>
              </div>
              <span className="text-lg font-bold text-gradient">
                MotorMint
              </span>
            </div>

            {/* CTA Button */}
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 text-black">
              Reserve Now
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32">
        {/* Hero Section with Product Image */}
        <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-7xl mx-auto">
            <div className="absolute top-0 right-9 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-7 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Product Info */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="neon-cyan font-semibold text-xs sm:text-sm mb-2">PERFORMANCE EXCELLENCE</p>
                  <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight text-gradient">
                    Porsche 911 GT3
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-4">
                    The Ultimate Track-Focused Supercar
                  </p>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Experience pure driving performance with the 911 GT3. Engineered for the road and track, this precision instrument combines raw power, cutting-edge aerodynamics, and handcrafted engineering excellence. Every curve, every acceleration, every moment behind the wheel defines automotive perfection.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button className="max-w-36 sm:w-auto px-8 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-black">
                    Test Drive
                  </button>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 rounded-2xl blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-purple-500/20 rounded-2xl blur-2xl"></div>
                <picture>
                  <source srcSet="/porsche-911-gt3.webp" type="image/webp" />
                  <img
                    src="/porsche-911-gt3.jpg"
                    alt="Porsche 911 GT3"
                    className="relative w-full object-cover rounded-2xl shadow-2xl shadow-cyan-400/30"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-gray-950">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16">
              Engineered for Excellence
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: Engine Performance */}
              <div className="group bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Pure Performance</h3>
                <p className="text-gray-400 leading-relaxed">
                  6.0L naturally aspirated flat-six engine with 502 horsepower. Achieve 0-60 mph in 2.7 seconds with a top speed of 198 mph. Track-tuned suspension and precision-engineered exhaust deliver unmatched performance on every drive.
                </p>
              </div>

              {/* Feature 2: Aerodynamic Design */}
              <div className="group bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m0 0l-2-1m2 1v2.5M14 4l-2 1m0 0L10 4m2 1V2.5M20 7l-2 1m0 0l-2-1m2 1v2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Track Aerodynamics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Advanced aerodynamic package with carbon fiber elements and aggressive styling. DRS-equipped rear wing and optimized downforce channels provide exceptional stability at speed and during aggressive cornering maneuvers.
                </p>
              </div>

              {/* Feature 3: Driver Technology */}
              <div className="group bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Advanced Technology</h3>
                <p className="text-gray-400 leading-relaxed">
                  14.1-inch touch display with integrated track apps, real-time telemetry, and vehicle dynamics monitoring. Precision shift transmission with launch control delivers perfect acceleration every time. Integrated telemetry recording for circuit analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16">
              Technical Specifications
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-xl border border-gray-800">
                <p className="neon-cyan text-sm font-semibold mb-2">Engine</p>
                <p className="text-gray-300 text-lg">6.0L Naturally Aspirated Flat-Six</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-xl border border-gray-800">
                <p className="neon-cyan text-sm font-semibold mb-2">Horsepower</p>
                <p className="text-gray-300 text-lg">502 hp @ 8,400 RPM</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-xl border border-gray-800">
                <p className="neon-cyan text-sm font-semibold mb-2">0-60 mph</p>
                <p className="text-gray-300 text-lg">2.7 seconds</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-xl border border-gray-800">
                <p className="neon-cyan text-sm font-semibold mb-2">Top Speed</p>
                <p className="text-gray-300 text-lg">198 mph</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900/30 to-black">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16">
              Pricing & Financing
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Price Card */}
              <div className="bg-gradient-to-br from-cyan-400/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-8 sm:p-10">
                <p className="text-gray-400 text-sm mb-2">Current Price</p>
                <p className="text-4xl sm:text-5xl font-bold text-gradient mb-4">$189,500</p>
                <p className="text-gray-300 mb-6">Competitive market rate for 2022 model with 8,500 miles</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>✓ Clean title & history</p>
                  <p>✓ Full service records</p>
                  <p>✓ 2-year warranty included</p>
                </div>
              </div>

              {/* Financing Options */}
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 border border-purple-500/30 rounded-2xl p-8 sm:p-10">
                <p className="text-gray-400 text-sm mb-2">Financing Options</p>
                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-cyan-400 font-semibold mb-1">60 months @ 4.9% APR</p>
                    <p className="text-gray-300 text-lg">$3,570/month</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-cyan-400 font-semibold mb-1">48 months @ 4.5% APR</p>
                    <p className="text-gray-300 text-lg">$4,290/month</p>
                  </div>
                  <p className="text-gray-400 text-xs">*Subject to credit approval</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extended Specs Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/20 to-gray-950">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16">
              Complete Vehicle Details
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: 'Year', value: '2022' },
                { label: 'Mileage', value: '8,500 miles' },
                { label: 'Transmission', value: '7-Speed PDK' },
                { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
                { label: 'Fuel Type', value: 'Premium Gasoline' },
                { label: 'MPG (Hwy)', value: '22 MPG' },
                { label: 'Exterior Color', value: 'Racing Yellow' },
                { label: 'Interior', value: 'Black Leather' },
                { label: 'Condition', value: 'Excellent' },
              ].map((spec, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
                  <p className="text-gray-400 text-sm font-semibold mb-2">{spec.label}</p>
                  <p className={`text-lg font-bold ${idx === 8 ? 'text-cyan-400' : 'text-white'}`}>{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability & Contact Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-black to-black">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-transparent border border-cyan-400/30 rounded-2xl p-8 sm:p-12">
              <div className="text-center mb-10">
                <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full px-4 py-2 mb-4">
                  <p className="text-black text-sm font-semibold">✓ In Stock</p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
                  Ready to Drive Home
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  This exceptional 911 GT3 is available now. Limited inventory - secure your spot today!
                </p>

                {/* Availability Status */}
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-cyan-400 text-2xl font-bold">1</p>
                    <p className="text-gray-400 text-sm">Units Available</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-cyan-400 text-2xl font-bold">48h</p>
                    <p className="text-gray-400 text-sm">Quick Delivery</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-cyan-400 text-2xl font-bold">24/7</p>
                    <p className="text-gray-400 text-sm">Support</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-black">
                    Make Offer
                  </button>
                  <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg font-semibold transition-all duration-300">
                    Schedule Inspection
                  </button>
                  <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg font-semibold transition-all duration-300">
                    Contact Dealer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Contact Information */}
      <footer className="border-t border-gray-800 bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-12 sm:gap-8 mb-12">
            {/* Email */}
            <div className="text-center sm:text-left">
              <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
                <svg className="w-6 h-6 neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 font-semibold">Email</span>
              </div>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">
                sales@motormint.com
              </p>
            </div>

            {/* Phone */}
            <div className="text-center sm:text-left">
              <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
                <svg className="w-6 h-6 neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400 font-semibold">Phone</span>
              </div>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">
                +1 (888) 911-GT3
              </p>
            </div>

            {/* Address */}
            <div className="text-center sm:text-left">
              <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
                <svg className="w-6 h-6 neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 font-semibold">Address</span>
              </div>
              <p className="text-gray-300">
                789 Performance Drive<br />Stuttgart, Germany 70435
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-center text-sm">
              © 2024 MotorMint - Premium Automotive Experience. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
