import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building,
  Play,
} from "lucide-react";

const sampleProjects = [
  {
    id: "1",
    serviceName: "Invisible Grill Installation",
    location: "Bandra West, Mumbai",
    clientName: "Skyline Apartments",
    description:
      "Complete invisible grill installation for a 15-story residential complex ensuring child safety while maintaining aesthetic appeal. High-grade stainless steel cables with powder-coated frames.",
    media: [
      { type: "image", url: "/assets/images/forAbout.jpg", alt: "Invisible grill installation" },
      { type: "image", url: "/placeholder.svg?height=400&width=600", alt: "Close-up view" },
      { type: "video", url: "/placeholder-video.mp4", thumbnail: "/placeholder.svg?height=400&width=600" },
    ],
    completedDate: "March 2024",
  },
  {
    id: "2",
    serviceName: "Mesh Door Solutions",
    location: "Andheri East, Mumbai",
    clientName: "Corporate Tower B",
    description:
      "Custom mesh door installation for office building entrance and emergency exits. Fire-resistant materials with automated access control integration.",
    media: [
      { type: "image", url: "/assets/images/meshDoor.jpg", alt: "Mesh door installation" },
      { type: "image", url: "/placeholder.svg?height=400&width=600", alt: "Interior view" },
    ],
    completedDate: "February 2024",
  },
  {
    id: "3",
    serviceName: "Safety Barrier System",
    location: "Powai, Mumbai",
    clientName: "Tech Park Complex",
    description:
      "Comprehensive safety barrier installation around the perimeter and balconies. Weather-resistant coating with 10-year warranty coverage.",
    media: [
      { type: "image", url: "/assets/images/contact_now.jpg", alt: "Safety barriers" },
      { type: "image", url: "/placeholder.svg?height=400&width=600", alt: "Perimeter view" },
      { type: "image", url: "/placeholder.svg?height=400&width=600", alt: "Detail shot" },
    ],
    completedDate: "January 2024",
  },
]

export default function RecentProjects({ projects = sampleProjects }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState({});

  const nextMedia = (projectId, mediaLength) => {
    setCurrentMediaIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % mediaLength,
    }));
  };

  const prevMedia = (projectId, mediaLength) => {
    setCurrentMediaIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + mediaLength) % mediaLength,
    }));
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Delivering excellence in safety solutions across Mumbai and beyond
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project) => {
            const currentIndex = currentMediaIndex[project.id] || 0;
            const currentMedia = project.media[currentIndex];

            return (
              <div
                key={project.id}
                className="bg-gradient-to-br from-[#dcdcdc] to-[#f5f5f5] border border-slate-700 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Media Section */}
                  <div className="relative aspect-video lg:aspect-square bg-slate-600">
                    {currentMedia?.type === "image" ? (
                      <img
                        src={currentMedia.url}
                        alt={currentMedia.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full relative flex items-center justify-center bg-slate-900">
                        <img
                          src={currentMedia.thumbnail}
                          alt="Video thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full p-4">
                            <Play className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                    )}

                    {project.media.length > 1 && (
                      <>
                        <button
                          onClick={() => prevMedia(project.id, project.media.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => nextMedia(project.id, project.media.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {project.media.map((_, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                setCurrentMediaIndex((prev) => ({
                                  ...prev,
                                  [project.id]: index,
                                }))
                              }
                              className={`w-2 h-2 rounded-full ${index === currentIndex
                                ? "bg-yellow-500"
                                : "bg-white/50"
                                }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded">
                          {project.serviceName}
                        </span>
                        <span className="text-sm text-slate-900">
                          {project.completedDate}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-state-600 mb-4">
                        {project.clientName}
                      </h3>
                      <div className="flex items-center gap-2 mb-4 text-slate-900">
                        <MapPin className="h-4 w-4 text-yellow-500" />
                        <span>{project.location}</span>
                      </div>
                      <p className="text-slate-900 mb-6">{project.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-900">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>Project Completed</span>
                      </div>
                      <span className="text-yellow-500 font-medium">
                        {project.media.length} Media Files
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}

      </div>
    </section>
  );
}
