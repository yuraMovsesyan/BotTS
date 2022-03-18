import { IService } from "./IService";
import { ServiceContent } from "./ServiceContent";

export class Wiki implements IService{
    readonly SERVICENAME: string = "Wikipedia";
    readonly BASEURL: string = "https://ru.wikipedia.org";
    readonly SEARCHURL: string = this.BASEURL + "/w/index.php?title=%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F%3A%D0%9F%D0%BE%D0%B8%D1%81%D0%BA&fulltext=1&ns0=1&search=";
    readonly CONTENTBLOCK: string = "li.iw-resultset";
    readonly TITLEMAP: string = "a.extiw";
    readonly DESCRIPTIONMAP: string = "div.iw-result__content";
    readonly IMAGELINKMAP?: string = undefined;
}
