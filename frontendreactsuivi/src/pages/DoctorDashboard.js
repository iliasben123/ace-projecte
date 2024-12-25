import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorDashboard() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [newPatient, setNewPatient] = useState({ name: "", email: "" });

    // Doctor ID (assume it's retrieved from login or session)
    const doctorId = "doctor123"; // Replace with a dynamic ID from authentication

    // Fetch patients when the component loads
    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(`http://localhost:8080/api/doctors/${doctorId}/patients`);
            setPatients(response.data);
        } catch (err) {
            setError("Erreur lors de la récupération des patients.");
        } finally {
            setLoading(false);
        }
    };

    const addPatient = async () => {
        if (!newPatient.name || !newPatient.email) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/api/doctors/${doctorId}/patients`, newPatient);
            setPatients([...patients, response.data]);
            setNewPatient({ name: "", email: "" });
        } catch (err) {
            alert("Erreur lors de l'ajout du patient.");
        }
    };

    const deletePatient = async (patientId) => {
        try {
            await axios.delete(`http://localhost:8080/api/doctors/${doctorId}/patients/${patientId}`);
            setPatients(patients.filter((patient) => patient.id !== patientId));
        } catch (err) {
            alert("Erreur lors de la suppression du patient.");
        }
    };

    return (
        <div style={styles.page}>
            <h1>Bienvenue sur votre tableau de bord Médecin</h1>
            <p>Consultez, ajoutez ou supprimez les dossiers de vos patients.</p>

            {loading && <p>Chargement...</p>}
            {error && <p style={styles.error}>{error}</p>}

            {/* Patients List */}
            <div style={styles.section}>
                <h2>Liste des Patients</h2>
                {patients.length > 0 ? (
                    <ul style={styles.patientList}>
                        {patients.map((patient) => (
                            <li key={patient.id} style={styles.patientItem}>
                                <span>
                                    <strong>Nom:</strong> {patient.name} | <strong>Email:</strong> {patient.email}
                                </span>
                                <button style={styles.deleteButton} onClick={() => deletePatient(patient.id)}>
                                    Supprimer
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun patient trouvé.</p>
                )}
            </div>

            {/* Add Patient Form */}
            <div style={styles.section}>
                <h2>Ajouter un Patient</h2>
                <form
                    style={styles.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        addPatient();
                    }}
                >
                    <input
                        type="text"
                        placeholder="Nom"
                        value={newPatient.name}
                        onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                        style={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newPatient.email}
                        onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.addButton}>
                        Ajouter
                    </button>
                </form>
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
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    patientList: {
        listStyle: "none",
        padding: 0,
    },
    patientItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
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
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
    },
    input: {
        width: "80%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    addButton: {
        backgroundColor: "#4caf50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
    },
    error: {
        color: "red",
    },
};

export default DoctorDashboard;
