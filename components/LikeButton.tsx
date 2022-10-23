import React, { useState, useEffect } from 'react'
import useAuthStore from '../store/authStore'
import { MdFavorite } from 'react-icons/md'

interface IProps {
    handleLike: () => void;
    handleDislike: () => void;
    likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDislike }: IProps) => {
    const { userProfile }: any = useAuthStore();
    const [liked, setLiked] = useState(false);
    const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

    useEffect(() => {
        if (filterLikes?.length > 0) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [filterLikes, likes]);

    return (
        <div className='flex gap-6'>
            <div className='mt-4 flex flex-col justify-center items-center cursor-pointe'>
                {liked ? (
                    <div className='bg-primary rounded-full p-2 md:p-4 text-[#f51997]' onClick={handleDislike}>
                        <MdFavorite className='text-lg md:text-2xl cursor-pointer' />
                    </div>
                ) : (
                    <div className='bg-primary rounded-full p-2 md:p-4' onClick={handleLike}>
                        <MdFavorite className='text-lg md:text-2xl cursor-pointer' />
                    </div>
                )}
                <p className='text-md font-semibold'>
                    {likes?.length || 0}
                </p>
            </div>
        </div>
    )
}

export default LikeButton