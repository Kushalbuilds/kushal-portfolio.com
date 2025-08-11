// src/components/Certifications.jsx
function Certifications({ data }) {
    return (
        <div className="card bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-lg space-y-2">
                {data.map((cert, index) => (
                    <li key={index}>{cert} </li>
                ))}
            </ul>
        </div>
    );
}

export default Certifications;