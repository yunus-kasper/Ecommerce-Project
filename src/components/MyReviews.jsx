import { useState } from "react";
import img from "../assets/Art3.jpg";
import {
  Check,
  ThumbsUp,
  ThumbsDown,
  Edit,
  Trash2,
  Share2,
  Star,
} from "lucide-react";

const cart = [
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    rating: 5,
    reviewTitle: "Awesome",
    review:
      "Absolutely beautiful! The detail in the metal is stunning and it looks elegant on our living room wall.",
    image: img,
    like: 0,
    dislike: 0,
    userName: "Admin",
    date: "11 Jun 2025",
  },
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    rating: 5,
    reviewTitle: "Awesome",
    review:
      "Absolutely beautiful! The detail in the metal is stunning and it looks elegant on our living room wall.",
    image: img,
    like: 0,
    dislike: 0,
    userName: "Admin",
    date: "11 Jun 2025",
  },
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    rating: 5,
    reviewTitle: "Awesome",
    review:
      "Absolutely beautiful! The detail in the metal is stunning and it looks elegant on our living room wall.",
    image: img,
    like: 0,
    dislike: 0,
    userName: "Admin",
    date: "11 Jun 2025",
  },
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    rating: 5,
    reviewTitle: "Awesome",
    review:
      "Absolutely beautiful! The detail in the metal is stunning and it looks elegant on our living room wall.",
    image: img,
    like: 0,
    dislike: 0,
    userName: "Admin",
    date: "11 Jun 2025",
  },
];

function MyReviews() {
  const [totalItems, setTotalItems] = useState(cart.length);

  return (
    <>
      {/* Reviews */}
      <div className="w-full font-inter">
        {/* Header */}
        <div className="flex flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-sm">
          <div>
            <h1 className="text-lg sm:text-xl font-medium text-gray-800">
              My Reviews
            </h1>
            <p className="text-gray-500 text-sm">
              {totalItems} review{totalItems !== 1 ? "s" : ""}
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 sm:px-5 py-2 text-yellow-600 hover:text-yellow-700 font-medium underline transition-colors duration-200 text-sm">
            View all
          </button>
        </div>

        {/* Reviews List */}
        <div className="space-y-4 mt-4">
          {cart.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="w-full md:w-24 flex-shrink-0">
                  <img
                    className="w-full h-32 object-contain rounded-lg border border-gray-200"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  {/* Product Name and Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <h2 className="text-base sm:text-lg font-medium text-gray-700">
                      {item.name}
                    </h2>
                    <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full w-max">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium text-sm">{item.rating}</span>
                    </div>
                  </div>

                  {/* Review Title */}
                  <h3 className="text-gray-800 font-medium mb-2 text-sm sm:text-base">
                    {item.reviewTitle}
                  </h3>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {item.review}
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs sm:text-sm mb-4">
                    <span className="flex items-center gap-1">
                      {item.userName}
                      <Check className="w-4 h-4 p-0.5 bg-gray-400 text-white rounded-full" />
                    </span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm border-t border-gray-100 pt-4">
                    <button className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 transition-colors">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Like/Dislike */}
                <div className="flex justify-end md:flex-col md:justify-center gap-6 md:gap-4 text-gray-400 text-sm mt-4 md:mt-0">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{item.like}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsDown className="w-5 h-5" />
                    <span>{item.dislike}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {totalItems === 0 && (
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <Star className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-gray-300 mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2">
              No Reviews Yet
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              You haven't reviewed any products yet
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default MyReviews;
