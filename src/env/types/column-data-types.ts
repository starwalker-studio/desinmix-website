export type DisplayColumnDataProps = {
  data: {
    id: number;
    key: string;
    title: string;
    price: number;
    description?: string;
    shortDescription?: string;
    includes: {
      id: number;
      text: string;
    }[];
  }[];
  style: CSSModuleClasses;
  isColumnLarge?: boolean;
};
