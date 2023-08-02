'use client'
import { useEffect, useRef } from 'react';

export default function Home() {

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
    <div className='w-screen overflow-hidden h-screen'>
      <div className='flex  flex-col justify-center align-middle items-start h-screen'>
        <div className=''>
          <span id='rootspan' className="text-9xl text-accent opacity-0 text-stroke duration-1000 text-opacity-0  transition-all font-bold">
            LUMEY
          </span>
          {/* Copies of the span, offset by 10px */}
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              id={`span-${i}`}
              className="text-9xl text-stroke opacity-0 motion-safe:duration-1000 motion-safe:transition-all font-bold"
              style={{ transform: `translate(${i * 10}px, ${i * 10}px)` }}
            >
              LUMEY
            </span>
          ))}

        </div>
        <span id='listSpan' className='text-2xl opacity-0 p-2 pl-10 max-w-4xl w-fit h-fit motion-safe:duration-1000 motion-safe:transition-all font-bold'>
          Hi there, I&apos;m a high-school student who loves to tinker with everything. I'm a homelabber, a developer, and a designer.
          <ul className=' list-dash text-xl space-y-2 p-2 list-inside'>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>👨‍💻 I know React, Node, Swift, and some Python</li>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>📱 I have a huge knack for design and UI/UX</li>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>🏠 I run a homelab with a single server and networking setup</li>
            <li className='list-item motion-safe:translate-x-16 motion-safe:duration-1000 motion-safe:opacity-0 motion-safe:transition-all'>🎮 I play a lot of VRChat, and I'm a furry</li>
          </ul>
        </span>
        <div className='flex flex-row w-screen justify-between space-x-2'>
          <span className='text-1xl p-2 w-fit h-fit left-0 absolute bottom-0 font-mono duration-1000 text-opacity-0 transition-all font-bold'
          >01 <span>// about_me</span></span>
          <div className='flex flex-row w-min space-x-2 fixed right-0 bottom-0'>
            <a href='https://card.lumey.dev' className='text-1xl p-2 w-fit h-fit  font-mono hover:border-opacity-100 hover:scale-110 active:scale-90 border-4 border-opacity-0 border-accent text-opacity-0 transition-all font-bold'>socials</a>
            <a href='https://art.lumey.dev' className='text-1xl p-2 w-fit h-fit   font-mono hover:border-opacity-100 hover:scale-110 active:scale-90 border-4 border-opacity-0 border-accent text-opacity-0 transition-all font-bold'>art</a>
          </div>
        </div>
      </div>
    </div>
  );
}