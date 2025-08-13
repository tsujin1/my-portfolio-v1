const IntroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 py-12 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-wide animate-pulse">
                  Hello, I'm
                </span>
              </div>

              {/* Name */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent animate-gradient">
                  Justin Dimaandal
                </span>
              </h1>

              {/* Role */}
              <h2 className="text-xl lg:text-2xl text-gray-600 font-light">
                Aspiring Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg text-justify">
              I’m a fresh graduate passionate about learning and building digital experiences.
              My goal is to grow my skills in web development and create projects that combine functionality with great design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/files/Justin_Dimaandal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                <span className="flex items-center gap-2">
                  View My Resume
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a
                href="mailto:justindimaandal.work@gmail.com"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:border-gray-900 hover:text-gray-900 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                Get In Touch
              </a>

            </div>

          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl -rotate-6 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl rotate-6 animate-float-delayed"></div>

              <div className="relative z-10 w-80 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Profile Image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src="/images/profile.jpg"
                    alt="Justin Rich M. Dimaandal"
                    className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>




              {/* Floating Elements */}
              <div className="absolute top-12 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-12 -left-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/3 -right-12 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes float {
          0%, 100% { transform: rotate(-6deg) translateY(0px); }
          50% { transform: rotate(-6deg) translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: rotate(6deg) translateY(0px); }
          50% { transform: rotate(6deg) translateY(-8px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default IntroSection;