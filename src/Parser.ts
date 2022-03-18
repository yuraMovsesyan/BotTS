import { IService } from "./Service/IService";
import { ServiceContent } from "./Service/ServiceContent";

import axios from "axios";
import * as cheerio from "cheerio";
import TelegramBot from "node-telegram-bot-api"

export class Parser {
    private Service: IService;
    private ServiceContents: ServiceContent[] | null;

    constructor(service: IService) {
        this.Service = service;
        this.ServiceContents = null;
    }

    public SetService(service: IService) : void{
        this.Service = service;
        this.ServiceContents = null;
    }

    public Search(arg: string, evenparse: any, evencall: any, msg: TelegramBot.Message) : boolean{
        this.Pars(encodeURIComponent(arg), evenparse, evencall, msg);
        return typeof this.ServiceContents === null;
    }

    public GetTitles(serviceContents: ServiceContent[]) : string[] | null {

        let titles: string[] = [];

        //if (typeof serviceContents === null) { return null; }

        serviceContents?.forEach(element => {
            titles.push(element.Title);
        });

        return titles;
    }
    
    handleResponse = (html: any) => {
        let serviceContents: ServiceContent[] = [];
        const $ = cheerio.load(html.data)
        $(this.Service.CONTENTBLOCK).each((i, elem) => {
            serviceContents.push(
                new ServiceContent(
                    $(elem).find(this.Service.TITLEMAP).text()
                )
            )
        });

        console.log(serviceContents);

        return serviceContents;
    };

    async Pars(arg: string, evenparse: any, evencall: any, msg: TelegramBot.Message){
        let res: ServiceContent[] = await axios.get(this.Service.SEARCHURL + arg).then(this.handleResponse);
        evencall(msg, evenparse(res))
    }
}