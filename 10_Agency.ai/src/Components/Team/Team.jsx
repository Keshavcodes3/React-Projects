import { useTheme } from "../Contexts/Context";
import { teamData } from "../../assets/assets";
const Card = ({ Member }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border transition-all duration-300 hover:scale-105
      ${
        theme === "light"
          ? "bg-white border-gray-200 shadow-xl shadow-gray-100"
          : "bg-gray-900 border-gray-800 shadow-lg shadow-black/40"
      }`}
    >
      <img
        src={Member.image}
        alt={Member.name}
        className="h-20 w-20 rounded-full object-cover border-2 border-indigo-400"
      />

      <div className="flex-1">
        <h2
          className={`font-semibold text-lg ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {Member.name}
        </h2>
        <p
          className={`text-sm ${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {Member.title}
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`px-5 lg:px-20 max-w-8xl mx-auto w-full flex flex-col items-center transition-all
      ${
        theme === "light"
          ? "bg-white"
          : "bg-gray-950"
      }`}
    >
      <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-br from-violet-500 via-purple-500 to-indigo-400">
        Meet the team
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
        {teamData.map((val, i) => (
          <Card key={i} Member={val} />
        ))}
      </div>

      <p
        className={`mt-6 text-lg max-w-xl mx-auto text-center font-semibold
        ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        A passionate team of digital experts dedicated to your brands <br />
        success.
      </p>
    </div>
  );
};

export default Team;