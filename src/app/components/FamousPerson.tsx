// src/app/components/FamousPersons.tsx
import Link from 'next/link';
import Image from 'next/image';

interface Person {
  id: string;
  name: string;
  image: string;
  button?:string;
}

const persons: Person[] = [
  { id: '1', name: 'Write Code, Shape the Future', image: '/coding.jpg', button:'read more -->' },
  { id: '2', name: 'Mobile The Heart of Modern Technology', image: '/mobile.jpg', button:'read more -->' },
  { id: '3', name: 'Robots The Future of Innovation', image: '/robot.jpg', button:'read more -->'},
  { id: '4', name: 'Tech at Your Fingertips, Right on Your Wrist', image: '/smartwatch.jpg', button:'read more -->' },
  { id: '5', name: 'The Power to Change Everything, Just a Click Away', image: '/internet.jpg', button:'read more -->' },
  { id: '6', name: 'Revolutionizing Conversations with Artificial Intelligence', image: '/gpt.jpg', button:'read more -->' },
];

export default function FamousPersons() {
  return (
    <div>
      <h2 className="md:ml-[160px] font-bold text-2xl">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {persons.map((person) => (
          <div key={person.id} className="text-center border border-black p-4 hover:opacity-80 duration-300">
            <Link href={`/person/${person.id}`}>
              
                <Image
                  src={person.image}
                  alt={person.name}
                  width={500}
                  height={500}
                  className="rounded-md mx-auto shadow-lg cursor-pointer"
                />
              <h2 className="text-xl font-semibold mt-2 cursor-pointer">{person.name}</h2>
              <h2 className="text-xl font-semibold mt-2 cursor-pointer">{person.button}</h2>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}
