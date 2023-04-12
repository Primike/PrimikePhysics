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
    <div className="course-container">
      <div className="container2">
        <div className="container2-title">
          Chapters
          <button className="dropdown-btn" onClick={toggleChapters}>
            &#x25BC;
          </button>
        </div>
        <div className={`chapter-list ${showChapters ? "visible" : ""}`}>
          {course.chapters.map((chapter, index) => (
            <div
              key={index}
              className="chapter-item"
              onClick={() => onChapterClick(chapter)}
            >
              {chapter.title}
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <h1 className="container1-title">{currentChapter.title}</h1>
        <div className="image-text-wrapper">
          <img
            className="course-image"
            src={currentChapter.image}
            alt={currentChapter.title}
          />
          <p className="course-text">{currentChapter.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Course;
