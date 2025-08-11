// src/components/Contact.jsx
function Contact({ data }) {
    return (
        <div className="card bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">Feel free to reach out to me through the following:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
                <li><strong>Email:</strong> <a href={`mailto:${data.contact.email}`} className="text-blue-600 hover:underline">{data.contact.email}</a></li>
                <li><strong>Mobile:</strong> {data.contact.mobile}</li>
                <li><strong>LinkedIn:</strong> <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/kushal-hiremath</a></li>
                <li><strong>Address:</strong> {data.contact.address}</li>
            </ul>
        </div>
    );
}

export default Contact;