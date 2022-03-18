import { ServiceContent } from "./ServiceContent";

export interface IService{
    readonly SERVICENAME: string;
    readonly BASEURL: string;
    readonly SEARCHURL: string;
    readonly CONTENTBLOCK: string;
    readonly TITLEMAP: string;
    readonly DESCRIPTIONMAP?: string;
    readonly IMAGELINKMAP?: string;
}