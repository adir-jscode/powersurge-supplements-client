import React from 'react';
import Categories from '../../Categories/Categories';
import Inventory from '../../Inventory/Inventory';
import RecentPost from '../../RecentPost/RecentPost';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Inventory></Inventory>
            <RecentPost></RecentPost>
            
        </div>
    );
};

export default Home;