// src/components/Experience.jsx
function Experience({ data }) {
    return (
        <div className="card bg-white p-6 rounded-lg shadow-md">
            {data.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-2xl font-semibold text-blue-700">{exp.title} </h3>
                    <p className="text-lg mt-1">{exp.company} – {exp.location} </p>
                    <p className="text-md text-gray-600">{exp.period} </p>
                    <h4 className="text-xl font-semibold mt-4">Project: {exp.project} </h4>
                    <p className="text-lg mt-2 font-medium">Key Responsibilities:</p>
                    <ul className="list-disc list-inside text-lg space-y-1 mt-2">
                        {exp.responsibilities.map((resp, i) => <li key={i}>{resp} </li>)}
                    </ul>
                    <p className="text-lg mt-4 font-medium">Technologies Used:</p>
                    <p className="text-lg">{exp.technologies} </p>
                </div>
            ))}
        </div>
    );
}

export default Experience;