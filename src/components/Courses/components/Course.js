import Chapter from "./Chapter";
import Quiz from "./Quiz";
import "./Course.css";
import { useState } from "react";

function Course({ course }) {
  const [currentChapter, setCurrentChapter] = useState(course.chapters[0]);
  const [showChapters, setShowChapters] = useState(false);

  const onChapterClick = (chapter) => {
    setCurrentChapter(chapter);
    setShowChapters(false);
  };

  const toggleChapters = () => {
    setShowChapters(!showChapters);
  };

  return (
    <div className="course-div">
      <div className="chapters-list-div">
        <div className="chapters-list-title">
          Chapters
          <button className="dropdown-btn" onClick={toggleChapters}>
            &#x25BC;
          </button>
        </div>
        <div className={`chapter-list ${showChapters ? "visible" : ""}`}>
          {course.chapters.map((chapter, index) => (
            <div
              key={index}
              className="chapter-list-item"
              onClick={() => onChapterClick(chapter)}
            >
              {chapter.title}
            </div>
          ))}
        </div>
      </div>

      <div className="chapter-content-div">
        <h1 className="chapter-title">{currentChapter.title}</h1>
        <div className="chapter-content">
          <img
            className="chapter-image"
            src={currentChapter.image}
            alt={currentChapter.title}
          />
          <p className="chapter-text">{currentChapter.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Course;

