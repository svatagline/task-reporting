import Loading from '@/components/shared/Loading';
import MyTasks from './components/MyTasks';
import { RowData, taskData } from '../RowData';
import { exatractNestedChild, mergeTasksData } from '@/utils/helper';
import { INode } from '@/views/tasks/type';

const AnalysisDashboard = () => {
  const allTaskData:INode[] = mergeTasksData(exatractNestedChild([taskData[1]]))

  const test = () =>[
    console.log(allTaskData)
  ]
  return (
    <div className='flex flex-col gap-4 h-full' >
      <Loading loading={false}>
        <div>
          <h4 className='mb-1' onClick={test}>Hello,Sagar!</h4>
          <p>You have 5 tasks on hand.</p>
        </div>
        <div className='flex flex-col xl:flex-row gap-4'>
          <div className='flex flex-col gap-4 flex-auto'>
            <MyTasks allTaskData={allTaskData}/>
          </div>
        </div>
      </Loading>
    </div>
  );
};

export default AnalysisDashboard;
