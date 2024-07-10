export type TImage = {
  data: {
    id: number;
    attributes: {
      name: string;
      hash: string;
      ext: string;
      url: string;
    }
  }
}

export type TNavLink = {
  name: string;
  url: string;
}

export type TGeneral = {
  phone: string;
  email: string;
  city: string;
  postcode: string;
  address: string;
  logo: TImage;
}

export type THero = {
  subtitle: string;
  title: string;
  description: string;
  button_label: string;
  button_link: string;
  background: TImage;
}

export type TNavigation = {
  links: TNavLink[];
}

export type TAbout = {
  subtitle: string;
  title: string;
  description: string;
  trophies: {
    competition: string;
    place: string;
  }[];
  image: TImage;
}

export type TOurMenu = {
  subtitle: string;
  title: string;
  hookahs: {
    name: string;
    descripiton: string;
    image: TImage;
  }[]
}