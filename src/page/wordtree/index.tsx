import { useCallback, useState, useEffect, useRef } from 'react';
import { Spin } from 'antd';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Handle,
  MiniMap,
  Controls,
  Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './index.less'
import TextUpdaterNode from './TextUpdaterNode';
import axios from 'axios';
    const rfStyle = {
  // backgroundColor: '#B8CEFF',
};
import  OmsSyntaxHighlight  from './highCode';
import { log } from 'console';
const initialNodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data:{},
    isConnectable:false
  }
];

const additionalNodes = [
  {
    id: 'node-2',
    type: 'output',
    targetPosition: 'top',
    position: { x: 5, y: 200 },
    data: { label: 'node 2' },
    style:{
     border:'none',
     maxHeight:'500px',
     width:'200px',
     padding:'10px',
     overflowY:'scroll'
    }
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: 'top',
    position: { x: -250, y: 200 },
    data: { label: 'node 3' },
    style:{
     border:'none',
      width:'200px',
      maxHeight:'500px',
      padding:'10px',
     overflowY:'scroll'
    },
  },
  {
    id: 'node-4',
    type: 'output',
    targetPosition: 'top',
    position: { x: 250, y: 200 },
    data: { label: 'node 4' },
    style:{
     border:'none',
      width:'200px',
      maxHeight:'500px',
      padding:'10px',
     overflowY:'scroll'
    },
  },
];

const additionalEdges = [
  { 
    id: 'edge-1', 
    source: 'node-1', 
    target: 'node-2', 
    sourceHandle: 'a', 
    type: 'straight', 
    style: { 
      stroke: '#d85886', 
      strokeDasharray: '5,5', // 设置虚线
      animation: 'dash 1s linear infinite' // 添加动画
    } 
  },
  { 
    id: 'edge-2', 
    source: 'node-1', 
    target: 'node-3', 
    sourceHandle: 'b', 
    type: 'step', 
    style: { 
      stroke: '#d85886', 
      strokeDasharray: '5,5', 
      animation: 'dash 1s linear infinite' 
    } 
  },
  { 
    id: 'edge-3', 
    source: 'node-1', 
    target: 'node-4', 
    sourceHandle: 'c', 
    type: 'step', 
    style: { 
      stroke: '#d85886', 
      strokeDasharray: '5,5', 
      animation: 'dash 1s linear infinite' 
    } 
  }
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };

const Wordtree = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const [showAdditional, setShowAdditional] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: `1.使用世界树：你可以体验基于GPT-4的最新技术，知识更新至2023年10月。\n
2.识图问答：能够通过分析图像来回答与图片相关的问题。\n
3.AI绘图：通过DALL·E 3，可以根据你的描述生成相关的图像。\n
4.联网搜索：通过Browse with Bing，可以为你进行网络搜索来提供更为详细的答案。\n
5.GPTs商店：内置GPTs商店，可以帮助你实现更多特定场景的对话体验，还可以自己定制GPTs应用。`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages2, setMessages2] = useState('');
  const chatEndRef = useRef(null);
  const aiAvatarRef = useRef(null);
  const chatBodyRef = useRef(null);
const childref=useRef(null)
  useEffect(() => {
    setMessages([
      {
        sender: 'ai',
        text: `1.使用世界树：你可以体验基于AI的最新技术，知识更新至2024年10月。
      2.识图问答：能够通过分析图像来回答与图片相关的问题。
3.AI绘图：通过DALL·E 3，可以根据你的描述生成相关的图像。
4.联网搜索：通过Browse with Bing，可以为你进行网络搜索来提供更为详细的答案。
5.GPTs商店：内置GPTs商店，可以帮助你实现更多特定场景的对话体验，还可以自己定制GPTs应用。`
      }
    ]);
  }, []);

  const scrollToBottom = () => {
    chatBodyRef.current.scrollTop = chatBodyRef.current?.scrollHeight + 700;
  };

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
  const handleSend = async () => {
    setMessages2(inputValue);
    if (inputValue.trim() === '') return;

   await setInputValue('');

   await setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: inputValue }
    ]);

   await setLoading(true);
scrollToBottom();
    try {
      const aiResponse = await fetchAIResponse(inputValue);
      console.log('AI Response:', aiResponse);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: aiResponse }
      ]);

    } catch (error) {
      console.error('Error handling send:', error);
    } finally {
      setLoading(false);
     
    }
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

  const handleRun = async (value) => {
    setShowAdditional(true);
    setEdges((prevEdges) => [...prevEdges, ...additionalEdges]);
    
    // 设置加载状态
    setNodes((prevNodes) => {
      const updatedNodes = prevNodes.map(node => 
        node.id === 'node-1' ? { ...node, data: { ...node.data, showHandles: true }, isConnectable: node.isConnectable } : node
      );

      const loadingNodes = additionalNodes.map((node) => ({
        ...node,
        data: { ...node.data, label: <Spin />, resizable: true },
        isConnectable: node.isConnectable ?? false
      }));

      return [...updatedNodes, ...loadingNodes];
    });

    // 并行请求 AI 接口三次
    try {
      const responses = await Promise.all([
        axios.get('http://127.0.0.1:3007/getAi/getAi', { params: { message: value } }),
        axios.get('http://127.0.0.1:3007/getAi/getAi', { params: { message: value } }),
        axios.get('http://127.0.0.1:3007/getAi/getAi', { params: { message: value } })
      ]);

      const aiResponses = responses.map(response => response.data.data);
      console.log('AI Responses:', aiResponses);

      // 更新 additionalNodes 的数据
      setNodes((prevNodes) => {
        const updatedNodes = prevNodes.map(node => 
          node.id === 'node-1' ? { ...node, data: { ...node.data, showHandles: true } } : node
        );

        const newAdditionalNodes = additionalNodes.map((node, index) => ({
          ...node,
          data: { 
            ...node.data, 
            label: <OmsSyntaxHighlight textContent={aiResponses[index] || node.data.label} language={'javascript'} darkMode={true} />,
            resizable: true
          }
        }));

        return [...updatedNodes, ...newAdditionalNodes];
      });

    } catch (error) {
      console.error('Error fetching AI responses:', error);
    }
  };

  return (
    <div className='wordtree2'>
      <div className="wordtree">
        <ReactFlow
        ref={childref}
        
          nodes={nodes.map(node => ({
            ...node,
            data: {
              ...node.data,
              handleRun,
              messages2,
              resizable: true
            },
          }))}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={{ textUpdater: TextUpdaterNode }}
          fitView
          style={rfStyle}
        >
          <MiniMap nodeColor='#d85886' zoomable pannable/>
              <Controls showZoom={true} />
            
        </ReactFlow>
      </div>
    
      <div className="chatbox">
        <div className="chat-box">
          <div className="chat-header">世界树机器人</div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.sender === 'ai' && (
                  <div className="avator" ref={aiAvatarRef}>
                    <div className='avbg'></div>
                    <div className="bbb">
                      <img
                        src="src/page/wordtree/assets/img/TREE.png"
                        alt="Robot Avatar"
                        className="avatar"
                      />
                    </div>
                  </div>
                )}
                <p className='chatp'>
                  {/* {msg.text} */}
                   <OmsSyntaxHighlight textContent={msg.text} language={'javascript'} darkMode={true} />
                </p>
              </div>
            ))}
            {loading && (
              <div className="avator">
                <div className='avbg'></div>
                <div className="bbb">
                  <img
                    src="src/page/wordtree/assets/img/TREE.png"
                    alt="Robot Avatar"
                    className="avatar"
                  />
                  <Spin />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="请输入消息"
            />
            <button onClick={handleSend}>发送</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wordtree;
