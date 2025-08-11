// src/components/Skills.jsx
function Skills({ data }) {
    return (
        <div className="card bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-blue-700">Programming Languages:</h3>
                    <ul className="list-disc list-inside">
                        {data.programmingLanguages.map((skill, index) => <li key={index}>{skill}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-blue-700">Database & Web:</h3>
                    <ul className="list-disc list-inside">
                        {data.database.map((skill, index) => <li key={index}>{skill}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-blue-700">Other Skills:</h3>
                    <ul className="list-disc list-inside">
                        {data.coreConcepts.map((skill, index) => <li key={index}>{skill}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-blue-700">Tools:</h3>
                    <ul className="list-disc list-inside">
                        {data.tools.map((tool, index) => <li key={index}>{tool}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;