import React, { useState, useEffect } from "react";
import axios from "axios";

function NotificationsPage() {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les alertes
    useEffect(() => {
        axios.get("http://localhost:8080/alerts") // Remplacez par l'URL de votre API backend
            .then(response => {
                setAlerts(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError("Erreur lors de la récupération des alertes.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Chargement des notifications...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={styles.page}>
            <h1>Notifications</h1>
            <ul style={styles.alertList}>
                {alerts.map(alert => (
                    <li key={alert.id} style={styles.alertItem}>
                        <p><strong>Message :</strong> {alert.message}</p>
                        <p><strong>Destinataire :</strong> {alert.recipient}</p>
                        <p><strong>Statut :</strong> {alert.status}</p>
                        <p><strong>Créée le :</strong> {new Date(alert.created_at).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    page: {
        textAlign: "center",
        padding: "50px",
    },
    alertList: {
        listStyle: "none",
        padding: 0,
    },
    alertItem: {
        border: "1px solid #ddd",
        borderRadius: "5px",
        margin: "10px auto",
        padding: "10px",
        maxWidth: "600px",
        textAlign: "left",
        backgroundColor: "#f9f9f9",
    },
};

export default NotificationsPage;
