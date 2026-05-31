import { Suspense } from "react";
import SearchContent from "./SearchContent";
import PageTransition from "@/app/components/PageTransition";





export default function SearchPage() {
  return (

<PageTransition>

    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <SearchContent />
    </Suspense>

    </PageTransition>

  );
}