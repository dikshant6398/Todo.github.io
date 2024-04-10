import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItem, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItem.map((item) => (
        <TodoItem
          key={todoItem}
          todoName={item.name}
          tododate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
export default TodoItems;
