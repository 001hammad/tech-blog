import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  image: string;
  description: string;
}

const posts: Post[] = [
  { id: '1', title: 'The Future of AI', image: '/future-ai.jpg', description: 'Discover how AI is shaping the future of technology and innovation.' },
  { id: '2', title: 'Understanding Blockchain', image: '/blockchain.jpg', description: 'An introduction to blockchain technology and its applications.' },
  { id: '3', title: 'Cloud Computing Revolution', image: '/cloud.jpg', description: 'How cloud computing is transforming the tech industry.' },
  { id: '4', title: 'Quantum Computing Basics', image: '/quantum.jpg', description: 'Learn the basics of quantum computing and its potential.' },
  { id: '5', title: '5G Technology', image: '/5g.jpg', description: 'The impact of 5G networks on communication and connectivity.' },
  { id: '6', title: 'Cybersecurity Challenges', image: '/cyber.jpg', description: 'Understanding the latest trends and challenges in cybersecurity.' },
  { id: '7', title: 'The Rise of IoT', image: '/internet.jpg', description: 'Exploring the Internet of Things and its applications.' },
  { id: '8', title: 'Virtual Reality Adventures', image: '/virtual-reality.jpg', description: 'How VR is revolutionizing gaming and entertainment.' },
  { id: '9', title: 'Augmented Reality in Daily Life', image: '/netblog.jpg', description: 'The growing influence of AR in various industries.' },
  { id: '10', title: 'Tech Innovations in Healthcare', image: '/doct.jpg', description: 'How technology is advancing healthcare solutions.' },
  { id: '11', title: 'Programming Languages of 2024', image: '/programming.jpg', description: 'Top programming languages to learn this year.' },
  { id: '12', title: 'The Power of Data Analytics', image: '/data-analytics.png', description: 'Using data analytics to make informed decisions.' },
  { id: '13', title: 'Machine Learning Simplified', image: '/ml.png', description: 'A beginner’s guide to understanding machine learning.' },
  { id: '14', title: 'Exploring Edge Computing', image: '/coding.jpg', description: 'What is edge computing and why does it matter?' },
  { id: '15', title: 'Smart Home Technology', image: '/s-h-t.jpg', description: 'How smart home devices are making life easier.' },
  { id: '16', title: 'The Evolution of Robotics', image: '/e-r.jpg', description: 'Robots in industries and daily life.' },
  { id: '17', title: 'Digital Marketing Trends', image: '/dm.jpg', description: 'Trends shaping the future of digital marketing.' },
  { id: '18', title: 'Self-Driving Cars', image: '/self-driving-car.jpg', description: 'The technology behind autonomous vehicles.' },
  { id: '19', title: 'The Metaverse Explained', image: '/metaverse.jpg', description: 'Understanding the concept of the metaverse.' },
  { id: '20', title: 'Sustainable Tech Solutions', image: '/s-t.jpg', description: 'Technology’s role in sustainability and green energy.' },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-[100px]">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Tech Insights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.id}`}>
              <div className="cursor-pointer">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-[200px] object-cover rounded-lg mb-4" 
                />
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
                <p className='hover:text-blue-600 hover:underline'>read more</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
