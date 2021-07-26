import mongoose from "mongoose";

export interface Location {
    location: string;
    latitude: number;
    longitude: number;
    speedMilesPerHour: number;
    timeMs: number;
  }
  
  type Cable = {
    assetType: string;
  };
  

export interface AssetsDocument extends mongoose.Document {
    id: number;
    name: string;
    cable: Cable;
    engineHours: number;
    assetSerialNumber?: number;
    location: Array<Location>;
  createdAt: Date;
  updatedAt: Date;
}
export interface AssetsDocuments extends mongoose.Document {
    assets: [AssetsDocument]
}

const AssetsSchema = new mongoose.Schema(
  {
    id: { type: Number, default: 0 },
    name: { type: String, default: "No name provided" },
    cable: { type: Object, default: null },
    engineHours: { type: Number, default: 0 },
    assetSerialNumber: { type: Number, default: 0 },
    location: { type: Array, default: null },
  },
  { timestamps: true }
);

const AssetsDocumentsSchema = new mongoose.Schema({
    assets: [
        {
            id: { type: Number, default: 0 },
            name: { type: String, default: "No name provided" },
            cable: { type: Object, default: null },
            engineHours: { type: Number, default: 0 },
            assetSerialNumber: { type: Number, default: 0 },
            location: { type: Array, default: null },
          },
          { timestamps: true }
    ]
})

const Assets = mongoose.model<AssetsDocuments>("Assets", AssetsDocumentsSchema);

export default Assets;