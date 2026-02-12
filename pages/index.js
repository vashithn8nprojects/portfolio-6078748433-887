
export default function Home() {
  const resume = {
  "title": "Professional",
  "email": "contact@example.com",
  "summary": "Experienced professional",
  "skills": [
    "JavaScript",
    "React",
    "Node.js"
  ],
  "experience": [],
  "education": [],
  "projects": []
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">{resume.name || "Portfolio"}</h1>
        <h2 className="text-2xl text-blue-300 mb-6">{resume.title || "Professional"}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          {resume.summary || "Welcome to my portfolio"}
        </p>
      </header>

      {resume.skills?.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {resume.skills.map((skill, i) => (
              <span key={i} className="bg-blue-600/30 border border-blue-400 px-4 py-2 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      <footer className="text-center py-12 text-gray-400 border-t border-white/20">
        Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
