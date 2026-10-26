
import { createContext, useContext, useEffect, useState } from "react";

// 1. Context API
const ProjectContext = createContext(null);

function useProjectContext() {
  return useContext(ProjectContext);
}

// 2. Custom Hook
function useProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Hospital Website",
      category: "Web Development",
      status: "Completed",
    },
    {
      id: 2,
      name: "Salon Booking App",
      category: "Web Application",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Agency UI Design",
      category: "UI/UX Design",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Load sample data when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Add project
  function addProject(project) {
    setProjects((previous) => [
      ...previous,
      { ...project, id: Date.now() },
    ]);
  }

  // Update project
  function updateProject(id, updatedData) {
    setProjects((previous) =>
      previous.map((project) =>
        project.id === id
          ? { ...project, ...updatedData }
          : project
      )
    );
  }

  // Delete project
  function deleteProject(id) {
    setProjects((previous) =>
      previous.filter((project) => project.id !== id)
    );
  }

  // Search projects
  const filteredProjects = projects.filter((project) =>
    `${project.name} ${project.category} ${project.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return {
    projects: filteredProjects,
    totalProjects: projects.length,
    search,
    setSearch,
    loading,
    addProject,
    updateProject,
    deleteProject,
  };
}

// 3. Navbar component
function Navbar() {
  const { totalProjects } = useProjectContext();

  return (
    <nav className="navbar">
      <h2>ProjectHub</h2>
      <span>Total Projects: {totalProjects}</span>
    </nav>
  );
}

// 4. Project form component
function ProjectForm() {
  const { addProject } = useProjectContext();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Web Development");
  const [status, setStatus] = useState("Pending");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) return;

    addProject({
      name: name.trim(),
      category,
      status,
    });

    setName("");
    setCategory("Web Development");
    setStatus("Pending");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>

      <input
        type="text"
        placeholder="Enter project name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Web Development</option>
        <option>Web Application</option>
        <option>UI/UX Design</option>
        <option>SEO</option>
      </select>

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button type="submit">Add Project</button>
    </form>
  );
}

// 5. Individual project card
function ProjectCard({ project }) {
  const { updateProject, deleteProject } = useProjectContext();

  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(project.name);
  const [editedStatus, setEditedStatus] = useState(project.status);

  function handleSave() {
    if (!editedName.trim()) return;

    updateProject(project.id, {
      name: editedName.trim(),
      status: editedStatus,
    });

    setEditing(false);
  }

  function handleCancel() {
    setEditedName(project.name);
    setEditedStatus(project.status);
    setEditing(false);
  }

  return (
    <article className="project-card">
      {editing ? (
        <>
          <input
            value={editedName}
            onChange={(event) => setEditedName(event.target.value)}
            aria-label="Edit project name"
          />

          <select
            value={editedStatus}
            onChange={(event) => setEditedStatus(event.target.value)}
            aria-label="Edit project status"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </>
      ) : (
        <>
          <h3>{project.name}</h3>
          <p>Category: {project.category}</p>
          <p>
            Status: <strong>{project.status}</strong>
          </p>
        </>
      )}

      {editing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button className="secondary-button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}

      <button
        className="delete-button"
        onClick={() => {
          if (window.confirm(`Delete "${project.name}"?`)) {
            deleteProject(project.id);
          }
        }}
      >
        Delete
      </button>
    </article>
  );
}

// 6. Project list component
function ProjectList() {
  const { projects, search, setSearch, loading } = useProjectContext();

  return (
    <section className="project-section">
      <div className="section-heading">
        <h2>My Projects</h2>

        <input
          className="search-input"
          type="search"
          placeholder="Search projects..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <div className="empty-state">
          <h3>No projects found</h3>
          <p>Try a different search or add a new project.</p>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

// 7. Main App component
function App() {
  const projectData = useProjects();

  return (
    <ProjectContext.Provider value={projectData}>
      <Navbar />

      <main className="container">
        <header className="page-header">
          <p className="eyebrow">WORKSPACE</p>
          <h1>Project Management Dashboard</h1>
          <p>Organize your work. Track progress. Manage projects.</p>
        </header>

        <ProjectForm />
        <ProjectList />
      </main>

      <footer className="footer">
        ProjectHub · React Practice Project
      </footer>
    </ProjectContext.Provider>
  );
}

// IMPORTANT: This default export fixes your previous error.
export default App;