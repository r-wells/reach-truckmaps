import axios from "axios";

export async function getTruckData(accessToken: string) {
    const response = await axios.get("http://localhost:1337/assets", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Access-Control-Allow-Origin": "*",
          }
    });
    return response.data;
}