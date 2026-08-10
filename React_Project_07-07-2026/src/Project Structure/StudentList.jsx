import StudentCard from "./StudentCard";
import EmptyMessage from "./EmptyMessage";

function StudentList({ students }) {

    if (students.length === 0) {
        return <EmptyMessage />;
    }

    return (
        <div>
            <h2>Student List</h2>

            {students.map(function(student) {
                return (
                    <StudentCard
                        key={student.id}
                        student={student}
                    />
                );
            })}
        </div>
    );
}

export default StudentList;