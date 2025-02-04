import Dropdown from '@/components/ui/Dropdown'
import { 
    HiOutlinePencilAlt,
    HiX,
    HiOutlineEye,
} from 'react-icons/hi'
import EllipsisButton from '@/components/shared/EllipsisButton'
import { useNavigate, useNavigation } from 'react-router-dom'

const dropdownList = [
    { label: 'Go To Quiz', value: 'addFlag', icon: <HiOutlineEye />,path:"/start-quiz" },
    { label: 'Edit Quiz', value: 'move', icon: <HiOutlinePencilAlt />,path:"/start-quiz" },
    { label: 'Delete Quiz', value: 'projectSetting', icon: <HiX />,path:"/start-quiz" },
]

const ItemDropdown = ({data}) => {
    const navigation = useNavigate() 
    const handleAction = (path:string) =>{ 
        navigation(path, {
            state: {
              ...data
            }
          })
    }
    return (
        <Dropdown placement="bottom-end" renderTitle={<EllipsisButton />}>
            {dropdownList.map((item) => (
                <Dropdown.Item key={item.value} eventKey={item.value} onClick={()=>handleAction(item.path)}>
                    <span className="text-lg">{item.icon}</span>
                    <span className="ml-2 rtl:mr-2">{item.label}</span>
                </Dropdown.Item>
            ))}
        </Dropdown>
    )
}

export default ItemDropdown
