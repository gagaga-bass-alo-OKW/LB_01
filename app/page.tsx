import Link from "next/link";
import { cookies } from "next/headers";
import { getBooks } from "@/lib/books";
import { getRequests } from "@/lib/requests";
import { getBookImageByIsbn } from "@/lib/googleBooks";
import BookList from "@/app/components/BookList";
import SitePasswordForm from "@/app/components/SitePasswordForm";

export default async function Page(){  
return (
    <main>
      <h1>TEST</h1>
    </main>
  );
}