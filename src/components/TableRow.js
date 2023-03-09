export default function TableRow({
    todo, 
    onTickedChange,
    onDeleteHandller
}) {
    return (
        <tr>
            <td className={todo.complete ? "strikeTask" : ""}>{todo.task}</td>
            <td className="actions"><input type="checkbox" onChange={() => onTickedChange(todo.id)}/></td>
            <td className="actions"><button className="trash-btn" onClick={onDeleteHandller}><i className="fa-solid fa-trash"></i></button></td>
        </tr>
    );
};
