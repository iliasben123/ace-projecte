import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        profession: "Admin",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier que tous les champs sont remplis
        if (formData.email && formData.password) {
            try {
                // Simuler une authentification simple avec profession
                switch (formData.profession) {
                    case "Admin":
                        navigate("/admin-dashboard");
                        break;
                    case "Doctor":
                        navigate("/doctor-dashboard");
                        break;
                    case "Patient":
                        // Appeler l'API pour récupérer les données du patient
                        const response = await axios.get(
                            `http://localhost:8080/api/health-data/${formData.email}`
                        );
                        const patientData = response.data;

                        // Naviguer vers PatientDashboard avec des données d'état
                        navigate("/patient-dashboard", { state: { patientData } });
                        break;
                    default:
                        setError("Profession invalide.");
                        break;
                }
            } catch (error) {
                console.error("Erreur lors de la navigation :", error);
                setError("Erreur lors de la connexion. Veuillez réessayer.");
            }
        } else {
            setError("Veuillez remplir tous les champs.");
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.title}>Connexion</h1>
                <p style={styles.subtitle}>Accédez à vos données selon votre profession</p>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="profession" style={styles.label}>Profession :</label>
                        <select
                            id="profession"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            required
                            style={styles.select}
                        >
                            <option value="Admin">Admin</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Patient">Patient</option>
                        </select>
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>Mot de passe :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    {error && <p style={styles.error}>{error}</p>}

                    <button type="submit" style={styles.button}>Se connecter</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    page: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        padding: "20px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "40px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
    },
    title: {
        fontSize: "28px",
        marginBottom: "10px",
        color: "#333",
    },
    subtitle: {
        fontSize: "16px",
        marginBottom: "30px",
        color: "#888",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    formGroup: {
        marginBottom: "20px",
        width: "100%",
    },
    label: {
        display: "block",
        marginBottom: "5px",
        fontSize: "14px",
        color: "#333",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    select: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    error: {
        color: "red",
        fontSize: "14px",
        marginBottom: "20px",
    },
};

export default LoginPage;
