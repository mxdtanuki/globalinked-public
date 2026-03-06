// Dummy Registration Service

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

// Simulate registration with dummy data
export const registerUser = async (userData) => {
  // For demo purposes, simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate validation
      if (!userData.email || !userData.password) {
        reject({
          response: {
            data: {
              detail: "Email and password are required"
            }
          }
        });
        return;
      }

      if (userData.password !== userData.confirmPassword) {
        reject({
          response: {
            data: {
              detail: "Passwords do not match"
            }
          }
        });
        return;
      }

      // Simulate successful registration
      resolve({
        data: {
          message: "Registration successful! Please login.",
          user: {
            id: Math.floor(Math.random() * 10000),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            position: userData.position,
          }
        }
      });
    }, 1000);
  });
};

// Actual registration function (when backend is available)
export const registerUserAPI = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const registrationService = {
  registerUser,
  registerUserAPI,
};

export default registrationService;
