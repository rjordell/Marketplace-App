'use client'

import { Rating, User } from "@/db/schema";
import { getUser } from "@/db/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

/*
  This ReviewCard component is loaded on the client side and is responsible for displaying a single
  review.
*/
export default function ReviewCard(
  { review }: { review: Rating }
) {
  const [author, setAuthor] = useState<User | null>(null); // The author of the review

  /*
    On page load and whenever the review changes, get the author of the review.
  */
  useEffect(() => {
    // Get the author of the review and update the author state.
    getUser(review.author).then((fetchedAuthor) => { setAuthor(fetchedAuthor) })
  }, [review]);

  return (
    <div className="flex flex-col w-full">
      {
        author != null && (
          <a href={`/seller/${author.username}`} className="flex flex-row items-center justify-start gap-4">
            {
              author.profilePic !== "" ? (
                <Image
                  src={author.profilePic}
                  alt=""
                  height={40}
                  width={40}
                  className="w-[40px] h-[40px] rounded-full"
                />
              ) : (
                <div className="w-[40px] h-[40px] rounded-full bg-yellow-500"></div>
              )
            }
            <span className="">{author?.username}</span>
          </a>
        )
      }
      <div className="text-md flex flex-row">
        {
          [1, 2, 3, 4, 5].map((i) => {
            return (
              <Star key={i} className={i <= Math.round(review.stars) ? "text-orange-500 fill-orange-500" : "text-orange-500"} />
            );
          })
        }
      </div>
      <span className="text-gray-500">
        Reviewed on { 
          // Display the formatted date the review was created.
          new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(review.timestamp))
        }
      </span>
      <div>
        <span> 
          {
            // Display the review comment.
            review.comment
          } 
        </span>
      </div>
    </div>
  )
}