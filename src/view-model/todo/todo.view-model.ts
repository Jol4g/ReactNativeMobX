import { IReactionDisposer, autorun, makeAutoObservable } from "mobx";
import todoRepository from "../../repository/todoRepository/todoRepository"

class TodoViewModel {
    list = []
    disposerList: IReactionDisposer[] = [];


    constructor() {
        console.log('Create Todo Model View object');
        makeAutoObservable(this);
        const disposer = autorun(() => {
        });
        this.disposerList.push(disposer);
    }

    fetchTodoData = () => {
        todoRepository
            .fetchTodoList()
            .then((response) => {
                this.list = response

            }).catch((err) => {
                console.log(err);

            })
    }
}

const todoViewModel = new TodoViewModel()

export default todoViewModel