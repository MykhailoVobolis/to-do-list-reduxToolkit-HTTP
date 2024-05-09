import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/selectors";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

export default function TaskList() {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
