// src/app/persons/[id]/page.tsx
import BlogCommentBox from "../../components/commentbox";
import { Kanit } from "next/font/google";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";

// Apply the custom font
const myFont = Kanit({ subsets: ["latin"], weight: ["300"] });

// Define the PersonDetail type
interface PersonDetail {
  id: string;
  name: string;
  bio: string;
  image: string;
  heading?: string;
  paragraph?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
}

// Sample data for persons
const personDetails: PersonDetail[] = [
  {
    id: "1",
    name: "Code Your Way to a Limitless Future",
    bio: "Discover the power of programming and unlock endless opportunities to create, innovate, and shape the future.",
    image: "/codeblog.jpg",
    heading: "Programming: Turning Dreams into Reality",
    paragraph: "In today's world, programming is more than just writing code—it's a superpower that can turn your dreams into reality. Imagine creating a website that connects millions, an app that simplifies daily tasks, or even a game that entertains people worldwide. This is the magic of programming, and anyone can master it with dedication and patience.",
    heading1: 'Why Should You Learn Programming?',
    paragraph1: 'Programming isn’t just for tech geniuses. It’s for anyone who wants to solve problems, innovate, and make an impact. Whether you’re 10 or 50, it’s never too late to start. Think about this: every time you use your favorite app, shop online, or watch a video, you’re experiencing the results of someone’s code. Now imagine being the creator instead of the consumer.',
    heading2: 'Amazing Facts About Programming',
    paragraph2: 'The first programmer was a woman named Ada Lovelace, who wrote an algorithm in the 1840s!',
    paragraph3: 'The world is evolving faster than ever, and at the heart of this transformation lies programming. From automating everyday tasks to creating groundbreaking innovations, coding has become the driving force behind progress. Whether you’re dreaming of building a tech startup, creating life-changing apps, or solving complex problems, programming offers limitless possibilities. In this blog, we’ll explore how programming is reshaping industries, empowering individuals, and opening doors to opportunities that were once unimaginable. If you’re curious about the magic of coding and want to embark on this exciting journey, keep reading—because the future is yours to build.',
    heading3: 'Programming: Shaping the Future, One Line at a Time'
  },
  {
    id: "2",
    name: "The Evolution of Mobile From Simplicity smart.",
    bio: "Discover the power of programming and unlock endless opportunities to create, innovate, and shape the future.",
    paragraph:'In today’s fast-paced world, mobile phones have become an integral part of our lives. From the simplest tasks to advanced operations, these tiny devices hold the power to connect, entertain, and educate us. But how did we reach this era of smart technology?',
    image: "/mobileblog.jpg",
    heading3:'Why Mobile Phones Matter Today',
    paragraph3:'With innovations like foldable screens, 5G connectivity, and AI-powered features, the future of mobile phones is exciting. These advancements promise faster speeds, better user experiences, and devices that can adapt to our needs like never before.',
    heading1:'The Beginning: The Era of Basic Phones',
    paragraph1:'The journey of mobile phones began with devices designed solely for calling and texting. Early mobiles were bulky, expensive, and had limited functionality. However, they served their primary purpose well—connecting people over long distances.',
    paragraph2:'The journey of mobile phones began with devices designed solely for calling and texting. Early mobiles were bulky, expensive, and had limited functionality. However, they served their primary purpose well—connecting people over long distances. The journey of mobile phones began with devices designed solely for calling and texting. Early mobiles were bulky, expensive, and had limited functionality. However, they served their primary purpose well—connecting people over long distances.'
  },
  {
    id: "3",
    name: "Explore the World of Robots:The Future is Here",
    bio: "Are we ready to embrace a world where humans and robots work side by side? The journey has already begun.",
    image: "/robotblog.jpg",
    paragraph:'Robotics, the art and science of building intelligent machines, is shaping our world in unimaginable ways. From assisting in healthcare to revolutionizing industries, robots are no longer a thing of science fiction—they’re a reality that’s here to stay.Robotics, the art and science of building intelligent machines, is shaping our world in unimaginable ways. From assisting in healthcare to revolutionizing industries, robots are no longer a thing of science fiction—they’re a reality that’s here to stay.',
    paragraph1:'Robotics is a branch of engineering and technology that involves the design, construction, operation, and use of robots. These machines can perform tasks traditionally done by humans, often with greater efficiency, accuracy, and endurance.',
    heading1:'What is Robotics?',
    heading2:'The Future of Smartwatches',
    heading3:'The Role of AI in Robotics',
    paragraph3:'Artificial Intelligence (AI) has revolutionized robotics, enabling machines to learn, adapt, and perform complex tasks autonomously. AI-powered robots can analyze data, recognize patterns, and make decisions, paving the way for innovations like self-driving cars and personal assistant robots',
    paragraph2:'With advancements in technology, the future of smartwatches is exciting. Features like improved battery life, better AI integration, and enhanced health tracking will make these devices even more indispensable. The rise of foldable screens and solar charging may also redefine smartwatch design.With advancements in technology, the future of smartwatches is exciting. Features like improved battery life, better AI integration, and enhanced health tracking will make these devices even more indispensable. The rise of foldable screens and solar charging may also redefine smartwatch design.',
  },
  {
    id: "4",
    name: "The Rise of Digital Smartwatch Tech Companion",
    bio: "Notifications on the Go: Get call, message, and app alerts directly on your wrist.",
    image: "/watchblog.jpg",
    paragraph:'Gone are the days when watches were just about telling time. Digital smartwatches have revolutionized how we interact with technology, combining style, convenience, and functionality into one sleek device. Whether you’re tracking your fitness goals or managing your daily tasks, a smartwatch is the ultimate tech companion.',
    paragraph1:'A smartwatch is more than just a digital watch. It’s a wearable device equipped with features like fitness tracking, notifications, heart rate monitoring, and even voice assistance. Think of it as a mini smartphone on your wrist, designed to make your life smarter and more efficient.',
    heading1:'What is a Smartwatch?',
    heading2:'The Future of Smartwatches',
    heading3:'Final Thoughts',
    paragraph3:'Digital smartwatches are not just gadgets; they’re a lifestyle upgrade. Whether you’re a fitness enthusiast, a tech lover, or someone who values convenience, a smartwatch can simplify and enrich your daily life.',
    paragraph2:'With advancements in technology, the future of smartwatches is exciting. Features like improved battery life, better AI integration, and enhanced health tracking will make these devices even more indispensable. The rise of foldable screens and solar charging may also redefine smartwatch design.',
  },
  {
    id: "5",
    name: "Wi-Fi and Interet: Backbone of Connectivity",
    bio: "Your internet service provider (ISP) delivers internet access to your home or office through a modem.",
    image: "/netblog.jpg",
    paragraph:'In today’s digital age, Wi-Fi and the internet have become essential for everyday life. From streaming movies to working remotely, these technologies power nearly everything we do. But have you ever wondered how they work or why they’re so important? Let’s dive into the fascinating world of Wi-Fi and the internet.In today’s digital age, Wi-Fi and the internet have become essential for everyday life. From streaming movies to working remotely, these technologies power nearly everything we do. But have you ever wondered how they work or why they’re so important? Let’s dive into the fascinating world of Wi-Fi and the internet.In today’s digital age, Wi-Fi and the internet have become essential for everyday life. From streaming movies to working remotely, these technologies power nearly everything we do. But have you ever wondered how they work or why they’re so important? Let’s dive into the fascinating world of Wi-Fi and the internet.',
    paragraph1:'The internet is a vast network of interconnected computers that allows people worldwide to share information and communicate. It’s the backbone of digital communication, enabling access to websites, apps, emails, and more.',
    heading1:'What is the Internet?',
    heading2:'What is Wi-Fi?',
    heading3:'Final Thoughts',
    paragraph3:'Wi-Fi and the internet have transformed the way we live, work, and play. They’ve brought the world closer, making it possible to connect with anyone, anywhere, at any time. As technology continues to evolve, our dependence on these digital marvels will only grow stronger.',
    paragraph2:'Wi-Fi, short for Wireless Fidelity, is a technology that allows devices to connect to the internet without wires. Instead of physical cables, Wi-Fi uses radio waves to transmit data between your device and a router connected to the internet.',
  },
  {
    id: "6",
    name: "AI and ChatGPT: Revolutionizing the Future",
    bio: "Are we ready to embrace a world where humans and robots work side by side? The journey has already begun.",
    image: "/ai.jpg",
    paragraph:'Artificial Intelligence (AI) is no longer just a futuristic idea; it’s a reality shaping industries, education, and everyday life. Among the numerous advancements in AI, models like ChatGPT and platforms like Meta AI are at the forefront, pushing the boundaries of what machines can achieve.',
    paragraph1:'AI refers to the ability of machines to mimic human intelligence, enabling them to learn, reason, and make decisions. From recommendation algorithms on Netflix to self-driving cars, AI is everywhere.',
    heading1:'What is AI?',
    heading2:'Challenges in AI',
    heading3:'Final Thoughts',
    paragraph3:'AI, with models like ChatGPT and innovations from Meta AI, is reshaping the way we live, work, and communicate. As technology progresses, it’s essential to harness AI responsibly to unlock its full potential for the benefit of humanity.',
    paragraph2:'While AI has immense potential, challenges like data privacy, ethical concerns, and bias must be addressed to ensure responsible innovation.',
  },
];

// Generate static params for dynamic routes
// Generate static params
export async function generateStaticParams() {
  return personDetails.map((person) => ({
    params: { id: person.id },
  }));
}

// Define the component for rendering person details
interface PersonPageProps {
  params: { id: string };
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { id } = await params; // Await `params`

  const person = personDetails.find((p) => p.id === id);

  if (!person) {
    return <div className="text-center">Person not found!</div>;
  }

  return (
    <div className="flex flex-col items-center md:w-[1500px]">
      <div className="border-2 border-gray-500 rounded-lg mt-[70px]">
        <div className="p-4">
          <h2 className="text-2xl font-bold md:w-[600px]">
            Programming is revolutionizing the world around us—let&apos;s dive in and discover its impact!
          </h2>
          <div className="flex my-3">
            <div className="flex justify-center items-center w-[110px] md:w-[100px] mr-[8px] text-xs text-gray-500">
              <CgProfile className="text-base text-black mr-[1px]" />
              Tracey Wilson
            </div>
            <div className="w-[140px] md:w-[170px] text-xs text-gray-500">
              25 - December - 2024
            </div>
          </div>
          <Image
            src={person.image}
            alt={person.name}
            width={600}
            height={600}
            className="rounded-md my-[10px] shadow-lg"
          />
          <h1 className={`${myFont.className} text-3xl font-bold mt-4`}>
            {person.name}
          </h1>
          <p className="text-lg text-gray-600 w-[200px] sm:w-[300px] md:w-[600px] mt-2">
            {person.bio}
          </p>
          <h2 className={`${myFont.className} text-3xl font-semibold`}>
            {person.heading}
          </h2>
          <div className="md:w-[600px] mt-[10px] flex flex-col items-start">
            <p className="mb-[40px]">{person.paragraph}</p>
            <h2 className="text-3xl">{person.heading1}</h2>
            <p className="mb-[40px]">{person.paragraph1}</p>
            <h2 className="text-3xl">{person.heading2}</h2>
            <ol className="mb-[40px]">
              <li>{person.paragraph2}</li>
              <li>{person.paragraph2}</li>
              <li>{person.paragraph2}</li>
            </ol>
            <h2 className="text-3xl">{person.heading3}</h2>
            <p className="mb-[40px]">{person.paragraph3}</p>
          </div>
        </div>
      </div>
      <BlogCommentBox />
    </div>
  );
}
