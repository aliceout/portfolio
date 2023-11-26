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

  // Triez les projets par date de manière décroissante
  const sortedProjects = filteredProjects.sort((a, b) => b.date - a.date);

  return (
    <div className="grid w-full h-full gap-8 xl:grid-cols-3 md:grid-cols-2">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
