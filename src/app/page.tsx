// src/app/page.tsx
import Hero from './components/Hero';
import FamousPersons from './components/FamousPerson';
import DummyTestimonials from './components/Testimonial';
import NewsletterSignup from './components/Newsletter';

export default function Home() {
  return (
   <div>
      <Hero />
      <FamousPersons/>
      <DummyTestimonials/>
      <NewsletterSignup/>
      </div>
   
  );
}
