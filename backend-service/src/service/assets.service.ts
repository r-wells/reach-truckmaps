  import Assets from "../model/assets.model";
  import { Data } from "../controller/assets.controller";

  export function saveAssetData(data: Data) {
    return Assets.create({assets: data.assets});
  }

  export function deleteAssetData() {
    return Assets.remove({});
  }