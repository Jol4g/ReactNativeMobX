import { NetworkApiServices } from "../../data/network-services";
import { todo } from "../../model/todo/todo";

class TodoRepository {
    fetchTodoList = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')

        return response.json()
    }
}
const todoRepository = new TodoRepository
export default todoRepository
