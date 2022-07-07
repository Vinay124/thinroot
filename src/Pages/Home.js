import React from 'react'
import { Link } from 'react-router-dom';
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Avatar, Image, Button } from "antd";
import { DownloadOutlined, sizetype } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons"; import { CloudDownloadOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FolderOutlined } from "@ant-design/icons";
import { TeamOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <>
    <section className='container-fluid'>
     <div className='mt-6 mx-8 mb-8 px-8 flex justify-between'>
       <div>
       <h1 className='text-2xl'>OverView</h1>
       </div>
        <div>
          <Link className='text-2xl'>Widgets</Link>
        </div>
        </div>
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 gap-0 p-5 pl-5 text-base w-full rounded bg-neutral-100'>
          <div className="p-10 border-r-2">
            <div className=''>Total time tracked <InfoCircleOutlined/></div>
            <div className='text-4xl'>0m</div>
          </div>
          <div className="p-10 border-r-2  ">
            <div>Total manual time <InfoCircleOutlined/></div>
            <div className='text-4xl'>0m</div>
          </div>
          <div className="p-10 border-r-2">
           <div>Total mobile time <InfoCircleOutlined/></div>
           <div className='text-4xl'>0M</div> 
          </div>
          <div className="p-10 border-r-2">
            <div>Total unproductive website & app usage <InfoCircleOutlined/></div>
            <div className='text-4xl'>0m</div>
          </div>
          <div className="p-10 border-r-2">
             <div>Total active users <InfoCircleOutlined/></div>
             <div className='text-4xl'>0M</div>
            </div>
          </div>
        </div>
    </section>
    
    </>
  )
}
