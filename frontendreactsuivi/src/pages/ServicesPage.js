import React from "react";

function ServicesPage() {
    const styles = {
        pageContainer: {
            padding: "50px 20px",
            textAlign: "center",
            backgroundColor: "#f4f4f9",
            fontFamily: "'Poppins', sans-serif",
        },
        sectionTitle: {
            fontSize: "36px",
            margin: "0 0 30px",
            color: "#343a40",
            fontWeight: "bold",
        },
        cardsContainer: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            marginTop: "20px",
        },
        card: {
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            textAlign: "center",
            maxWidth: "350px",
            flex: "1 1 calc(25% - 40px)",
            minWidth: "250px",
            transition: "transform 0.3s, box-shadow 0.3s",
        },
        cardTitle: {
            fontSize: "22px",
            margin: "0 0 15px",
            color: "#007bff",
            fontWeight: "600",
        },
        cardText: {
            fontSize: "16px",
            margin: 0,
            color: "#6c757d",
        },
        cardHover: {
            transform: "scale(1.05)",
            boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
        },
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
    };

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.sectionTitle}>Nos Services</h2>
            <div style={styles.cardsContainer}>
                <div
                    style={styles.card}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 style={styles.cardTitle}>Gestion des patients</h3>
                    <p style={styles.cardText}>
                        Organisez et suivez les informations de vos patients en toute sécurité.
                    </p>
                </div>
                <div
                    style={styles.card}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 style={styles.cardTitle}>Suivi des données de santé</h3>
                    <p style={styles.cardText}>
                        Accédez et mettez à jour les données médicales de manière intuitive.
                    </p>
                </div>
                <div
                    style={styles.card}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 style={styles.cardTitle}>Rappel de rendez-vous</h3>
                    <p style={styles.cardText}>
                        Recevez des rappels personnalisés pour ne jamais manquer un rendez-vous.
                    </p>
                </div>
                <div
                    style={styles.card}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 style={styles.cardTitle}>Notifications en temps réel</h3>
                    <p style={styles.cardText}>
                        Soyez informé rapidement des événements importants.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
