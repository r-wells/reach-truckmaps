import axios from "axios";

export async function signup(name: string, email: string, password: string, passwordConfirmation: string) {
    const response = await axios.post("/api/users", {
        headers: {
            "Access-Control-Allow-Origin": "*",
          },
          name,
        email,
        password,
        passwordConfirmation
          
    });
    return response.data;
}