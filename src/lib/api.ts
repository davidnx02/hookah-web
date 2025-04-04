// src/lib/api.ts
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
  filters?: Record<string, string>; // Add custom filters
}

const formatStrapiObject = (item: StrapiObject) => {
  return item.attributes;
};

export async function fetchAPI(url: string, options?: FetchApiParams) {
  try {
    const params: string[] = [];

    // Existing filters
    options?.affiliate && params.push(`filters[affiliate_id]=${options.affiliate}`);
    options?.slug && params.push(`filters[slug]=${options.slug}`);
    options?.type && params.push(`filters[type]=${options.type}`);

    // Add custom filters
    if (options?.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        params.push(`filters[${key}][$eq]=${value}`);
      });
    }

    // Populate
    if (options?.populate === "*") {
      params.push(`populate=*`);
    } else if (options?.populate) {
      params.push(`populate=deep,${options.populate}`);
    }

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
          "Surrogate-Control": "no-store",
        },
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