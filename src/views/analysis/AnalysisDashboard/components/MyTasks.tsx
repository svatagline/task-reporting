import { useMemo } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import Tag from '@/components/ui/Tag';
import { useNavigate } from 'react-router-dom';
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup';
import ActionLink from '@/components/shared/ActionLink';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import ListItem from './ListItem';
import { INode } from '@/views/tasks/type';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { getSum } from '@/utils/helper';

type Task = {
  taskId: string;
  taskSubject: string;
  priority: number;
  assignees: {
    id: string;
    name: string;
    email: string;
    img: string;
  }[];
};

type MyTasksProps = {
  data?: Task[];
};

const { Tr, Th, Td, THead, TBody } = Table;

const CategoryTag = ({ category }: { category: number }) => {
  switch (category) {
    case 0:
      return (
        <Tag className='text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0'>
          Nothing
        </Tag>
      );
    case 1:
      return (
        <Tag className='text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0'>
          High
        </Tag>
      );
    case 2:
      return (
        <Tag className='bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0'>
          Mangement
        </Tag>
      );
    case 3:
      return (
        <Tag className='text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0'>
          Creative
        </Tag>
      );
    default:
      return null;
  }
};
const SatisfactionTag = ({ satisfaction }: { satisfaction: number }) => {
  const condition1 = satisfaction <= 4;
  const condition2 = satisfaction > 4 && satisfaction < 7;
  const condition3 = satisfaction > 7 && satisfaction < 9;
  const staisfactionPrc = 10 * parseFloat(`${satisfaction}`);
  if (condition1) {
    return (
      <Tag className='text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0'>
        {`${staisfactionPrc}%`}
      </Tag>
    );
  } else if (condition2) {
    return (
      <Tag className='text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0'>
        {`${staisfactionPrc}%`}
      </Tag>
    );
  } else if (condition3) {
    return (
      <Tag className='text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0'>
        {`${staisfactionPrc}%`}
      </Tag>
    );
  } else {
    return (
      <Tag className='bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0'>
        {`${staisfactionPrc}%`}
      </Tag>
    );
  }
};

const TimeManagementBox = ({ row }: { row: any }) => {
  const {
    time_spent,
    wasted_time,
    estimated_time,
    extra_time_taken_to_finish_task = 0,
  } = row;

  return (
    <>
      <div className='inline-flex items-center px-2 py-1 border border-gray-300 rounded-full'>
        <HiOutlineClipboardCheck className='text-base' />
        <span className='ml-1 rtl:mr-1 whitespace-nowrap'>
          {getSum(
            `${time_spent}|---|${wasted_time}|---|${extra_time_taken_to_finish_task}`,
          )}{' '}
          / {estimated_time}
        </span>
      </div>
    </>
  );
};
const MyTasks = ({ allTaskData }: { allTaskData: INode[] }) => {
//   const data = [
//     {
//       taskId: 'KCM-1393',
//       taskSubject: 'Design sign up flow',
//       priority: 0,
//       assignees: [
//         {
//           id: '1',
//           name: 'Carolyn Perkins',
//           email: 'eileen_h@hotmail.com',
//           img: '/img/avatars/thumb-1.jpg',
//         },
//         {
//           id: '2',
//           name: 'Terrance Moreno',
//           email: '',
//           img: '/img/avatars/thumb-2.jpg',
//         },
//       ],
//     },
//     {
//       taskId: 'KCM-2039',
//       taskSubject: 'Update contact page',
//       priority: 1,
//       assignees: [
//         {
//           id: '1',
//           name: 'Carolyn Perkins',
//           email: 'eileen_h@hotmail.com',
//           img: '/img/avatars/thumb-1.jpg',
//         },
//       ],
//     },
//     {
//       taskId: 'KCM-2155',
//       taskSubject: 'Document features 2.0',
//       priority: 1,
//       assignees: [
//         {
//           id: '1',
//           name: 'Carolyn Perkins',
//           email: 'eileen_h@hotmail.com',
//           img: '/img/avatars/thumb-1.jpg',
//         },
//         {
//           id: '2',
//           name: 'Terrance Moreno',
//           email: '',
//           img: '/img/avatars/thumb-2.jpg',
//         },
//         {
//           id: '3',
//           name: 'Ron Vargas',
//           email: 'ronnie_vergas@infotech.io',
//           img: '/img/avatars/thumb-3.jpg',
//         },
//       ],
//     },
//     {
//       taskId: 'KCM-2270',
//       taskSubject: 'Fix typo in home page',
//       priority: 2,
//       assignees: [
//         {
//           id: '1',
//           name: 'Carolyn Perkins',
//           email: 'eileen_h@hotmail.com',
//           img: '/img/avatars/thumb-1.jpg',
//         },
//         {
//           id: '5',
//           name: 'Joyce Freeman',
//           email: 'joyce991@infotech.io',
//           img: '/img/avatars/thumb-5.jpg',
//         },
//       ],
//     },
//     {
//       taskId: 'KCM-1957',
//       taskSubject: 'Fix broken API',
//       priority: 0,
//       assignees: [
//         {
//           id: '1',
//           name: 'Carolyn Perkins',
//           email: 'eileen_h@hotmail.com',
//           img: '/img/avatars/thumb-1.jpg',
//         },
//       ],
//     },
//   ];

const data = allTaskData
const navigate = useNavigate();

  const columns: ColumnDef<Task>[] = useMemo(
    () => [
      // {
      //     header: 'Task ID',
      //     accessorKey: 'taskId',
      //     cell: (props) => {
      //         const { taskId } = props.row.original
      //         return (
      //             <ActionLink
      //                 themeColor={false}
      //                 className="font-semibold"
      //                 to="/app/project/scrum-board"
      //             >

      //                 <span  > {taskId}</span>
      //             </ActionLink>
      //         )
      //     },
      // },

      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Tag',
        accessorKey: 'tag',
      },
      {
        header: 'Time management',
        accessorKey: 'time_spent',
        cell: props => {
          return <TimeManagementBox row={props.row.original} />;
        },
      },
      {
        header: 'Category',
        accessorKey: 'category',
        cell: props => {
          const { category } = props.row.original;
          return <CategoryTag category={category} />;
        },
      },
      {
        header: 'Satisfaction Rate',
        accessorKey: 'satisfaction_rate',
        cell: props => {
          const { satisfaction_rate } = props.row.original;
          return <SatisfactionTag satisfaction={parseInt(satisfaction_rate)} />;
        },
      },
    ],
    [],
  );
  const gg = `


  "id": "1738553400_1738567800_01",
                          "name": "Management",
                          "description": "add sat/sun schedule in task reporting",
                          "category": 2,
                          "status": "2",
                          "time_spent": "25",
                          "wasted_time": "0",
                          "tag": "Management",
                          "estimated_time": "15",
                          "focus_rate": "0",
                          "satisfaction_rate": "10",
                          "reason_for_satisfaction": "",
                          "notes": ""
`;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onViewAllTask = () => {
    navigate('/app/project/issue');
  };

  return (
    <Card>
      <div className='flex items-center justify-between mb-6'>
        <h4>My Tasks</h4>
        <Button size='sm' onClick={onViewAllTask}>
          View All
        </Button>
      </div>
      <Table>
        <THead>
          {table.getHeaderGroups().map(headerGroup => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <Th key={header.id} colSpan={header.colSpan}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </THead>
        <TBody>
          {table.getRowModel().rows.map(row => {
            return (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </TBody>
      </Table>
      <ListItem />
    </Card>
  );
};

export default MyTasks;
