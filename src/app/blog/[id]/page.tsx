'use client'

// src/app/blog/[id]/page.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // For dynamic route params
import Image from 'next/image';

interface Post {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Revolutionizing Tech with AI',
    content: 'Artificial Intelligence (AI) is rapidly transforming the landscape of technology. From enhancing the capabilities of virtual assistants like Siri and Alexa to powering autonomous vehicles that can drive themselves with unprecedented accuracy, AI is becoming the driving force behind the most groundbreaking innovations of our time. Beyond just these visible applications, AI is revolutionizing industries such as healthcare, finance, entertainment, and education by providing smarter, data-driven solutions. With the ability to analyze vast amounts of data and predict patterns, AI is not only making technology more efficient but also more intuitive and responsive to human needs. As AI continues to evolve, its impact on society and the global economy will be profound, reshaping how we live, work, and interact with the world around us.',
    image: '/ai.jpg',
    author: 'John Doe',
    date: '25th December, 2024'
  },
  
  {
    id: '2',
    title: 'The Rise of Blockchain Technology',
    content: 'Blockchain technology has evolved far beyond its original association with cryptocurrencies. Today, it is a revolutionary tool that is transforming industries across the globe. Originally designed as the underlying system for Bitcoin, blockchain has proven to be a powerful, decentralized solution for securely storing and sharing data. From enabling transparent financial transactions and ensuring the integrity of digital assets, to offering new ways to store and protect sensitive information, blockchain is reshaping our digital landscape. It allows businesses to streamline supply chains, improve contract management through smart contracts, and even create decentralized applications (DApps) that operate without centralized control. With the rapid advancements in blockchain technology, systems now feature enhanced security, scalability, and faster transaction speeds, making them more than just a ledger system — they are the backbone of a new decentralized internet. The impact of blockchain extends across various industries including finance, healthcare, real estate, and supply chain management, transforming the way we store, verify, and exchange data. As technology continues to evolve, blockchain will only become more essential, offering secure and transparent solutions for a wide range of digital and financial innovations.',
    image: '/blockchain.jpg',
    author: 'Jane Smith',
    date: '24th December, 2024'
  },
  
  {
    id: '3',
    title: 'The Cloud Computing Revolution',
    content: 'Cloud computing is no longer just a tool for storing data remotely; it is revolutionizing industries and transforming the way businesses and individuals interact with technology. In the realm of labor, cloud services are increasing efficiency and flexibility by allowing workers to access resources and collaborate from anywhere in the world. Companies can scale their operations quickly, without the need for expensive on-site infrastructure, by utilizing cloud platforms for computing power, storage, and networking. In the field of healthcare, cloud computing is transforming the way medical records are stored and accessed, enabling faster, more secure patient data management and facilitating telemedicine. In education, it has opened the door for online learning platforms, enabling students to access resources and collaborate with peers and instructors remotely. Beyond business and healthcare, cloud computing is also changing the way individuals interact with technology. Cloud-based services allow users to store files, stream media, and even run applications directly from the cloud, without the need for powerful hardware on their end. As cloud technology continues to evolve, it is becoming more secure, scalable, and accessible, unlocking endless possibilities for industries and individuals alike. The future of cloud computing holds the potential for even greater advancements in data management, artificial intelligence, and real-time collaboration, marking a new era of connectivity and innovation.',
    image: '/cloud.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  
  {
    id: '4',
    title: 'The Basics of Quantum Computing',
    content: 'Quantum computing is not just a theoretical concept; it is a revolutionary field that is redefining the way we process and compute information. Unlike classical computers, which use binary bits to represent data as either 0 or 1, quantum computers use quantum bits, or qubits, that can exist in multiple states simultaneously, thanks to the principles of superposition and entanglement. This allows quantum computers to solve certain complex problems much faster than traditional computers. In the realm of cryptography, quantum computing has the potential to break current encryption methods, prompting the need for quantum-resistant cryptography. In chemistry and material science, quantum computing can simulate molecular structures and chemical reactions at an unprecedented level of detail, which could lead to breakthroughs in drug discovery and material design. While quantum computing is still in its early stages, advancements in this field are rapidly accelerating, and researchers are optimistic that it will unlock new possibilities in fields like artificial intelligence, optimization, and logistics. As the technology matures, quantum computers could provide solutions to problems that are currently beyond the reach of classical computing, opening up a new era of computational power.',
    image: '/quantum.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  
  {
    id: '5',
    title: 'The Rise of 5G Technology',
    content: '5G technology is not just an incremental improvement; it is a game-changer that is set to redefine the way we connect, communicate, and interact with the world. With speeds up to 100 times faster than 4G, 5G will enable near-instantaneous data transfer, which is crucial for emerging technologies such as autonomous vehicles, smart cities, and the Internet of Things (IoT). In the realm of communication, 5G will enhance mobile broadband experiences, providing users with faster download and upload speeds, smoother video streaming, and improved connectivity in crowded areas. In healthcare, 5G’s low latency and high reliability will enable real-time remote surgeries, telemedicine, and faster diagnostics. Industries such as manufacturing and logistics will benefit from the ability to implement advanced automation systems, allowing for real-time data collection and improved operational efficiency. Beyond labor and healthcare, 5G will also transform entertainment, enabling new forms of augmented reality (AR) and virtual reality (VR) experiences that require massive bandwidth and low latency. As 5G networks expand globally, they will unlock a host of possibilities, accelerating the development of smart technologies and driving innovation across industries.',
    image: '/5g.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  
  {
    id: '6',
    title: 'The Importance of Cybersecurity',
    content: 'Cybersecurity is not just about protecting data; it is about safeguarding the very foundation of our digital lives. In today’s interconnected world, where personal, financial, and business data are constantly being shared, stored, and processed, cybersecurity has become more critical than ever. It involves the implementation of strategies, technologies, and practices to prevent unauthorized access, attacks, and data breaches, ensuring the confidentiality, integrity, and availability of sensitive information. With the rise of cyber threats such as hacking, phishing, and ransomware attacks, individuals and organizations alike must prioritize securing their digital assets. In the realm of business, cybersecurity is essential to maintaining customer trust, protecting intellectual property, and preventing financial losses. In government and defense, it is crucial to protect national security and critical infrastructure from cyber-attacks. As technology continues to advance, so do the techniques used by cybercriminals, making it imperative for cybersecurity professionals to constantly innovate and stay ahead of the curve. The future of cybersecurity lies in the integration of artificial intelligence, machine learning, and advanced encryption methods, which will help detect and prevent threats in real-time, providing a safer digital environment for all.',
    image: '/cyber.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '7',
    title: 'The Rise of the Internet of Things (IoT)',
    content: 'The Internet of Things (IoT) is not just about connecting devices; it is about creating a smarter, more efficient world where everyday objects are seamlessly integrated into the digital ecosystem. IoT refers to the network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity, enabling them to collect, exchange, and act on data. This network allows devices to interact with each other and their environment, transforming industries, homes, and cities. In the realm of smart homes, IoT enables automation and remote control of devices like thermostats, lights, and security systems, making daily life more convenient and energy-efficient. In healthcare, IoT-powered devices such as wearable health trackers and remote monitoring systems allow for real-time health data collection, improving patient care and outcomes. Industries like manufacturing and agriculture are also leveraging IoT to optimize operations, increase productivity, and reduce waste through smart sensors and data-driven insights. As the number of connected devices grows, the potential for IoT to revolutionize the way we live, work, and interact with the world continues to expand. The future of IoT lies in its integration with emerging technologies like artificial intelligence, 5G, and blockchain, which will enable even more advanced capabilities, making the world smarter and more interconnected.',
    image: '/internet.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '8',
    title: 'The Rise of Virtual Reality Adventures',
    content: 'Virtual Reality (VR) has evolved from a niche technology into an immersive experience that is reshaping the way we perceive and interact with the world. In the realm of adventure, VR is unlocking new realms of possibilities, allowing users to explore worlds beyond their wildest imaginations without leaving the comfort of their homes. Whether it’s venturing through ancient ruins, battling mythical creatures, or embarking on space explorations, VR provides an unparalleled sense of presence and engagement. This technology uses headsets, motion sensors, and haptic feedback to simulate real-world environments, creating an immersive experience that makes users feel as if they are physically present in these virtual worlds. For adventurers and thrill-seekers, VR offers a unique opportunity to experience extreme sports, daring expeditions, and dangerous missions that would otherwise be impossible or too risky in real life. In addition to gaming, VR is also being used in training simulations for military, medical, and space exploration fields, providing real-world practice without the risk. As VR technology continues to advance, the quality of the experiences becomes more realistic, with improved visuals, audio, and interactivity. The future of VR adventure is not just about entertainment; it’s about creating transformative experiences that push the boundaries of what’s possible, making users feel like they are truly living out their wildest adventures.',
    image: '/virtual-reality.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '9',
    title: 'Augmented Reality in Daily Life',
    content: 'Augmented Reality (AR) is transforming the way we experience the world by seamlessly blending the digital and physical realms. Unlike Virtual Reality (VR), which immerses users in entirely virtual environments, AR enhances our real-world surroundings with digital elements, such as images, sounds, and data overlays. In daily life, AR has become more than just a novelty; it is increasingly integrated into various industries and applications, making our routines more efficient, entertaining, and informative. In retail, AR allows customers to try products virtually, such as clothing, makeup, or furniture, by superimposing digital images onto their real-world environment through smartphones or AR glasses. In education, AR brings learning to life by enabling interactive 3D models, virtual tours, and simulations that help students better understand complex concepts. In healthcare, AR aids doctors and surgeons by providing real-time information during procedures, enhancing precision and improving patient outcomes. For navigation, AR apps overlay directions and points of interest on live video feeds, making it easier to find locations and navigate unfamiliar areas. Even in entertainment, AR is revolutionizing gaming and interactive experiences, offering users the chance to interact with the environment in new and exciting ways. As AR technology continues to advance, its applications in daily life will only increase, enhancing how we communicate, learn, shop, and entertain ourselves. The future of AR holds immense potential to further blur the lines between the physical and digital worlds, creating a more immersive and connected society.',
    image: '/netblog.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '10',
    title: 'Tech Innovation in Healthcare',
    content: 'The healthcare industry is undergoing a profound transformation, driven by groundbreaking technological innovations that are improving patient care, streamlining operations, and enhancing overall health outcomes. From AI-powered diagnostic tools to telemedicine, wearables, and robotic surgeries, technology is reshaping how healthcare is delivered and experienced. Artificial Intelligence (AI) is playing a key role in diagnostics by analyzing medical data and providing accurate predictions, enabling faster detection of diseases like cancer, heart conditions, and neurological disorders. Machine learning algorithms can process vast amounts of medical data to uncover patterns and trends, offering insights that help doctors make more informed decisions. Telemedicine has made healthcare more accessible, allowing patients to consult with healthcare professionals remotely, reducing the need for in-person visits, especially in rural or underserved areas. Wearable devices, such as smartwatches and fitness trackers, are helping individuals monitor their health in real-time, tracking vital signs, sleep patterns, and activity levels, and providing actionable insights to improve wellness. Robotics is also revolutionizing surgery, with robotic-assisted procedures offering greater precision, less invasiveness, and faster recovery times. In addition, blockchain technology is being used to secure patient data, ensuring that medical records are protected from unauthorized access and tampering. The integration of 5G networks is enabling faster data transfer and more reliable remote monitoring, further enhancing the capabilities of healthcare technology. As technology continues to evolve, the future of healthcare looks promising, with innovations that will not only improve patient care but also make healthcare more efficient, affordable, and personalized.',
    image: '/doct.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '11',
    title: 'Programming Languages of 2024 and 2025',
    content: 'The world of programming languages continues to evolve, with new languages emerging and existing ones adapting to the demands of modern technology. As we move into 2025, some languages are gaining significant traction, while others have maintained their position as industry standards. In 2024, languages like Python, JavaScript, and TypeScript continued to dominate the development landscape, thanks to their versatility, ease of use, and widespread support across various domains. Python remained the go-to language for AI, data science, and web development, while JavaScript and TypeScript were the foundations of modern web development, powering front-end and back-end applications. Additionally, Rust and Go gained popularity due to their performance, safety, and scalability, particularly in systems programming and cloud-native applications. As we look to 2025, there are several emerging trends in the programming world. One of the key areas of focus is the integration of AI and machine learning into programming languages. We can expect to see further developments in languages designed specifically for AI/ML, such as Julia, which is gaining momentum in the data science and scientific computing communities. WebAssembly (Wasm) is also on the rise, enabling developers to run code in the browser at near-native speed, unlocking new possibilities for web applications. Languages like Kotlin and Swift are expected to continue growing in the mobile development space, especially with advancements in Android and iOS platforms. Additionally, languages such as Dart and Flutter are paving the way for cross-platform mobile app development, offering a unified approach to building apps for both Android and iOS. As the programming world evolves, developers will need to stay on top of these changes, continually learning and adapting to the latest trends and tools. The future of programming languages looks promising, with innovations that will make development faster, more efficient, and more powerful.',
    image: '/codeblog.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '12',
    title: 'The Power of Data Analytics',
    content: 'Data analytics has become one of the most powerful tools in modern business, healthcare, technology, and beyond. In today’s data-driven world, organizations are harnessing vast amounts of data to gain insights, make better decisions, and improve efficiency. The power of data analytics lies in its ability to transform raw data into actionable insights, which can lead to smarter strategies, better products, and enhanced customer experiences. In business, data analytics is used to track performance, understand consumer behavior, optimize marketing campaigns, and predict trends. Companies are using customer data to personalize offerings, increasing customer satisfaction and loyalty. The rise of big data has made it possible to analyze enormous volumes of data, uncover patterns, and make real-time decisions that were previously unimaginable. In healthcare, data analytics is revolutionizing patient care by allowing for the analysis of medical records, improving diagnoses, and predicting health trends. It is also helping in drug discovery, by analyzing large datasets to identify potential treatment options faster. The technology sector has been at the forefront of data analytics, using it to enhance machine learning algorithms, improve AI models, and optimize supply chains. Data analytics is also transforming industries like finance, where it is used for fraud detection, risk management, and investment strategies. As organizations continue to collect more data, the demand for data analytics tools and professionals will only increase. The future of data analytics is bright, with emerging technologies like AI, machine learning, and predictive analytics further enhancing the value of data. With these tools, businesses and organizations can unlock new opportunities, improve outcomes, and stay competitive in a rapidly changing world.',
    image: '/data.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '13',
    title: 'Machine Learning Simplified',
    content: 'Machine learning (ML) is a powerful subset of artificial intelligence that enables systems to learn from data, improve their performance over time, and make decisions without being explicitly programmed. In simple terms, ML is like teaching a computer to recognize patterns and make predictions based on past experiences. The process of machine learning involves three key steps: data collection, model training, and prediction. First, large amounts of data are gathered from various sources. This data can be anything from images, text, or numbers. The next step is training a model, where the system is fed this data and taught to recognize patterns or relationships. This is done using algorithms, which are mathematical formulas that allow the system to identify the key features in the data. Once trained, the model can then make predictions or decisions based on new, unseen data. There are different types of machine learning, including supervised learning, unsupervised learning, and reinforcement learning. In supervised learning, the model is trained with labeled data, meaning the correct answers are provided during training. In unsupervised learning, the model finds patterns in data without any labels. Reinforcement learning is a type of ML where the model learns by interacting with an environment and receiving feedback based on its actions. Machine learning is already being used in many industries to solve real-world problems. From recommendation systems on Netflix and YouTube to self-driving cars, fraud detection in finance, and personalized medicine, ML is transforming the way we live and work. As technology advances, the future of machine learning looks promising, with applications expanding across healthcare, education, robotics, and more. Machine learning may sound complex, but its underlying principles are simple: learning from data to make informed decisions and predictions.',
    image: '/ml.png',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '14',
    title: 'Exploring Edge Computing',
    content: 'Edge computing is a revolutionary approach to processing data closer to where it is generated, rather than relying solely on centralized cloud servers. In the traditional cloud computing model, data is sent to a remote server for processing, and then the results are sent back to the user. While this works well for many applications, it introduces latency and bandwidth challenges. Edge computing solves these problems by performing data processing at the "edge" of the network, closer to the source of data generation — such as on devices, sensors, or local servers. This reduces the time it takes to process and respond to data, improving the speed and efficiency of applications. One of the primary benefits of edge computing is its ability to handle real-time processing for applications that require low latency, such as autonomous vehicles, industrial automation, and smart cities. For example, self-driving cars rely on edge computing to process data from cameras, sensors, and other devices in real-time, making split-second decisions to ensure safe operation. Edge computing also plays a crucial role in the Internet of Things (IoT), where billions of devices generate massive amounts of data. Instead of sending all this data to the cloud, which could be costly and slow, edge devices can filter, process, and analyze the data locally, sending only relevant information to the cloud. This results in faster decision-making and reduced bandwidth usage. In addition to its speed and efficiency, edge computing also enhances security by keeping sensitive data closer to its source, reducing the risk of data breaches during transmission. The future of edge computing looks bright, with applications expanding across industries such as healthcare, retail, agriculture, and entertainment. As more devices become connected, and as demand for real-time data processing increases, edge computing will continue to play a critical role in shaping the next generation of technology.',
    image: '/s-h-t.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '15',
    title: 'Smart Home Technology',
    content: 'Smart home technology is revolutionizing the way we interact with our living spaces, providing increased convenience, energy efficiency, and enhanced security. At its core, a smart home consists of interconnected devices that communicate with each other through the internet, allowing homeowners to control various aspects of their home from anywhere in the world using smartphones, tablets, or voice assistants. One of the most popular features of smart homes is automation. With automation, you can schedule tasks such as adjusting the thermostat, turning on lights, or locking doors at specific times, making your home more efficient and comfortable. For example, smart thermostats learn your preferences and adjust the temperature based on your habits, while smart lights can be dimmed or changed in color based on the time of day. Smart security systems are another key component of modern homes. With devices like smart cameras, doorbell cameras, and motion sensors, homeowners can monitor their property in real-time and receive alerts about suspicious activity. Some systems even allow remote access to view live footage or interact with visitors through two-way audio. Smart home technology also plays a vital role in energy management. By using smart plugs, energy monitoring devices, and smart appliances, homeowners can track and optimize energy usage, reducing waste and lowering utility bills. For example, smart fridges can notify you when groceries are running low, while smart washing machines can adjust cycles based on energy consumption. Voice assistants, such as Amazon Alexa, Google Assistant, and Apple Siri, are at the center of many smart homes, providing a convenient way to control devices hands-free. These voice-controlled systems allow you to turn on music, adjust your thermostat, lock doors, or even order groceries, all by simply using your voice. As the Internet of Things (IoT) continues to expand, the potential for smart home technology is limitless. The future will see even more advanced features, such as AI-powered devices that anticipate your needs, better integration with health monitoring systems, and improved interoperability between different smart devices. With the growth of smart home technology, homeowners can enjoy greater comfort, security, and control over their environment.',
    image: '/smart-home.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '16',
    title: 'The Evolution of Robotics',
    content: 'Robotics has come a long way since its inception, transforming from simple machines designed to perform repetitive tasks into highly sophisticated systems capable of performing complex operations across various industries. The journey of robotics can be divided into several key stages, each representing significant advancements in technology, functionality, and application. In the early days, robots were limited to industrial settings, mainly for tasks like assembly line work, welding, and painting. These robots were often large, stationary, and programmed to perform simple, repetitive tasks with high precision. The introduction of programmable logic controllers (PLCs) in the 1960s made it easier to control these machines, but they were still confined to specific tasks and environments. The next major evolution in robotics came with the development of more versatile robots in the 1980s and 1990s. These robots were designed to work alongside humans in industrial settings, known as collaborative robots or cobots. They were smaller, more flexible, and equipped with sensors that allowed them to interact safely with human workers. This era also saw the rise of robots in research and space exploration, with NASA sending robotic arms and rovers to the International Space Station and Mars. In the 2000s, the emergence of artificial intelligence (AI) and machine learning significantly boosted the capabilities of robots. Robots began to acquire the ability to learn from their environments, adapt to new situations, and make decisions based on data. This made them more autonomous and suitable for a wider range of applications, including healthcare, logistics, and customer service. In healthcare, for example, robots now assist in surgeries, provide rehabilitation, and deliver medication. AI-driven robots can even engage in social interactions, providing companionship and emotional support to the elderly and those with disabilities. Today, robotics is entering a new phase, where robots are becoming more human-like in their appearance and behavior. Advances in robotics, AI, and cognitive computing are enabling robots to understand and respond to human emotions, recognize faces, and engage in natural conversations. This is paving the way for robots to be integrated into everyday life, from personal assistants to household chores, and even in advanced fields like education and entertainment. The future of robotics holds immense potential, with ongoing developments in areas like quantum computing, autonomous decision-making, and human-robot interaction, promising a world where robots and humans work together to solve some of societys most pressing challenges.',
    image: '/e-r.jpg',
    author: 'Mark Lee',
    date: '23rd December, 2024'
  },
  {
    id: '17',
    title: 'Digital Marketing Trends',
    content: 'The digital marketing landscape is constantly evolving, with new trends and technologies emerging every year. Staying ahead of these trends is crucial for businesses to reach their target audience effectively and maintain a competitive edge. As we move into 2025, several key trends are expected to shape the future of digital marketing, offering exciting opportunities for brands and marketers alike. One of the most significant trends is the rise of Artificial Intelligence (AI) and Machine Learning (ML) in marketing. AI-powered tools are enabling businesses to personalize marketing campaigns at scale, making it easier to target specific customer segments and provide tailored content. From chatbots to predictive analytics, AI is improving customer engagement, enhancing decision-making, and automating repetitive tasks. Another growing trend is video marketing, which continues to dominate the digital space. With platforms like YouTube, TikTok, and Instagram leading the way, short-form video content is becoming more popular than ever. Brands are leveraging video to tell compelling stories, showcase products, and engage audiences in new and creative ways. The rise of live streaming also allows brands to connect with their audience in real-time, fostering a sense of immediacy and authenticity. Influencer marketing is another trend that shows no signs of slowing down. Consumers trust recommendations from individuals they follow on social media, and brands are capitalizing on this by collaborating with influencers to promote their products. Micro-influencers, in particular, are gaining popularity as they offer highly engaged, niche audiences that align closely with specific brands. Social commerce, where consumers can purchase products directly through social media platforms, is also on the rise. With features like Instagram Shopping and Facebook Marketplace, social media platforms are becoming an essential channel for e-commerce, allowing businesses to reach customers without them ever leaving the app. Voice search is another trend that is reshaping digital marketing. With the increasing use of voice-activated devices like Amazon Alexa, Google Assistant, and Apple Siri, optimizing for voice search has become crucial for businesses looking to improve their SEO strategy. Brands need to adjust their content to accommodate conversational queries, focusing on long-tail keywords and natural language. Additionally, there is an increasing focus on data privacy and transparency. With growing concerns about data breaches and the misuse of personal information, businesses must prioritize consumer privacy and ensure compliance with regulations like GDPR. Finally, Augmented Reality (AR) and Virtual Reality (VR) are gaining traction in digital marketing. These immersive technologies allow consumers to interact with products in a more engaging and interactive way, making online shopping more dynamic and personalized. As we move forward, digital marketing will continue to be shaped by new technologies and shifting consumer behaviors. Marketers who embrace these trends and adapt to the changing landscape will be well-positioned to succeed in 2025 and beyond.',
    image: '/dm.jpg',
    author: 'John Doe',
    date: '25th December, 2024'
  },
  {
    id: '18',
    title: 'The Rise of Self-Driving Cars',
    content: 'Self-driving cars, also known as autonomous vehicles (AVs), are one of the most groundbreaking innovations in the transportation sector. These vehicles are designed to navigate and operate without human intervention, using a combination of sensors, cameras, machine learning algorithms, and high-definition maps to understand and respond to their environment. The promise of self-driving cars extends far beyond convenience; they have the potential to revolutionize the way we travel, making roads safer, reducing traffic congestion, and transforming the automotive industry. One of the key benefits of self-driving cars is enhanced safety. Human error is responsible for the majority of road accidents, but autonomous vehicles can potentially eliminate this factor. AVs use advanced sensors, including LiDAR (Light Detection and Ranging), radar, and cameras, to detect obstacles, pedestrians, and other vehicles, enabling them to make real-time decisions to avoid accidents. Moreover, the technology behind self-driving cars can predict potential hazards and react faster than a human driver, reducing the chances of collisions. In addition to safety, self-driving cars offer the promise of greater mobility, especially for individuals who are unable to drive due to age, disability, or other factors. These vehicles could provide more independence for people who rely on others for transportation, enabling them to go where they need to go without a driver. The rise of AVs is also expected to significantly reduce traffic congestion and improve fuel efficiency. By using smart algorithms, self-driving cars can communicate with other vehicles to optimize traffic flow, reduce stop-and-go traffic, and decrease fuel consumption. This could help reduce emissions and contribute to a more sustainable transportation system. However, the widespread adoption of self-driving cars comes with challenges. One of the biggest hurdles is ensuring the technology is safe and reliable enough to be trusted on public roads. Developers are working to refine the software and improve the vehicle’s ability to handle various driving conditions, such as inclement weather, road hazards, and complex traffic scenarios. Additionally, there are concerns about the impact of autonomous vehicles on jobs, particularly in industries such as trucking, taxi services, and delivery. While many companies are making significant strides in developing self-driving technology, full autonomy (Level 5, where no human intervention is required) is still some years away. For now, we are seeing semi-autonomous cars with features like adaptive cruise control, lane-keeping assistance, and autopilot functions, which are gradually paving the way for fully autonomous vehicles. As the technology continues to advance, self-driving cars are expected to become an integral part of our transportation systems, shaping the future of mobility and changing the way we interact with vehicles.',
    image: '/self-driving-car.jpg',
    author: 'Sarah Johnson',
    date: '30th December, 2024'
  },
  {
    id: '19',
    title: 'The Metaverse Explained',
    content: 'The Metaverse is an expansive, interconnected digital universe that combines virtual reality (VR), augmented reality (AR), and the internet to create immersive online spaces where users can interact with each other, digital environments, and virtual objects in real-time. Imagine a world where you can meet friends, shop, work, play games, attend events, and explore all within a shared digital realm — this is the Metaverse. At its core, the Metaverse aims to provide an immersive experience that goes beyond simple online interactions by allowing users to engage with a three-dimensional, persistent virtual environment. Through the use of VR headsets and AR devices, users can enter these environments and interact with other participants and digital assets in a way that feels both real and dynamic. One of the most significant components of the Metaverse is the ability to have a digital avatar, an online representation of yourself that you can customize and use to interact with others. These avatars allow users to attend virtual meetings, hang out in virtual spaces, or even participate in virtual economies by buying and selling virtual goods. The Metaverse has the potential to change the way we live, work, and play. Virtual workplaces are already becoming a reality, where employees can collaborate in a shared digital space, attend meetings, and interact as if they were in the same room, all while working from anywhere in the world. This could significantly impact the future of remote work and global business operations, as it offers an experience that is more engaging and social compared to current video conferencing tools. The Metaverse also offers new opportunities for entertainment and gaming. Games within the Metaverse are designed to be more immersive and interactive, allowing players to create and explore expansive virtual worlds. Players can not only participate in the game itself but also influence the world by creating content, hosting events, or running virtual businesses. As the Metaverse continues to evolve, we’re seeing new applications in education, healthcare, and social networking. In education, virtual classrooms could allow students from around the world to interact with their teachers and peers in a more engaging and interactive way, making learning more dynamic. In healthcare, the Metaverse has the potential to revolutionize telemedicine by offering virtual consultations and providing doctors with a more immersive environment to diagnose and treat patients. While the potential of the Metaverse is vast, it also comes with challenges. Issues such as privacy, data security, and digital divide concerns must be addressed as the Metaverse grows. Additionally, the development of such a massive and interconnected digital universe requires the cooperation of various tech companies, and there are questions about the centralization of control and the potential for monopolies. The Metaverse is still in its early stages, but it holds the promise of creating a fully immersive and integrated digital world where people can experience life in a completely new way. As technology continues to improve and virtual experiences become more sophisticated, the Metaverse is poised to transform how we interact with each other and the digital world.',
    image: '/metaverse.jpg',
    author: 'Alice Cooper',
    date: '31st December, 2024'
  },
  {
    id: '20',
    title: 'Sustainable Tech Solutions',
    content: 'Sustainable technology solutions are rapidly gaining traction as the world faces increasing environmental challenges. These technologies aim to minimize negative environmental impacts while improving efficiency, reducing waste, and promoting the responsible use of resources. A key player in sustainable technology is solar system technology, which harnesses the power of the sun to generate clean, renewable energy. Solar energy is one of the most abundant and sustainable energy sources available today. Solar panels, which convert sunlight into electricity, are becoming increasingly efficient and affordable, making them a practical solution for residential, commercial, and industrial applications. Solar systems have a minimal environmental impact compared to fossil fuel-based energy sources, as they produce no emissions during operation. The growth of solar technology has been driven by innovations in photovoltaic cells, battery storage, and smart grid integration. Photovoltaic cells are now capable of capturing more sunlight and converting it into electricity with greater efficiency than ever before. Additionally, advancements in energy storage systems, such as lithium-ion and solid-state batteries, allow for solar energy to be stored and used when the sun isn’t shining, addressing the intermittent nature of solar power. The integration of solar systems with smart grids enables energy to be distributed efficiently and balanced with the overall power supply. Large-scale solar farms are being developed to generate significant amounts of renewable energy, powering entire communities, cities, and even countries. Solar thermal systems are also gaining traction for heating water and air in residential and commercial buildings, further reducing dependence on conventional energy sources. The adoption of solar technology extends beyond power generation to include solar-powered transportation, such as electric vehicles (EVs) that are charged with solar energy, reducing the carbon footprint of transportation. Solar energy is also being utilized in agriculture to power irrigation systems, greenhouses, and other farming operations. As solar system technology continues to evolve, its role in promoting sustainability and reducing reliance on fossil fuels will only increase. Governments, businesses, and individuals are investing more in solar infrastructure to help combat climate change and promote a cleaner, greener future.',
    image: '/s-t.jpg',
    author: 'Emily Carter',
    date: '1st January, 2025'
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundPost = posts.find((p) => p.id === id);
      if (foundPost) {
        setPost(foundPost);
      } else {
        setPost(null);
      }
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <p className="text-center text-gray-500 mt-20">Loading...</p>;
  }

  if (!post) {
    return <p className="text-center text-red-500 mt-20">Post not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-500 text-sm mb-6">
        <p className="mr-4">
          <span className="font-semibold">Author:</span> {post.author}
        </p>
        <p>
          <span className="font-semibold">Date:</span> {post.date}
        </p>
      </div>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg shadow-lg mb-6 w-full h-auto"
      />
      <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts
            .filter((p) => p.id !== post.id)
            .map((relatedPost) => (
              <div key={relatedPost.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">{relatedPost.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{relatedPost.date}</p>
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  width={150}
                  height={100}
                  className="rounded-md mt-2"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
