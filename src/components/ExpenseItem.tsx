import { TiDelete } from "react-icons/ti";

interface Item {
  id: Number,
  name: String,
  cost: Number,
}

const ExpenseItem = (props: Item) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          R${props.cost}
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
