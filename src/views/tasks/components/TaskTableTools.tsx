import Button from '@/components/ui/Button'
import { HiDownload, HiPlusCircle } from 'react-icons/hi'
import TaskTableSearch from './TaskTableSearch'
import TaskFilter from './TaskFilter'
import { Link } from 'react-router-dom'

const TaskTableTools = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <TaskTableSearch />
            <TaskFilter />
            <Link
                download
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to="/data/product-list.csv"
                target="_blank"
            >
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </Link>
            <Link
                className="block lg:inline-block md:mx-2  md:mb-0 mb-4"
                to="/add-edit-task"
            >
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
                    Add Tasks
                </Button>
            </Link>
            <Link
                className="block lg:inline-block md:mb-0 mb-4"
                to="/manage-task-tree"
            >
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
                    Manage Tasks Tree
                </Button>
            </Link>
        </div>
    )
}

export default TaskTableTools
