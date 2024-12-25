import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get("http://localhost:8080/api/doctors");
            setDoctors(response.data);
        } catch (err) {
            setError("Erreur lors de la récupération des médecins.");
        } finally {
            setLoading(false);
        }
    };

    const deleteDoctor = async (doctorId) => {
        try {
            await axios.delete(`http://localhost:8080/api/doctors/${doctorId}`);
            setDoctors(doctors.filter((doctor) => doctor.id !== doctorId));
        } catch (err) {
            alert("Erreur lors de la suppression du médecin.");
        }
    };

    const deletePatient = async (doctorId, patientId) => {
        try {
            await axios.delete(`http://localhost:8080/api/doctors/${doctorId}/patients/${patientId}`);
            setDoctors(
                doctors.map((doctor) =>
                    doctor.id === doctorId
                        ? { ...doctor, patients: doctor.patients.filter((patient) => patient.id !== patientId) }
                        : doctor
                )
            );
        } catch (err) {
            alert("Erreur lors de la suppression du patient.");
        }
    };

    return (
        <div style={styles.page}>
            <h1>Bienvenue sur votre tableau de bord Admin</h1>
            <p>Gérez les médecins et leurs patients.</p>

            {loading && <p>Chargement...</p>}
            {error && <p style={styles.error}>{error}</p>}

            <div style={styles.section}>
                {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <div key={doctor.id} style={styles.card}>
                            <h2>Médecin : {doctor.name}</h2>
                            <p>Email : {doctor.email}</p>
                            <button style={styles.deleteButton} onClick={() => deleteDoctor(doctor.id)}>
                                Supprimer Médecin
                            </button>

                            <h3>Patients</h3>
                            {doctor.patients && doctor.patients.length > 0 ? (
                                <ul style={styles.list}>
                                    {doctor.patients.map((patient) => (
                                        <li key={patient.id} style={styles.listItem}>
                                            <span>
                                                <strong>Nom :</strong> {patient.name} | <strong>Email :</strong>{" "}
                                                {patient.email}
                                            </span>
                                            <button
                                                style={styles.deleteButton}
                                                onClick={() => deletePatient(doctor.id, patient.id)}
                                            >
                                                Supprimer Patient
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Aucun patient.</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Aucun médecin trouvé.</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    page: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    section: {
        marginTop: "30px",
    },
    card: {
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        textAlign: "left",
    },
    list: {
        listStyleType: "none",
        padding: 0,
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #ddd",
    },
    deleteButton: {
        backgroundColor: "#ff4d4f",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "5px 10px",
        cursor: "pointer",
    },
    error: {
        color: "red",
    },
};

export default AdminDashboard;
