import React from 'react'
import { Link } from 'react-router-dom'
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons"; 
import { DownOutlined } from "@ant-design/icons";


export default function Nav() {

  let topbarMenu = [
    {
      id: 1,
      name: "DASHBOARD",
    },{
      id: 2,
      name: "REPORTS",
    },{
      id: 3,
      name: "SCREENCASTS",
    },{
      id: 4,
      name: "EDIT",
    },{
      id: 5,
      name: "SETTINGS",
    },{
      id: 6,
      name: "INVITE",
    },{
      id: 7,
      name: "DOWNLOAD",
    },
  ];

  let NavItems = [{
      title: 3,
      name: "Export (UTC +05:30)Calcutta.Av",
    },{
      title: 4,
      name: "TODAY",
    },{
      title: 5,
      name: "YESTERDAY",
    },{
      title: 6,
      name: "PAST 7 DAYS",
    },{
      title: 7,
      name: "PAST 30 DAYS",
    }, 
  ];


  return (
    <>
    <header className='bg-gray-700 py-6 container-fluid '>
      <nav className=' container mx-auto text-center text-gray-300 items-center font-sans '>
       <div className='topbar flex items-center justify-between w-full'>
          <div className='text-white-400 list-none flex items-center ml-5 text-sm'>
            {topbarMenu.map((values) =>(
                <ul className='mr-6'>
                <li className='items-center flex'>
                  <Link className='mr-2 items-center hover:text-white'>
                  {values.id === 1 }
                  {values.name}
                  </Link>
                  <DownOutlined/> 
                </li>
                </ul>
            ))}
          </div>
          <div className='flex justify-between items-center'>
          <QuestionCircleOutlined />
          <p className='ml-5 hover:text-white'>Thinroot Software Private Limited</p>
          <span className='text-orange-400 ml-6 hover:text-white'>Harika</span>
          <div>
          <Avatar className="rounded-full bg-red-200 ml-4 w-2 h-max">H</Avatar>
          </div>
          </div>
       </div>
      </nav>
    </header>
    <div className='bg-gray-600 py-6 container-fluid'>
      <div className='flex items-center justify-between  text-gray-300 mx-9 '>
        <div className='flex items-center justify-between  hover:text-white'>
        <div className=' mx-10'>
          <p className='text-2xl text-white'>Team Dashboard</p>
        </div>
        <div>
          <Link to="" className='mr-3  hover:text-white'>
              All Users selected  
          </Link>
          <DownOutlined/>
        </div>
        </div>
        <div className='flex text-base font-sans  text-gray-300  px-2 py-2 ml-2'>
        {NavItems.map((nvitms) =>(
                <ul className='mr-6'>
                <li className='items-center flex'>
                  <Link className='mr-5 items-center hover:text-white'>
                  {nvitms.id === 1 }
                  {nvitms.name}
                  </Link> 
                </li>
                </ul>))}
        </div>
        <div className=''>
            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            type="danger"
            shape="round"
            icon={ <UserAddOutlined />}
            size={50}>
            ADD USERS
          </Button>
            </div>
      </div>
    </div>
  </>
  )
}
