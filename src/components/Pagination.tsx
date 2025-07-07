import { PER_PAGE_BLOGS } from "@/lib/constant";
import { CategoriesT } from "@/lib/types/categories";
import { languageCodes } from "@/lib/types/i18n";
import Link from "next/link";

export const Pagination = ({
  pagination,
  lang,
  category,
  currentPage,
}: {
  pagination: {
    prev: null | number;
    next: null | number;
    totalPages: number;
    totalLength: number;
  };
  lang: languageCodes;
  category: CategoriesT;
  currentPage: number;
}) => {
  const pageNumbers = [];
  if (PER_PAGE_BLOGS > currentPage) {
    const max = Math.min(pagination.totalPages, PER_PAGE_BLOGS);
    for (let i = 1; i <= max; i++) {
      pageNumbers.push(i);
    }
    if (currentPage < pagination.totalPages - 2) {
      pageNumbers.push("...");
      pageNumbers.push(pagination.totalPages);
    }
  } else if (pagination.totalPages - currentPage > PER_PAGE_BLOGS) {
    if (2 < pagination.totalPages - currentPage) {
      pageNumbers.push(1);
      pageNumbers.push("...");
    }
    for (
      let i = pagination.totalPages;
      i > pagination.totalPages - PER_PAGE_BLOGS;
      i--
    ) {
      pageNumbers.push(i);
    }
    if (0 < pagination.totalPages - 2) {
      pageNumbers.push("...");
      pageNumbers.push(pagination.totalPages);
    }
  } else {
    pageNumbers.push(1);
    pageNumbers.push("...");
    pageNumbers.push(pagination.prev);
    pageNumbers.push(currentPage);
    pageNumbers.push(pagination.next);
    pageNumbers.push("...");
    pageNumbers.push(pagination.totalPages);
  }
  return (
    <div className="flex justify-between w-[90%] mt-[20px]">
      {pagination?.prev ? (
        <Link
          href={`/${lang}/blog/${category}/page/${pagination.prev}`}
          className="py-[10px] px-[18px] border rounded-2xl "
        >
          Previous
        </Link>
      ) : (
        <button
          disabled
          className="py-[10px] px-[18px]  cursor-not-allowed border rounded-2xl "
        >
          Previous
        </button>
      )}
      <div className="flex gap-1 items-center">
        {pageNumbers.map(
          (number) =>
            number && (
              <Link
                key={number}
                href={`/${lang}/blog/${category}/page/${number}`}
                className={` ${
                  number === currentPage ? "bg-green-400 text-white" : ""
                } `}
              >
                <div
                  className={`text-[16px] rounded-[2px] px-4 py-2 border border-green-500 ${
                    number === currentPage
                      ? "bg-green-400 text-white font-extrabold"
                      : ""
                  }`}
                >
                  {number}
                </div>
              </Link>
            )
        )}
      </div>
      {pagination?.next ? (
        <Link
          href={`/${lang}/blog/${category}/page/${pagination.next}`}
          className="py-[10px] px-[18px] border rounded-2xl "
        >
          Next
        </Link>
      ) : (
        <button
          className="border rounded-2xl py-[10px] px-[18px] cursor-not-allowed  "
          disabled
        >
          Next
        </button>
      )}
    </div>
  );
};
