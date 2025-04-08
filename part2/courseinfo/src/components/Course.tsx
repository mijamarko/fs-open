import Content from "./Content"
import Header from "./Header"
import { CourseProps } from "./Types"

const Course = ({ course }: { course: CourseProps }) => {
    let total = course.parts.map(item => item.exercises).reduce((prev, curr) => prev + curr)
    return (
        <>
            <Header course={course.name} />
            <Content items={course.parts} />
            <p><strong>total of {total} exercises</strong></p>
        </>
    )
}

export default Course