export type IPORTFOLIO = {
  title: string;
  text_1: string;
  text_2: string;
  portfolios: {
    id: number;
    data_color: string;
    title: string;
    description: string;
    buttons: {
      id: number;
      label: string;
      link: string;
    }[];
  }[];
};
