import React, { useState } from "react";

function SignUpPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        profession: "Admin",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        console.log("Form submitted:", formData);
        setError("");
        // Envoyez les données au backend ici
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.title}>Créer un compte</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    {/* Nom */}
                    <div style={styles.formGroup}>
                        <label htmlFor="lastName" style={styles.label}>Nom :</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    {/* Prénom */}
                    <div style={styles.formGroup}>
                        <label htmlFor="firstName" style={styles.label}>Prénom :</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    {/* Date de naissance */}
                    <div style={styles.formGroup}>
                        <label htmlFor="birthDate" style={styles.label}>Date de naissance :</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    {/* Email */}
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

                    {/* Profession */}
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

                    {/* Mot de passe */}
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

                    {/* Validation mot de passe */}
                    <div style={styles.formGroup}>
                        <label htmlFor="confirmPassword" style={styles.label}>Confirmez le mot de passe :</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    {/* Affichage des erreurs */}
                    {error && <p style={styles.error}>{error}</p>}

                    {/* Submit Button */}
                    <button type="submit" style={styles.button}>S'inscrire</button>
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
        backgroundColor: "#1a1a1a", // Fond noir élégant
        padding: "20px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "40px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
        maxWidth: "500px",
        width: "100%",
    },
    title: {
        fontSize: "32px",
        marginBottom: "20px",
        textAlign: "center",
        color: "#333",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "bold",
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
        borderRadius: "10px",
        border: "1px solid #ccc",
        boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    select: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    button: {
        padding: "15px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#d4af37", // Couleur dorée
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#b8962e",
    },
    error: {
        color: "red",
        fontSize: "14px",
        marginBottom: "20px",
    },
};

export default SignUpPage;
