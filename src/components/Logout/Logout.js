import { useAuth } from '../../contexts/AuthContext';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
    const [error, setError] = useState(""); // Corrected declaration
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
 
    const handleLogout = async () => {
        setError(""); // Clear error
        try {
            await logout();
            navigate("/"); // Corrected navigation
            // Redirect or perform other actions after logout
        } catch (error) {
            setError("Error logging out"); // Set error message
            console.error('Error logging out:', error);
        }
    };

    // Render the logout button conditionally based on user existence
    return (
        currentUser && (
            <div>
                <button onClick={handleLogout}>Logout</button>
                {error && <p>{error}</p>} {/* Display error message if there's an error */}
            </div>
        )
    );
}

export default LogoutButton;
