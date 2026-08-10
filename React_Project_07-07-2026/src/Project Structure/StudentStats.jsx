function StudentStats({ students }) {

    var activeStudents = students.filter(function(student) {
        return student.active;
    });

    return (
        <div>
            <h2>Student Statistics</h2>

            <p>Total Students: {students.length}</p>

            <p>
                Active Students: {activeStudents.length}
            </p>

            <p>
                Inactive Students:
                {students.length - activeStudents.length}
            </p>
        </div>
    );
}

export default StudentStats;