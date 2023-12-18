import Userlist from "@/components/Userlist";
import Subscriber from "@/components/subscriber";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-4">
      <Subscriber />
      <Userlist />
    </div>
  );
}
