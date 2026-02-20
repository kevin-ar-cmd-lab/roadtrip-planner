import Link from "next/link";

const projects = [
  { id: "1", name: "Summer 2026 Adventures", trips: 4, status: "Active", updated: "Feb 18, 2026" },
  { id: "2", name: "National Parks Tour", trips: 6, status: "Active", updated: "Feb 10, 2026" },
  { id: "3", name: "East Coast Highlights", trips: 3, status: "Completed", updated: "Jan 28, 2026" },
  { id: "4", name: "Weekend Getaways", trips: 8, status: "Active", updated: "Jan 15, 2026" },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="mt-1 text-sm text-muted-foreground">Organize your trips into projects for easy management.</p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
          New Project
        </button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                project.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary">{project.name}</h3>
            <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
              <span>{project.trips} trips</span>
              <span>Updated {project.updated}</span>
            </div>
          </Link>
        ))}

        {/* New Project Card */}
        <button className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-6 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span className="mt-2 text-sm font-medium">Create New Project</span>
        </button>
      </div>
    </>
  );
}
