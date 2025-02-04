import Dialog from '@/components/ui/Dialog' 
import {
    toggleNewQuizDialog,
    useAppDispatch,
    useAppSelector,
} from '../store'
import NewQuizForm from './NewQuizForm'


 
const NewQuizDialog = ()  => {
    const dispatch = useAppDispatch()

    const newQuizDialog = useAppSelector(
        (state) => state.projectList.data.newQuizDialog
    )

    const onDialogClose = () => {
        dispatch(toggleNewQuizDialog(false))
    }

    return (
        <Dialog
            isOpen={newQuizDialog}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4 onClick={()=>console.log(newQuizDialog)}>Add new project</h4>
            <div className="mt-4">
                <NewQuizForm />
            </div>
        </Dialog>
    )
}

export default NewQuizDialog
