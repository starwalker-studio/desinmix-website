export interface IHEADER_ENV {
    readonly HEADER: {
        readonly MAX_MOBILE_WIDTH: number
        readonly LOGO: string
    }
    readonly NAV_LINK: {id:number, label: string, path: string}[]
}

export interface ICONTENT {
    readonly SERVICE_DETAIL: string
    readonly SERVICE_IMG: string
    readonly TECH_REACT_LOGO: string
    readonly TECH_TS_LOGO: string
    readonly TECH_SASS_LOGO: string
    readonly TECH_PHP_LOGO: string
}

export interface IFOOTER {
    FOOTER: {
        LOGO: string
    },
    CONTENT: {
        TITLE_1: string
        SERVICES_LIST: { id: number, text: string }[]
        TITLE_2: string
        CONTENT_2: string
        TITLE_3: string
        CONTACT_DETAILS: { id: number, text: string, link: boolean }[]
        FOOTER_END: string
    }
}