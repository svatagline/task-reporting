import Card from '@/components/ui/Card'
import ProgressionBar from './ProgressionBar'
import { HiClock, HiOutlineClipboardCheck } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { EllipsisButton, UsersAvatarGroup } from '@/components/shared'
import { INode } from '@/views/tasks/type'

export type ListItemData = {
    id: number
    name: string
    category: string
    desc: string
    attachmentCount: number
    totalTask: number
    completedTask: number
    progression: number
    dayleft: number
    status: string
    member: {
        name: string
        img: string
    }[]
}

type ListItemProps = {
    data: ListItemData
    cardBorder?: boolean
}

const ListItem = ({allTaskData}:{allTaskData:INode[]}) => {
    const data = {
        "id": 27,
        "name": "EVO SaaS",
        "category": "Web Application",
        "desc": "Most of you are familiar with the virtues of a programmer",
        "attachmentCount": 12,
        "totalTask": 32,
        "completedTask": 27,
        "progression": 80,
        "dayleft": 21,
        "status": "none",
        "member": [
            {
                "name": "Frederick Adams",
                "img": "/img/avatars/thumb-8.jpg"
            },
            {
                "name": "Joyce Freeman",
                "img": "/img/avatars/thumb-5.jpg"
            },
            {
                "name": "Clayton Bates",
                "img": ""
            },
            {
                "name": "Clayton Bates",
                "img": ""
            }
        ]
    }
    const { name, totalTask, completedTask, progression, member, category } =
        data

    return (
        <div className="mb-4"  onClick={()=>console.log(allTaskData)}>
            <Card bordered={true}>
                <div className="grid gap-x-4 grid-cols-12">
                    <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                        <div className="flex flex-col">
                            <h6 className="font-bold">
                                <Link to="/app/project/scrum-board">
                                    {name}
                                </Link>
                            </h6>
                            <span>{category}</span>
                        </div>
                    </div>
                    <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center md:justify-end">
                        <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
                            <HiClock className="text-base" />
                            <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                                {completedTask} / {totalTask}
                            </span>
                        </div>
                    </div>
                    <div className="my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-3 md:flex md:items-center">
                        <ProgressionBar progression={progression} />
                    </div>
                    <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center">

                        <UsersAvatarGroup users={member} />
                    </div>
                    <div className="my-1 sm:my-0 col-span-12 sm:col-span-1 flex md:items-center justify-end">
                    <EllipsisButton />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ListItem
