import Chapter from "./Chapter"
import Quiz from "./Quiz"
import './Course.css'
import { useState } from "react"
function Course({course}) {
    let array = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    let chapters = course.chapters.map((chapter, index) => {
        return (
            <div class="accordion-item">
                <h2 class="accordion-header" id={`panelsStayOpen-heading${array[index + 1]}`}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${array[index + 1]}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${array[index + 1]}`}>
                    Chapter {index + 1} {chapter.title}
                </button>
                </h2>
                <div id={`panelsStayOpen-collapse${array[index + 1]}`} class="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${array[index + 1]}`}>
                    <div class="accordion-body">
                        <Chapter chapter={chapter}/>
                    </div>
                </div>
            </div>
        )
    })
    const [currentChapter, setCurrentChapter] = useState(chapters[0]);
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
                    <button className="dropdown-btn" onClick={toggleChapters}>&#x25BC;</button>
                </div>
                <div className={`chapter-list ${showChapters ? 'visible' : ''}`}>
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
                    <img className="course-image" src={currentChapter.image} alt={currentChapter.title} />
                    <p className="course-text">{currentChapter.content}</p>
                </div>
            </div>
        </div>
  
        // <div className="container-xxl">
        //     <div class="accordion" id="accordionPanelsStayOpenExample">
        //         {chapters}
        //         <div class="accordion-item">
        //             <h2 class="accordion-header" id="flush-headingEleven">
        //             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
        //                 Quiz
        //             </button>
        //             </h2>
        //             <div id="flush-collapseEleven" class="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
        //                 <div class="accordion-body">
        //                     {<Quiz quizquestions={course.quiz_questions}/>}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Course