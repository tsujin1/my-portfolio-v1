import { Calendar, MapPin, Building, Code2 } from 'lucide-react';

const Experience = () => {
  const experience = {
    position: "IT Intern",
    company: "Mitsubishi Power Philippines Inc.",
    duration: "January 28, 2025 – May 9, 2025",
    location: "AG & P Special Economic Zone, Brgy. Bauan, Batangas, Philippines",
    description: "Designed and implemented digital forms for the Finance Department using Microsoft SharePoint and PowerApps, streamlining processes for CATAF requests and Disposal Applications.",
    technologies: ["Microsoft PowerApps", "Microsoft SharePoint"],
    type: "Internship"
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl mb-4">
            <Building className="w-6 h-6 text-slate-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Experience
        </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            My professional experience in information technology
        </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {experience.position}
              </h3>
              <div className="flex items-center gap-2 mb-3 ">
                <span className="text-lg font-semibold text-slate-700">
                  {experience.company}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                {experience.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-slate-700 leading-relaxed text-justify">
              {experience.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-4 h-4 text-slate-600" />
              <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                Technologies Used
            </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Optional: Future Goals Section */}
        <div className="text-center mt-8">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <p className="text-slate-600 text-sm italic">
              "Eager to apply my skills in creating efficient digital solutions and contributing to organizational growth"
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;