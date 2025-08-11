// src/components/Footer.jsx
function Footer({ name }) {
    return (
        <footer className="bg-blue-900 text-white py-6 mt-12 shadow-inner">
            <div className="container mx-auto text-center px-4">
                <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;