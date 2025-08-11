// src/components/Projects.jsx
function Projects({ data }) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {data.map((project, index) => (
                <div key={index} className="card bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-blue-700">{project.name} </h3>
                    <p className="text-lg mt-2">{project.description} </p>
                    {project.objective && (
                        <>
                            <p className="text-lg mt-2 font-medium">Objective:</p>
                            <ul className="list-disc list-inside text-lg space-y-1 mt-1">
                                <li>{project.objective} </li>
                            </ul>
                        </>
                    )}
                    {project.technologiesUsed && (
                        <>
                            <p className="text-lg mt-2 font-medium">Technologies Used:</p>
                            <p className="text-lg">{project.technologiesUsed} </p>
                        </>
                    )}
                    {project.deployment && (
                        <p className="text-lg mt-2">{project.deployment} [cite: 9]</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Projects;