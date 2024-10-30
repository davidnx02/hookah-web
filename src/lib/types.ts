export type TImage = {
  data: {
    id: number;
    attributes: {
      name: string;
      hash: string;
      ext: string;
      url: string;
    };
  };
};

export type TNavLink = {
  name: string;
  url: string;
};

export type THookah = {
  name: string;
  descripiton: string;
  image: TImage;
};

export type TGeneral = {
  phone: string;
  email: string;
  city: string;
  postcode: string;
  address: string;
  logo: TImage;
  instagram_link: string;
  linkedin_link: string;
  facebook_link: string;
};

export type THero = {
  subtitle: string;
  title: string;
  description: string;
  button_label: string;
  button_link: string;
  background: TImage;
};

export type TNavigation = {
  links: TNavLink[];
};

export type TAbout = {
  subtitle: string;
  title: string;
  description: string;
  trophies: {
    competition: string;
    place: string;
  }[];
  image: TImage;
};

export type TOurMenu = {
  subtitle: string;
  title: string;
  hookahs: THookah[];
};

export type TCategory = {
  attributes: {
    name: string;
    slug: string;
    background: TImage;
    description?: string;
  };
};

export type TItem = {
  attributes: {
    name: string;
    description: string;
    price: string;
    category: {
      data: {
        id: number;
        attributes: TCategory;
      };
    };
  };
};

export type TPromotionBox = {
  subtitle: string;
  title: string;
  description: string;
  image: TImage;
  button_label: string;
  button_link: string;
};

export type TPromotion = {
  boxes: TPromotionBox[];
};

export type TCateringService = {
  name: string;
  hookah_amount: string;
  duration: string;
  price: number;
  description: string;
};

export type TCatering = {
  subtitle: string;
  title: string;
  services: TCateringService[];
  gallery: {
    data: {
      id: number;
      attributes: {
        name: string;
        hash: string;
        ext: string;
        url: string;
      };
    }[];
  };
};

export type TMaster = {
  attributes: {
    name: string;
    description: string;
    image: TImage;
  }
}

export type TLemonade = {
  attributes: {
    name: string;
    description: string;
    image: TImage;
  }

}

export type TPost = {
  link: string;
  image: TImage;
}