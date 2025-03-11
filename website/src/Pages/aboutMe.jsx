import { useState, useEffect } from 'react';

export function AboutMe() {
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);
  const words = ["Life-long Learner", "Curious", "Client-focused", "Caring", "Passionate", "Problem-Solver"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentWord((current) => (current + 1) % words.length);
        setFade(true); // Start fade in
      }, 500); // Wait for fade out to complete
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-black-600">About me</h2>
      <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-blue-400 sm:text-5xl">
          <span 
            className={`
              inline-block 
              min-w-[200px] 
              transition-all 
              duration-500 
              ease-in-out
              ${fade ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
            `}
          >
            {words[currentWord]}
          </span>
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Professional Development</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                As I continue my journey in cloud computing, I have started my Master’s at the University of Maryland Global Campus, 
                where I’m excited to deepen my knowledge of networking and cloud systems. In addition, I’ve signed up for the Google 
                Cybersecurity Certification because I believe prevention is key! I’m also preparing to earn my Salesforce Administrator 
                Certification to expand my expertise in cloud-based customer relationship management.
                </p>
                <br />
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-16 max-lg:pb-12 sm:px-10 lg:pb-2 flex-col">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="images/UMGC.png"                   
                    alt="UMGC website"
                  />
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">AWS Cloud Institute</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    I was part of the first cohort to graduate from the AWS Cloud Institute, a comprehensive program focused on AWS cloud development. 
                    Through this experience, I gained hands-on skills in cloud architecture, development, and deployment, preparing me to build scalable 
                    and secure cloud solutions.{' '}
                  </p>
                  <br />
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-16 max-lg:pb-12 sm:px-10 lg:pb-2 flex-col">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="images/ACI_pic.jpeg"
                    alt="Picture of Rita with ACI gear"
                  />
                  <a 
                    href="https://aws.amazon.com/blogs/training-and-certification/aws-cloud-institute-first-graduates/" 
                    className="text-blue-600 hover:text-blue-800 underline mt-4 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the article about AWS Cloud Institute's first graduates.
                  </a>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lqg font-medium tracking-tight text-gray-950 max-lg:text-center"> Passionate About People</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                I’ve always been driven by a deep passion for helping others, whether through my previous roles as an Operating Room nurse, educator, or my 
                current journey in cloud computing. I thrive on collaboration, problem-solving, and creating solutions that make a meaningful impact. 
                My goal is to bridge the gap between technology and human connection, ensuring that innovation serves people in the best way possible.
                </p>
              </div>
              <br />
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-16 max-lg:pb-12 sm:px-10 lg:pb-2 flex-col">
                  <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/OR_Rita.jpg"
                  alt="Rita Ordaz, OR nurse"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Creativity
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Whether it's writing, designing websites, or making cards, I love to create and build. I enjoy making 
                  things visually appealing and seeing them from a fresh perspective. There's something deeply fulfilling 
                  about bringing ideas to life from nothing.
                </p>
              </div>
              <br />
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-16 max-lg:pb-12 sm:px-10 lg:pb-2 flex-col">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/Code.png"
                  alt="A page of code"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
