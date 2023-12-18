import { Team } from "@/app/types/team";

const Teams = () => {
  const teams: Team[] = [];

  return (
    <div className="relative h-full">
      <h1 className="absolute -mt-4 ml-2 bg-slate-800 px-2">Teams</h1>
      <div className="flex flex-col h-full border-2 border-indigo-500">
        {teams?.map((team: Team, key: any) => {
          return <div key={key}>{`${team.name}: ${team?.users}`}</div>;
        })}
      </div>
    </div>
  );
};

export default Teams;
