function StudentCard({ student }) {

    return (
        <div>
            <h3>{student.name}</h3>

            <p>
                Age: {student.age}
            </p>

            <p>
                Course: {student.course}
            </p>

            {student.active ? (
                <p>🟢 Active</p>
            ) : (
                <p>🔴 Inactive</p>
            )}
        </div>
    );
}

export default StudentCard;