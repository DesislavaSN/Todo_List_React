
import TableRow from "./TableRow";

export default function TableList({newTask, onTickedChange, onDeleteHandller}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Checke</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {newTask && newTask.map(todo => {
                    return (
                        <TableRow key={todo.id} todo={todo} onTickedChange={onTickedChange} onDeleteHandller={onDeleteHandller} />
                    );
                })}

            </tbody>
        </table>
    );
};
