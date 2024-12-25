package com.security.med.AuthenticationService.config;

import com.security.med.AuthenticationService.entity.User;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expirationMs}")
    private int expirationMs;

    /**
     * Génère un token JWT à partir de l'utilisateur.
     * @param user L'utilisateur pour lequel générer le token.
     * @return Le token JWT.
     */
    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())  // Le sujet du token, ici l'email de l'utilisateur.
                .setIssuedAt(new Date())  // La date de création du token.
                .setExpiration(new Date(System.currentTimeMillis() + expirationMs))  // La date d'expiration du token.
                .claim("role", user.getRoles())  // Ajouter le rôle de l'utilisateur dans le token.
                .signWith(SignatureAlgorithm.HS256, secretKey)  // Signature du token avec la clé secrète.
                .compact();  // Construction du token.
    }

    /**
     * Valide le token JWT.
     * @param token Le token JWT à valider.
     * @return Vrai si le token est valide, faux sinon.
     */
    public boolean validateToken(String token) {
        try {
            // Tentative de parsing du token avec la clé secrète.
            Jwts.parser()
                    .setSigningKey(secretKey)
                    .parseClaimsJws(token);
            return true;  // Le token est valide.
        } catch (SignatureException e) {
            System.out.println("Invalid JWT signature");
        } catch (MalformedJwtException e) {
            System.out.println("Invalid JWT token");
        } catch (ExpiredJwtException e) {
            System.out.println("Expired JWT token");
        } catch (UnsupportedJwtException e) {
            System.out.println("Unsupported JWT token");
        } catch (IllegalArgumentException e) {
            System.out.println("JWT claims string is empty");
        }
        return false;  // Le token est invalide.
    }

    /**
     * Extraire le nom d'utilisateur (email) du token JWT.
     * @param token Le token JWT.
     * @return L'email de l'utilisateur.
     */
    public String getUsernameFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();  // Extraire le sujet (email) du token.
    }

    /**
     * Extraire le rôle de l'utilisateur à partir du token JWT.
     * @param token Le token JWT.
     * @return Le rôle de l'utilisateur.
     */
    public String getRoleFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .get("role", String.class);  // Extraire le rôle de l'utilisateur du token.
    }
}
