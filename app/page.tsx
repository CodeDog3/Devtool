import Image from "next/image";
import HomeNav from "./(HomeComponents)/HomeNav";
import Login from "./(HomeComponents)/Login";

export default function Home() {
  return (
    <div>
      <HomeNav />
      <div className="flex justify-center mt-3">
        <Login />
      </div>
    </div>
  );
}
