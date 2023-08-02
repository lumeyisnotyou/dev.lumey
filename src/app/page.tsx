'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';
export default function Home() {

  // Move the translated spans on mouse move
  useEffect(() => {
    const rootSpan = document.querySelector('#rootspan');
    if (!rootSpan) return;
    const spans = document.querySelectorAll('span');
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      spans.forEach((span, idx) => {
        // Invert the index so that the first span is the last to move
        if (span.id === 'rootspan' || span.id === "listSpan") return;
        if (idx === 0-3) return;
        span.style.transform = `translate(${x / (30 - idx) * idx}px, ${y / (30 - idx) *(idx/3) }px)`;
      })
    });
  }, []);

  // On page load, animate the text
  useEffect(() => {
    const spans = document.querySelectorAll('span');
    const rootSpan = document.querySelector('#rootspan');
    if (!rootSpan) return;
    rootSpan.classList.remove('opacity-0');
    setTimeout(() => {
      rootSpan.classList.add('text-normal');
      rootSpan.classList.remove('text-stroke');
    }, 1100);
    spans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove('opacity-0');
        // As the span number increases, add less opacity
        if (span.id !== 'rootspan' && span.id !== "listSpan") {
          span.style.opacity = `${0.9 - (idx * 0.15)}`;

        } else {
          span.style.opacity = '1';
        }
        setTimeout(() => {
          span.classList.remove('motion-safe:duration-1000');
        }, 1000);
        if (span.id === 'listSpan') {
          const translateSpan = document.querySelectorAll('.list-item');
          if (!translateSpan) return;
          translateSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove('motion-safe:translate-x-16', 'motion-safe:opacity-0');
            }, (idx * 100) + 1000);
          }
          );
        }
      }, (idx * 100));
    });

  }, []);



  return (
    <>
    <div className='w-screen overflow-hidden h-screen'>
      
      <div className='flex  flex-col justify-center align-middle items-start h-screen'>
        <div className=' select-none'>
          <span id='rootspan' className="p-10 text-9xl select-none z-50 text-accent opacity-0 text-stroke motion-safe:duration-1000 motion-safe:transition-all font-black">
            lumey
          </span>
          {/* Copies of the span, offset by 10px */}
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              id={`span-${i}`}
              className="text-9xl pl-10 select-none text-stroke absolute left-0 opacity-0 motion-safe:duration-1000 motion-safe:transition-all motion-safe:ease-out font-black"
              style={{ transform: `translate(${i * 10}px, -${i * 5}px) translate3d(0,0,-${i*5}px)` }}
            >
              lumey
            </span>
          ))}

        </div>
        <span id='listSpan' className='text-2xl z-10 opacity-0 p-2 pl-10 max-w-4xl w-fit h-fit motion-safe:duration-1000 motion-safe:transition-all font-bold'>
          Hi there, I&apos;m a high-school student who loves to tinker with everything. I'm a homelabber, a developer, and a designer.
          <ul className=' list-dash text-xl space-y-2 p-2 list-inside'>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>👨‍💻 I know React, Node, Swift, and some Python</li>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>📱 I have a huge knack for design and UI/UX</li>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>🏠 I run a homelab with a single server and networking setup</li>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>🎮 I play a lot of VRChat, and I'm a furry</li>
          </ul>
        </span>
        <div className='flex flex-row w-screen justify-between space-x-2'>
          <p className='text-1xl p-2 w-fit h-fit left-0 absolute bottom-0 font-mono duration-1000 text-opacity-0 transition-all font-bold'
          >01 // about_me</p>
          <div className='flex h-10 flex-row w-min space-x-2 fixed right-0 bottom-0'>
          <Image alt='peeping lumey' className='absolute right-full transition-all origin-center bottom-0' src='https://photos.lumey.dev/api/v1/dl/0e471a78ef68eb476fe427a57682aff156b55363?t=16tdrjio' width={128} height={128} />
            <a href='https://card.lumey.dev' className='text-1xl p-2 w-fit h-fit  font-mono hover:border-t-4 hover:scale-110 active:scale-90 border-t border-accent text-opacity-0 transition-all font-bold'>socials</a>
            <a href='https://art.lumey.dev' className='text-1xl p-2 w-fit h-fit   font-mono hover:border-t-4 hover:scale-110 active:scale-90 border-t border-accent text-opacity-0 transition-all font-bold'>art</a>
          </div>
        </div>
      </div>
    </div>
    {/* Contain this in a circular mask */}
    <MeshGradientRenderer
        className='absolute blur-2xl dark:opacity-40 -z-50 top-0 left-0 w-full h-full scale-110'
        colors={['#bcdceb', '#b27ec9', '#7acaef', '#9171bd', '#8780ca']}
        wireframe={false}

        speed={0.005}
        />
    </>
  );
}