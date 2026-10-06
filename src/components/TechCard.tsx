import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}



const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col">
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="w-10 h-10" />
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-600">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold">{name}</h3>
      <p className="mt-2 text-sm text-gray-500 flex-1">{description}</p>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
        <span>{difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-gray-700">
          <span className="text-yellow-400">★</span> {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full py-2.5 rounded-md text-sm font-medium text-white transition ${
          isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;