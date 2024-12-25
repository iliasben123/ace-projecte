import React from "react";
import { Link } from "react-router-dom";

// Navbar Component
function Navbar() {
    return (
        <nav style={styles.navbar}>
            <div style={styles.navLogo}>Suivi Patient</div>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.navLink}>Home</Link></li>
                <li><Link to="/services" style={styles.navLink}>Services</Link></li>
                <li><Link to="/notifications" style={styles.navLink}>Notification</Link></li>
                <li><Link to="/appointments" style={styles.navLink}>Rendez-vous</Link></li>
                <li><Link to="/login" style={styles.navLink}>Login</Link></li>
                <li><Link to="/signup" style={styles.navLink}>Sign Up</Link></li>
            </ul>
        </nav>
    );
}

// Footer Component
function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2024 Suivi Patient App. Tous droits réservés.</p>
            <p>Contactez-nous : contact@suivipatient.com</p>
        </footer>
    );
}

// HomePage Component
function HomePage() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Main Sections */}
            <section id="home" style={styles.homeSection}>
                <div style={styles.overlay}>
                    <h1 style={styles.sectionTitle}>Bienvenue sur Suivi Patient</h1>
                    <p style={styles.sectionText}>Gérez facilement vos données de santé et vos rendez-vous.</p>
                </div>
            </section>

            <section id="services" style={styles.section}>
                <h2 style={styles.sectionTitle}>Nos Services</h2>
                <div style={styles.cardsContainer}>
                    <div style={{ ...styles.card, backgroundImage: "url('/image/patient-management.jpg')", backgroundSize: "cover" }}>
                        <h3 style={styles.cardTitle}>Gestion des patients</h3>
                        <p style={styles.cardText}>Organisez et suivez les informations de vos patients en toute sécurité.</p>
                    </div>
                    <div style={{ ...styles.card, backgroundImage: "url('/image/health-data.jpg')", backgroundSize: "cover" }}>
                        <h3 style={styles.cardTitle}>Suivi des données de santé</h3>
                        <p style={styles.cardText}>Accédez et mettez à jour les données médicales de manière intuitive.</p>
                    </div>
                    <div style={{ ...styles.card, backgroundImage: "url('/image/appointment-reminder.jpg')", backgroundSize: "cover" }}>
                        <h3 style={styles.cardTitle}>Rappel de rendez-vous</h3>
                        <p style={styles.cardText}>Recevez des rappels personnalisés pour ne jamais manquer un rendez-vous.</p>
                    </div>
                    <div style={{ ...styles.card, backgroundImage: "url('/image/real-time-notifications.jpg')", backgroundSize: "cover" }}>
                        <h3 style={styles.cardTitle}>Notifications en temps réel</h3>
                        <p style={styles.cardText}>Soyez informé rapidement des événements importants.</p>
                    </div>
                </div>
            </section>

            <section id="how-it-works" style={styles.sectionAlt}>
                <h2 style={styles.sectionTitle}>How It Works</h2>
                <div style={styles.diagramContainer}>
                    <div style={{ ...styles.diagramStep, backgroundImage: "url('/images/step1.jpg')", backgroundSize: "cover" }}>
                        <div style={styles.stepNumber}>1</div>
                        <p style={styles.stepText}>Inscription sur la plateforme.</p>
                    </div>
                    <div style={styles.diagramArrow}>→</div>
                    <div style={{ ...styles.diagramStep, backgroundImage: "url('/images/step2.jpg')", backgroundSize: "cover" }}>
                        <div style={styles.stepNumber}>2</div>
                        <p style={styles.stepText}>Ajout de vos informations médicales.</p>
                    </div>
                    <div style={styles.diagramArrow}>→</div>
                    <div style={{ ...styles.diagramStep, backgroundImage: "url('/images/step3.jpg')", backgroundSize: "cover" }}>
                        <div style={styles.stepNumber}>3</div>
                        <p style={styles.stepText}>Planification des rendez-vous.</p>
                    </div>
                    <div style={styles.diagramArrow}>→</div>
                    <div style={{ ...styles.diagramStep, backgroundImage: "url('/images/step4.jpg')", backgroundSize: "cover" }}>
                        <div style={styles.stepNumber}>4</div>
                        <p style={styles.stepText}>Suivi et notifications.</p>
                    </div>
                </div>
            </section>

            

            {/* Footer */}
            <Footer />
        </div>
    );
}

// Styles
const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#1F3C88",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    navLogo: {
        fontSize: "28px",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "20px",
        margin: 0,
        padding: 0,
    },
    navLink: {
        textDecoration: "none",
        color: "white",
        fontSize: "18px",
        fontWeight: "500",
        transition: "color 0.3s",
    },
    navLinkHover: {
        color: "#FFD700",
    },
    homeSection: {
        height: "400px",
        backgroundImage: "url('/image/welcome-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },
    section: {
        padding: "60px 30px",
        textAlign: "center",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
    },
    sectionAlt: {
        padding: "60px 30px",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
    },
    sectionTitle: {
        fontSize: "32px",
        margin: "0 0 20px",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
    },
    sectionText: {
        fontSize: "18px",
        margin: 0,
        color: "#555",
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "25px",
        marginTop: "30px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        padding: "25px",
        textAlign: "center",
        maxWidth: "300px",
        flex: "1 1 calc(25% - 40px)",
        minWidth: "250px",
        transition: "transform 0.3s, box-shadow 0.3s",
    },
    cardHover: {
        transform: "scale(1.05)",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    },
    cardTitle: {
        fontSize: "22px",
        margin: "0 0 15px",
        color: "#1F3C88",
        fontWeight: "600",
        fontFamily: "'Poppins', sans-serif",
    },
    cardText: {
        fontSize: "16px",
        margin: 0,
        color: "#6c757d",
        fontFamily: "'Poppins', sans-serif",
    },
    diagramContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap",
    },
    diagramStep: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        width: "150px",
    },
    stepNumber: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#1F3C88",
        marginBottom: "10px",
    },
    stepText: {
        fontSize: "16px",
        color: "#555",
    },
    diagramArrow: {
        fontSize: "24px",
        color: "#1F3C88",
    },
    form: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
    },
    label: {
        fontSize: "16px",
        fontWeight: "500",
        marginBottom: "5px",
        color: "#333",
    },
    input: {
        width: "100%",
        maxWidth: "400px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        fontSize: "16px",
    },
    textarea: {
        width: "100%",
        maxWidth: "400px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        fontSize: "16px",
        minHeight: "100px",
    },
    button: {
        backgroundColor: "#1F3C88",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#FFD700",
    },
    footer: {
        backgroundColor: "#1F3C88",
        textAlign: "center",
        color: "white",
        padding: "30px",
        marginTop: "30px",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
    },
};

export default HomePage;
