// src/app/components/Hero.tsx
import Image from 'next/image';
import { Kanit } from 'next/font/google';
const myFont = Kanit({ subsets: ['latin'], weight: ['300'] });
interface HeroData {
  image: string;
  title: string;
  description: string;
  label:string;
}
interface Relative {
  image:string
  alternate:string
}

const relativePic:Relative = {
  image:'/Content.png',
  alternate:'Content'
}

const heroData: HeroData = {
  image: '/hero.png', // Path to the hero image
  title: 'Transforming the World: Unveiling the Impact of Modern Technologies',
  description: 'Success is the result of hard work, dedication, and perseverance. Keep striving for your goals!',
  label:'Dare to dream, learn, and take your next step forward with us'
};

export default function Hero() {
  return (
    <div>
    <div className="flex relative sm:mt-[20px] md:mt-[70px] flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <Image
        src={heroData.image}
        alt={heroData.title}
        width={1200}
        height={600}
        className="rounded-lg shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-6">{heroData.title}</h1>
      <p className="text-lg text-gray-600 mt-2">{heroData.description}</p>
      
    </div>
    <div className='absolute top-[210px] hidden md:block md:top-[460px] left-[40px] md:left-[260px] md:right-0 md:bottom-0 '>
     <Image src={relativePic.image} alt={relativePic.alternate} width={300}height={300} className='md:w-[300px] md:h-[200px] shadow-2xl shadow-blue-500 w-[100px] h-[50px]'/>
    </div>
    <div className='flex justify-center items-center my-[60px]'>
    <div className='md:w-[750px] md:h-[100px] bg-gradient-to-bl to-blue-900 mx-[10px] from-gray-900 flex rounded-s-xl rounded-e-lg justify-center items-center'>
   <h2 className={` ${myFont.className} font-extrabold text-2xl text-white mx-[40px] `}>{heroData.label}</h2>
</div>
    </div>
    </div>
  );
}
