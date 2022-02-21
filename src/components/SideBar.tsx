import { useState } from "react";

import { GenreResponseProps } from "../App";

import { Button } from "./Button";

import "../styles/sidebar.scss";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  sidebarItemClick: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  sidebarItemClick,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => sidebarItemClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
