import React, { useState } from 'react';
import './Timeline.css';
import Suggestion from './Suggestion';
import Post from './posts/Post';

const Timeline=()=>{
    const[postv,setPost]=useState([
        {
            user:"maddy25_",
            postImage:"https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.jpg?s=612x612&w=0&k=20&c=WHGBF2zwPkVMpAma832RbHrov6VwKIMXuDR3N2WmfGg=",
            likes: 567,
            timestamp:"2d",
        },
        {
            user:"john_snow23",
            postImage:"https://static.vecteezy.com/system/resources/thumbnails/022/448/291/small/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg",
            likes: 507847,
            timestamp:"12h",
        },
        {
            user:"potter_harry",
            postImage:"https://media.istockphoto.com/id/485155148/photo/young-couple-on-sunset.jpg?s=612x612&w=0&k=20&c=fgbxd5m8x1Csi-Q0gSMOXZZtm6_8F9NuF_2J7ZIYMI8=",
            likes: 54,
            timestamp:"9min",
        },
        {
            user:"khali_210",
            postImage:"https://static.abplive.com/wp-content/uploads/2016/07/12202719/Khali.jpg",
            likes: 1870,
            timestamp:"11d",
        },
        {
            user:"munnatripathi",
            postImage:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/10/pjimage-1-1603415208.jpg",
            likes: 156870,
            timestamp:"3 weeks",
        },
    ]);
    return(
        <div className='timeline'>
            <div className='timeline__left'>
                <div className='timeline__post'>
                    {postv.map((val)=>(
                        <Post user={val.user} postImage={val.postImage} likes={val.likes} timestamp={val.timestamp}/>
                    ))}
                </div>
            </div>
            <div className='timeline__right'>
                <Suggestion/>
            </div>
        </div>
    );
}

export default Timeline;