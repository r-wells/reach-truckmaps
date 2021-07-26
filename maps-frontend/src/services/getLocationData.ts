import axios from "axios";

export async function getTruckData(accessToken: string) {
    try {
        const response = await axios.get("/assets", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
              }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}