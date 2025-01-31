
import {  Dialog } from '@/components/ui'
import ListItem from './ViewRecordDetails/ListItem'
import { useEffect, useState } from 'react'
import { splitObjectValues } from '@/utils/helper'

const TaskRecordView = ({ modalData,
    openViewModal,
    handleView }: {
        modalData: any,
        openViewModal: boolean,
        handleView: () => void
    }) => {

        const [recordList,setRecordList] = useState([])
 
 

 


    const data123 = [
        {
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
        },
        {
            "id": 28,
            "name": "AIA Bill App",
            "category": "Mobile Application",
            "desc": "We are not shipping your machine!",
            "attachmentCount": 5,
            "totalTask": 36,
            "completedTask": 15,
            "progression": 45,
            "dayleft": 19,
            "status": "none",
            "member": [
                {
                    "name": "Carolyn Perkins",
                    "img": "/img/avatars/thumb-1.jpg"
                },
                {
                    "name": "Gabriel Frazier",
                    "img": ""
                }
            ]
        },
        {
            "id": 29,
            "name": "IOP Web",
            "category": "Web Backend Application",
            "desc": "There are two ways to write error-free programs; only the third one works.",
            "attachmentCount": 8,
            "totalTask": 27,
            "completedTask": 19,
            "progression": 73,
            "dayleft": 6,
            "status": "orange",
            "member": [
                {
                    "name": "Debra Hamilton",
                    "img": ""
                },
                {
                    "name": "Stacey Ward",
                    "img": ""
                },
                {
                    "name": "Ron Vargas",
                    "img": "/img/avatars/thumb-3.jpg"
                },
                {
                    "name": "Ron Vargas",
                    "img": "/img/avatars/thumb-3.jpg"
                },
                {
                    "name": "Ron Vargas",
                    "img": "/img/avatars/thumb-3.jpg"
                },
                {
                    "name": "Ron Vargas",
                    "img": "/img/avatars/thumb-3.jpg"
                }
            ]
        },
        {
            "id": 31,
            "name": "Octonine POS",
            "category": "Backend Application",
            "desc": "Everything that can be invented has been invented.",
            "attachmentCount": 8,
            "totalTask": 78,
            "completedTask": 23,
            "progression": 21,
            "dayleft": 52,
            "status": "cyan",
            "member": [
                {
                    "name": "Brittany Hale",
                    "img": "/img/avatars/thumb-10.jpg"
                },
                {
                    "name": "Frederick Adams",
                    "img": "/img/avatars/thumb-8.jpg"
                },
                {
                    "name": "Samantha Phillips",
                    "img": "/img/avatars/thumb-6.jpg"
                },
                {
                    "name": "Samantha Phillips",
                    "img": "/img/avatars/thumb-6.jpg"
                },
                {
                    "name": "Samantha Phillips",
                    "img": "/img/avatars/thumb-6.jpg"
                }
            ]
        }
    ]

    useEffect(()=>{
        try {
            modalData && setRecordList(splitObjectValues(modalData))
        } catch (error) {
            console.log(error)
        }
        
        // fetchTasks() // If you want to fetch data from the API
        // dispatch(getTasks()) // If you want to fetch data from Redux store
    },[openViewModal])
    return (
        <Dialog
            isOpen={openViewModal}
            onClose={handleView}
            onRequestClose={handleView}
        >
            <div onClick={() => console.log(recordList)} className='mt-2 mb-2 '>
                <h3>{modalData.name}</h3>
            </div>


            {recordList.map((project) => (
                <ListItem key={project.id} cardBorder data={project} />
            ))}
        </Dialog>
    )
}

export default TaskRecordView
