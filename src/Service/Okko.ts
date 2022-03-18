import { IService } from "./IService";
import { ServiceContent } from "./ServiceContent";

export class Okko implements IService{
    readonly SERVICENAME: string = "Okko";
    readonly BASEURL: string = "https://okko.tv";
    readonly SEARCHURL: string = this.BASEURL + "/search/";
    readonly CONTENTBLOCK: string = "a._3_Sfe";
    readonly TITLEMAP: string = "._1mpUU";
    readonly DESCRIPTIONMAP: string = "._1mpUU";
    readonly IMAGELINKMAP: string = ".sUWvJ";

}
