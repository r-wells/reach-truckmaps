import { Request, Response } from "express";
import axios from "axios";
import { saveAssetData } from "../service/assets.service";

export interface Location {
    location: string;
    latitude: number;
    longitude: number;
}
  
type Cable = {
    assetType: string;
};
  
export interface TruckData {
    id: number;
    name: string;
    cable: Cable;
    engineHours: number;
    assetSerialNumber?: number;
    location: Array<Location>;
}

export type Data = {
    assets: Array<TruckData>;
}

export async function getVehicleAssetsHandler(req: Request, res: Response) {
    try {
        const data = await axios.get("https://api.samsara.com/v1/fleet/assets/locations", {
            headers: {
                Authorization: 'Bearer samsara_api_5VLdpZGYDXkTFlQAbjCwaXawlMZ8wH',
                "Access-Control-Allow-Origin": "*",
              }
        }).then(assetRes => assetRes.data);
        await saveVehicleAssetDataHandler(data);
    
        return res.send({data});
    } catch (err) {
        console.error(err.message);
        return res.sendStatus(401);
    }
  }

export async function saveVehicleAssetDataHandler(data: Data) {
    // console.log(data.assets);
    try {
        const res = await saveAssetData(data);
    } catch(err) {
        console.error(err);
    }
}