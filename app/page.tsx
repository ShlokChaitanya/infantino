
function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
  );
}

export default function Home() {
  const gitLink = "https://github.com/ShlokChaitanya/infantino";
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center">
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a rel="noreferrer" className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200">
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Infantino
          </p>
        </a>
        <h1 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-snug" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
          Launching Soon!
        </h1>
        <p className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
          Get ready for <strong className="text-gray-900">Infantino!</strong> This event will be jam-packed with exciting activities, engaging seminars, and learning opportunities from a variety of courses and areas.
        </p>
        <div className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <a className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black" href="mailto:support@shlokchaitanya.me" target="_blank" rel="noopener noreferrer">
            <p>Contact Us !</p> 
          </a>
          <a className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800" href={gitLink} target="_blank" rel="noopener noreferrer">
            <Icon />
            <p>
              <span className="hidden sm:inline-block">Contribute on</span> GitHub{" "}
              <span className="font-semibold">{ }</span>
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
