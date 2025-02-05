import Card from '@/components/ui/Card';
import Members from './Members';
import ProgressionBar from './ProgressionBar';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Tag } from '@/components/ui';
import { getAvg, getSum } from '@/utils/helper';

export type ListItemData = {
  id: number;
  name: string;
  category: string;
  desc: string;
  attachmentCount: number;
  totalTask: number;
  completedTask: number;

  progression: number;
  dayleft: number;
  status: string;
  member: {
    name: string;
    img: string;
  }[];
};

type ListItemProps = {
  data: ListItemData
  cardBorder?: boolean
  key:number
  records_count:number
};

const ListItem = ({ data, cardBorder,records_count }: ListItemProps) => {
  const {
    name,
    totalTask,
    completedTask,
    member,
    category,
    key,
    status,
    notes,
    time_spent,
    wasted_time,
    estimated_time,
    description,
    reason_for_satisfaction,
    satisfaction_rate,
  } = data;
  const isMutipalRecord = records_count>1

  const tu_progression =
    (getSum(time_spent) * 100) / (getSum(time_spent) + getSum(wasted_time));

  const te_progression =
    parseFloat(getSum(estimated_time ?? time_spent) * 100) /
    (getSum(time_spent) + getSum(wasted_time));

  const ts_progression = getAvg(satisfaction_rate);
  const total_progression =
    ts_progression * 0.5 + te_progression * 0.4 + tu_progression * 0.1;
  const TimeUtilization = ({ time_spent, wasted_time }) => {
    return (
      <>
        <div className='mt-4 flex flex-wrap gap-2'>
          {[
            {
              title: `Utilized time: ${getSum(time_spent)}`,
              prefix: 'bg-amber-400',
            },
            {
              title: `Wasted time: ${getSum(wasted_time)}`,
              prefix: 'bg-rose-500',
            },
          ].map((label, index) => (
            <Tag key={index} prefix className='mx-1' prefixClass={label.prefix}>
              {label.title}
            </Tag>
          ))}
        </div>
        <ProgressionBar progression={tu_progression} />
      </>
    );
  };
  const TimeEstimation = ({ time_spent, wasted_time, estimated_time }) => {
    return (
      <>
        <div className='mt-4 flex flex-wrap gap-2' onClick={()=>console.log(estimated_time)}>
          {[
            {
              title: `Total time: ${getSum(time_spent) + getSum(wasted_time)}`,
              prefix: 'bg-indigo-500',
            },
            {
              title: `Estimated time: ${getSum(estimated_time)}`,
              prefix: 'bg-amber-400',
            },
          ].map((label, index) => (
            <Tag key={index} prefix className='mx-1' prefixClass={label.prefix}>
              {label.title}
            </Tag>
          ))}
        </div>
        <ProgressionBar progression={te_progression} />
      </>
    );
  };
  const Satisfaction = ({ reason_for_satisfaction, satisfaction_rate }) => {
    return (
      <>
        <div
          className='mt-4 flex flex-wrap gap-2'
          onClick={() => console.log(ts_progression)}
        >
          {reason_for_satisfaction.length > 0 &&
            reason_for_satisfaction
              .split('|---|')
              .map((r, index) => {
                return {
                  title: r ?? 'none',
                  prefix: `bg-indigo-500`,
                };
              }).map((label, index) => (
                <Tag
                  key={index}
                  prefix
                  className='mx-1 text-wrap'
                  style={{ textWrap: 'auto' }}
                  prefixClass={label.prefix}
                >
                  {label.title}
                </Tag>
              ))}
        </div>
        <ProgressionBar progression={ts_progression} />
      </>
    );
  };

  const getStatus = (status: string) => {
    if (status.includes('|---|')) {
      const splits = status.split("|---|")
      if (splits.every((i)=>i=='2')) {
        return 'Complated';
      }else if(splits.some((i)=>i=='1')){
        return 'In Progress';
      }
      return 'Pending';
    } else {
       switch (status) {
      case '0':
        return 'Pending';
      case '1':
        return 'In Progress';
      case '2':
        return 'Complated';
      default:
        return 'Pending';
    }
    }

  };
  const Status = ({ status }) => {
    return (
      <>
        <div className='mt-4 flex flex-wrap gap-2'>
          {[
            {
              title: ['', '-'].includes(status) ? 'Panding' : status,
              prefix: `bg-${
                parseInt(satisfaction_rate) > 50 ? 'rose' : 'indigo'
              }-500`,
            },
          ].map((label, index) => (
            <Tag
              key={index}
              prefix
              className='mx-1 text-wrap'
              style={{ textWrap: 'auto' }}
              prefixClass={label.prefix}
            >
              {getStatus(label.title)}
            </Tag>
          ))}
        </div>
      </>
    );
  };

  const listBySeparate = (str: string) => {
    return str.split('|---|');
  };
  return (
    <div className='mb-4'  >
       { isMutipalRecord && key == 0 && <h4 className='font-bold mt-2  mb-2'>Total avarage</h4>}
      <Card bordered={cardBorder}>
        <div className='grid gap-x-4 grid-cols-12'>
          <div className='my-1 sm:my-0 col-span-12    md:flex md:items-center'>
            <div className='flex flex-col'>
              <h6 className='font-bold'>Description</h6>

              {listBySeparate(description).join(' | ')}
            </div>
          </div>

          <div className='my-1 sm:my-0 col-span-12   md:flex md:items-center'>
            <ProgressionBar progression={total_progression} />
          </div>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          {[
            {
              title: `Utilized Time `,
              prefix: 'bg-blue-500',
              details: `Total: ${
                parseInt(time_spent) + parseInt(wasted_time)
              } Utilazed: ${parseInt(time_spent)} Wasted: ${parseInt(
                wasted_time,
              )}`,
              element: (
                <TimeUtilization
                  wasted_time={wasted_time}
                  time_spent={time_spent}
                />
              ),
            },
            {
              title: `Estimated Time `,
              prefix: 'bg-blue-500',
              details: `Total: ${
                parseInt(time_spent) + parseInt(wasted_time)
              } Utilazed: ${parseInt(time_spent)} Wasted: ${parseInt(
                wasted_time,
              )}`,
              element: (
                <TimeEstimation
                  wasted_time={wasted_time}
                  time_spent={time_spent}
                  estimated_time={estimated_time ? estimated_time : time_spent}
                />
              ),
            },
            {
              title: 'Satisfaction',
              prefix: 'bg-rose-500',
              description: reason_for_satisfaction.length>0?"Reason for satisfaction rate":"",
              element: (
                <Satisfaction
                  reason_for_satisfaction={reason_for_satisfaction}
                  satisfaction_rate={satisfaction_rate}
                />
              ),
            },
            {
              title: 'Status',
              prefix: 'bg-amber-400',
              element: <Status status={status} />,
            },
            {
              title: `Notes`,
              prefix: 'bg-indigo-500',
              description: ['', '-'].includes(notes)
                ? 'no notes available'
                : notes,
            },
          ].map((label, index) => (
            <div className='my-1 sm:my-0 col-span-12    md:flex md:items-center'>
              <div className='flex flex-col w-full'>
                <h6 className='font-bold'> {label.title}</h6>
                <p>
                  {label?.description &&
                    `${label?.description}`.replace('|---|', ' | ')}
                </p>
                {/* <Tag
                  key={index}
                  prefix
                  className='mx-1'
                  prefixClass={label.prefix}
                >
                  {label?.details && label.details}{' '}

                </Tag> */}
                {label?.element && label.element}{' '}
              </div>
            </div>
          ))}
        </div>
      </Card>

      { isMutipalRecord && key == 0 && <h4 className='font-bold mt-2  mb-2'>Nested Records</h4>}
    </div>
  );
};

export default ListItem;
