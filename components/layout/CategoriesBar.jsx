// CategoriesBar.js
import { useCategoryFilter } from "/utils/context/CategoryFilter";
import portfolioData from "/data/portfolio";

export default function CategoriesBar() {
  const { selectedCategories, setSelectedCategories } = useCategoryFilter();

  const categories = Array.from(
    new Set(portfolioData.flatMap((project) => project.categories))
  );

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((c) => c !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  return (
    <nav className="flex-col items-center hidden md:flex lg:items-end">
      <div className="flex items-center px-4 py-3 my-auto duration-300 shadow-md bg-white/80 rounded-xl gap-x-8 text-slate-700 max-w-max dark:bg-black/90">
        <button
          onClick={() => setSelectedCategories([])}
          className={`font-semibold duration-300 ${
            selectedCategories.length === 0
              ? "dark:text-secondary text-primary"
              : "text-slate-600 dark:text-slate-400"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`font-semibold duration-300 
              ${
                selectedCategories.includes(category)
                  ? "text-primary dark:text-secondary "
                  : "text-slate-600  dark:text-slate-400"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}
