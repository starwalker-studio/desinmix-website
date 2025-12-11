import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IHEADER_ENV {
  readonly HEADER: {
    readonly MAX_MOBILE_WIDTH: number;
    readonly LOGO: string;
  };
  readonly NAV_LINK: {
    id: number;
    label: string;
    path?: string;
    dropdown?: { id: number; label: string; path: string }[];
    icon?: IconDefinition;
  }[];
}

export interface ICONTENT {
  readonly SERVICE_DETAIL: string;
  readonly SERVICE_IMG: string;
  readonly TECH_REACT_LOGO: string;
  readonly TECH_TS_LOGO: string;
  readonly TECH_SASS_LOGO: string;
  readonly TECH_PHP_LOGO: string;
}

export interface IFOOTER {
  FOOTER: {
    LOGO: string;
  };
  CONTENT: {
    TITLE_1: string;
    SERVICES_LIST: { id: number; text: string }[];
    TITLE_2: string;
    CONTENT_2: string;
    TITLE_3: string;
    CONTACT_DETAILS: { id: number; text: string; link: boolean }[];
    FOOTER_END: string;
  };
}

export interface IMOBILE_MENU {
  icon: IconDefinition;
  label: string;
  href: string;
}

type IServiceItem = {
  id: number;
  title: string;
  description: string;
};

export interface ISERVICES {
  title: string;
  introduction: string;
  services: IServiceItem[];
}

export interface IDESARROLLOWEBSEO {
  readonly title: string;
  readonly description: string;
  readonly sub_header: string;
  readonly sub_description: string;
  readonly seoKeywords: string[];
}

export interface IWEB_DEVELOP_CONTENT {
  readonly content: {
    id: number;
    key: string;
    title: string;
    price: number;
    includes: { id: number; text: string }[];
  }[];
  readonly last_note: {
    text: string;
    phrases: { id: number; text: string; icon: IconDefinition }[];
  };
}

export interface ISITE_AUTOADMINISTRABLE {
  title: string;
  intro: string;
  section: {
    heading: string;
    highlight: string;
    benefits: {
      id: number;
      text: string;
      icon: IconDefinition;
    }[];
    conclusion: string;
  };
}

export interface IWEBSITE_ADMIN_PACKAGES {
  id: number;
  key: string;
  title: string;
  price: number;
  subtitle: string;
  description?: string;
  includes: {
    id: number;
    text: string;
  }[];
}

export interface IECOMMERCE_DATA {
  title: string;
  introduction: string;
  paymentSystems: {
    title: string;
    description: string;
  };
  security: {
    title: string;
    description: string;
  };
}

export interface IECOMMERCE_PACKAGES {
  id: number;
  key: string;
  title: string;
  price: number;
  currency: string;
  includes: {
    id: number;
    text: string;
  }[];
}

export interface IPACKAGES_INTRO {
  title: string;
  description: string;
}

export interface ISERVICES_WEB_PACKAGES {
  id: number;
  title: string;
  price: number;
  key: string;
  shortDescription: string;
  description: string;
  includes: { id: number; text: string }[];
}
