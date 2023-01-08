
function Skills() {
    return(
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fa-brands fa-python"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    <li className="list-inline-item"><i className="fa-brands fa-java"></i></li>
                </ul>

                <div className="subheading mb-3">Frontend</div>
                <ul className="fa-ul mb-1">
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Bootstrap, Html, css and JavaScript.
                    </li>
                </ul>
                
                <div className="subheading mb-3">Backend</div>
                <ul className="fa-ul mb-1">
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Node.js, C#, Python, SQLServer, MySQL and Oracle
                    </li>
                </ul>

                <div className="subheading mb-3">Methodologies</div>
                <ul className="fa-ul mb-0">                       
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Scrum, XP, Kanban and more.
                    </li>
                </ul>

                <div className="subheading mb-3">Other Skills</div>
                <ul className="fa-ul mb-0">                       
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Leadership Course, stress management (PTSC), Disaster and Combat First Aid (TCCC)
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;