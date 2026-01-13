export type DisplayColumnDataProps = {
  data: {
    id: number;
    key: string;
    title: string;
    selected_id: number;
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
