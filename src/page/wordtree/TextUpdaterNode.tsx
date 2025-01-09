import { useCallback, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Button } from "antd";
import './Text.less'
import { CaretRightOutlined } from '@ant-design/icons';
import { log } from 'console';

function TextUpdaterNode({ data, isConnectable }) {
  const [value,setValue] = useState('')
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
    setValue(evt.target.value)
   
    
  }, []);
  const onRun = useCallback(async()=>{
    await data.handleRun(value);
  },[value, data])
  return (
    <div className="Text">
<div className="text-updater-node">
      <div className='itme1'>
        <label htmlFor="text">请输入问题:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
       
      </div>
      <div className='itme2'>
        <Button type="primary" onClick={onRun}>运行<CaretRightOutlined /></Button>
      </div>
       {/* {data.showHandles && ( */}
        <>
        
          <Handle
            type="source"
            position={Position.Bottom}
            id="a"
            isConnectable={isConnectable}
            style={{ background: '#d85886' }}
          />
          <Handle
            type="source"
            position={Position.Left}
            id="b"
            isConnectable={isConnectable}
            style={{ background: '#d85886' }}
          />
          <Handle
            type="source"
            position={Position.Right}
            id="c"
            isConnectable={isConnectable}
            style={{ background: '#d85886' }}
          />
          </>
           {/* )}  */}
        
      
    </div>
    </div>
    
  );
}

export default TextUpdaterNode;
