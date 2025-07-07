import { CategoriesT } from "@/lib/types/categories";
import { languageCodes } from "@/lib/types/i18n";
import Link from "next/link";

export const Pagination = ({
  pagination,
  lang,
  category,
}: {
  pagination: {
    prev: null | number;
    next: null | number;
    totalPages: number;
    totalLength: number;
  };
  lang: languageCodes;
  category: CategoriesT;
}) => {
  const pageNumbers = [];
  if (pagination.totalPages > 1) {
    pageNumbers.push(pagination.prev);
    pageNumbers.push(pagination.next);
  } else {
    return;
  }
  return (
    <div className="flex justify-between">
      {pagination?.prev ? (
        <Link href={`/${lang}/blog/${category}/page/${pagination.prev}`}>
          Previous
        </Link>
      ) : (
        <button disabled className=" cursor-not-allowed">
          Previous
        </button>
      )}
      <div>
        {pageNumbers.map(
          (number) =>
            number && (
              <Link
                key={number}
                href={`/${lang}/blog/${category}/page/${number}`}
                className="p-2 rounded-2xl"
              >
                {number}
              </Link>
            )
        )}
      </div>
      {pagination?.next ? (
        <Link href={`/${lang}/blog/${category}/page/${pagination.next}`}>
          Next
        </Link>
      ) : (
        <button className="bg-gray-200 cursor-not-allowed" disabled>
          Next
        </button>
      )}
    </div>
  );
};
