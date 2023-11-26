// Home.js
import React from "react";
import portfolioData from "/data/portfolio";
import ProjectCard from "/components/cards/ProjectCard";
import { useCategoryFilter } from "/utils/context/CategoryFilter";

export default function Home() {
  const { selectedCategories } = useCategoryFilter();

  // Filtrez les projets uniquement si des catégories sont sélectionnées
  const filteredProjects =
    selectedCategories.length > 0
      ? portfolioData.filter((project) =>
          project.categories.some((category) =>
            selectedCategories.includes(category)
          )
        )
      : portfolioData;

  return (
    <div className="grid w-full h-full grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
