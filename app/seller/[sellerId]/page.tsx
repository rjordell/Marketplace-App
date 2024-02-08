"use client";

import { getUser } from "@/db/utils";
import ProfilePageContent from "./profilePageContent";
import { useEffect, useState } from "react";
import { User } from "@/db/schema";
import { AlertTriangle } from "lucide-react";
import { SessionProvider } from "next-auth/react";

export default function SellerPage({
  params,
}: {
  params: { sellerId: string };
}) {
  const [seller, setSeller] = useState<User | null>(null); // The seller to display on the page

  useEffect(() => {
    // Get the seller from the database and update the seller state variable.
    getUser(params.sellerId).then((fetchedSeller) => { setSeller(fetchedSeller) })
  }, [params.sellerId]);

  // If the seller is null, return the following error message: 
  if (!seller) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <AlertTriangle className="w-16 h-16 text-yellow-400" />
        <span>Seller not found</span>
      </div>
    )
  }
  // Return the ProfilePageContent component with the seller prop.
  return (
    <SessionProvider>
      <ProfilePageContent seller={seller} />
    </SessionProvider>
  );
}
