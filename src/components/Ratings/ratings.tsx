"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Textarea,
  Progress,
} from "@nextui-org/react";
import { Star } from "@/icons/Icons";
import StarComponent from "./StarComponent";

// TODO: Implement these functions in the backend
// import { getProductReviews, addReview, getCurrentUser } from '@/lib/api'

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

interface User {
  id: string;
  name: string;
  avatar: string;
}

export default function Ratings({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // TODO: Implement the getProductReviews function in the backend
    // getProductReviews(productId).then((data) => {
    //   setReviews(data.reviews.slice(0, 3)) // Show only the top 3
    //   setAverageRating(data.averageRating)
    // })

    // TODO: Implement the getCurrentUser function in the backend
    // getCurrentUser().then(setCurrentUser)

    // Example data for demonstration
    setReviews([
      {
        id: "1",
        user: { name: "Alice", avatar: "/placeholder.svg?height=40&width=40" },
        rating: 5,
        comment: "Excellent product, very satisfied with the purchase.",
        date: "2024-06-01",
      },
      {
        id: "2",
        user: { name: "Bob", avatar: "/placeholder.svg?height=40&width=40" },
        rating: 4,
        comment: "Good product, but shipping took longer than expected.",
        date: "2024-05-28",
      },
      {
        id: "3",
        user: {
          name: "Charlie",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        comment: "Incredible quality, I definitely recommend it.",
        date: "2024-05-25",
      },
    ]);
    setAverageRating(4.7);
    setCurrentUser({
      id: "123",
      name: "Current User",
      avatar: "/placeholder.svg?height=40&width=40",
    });
  }, [productId]);

  const handleSubmitReview = () => {
    if (!currentUser || newRating === 0) return;

    const newReview = {
      id: Date.now().toString(),
      user: {
        name: currentUser.name,
        avatar: currentUser.avatar,
      },
      rating: newRating,
      comment: newComment,
      date: new Date().toISOString().split("T")[0],
    };

    // TODO: Implement the addReview function in the backend
    // addReview(productId, newReview).then(() => {
    //   updateReviews(newReview)
    //   setNewComment('')
    //   setNewRating(0)
    // })

    // For demonstration, we'll just update the local state
    updateReviews(newReview);
    setNewComment("");
    setNewRating(0);
  };

  const updateReviews = (newReview: Review) => {
    const updatedReviews = [...reviews, newReview].sort(
      (a, b) => b.rating - a.rating
    );
    setReviews(updatedReviews.slice(0, 3));
  };

  return (
    <div
      className={`flex-1 justify-between max-w-6xl mx-auto mb-3 p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Comentarios de clientes</h2>
        <h2 className="text-2xl font-bold md:hidden">Escribe tu opinión</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sección de comentarios */}
        <div className="md:w-2/3">
          <div className="flex items-center mb-6">
            <div className="text-4xl font-bold mr-4">
              {averageRating.toFixed(1)}
            </div>
            <div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= Math.round(averageRating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Progress
                size="sm"
                value={averageRating * 20}
                className="max-w-md"
                color="warning"
              />
            </div>
          </div>

          {reviews.map((review) => (
            <Card key={review.id} className="mb-4">
              <CardBody>
                <div className="flex items-center mb-2">
                  <Avatar
                    src={review.user.avatar}
                    size="sm"
                    className="mr-2"
                  />
                  <span className="font-semibold">{review.user.name}</span>
                  <StarComponent Nstar={review.rating} />
                </div>
                <p>{review.comment}</p>
              </CardBody>
              <CardFooter>
                <small className="text-gray-500">{review.date}</small>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Sección de escribir opinión */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-8">Escribe tu opinión:</h2>
          {currentUser ? (
            <Card className="shadow-xl border-1 dark:border-none mt-4 md:mt-0">
              <CardBody>
                <StarComponent
                  Nstar={newRating}
                  onClick={(rating) => setNewRating(rating)}
                />
                <Textarea
                  placeholder="Write your review here..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-4"
                />
                <Button
                  color="primary"
                  onClick={handleSubmitReview}
                  disabled={newRating === 0}
                >
                  Submit Review
                </Button>
              </CardBody>
            </Card>
          ) : (
            <Card className="bg-gray-100 mt-4 md:mt-0">
              <CardBody>
                <p>You must be logged in to leave a review.</p>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
