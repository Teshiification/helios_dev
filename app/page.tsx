import Subscriber from "@/components/Subscriber";
import Teams from "@/components/Teams";
import Userlist from "@/components/Userlist";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-4">
      <Subscriber />
      <Userlist />
      <Teams />
    </div>
  );
}
