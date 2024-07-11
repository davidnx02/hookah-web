import { fetchAPI } from "@/lib/api";
import { MenuList } from "../components/menu/menu-list";
import { TCategory } from "@/lib/types";
import { QueryProvider } from "../components/query-provider";

type FetchResponse<T> = {
  data: T;
};

export default async function Page() {
  const response: FetchResponse<TCategory[]> = await fetchAPI(
    "categories?populate=*"
  );
  const categories = response.data;

  return (
    <>
      <QueryProvider>
        <MenuList categories={categories} />
      </QueryProvider>
    </>
  );
}
