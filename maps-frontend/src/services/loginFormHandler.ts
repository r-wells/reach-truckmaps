import axios from "axios";

export async function login(email: string, password: string) {
    const response = await axios.post("/api/sessions", {
        headers: {
            "Access-Control-Allow-Origin": "*",
          },
        email,
        password
          
    });
    return response.data;
}