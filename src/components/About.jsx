// src/components/About.jsx
function About({ data }) {
    return (
        <div className="card bg-white p-6 rounded-lg shadow-md">
            {/* Optional: Add your profile picture here */}
            {/* <img src="/your-profile-pic.jpg" alt={data.name} className="rounded-full w-32 h-32 mx-auto mb-6 object-cover" /> */}
            <p className="text-lg leading-relaxed mb-4">
                {data.tagline} 
            </p>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">Connect with Me</h3>
                <ul className="list-disc list-inside text-lg space-y-1">
                    <li><strong>Mobile:</strong> {data.contact.mobile} </li>
                    <li><strong>Email:</strong> <a href={`mailto:${data.contact.email}`} className="text-blue-600 hover:underline">{data.contact.email}</a> </li>
                    <li><strong>LinkedIn:</strong> <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/yourprofile</a> </li>
                    <li><strong>Address:</strong> {data.contact.address} </li>
                </ul>
            </div>
        </div>
    );
}

export default About;