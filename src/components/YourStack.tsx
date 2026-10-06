import type { Technology } from "../types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}


const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <aside className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 lg:sticky lg:top-24 h-fit">
      <h2 className="text-lg font-bold">Your Stack</h2>
      <p className="text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {/* Conditional rendering */}
      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-gray-200 rounded-lg py-6 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((item) => (
              <li key={item.id} className="flex items-center gap-3 border border-gray-200 rounded-lg p-2">
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 px-2" aria-label={`Remove ${item.name}`}>
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full border border-red-300 text-red-500 py-2 rounded-md text-sm font-medium hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;