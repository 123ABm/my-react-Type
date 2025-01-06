import { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './index.less'
import TextUpdaterNode from './TextUpdaterNode';
import axios from 'axios';
const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: 'node-2',
    type: 'output',
    targetPosition: 'top',
    position: { x: 0, y: 200 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: 'top',
    position: { x: -200, y: 200 },
    data: { label: 'node 3' },
  },
  {
    id: 'node-4',
    type: 'output',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: { label: 'node 4' },
  },
];
const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' },
  { id: 'edge-3', source: 'node-1', target: 'node-4', sourceHandle: 'c' }
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };

const Wordtree = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // 添加默认的机器人消息
    setMessages([
      {
        sender: 'ai',
        text: `1.使用世界树：你可以体验基于Ai的最新前沿技术，知识更新至2024年10月。
2.识图问答：能够通过分析图像来回答与图片相关的问题。
3.AI绘图：通过DALL·E 3，可以根据你的描述生成相关的图像。
4.联网搜索：通过Browse with Bing，可以为你进行网络搜索来提供更为详细的答案。
5.上传文件：允许你上传文件，以便进行更深入的分析或处理，包括文档、图片等。`
      }
    ]);
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
const [aiResponse2, setAiResponse2] = useState('');
  const handleSend = async () => {
    if (inputValue.trim() === '') return;

    // Add user message to chat
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: inputValue }]);

    // Call AI API
    const aiResponse = await fetchAIResponse(inputValue);

    // Add AI response to chat
    setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: aiResponse }]);

    // Clear input
    setInputValue('');
  };

  const fetchAIResponse = async (message) => {
    // Replace with actual API call
    // Example: const response = await fetch('https://api.example.com/ai', { method: 'POST', body: JSON.stringify({ message }) });
    // const data = await response.json();
    // return data.reply;
  const res = await axios.get('http://127.0.0.1:3007/getAi/getAi',{
      params:{
        message:message
      }
    }).then(async res=>{
        console.log(res.data.data)
        return res.data.data;
    })
    return res;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className='wordtree2'>
    <div className="wordtree">
<ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
    />
    </div>
    <div className="chatbox">
      <div className="chat-box">
        <div className="chat-header">世界树机器人</div>
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.sender === 'ai' && <img src="https://img2.baidu.com/it/u=2412640570,499828458&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500" alt="Robot Avatar" className="avatar" />}
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="请输入消息" />
          <button onClick={handleSend}>发送</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Wordtree;
