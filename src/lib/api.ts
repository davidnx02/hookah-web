interface StrapiObject {
  attributes: {
    [key: string]: any;
  };
  id: number;
}

interface FetchApiParams {
  slug?: string;
  type?: string;
  populate?: any;
  affiliate?: string;
}

const formatStrapiObject = (item: StrapiObject) => {
  return item.attributes;
};

export async function fetchAPI(url: string, options?: FetchApiParams) {
  try {
    const params: string[] = [];

    options?.affiliate && params.push(`filters[affiliate_id]=${options?.affiliate}`);
    options?.slug && params.push(`filters[slug]=${options?.slug}`);
    options?.type && params.push(`filters[type]=${options?.type}`);
    if (options?.populate === "*") {
      options?.populate && params.push(`populate=*`);
    } else {
      options?.populate && params.push(`populate=deep, ${options?.populate}`);
    }

    // Generate a random number to use as a query parameter
    const randomQueryParam = `random=${Math.random()}`;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${url}${
        params.length > 0 ? `?${params.join("&")}` : ""
      }&${randomQueryParam}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
          "Surrogate-Control": "no-store"
        }
      }
    );

    if (res.status !== 200) {
      throw new Error("Failed request");
    }

    const json = await res.json();
    if (json.errors) {
      throw new Error("Failed to fetch API");
    }

    if (Array.isArray(json.data)) {
      return json;
    } else {
      return formatStrapiObject(json.data);
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}
