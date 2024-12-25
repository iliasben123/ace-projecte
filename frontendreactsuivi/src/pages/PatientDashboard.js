import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./PatientDashboard.css"; // Add a simple custom CSS file

function PatientDashboard() {
    const location = useLocation();
    const [healthData, setHealthData] = useState([]);
    const [patientProfile] = useState(location.state?.patientProfile || {});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const patientId = location.state?.patientProfile?.id || "123";

    useEffect(() => {
        if (!patientId) {
            setError("Aucun ID patient trouvé !");
            return;
        }

        setLoading(true);
        setError("");

        axios
            .get(`http://localhost:8080/api/health-data/${patientId}`)
            .then((response) => {
                setHealthData(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Erreur lors de la récupération des données de santé.");
                setLoading(false);
            });
    }, [patientId]);

    return (
        <div className="dashboard">
            <div className="profile-section">
                <h2>Profil du Patient</h2>
                <p><strong>Nom :</strong> {patientProfile.name || "Nom indisponible"}</p>
                <p><strong>Email :</strong> {patientProfile.email || "Email indisponible"}</p>
                <p>
                    <strong>Date de naissance :</strong>{" "}
                    {patientProfile.birthDate
                        ? new Date(patientProfile.birthDate).toLocaleDateString()
                        : "Non spécifiée"}
                </p>
            </div>

            <div className="health-data-section">
                <h2>Rapports de Santé</h2>
                {loading && <div className="loader">Chargement...</div>}
                {error && <div className="error-message">{error}</div>}
                {healthData.length > 0 ? (
                    healthData.map((data, index) => (
                        <div key={index} className="health-data-card">
                            <p>
                                <strong>Date enregistrée :</strong>{" "}
                                {new Date(data.date_recorded).toLocaleDateString()}
                            </p>
                            <p><strong>Type :</strong> {data.type}</p>
                            <p><strong>Valeur :</strong> {data.value}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p className="no-data-message">Aucune donnée de santé disponible.</p>
                )}
            </div>
        </div>
    );
}

export default PatientDashboard;
