export class ServiceContent {
    readonly Title: string;
    readonly Description?: string;
    readonly ImageLink?: string;
    readonly Link?: string;
    readonly ServiceName?: string;

    constructor(title: string, description?: string, imageLink?: string, link?: string, serviceName?: string) {
        this.Title = title;
        this.Description = description;
        this.ImageLink = imageLink;
        this.Link = link;
        this.ServiceName = serviceName;
    }
}