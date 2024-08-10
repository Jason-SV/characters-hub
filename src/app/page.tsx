import Link from "next/link";

export default function MainPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-mint-three">
      <div className="flex flex-col text-center gap-4">
        <div className="text-2xl">Welcome,</div>
        <div className="text-xl">to</div>
        <div className="text-4xl font-bold">Character Hub !!</div>
        <Link href={'/home'}>
          <button className="mt-1 bg-mint-four px-3 py-2 text-white rounded-lg hover:scale-[1.05] hover:bg-mint-five transition duration-300 ease-in-out">Go to Hub</button>
        </Link>
        
      </div>
    </main>
  );
}
