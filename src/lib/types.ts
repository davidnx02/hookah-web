import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

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
  title: string;
  image: TImage;
  buttons: {
    name: string;
    url: string;
    variant: VariantProps<typeof buttonVariants>["variant"];
  }[]
};

export type TInfoSection = {
  id: number;
  title: string;
  description: string;
  button?: {
    name: string;
    url: string;
    variant: VariantProps<typeof buttonVariants>["variant"];
  };
  image1: {
    url: string;
    alt: string;
  };
  image2: {
    url: string;
    alt: string;
  };
  page: "home" | "menu" | "vodne-fajky" | "kontakt";
};

export type TStat = {
  value: string;
  label: string;
}

export type TStats = {
  stat: TStat[];
}

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

export type TCTABanner = {
  title: string;
  description: string;
  button: {
    name: string;
    url: string;
    variant: VariantProps<typeof buttonVariants>["variant"];
  };
  image: TImage;
}

export type Achievement = {
  place: string;
  name: string;
  description: string;
}

export type TAchievement = {
  title: string;
  description: string;
  achievements: Achievement[];
  images: {
    data: TImage[];
  };
}

export type TVisitUs = {
  title: string;
  description: string;
  hours_date_1: string;
  hours_date_2: string;
  hours_time_1: string;
  hours_time_2: string;
  image1: TImage;
  image2: TImage;
  button: {
    name: string;
    url: string;
    variant: VariantProps<typeof buttonVariants>["variant"];
  }
}

export type TShishaPage = {
  name: string;
  image: TImage;
  brands: {
    data: TImage[];
  };
  offers: {
    name: string;
    description: string;
  }[];
};