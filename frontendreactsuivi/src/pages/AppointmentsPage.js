import React, { useState } from "react";
import axios from "axios";

function LuxuryAppointmentForm() {
    const [formData, setFormData] = useState({
        patientId: "",
        doctorId: "",
        appointmentDateTime: "",
        status: "",
        notes: "",
        remoteAppointment: false,
        locationDetails: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/appointments", formData);
            alert("Rendez-vous créé avec succès !");
            console.log(response.data);
        } catch (error) {
            console.error("Erreur lors de la création du rendez-vous:", error);
            alert("Une erreur s'est produite.");
        }
    };

    return (
        <div style={styles.page}>
            <h1 style={styles.heading}>Rendez-vous</h1>
            <p style={styles.subtitle}>
                Planifiez et suivez vos rendez-vous médicaux en quelques clics.
            </p>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="patientId" style={styles.label}>ID du patient:</label>
                    <input
                        type="text"
                        id="patientId"
                        name="patientId"
                        placeholder="ID du patient"
                        style={styles.input}
                        value={formData.patientId}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="doctorId" style={styles.label}>ID du docteur:</label>
                    <input
                        type="text"
                        id="doctorId"
                        name="doctorId"
                        placeholder="ID du docteur"
                        style={styles.input}
                        value={formData.doctorId}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="appointmentDateTime" style={styles.label}>Date et heure:</label>
                    <input
                        type="datetime-local"
                        id="appointmentDateTime"
                        name="appointmentDateTime"
                        style={styles.input}
                        value={formData.appointmentDateTime}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="status" style={styles.label}>Statut:</label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        placeholder="Statut (par ex., Confirmé)"
                        style={styles.input}
                        value={formData.status}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="notes" style={styles.label}>Notes:</label>
                    <textarea
                        id="notes"
                        name="notes"
                        placeholder="Détails supplémentaires"
                        style={styles.textarea}
                        value={formData.notes}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="remoteAppointment" style={styles.label}>
                        Rendez-vous à distance:
                    </label>
                    <input
                        type="checkbox"
                        id="remoteAppointment"
                        name="remoteAppointment"
                        style={styles.checkbox}
                        checked={formData.remoteAppointment}
                        onChange={(e) =>
                            setFormData({ ...formData, remoteAppointment: e.target.checked })
                        }
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="locationDetails" style={styles.label}>Détails de l'emplacement:</label>
                    <input
                        type="text"
                        id="locationDetails"
                        name="locationDetails"
                        placeholder="Adresse ou lien"
                        style={styles.input}
                        value={formData.locationDetails}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    Prendre rendez-vous
                </button>
            </form>
        </div>
    );
}

const styles = {
    page: {
        textAlign: "center",
        padding: "50px",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#333",
    },
    heading: {
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#2c3e50",
    },
    subtitle: {
        fontSize: "18px",
        marginBottom: "30px",
        color: "#7f8c8d",
    },
    form: {
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    formGroup: {
        marginBottom: "20px",
    },
    label: {
        display: "block",
        marginBottom: "8px",
        fontWeight: "bold",
        color: "#34495e",
    },
    input: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxSizing: "border-box",
    },
    textarea: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxSizing: "border-box",
        height: "120px",
    },
    checkbox: {
        marginTop: "10px",
    },
    button: {
        width: "100%",
        padding: "15px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#1abc9c",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
};

export default LuxuryAppointmentForm;
