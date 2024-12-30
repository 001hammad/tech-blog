"use client";

const DummyTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      comment: "This blog has been a game-changer for me. The articles are well-written and very informative!",
    },
    {
      name: "Ali Khan",
      comment: "Amazing content! I always look forward to reading the latest posts. Keep up the great work!",
    },
    {
      name: "Emily Davis",
      comment: "I’ve learned so much from this blog. The topics are relevant and very insightful.",
    },
    {
      name: "John Doe",
      comment: "Absolutely love the layout and the quality of the content. Highly recommended!",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 px-6 max-w-4xl mx-auto rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        What Our Readers Say
      </h2>
      <ul className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-xl font-semibold text-gray-800">
              {testimonial.name}
            </p>
            <p className="text-gray-700 mt-2">{testimonial.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyTestimonials;
