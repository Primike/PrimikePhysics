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
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        )
    })
    return (
        <div class="accordion" id="accordionPanelsStayOpenExample">
            {chapters}

        </div>
    )
}

export default Course