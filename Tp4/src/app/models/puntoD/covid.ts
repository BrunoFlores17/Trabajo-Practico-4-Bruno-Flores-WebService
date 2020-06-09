export class Covid {
    country: string;
    code: string;
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    latitude: number;
    longitude: number;
    lastChange: string;
    lastUpdate: string;

    constructor(country?:string, code?:string, confirmed?:number, recovered?:number, critical?:number, deaths?:number, latitude?:number, longitude?:number, lastChange?:string, lastUpdate?:string){
        this.country = country;
        this.code = code;
        this.confirmed = confirmed;
        this.recovered = recovered;
        this.critical = critical;
        this.deaths = deaths;
        this.latitude = latitude;
        this.longitude = longitude;
        this.lastChange = lastChange;
        this.lastUpdate = lastUpdate;
    }
}
