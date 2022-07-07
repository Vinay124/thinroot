import React from 'react'
import { Link } from 'react-router-dom';
import { InfoCircleOutlined } from "@ant-design/icons";
import { FolderOutlined } from "@ant-design/icons";
import { TeamOutlined } from "@ant-design/icons";
import { SettingOutlined } from "@ant-design/icons"

export default function Home() {

  return (
    <>
    <section className='container-fluid'>
     <div className='mt-6 mx-8 mb-8 px-8 flex justify-between'>
       <div>
       <h1 className='text-2xl'>OverView</h1>
       </div>
        <div className='flex justify-center'>
        <div>
        <SettingOutlined />
        </div>
          <Link className='text-2xl ml-3'>Widgets </Link>
        </div>
        </div>
        <div className='container mx-auto bg-white shadow-lg shadow-slate-200'>
          <div className='grid grid-cols-5 gap-0 p-1 pl-1 text-base w-full rounded bg-neutral-100'>
          <div className="p-10 border-r-2">
            <div className='mb-5'>Total time tracked <InfoCircleOutlined/></div>
            <div className='text-4xl'>0M</div>
          </div>
          <div className="p-10 border-r-2  ">
            <div  className='mb-5'>Total manual time <InfoCircleOutlined/></div>
            <div className='text-4xl'>0M</div>
          </div>
          <div className="p-10 border-r-2">
           <div  className='mb-5'>Total mobile time <InfoCircleOutlined/></div>
           <div className='text-4xl'>0M</div> 
          </div>
          <div className="p-10 border-r-2">
            <div  className='mb-5'>Total unproductive website & app usage <InfoCircleOutlined/></div>
            <div className='text-4xl'>0M</div>
          </div>
          <div className="p-10">
             <div className='mb-5'>Total active users <InfoCircleOutlined/></div>
             <div className='text-4xl'>0M</div>
            </div>
          </div>
        </div>
    </section>

    <section className='container-fluid p-20 mt-8'>
      <div className='container mx-auto justify-between flex items-center  shadow-sm'>
        <div className='w-full h-auto bg-gray text-base p-9 bg-slate-100 rounded px-8 shadow-lg shadow-slate-200'>
          <div className='flex justify-between items-center p-8'>
            <div>
              <Link className='text-xl'>TopProject <InfoCircleOutlined/></Link>
            </div>
            <div>
              <Link className='text-xl'>Manage Project</Link>
            </div>
          </div>
          <div className='text-center p-5'>
            <div className='text-5xl text-gray-400 mb-6'><FolderOutlined /></div>
            <div>
              <p className='text-xl text-slate-700'>No Project to show</p>
            </div>
          </div>
          <div className='text-end p-8 text-xl'>
            <p>Project reports</p>
          </div>
        </div>
        <div className=' w-full h-auto bg-gray text-base py-9 bg-slate-100 m-5 rounded px-8 shadow-lg shadow-slate-200'>
          <div className='flex justify-between items-center p-5 '>
            <div className=''>
              <Link className='text-xl'>TopProject <InfoCircleOutlined/></Link>
            </div>
            <div>
              <Link className='text-xl'>Manage Project</Link>
            </div>
          </div>
          <div className='text-center p-0'>
            <div className='text-5xl text-gray-400 mb-2'><TeamOutlined /></div>
            <div>
              <p className='text-base text-slate-700 pb-5'>All people appearng in reports have track work. you can dismiss this Widgets and  it will re-appear once there are new perple who haven't tracked time</p>
            </div>
            <button className='bg-transparent hover:bg-blue-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>
              DISSMISS
            </button>
          </div>
          <div className='text-end p-8 text-xl'>
            <p className='text-xl'>Project reports</p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
