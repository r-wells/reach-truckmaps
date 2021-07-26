import { Request, Response } from "express";
import axios from "axios";
import { saveAssetData, deleteAssetData } from "../service/assets.service";

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
        // const data = await axios.get("https://api.samsara.com/v1/fleet/assets/locations", {
        //     headers: {
        //         Authorization: 'Bearer ${process.env.SAMSARA_API}',
        //         "Access-Control-Allow-Origin": "*",
        //       }
        // }).then(assetRes => assetRes.data);
        const data = {
            assets: [
                {
                    id: 123,
                    name: 'First Location',
                    cable: {
                        assetType: 'Truck'
                    },
                    engineHours: 200,
                    location: [{
                        location: '',
                        latitude: 35.931037,
                        longitude: -95.388679
                    }]
                },
                {
                    id: 1234,
                    name: 'Second Location',
                    cable: {
                        assetType: 'Truck'
                    },
                    engineHours: 200,
                    location: [{
                        location: '',
                        latitude: 38.931037,
                        longitude: -91.388679
                    }]
                },
                {
                    id: 1235,
                    name: 'Third Location',
                    cable: {
                        assetType: 'Truck'
                    },
                    engineHours: 200,
                    location: [{
                        location: '',
                        latitude: 37.67720383498678,
                        longitude: -110.72316138806556
                    }]
                },
                {
                    id: 1233,
                    name: 'Fourth Location',
                    cable: {
                        assetType: 'Truck'
                    },
                    engineHours: 200,
                    location: [{
                        location: '',
                        latitude: 44.83436223593597,
                        longitude: -98.55031125033116
                    }]
                },
                {
                    id: 1236,
                    name: 'Fifth Location',
                    cable: {
                        assetType: 'Truck'
                    },
                    engineHours: 200,
                    location: [{
                        location: '',
                        latitude: 40.407130393031984,
                        longitude: -80.97218830775444
                    }]
                },
                {
                    id: 12,
                    name: 'Sixth Location',
                    cable: {
                        assetType: 'Truck'
                    },
                    engineHours: 200,
                    location: [{
                        location: '',
                        latitude: 46.70400296141882,
                        longitude: -120.83058208004718
                    }]
                },
                {
                    id: 12363,
                    name: 'Seventh Location',
                    cable: {
                        assetType: 'Truck'
                    },
                    engineHours: 200,
                    location: [{
                        location: '',
                        latitude: 44.08157969567491,
                        longitude: -84.97121127719063
                    }]
                },
            ]
        };
        await saveVehicleAssetDataHandler(data);
    
        return res.send({data});
    } catch (err) {
        console.error(err);
        return res.sendStatus(401);
    }
  }

export async function saveVehicleAssetDataHandler(data: Data) {
    try {
        await saveAssetData(data);
    } catch(err) {
        console.error(err);
    }
}

export async function deleteVehicleAssetDataHandler(req: Request, res: Response) {
    try {
        await deleteAssetData();
        return res.send(200);
    } catch(err) {
        console.error(err);
    }
}