// src/components/Education.jsx
function Education({ data }) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {data.map((edu, index) => (
                <div key={index} className="card bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-blue-700">{edu.degree}</h3>
                    <p className="text-lg mt-1">{edu.institution} </p>
                    <p className="text-md text-gray-600">{edu.period} </p>
                    <p className="text-md mt-2">{edu.grade} </p>
                </div>
            ))}
        </div>
    );
}

export default Education;