import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import axios from 'axios';


const Home=()=>{
    const [foodItems, setFooditems] = useState([]);
  const [filteredItems, setFiltereditems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://mocki.io/v1/5b3577f4-b9a2-4649-8df3-b092faf549eb')
      .then((response) => {
        setFooditems(response.data);
        setFiltereditems(response.data);
      });
  }, []);

  const searchFunc = (input) => {
    setSearch(input);
    if (input === '') {
      setFiltereditems(foodItems);
    } else {
      setFiltereditems(foodItems.filter(item => item.name.toLowerCase().includes(input.toLowerCase())));
    }
  };

  const categoryFunc = (category) => {
    if (category === 'All') {
      setFiltereditems(foodItems);
    } else {
      setFiltereditems(foodItems.filter(item => item.category === category));
    }
  };

 return(
<div className="app">
<Navbar onSearch={searchFunc} />
<Category onSelectCategory={categoryFunc} />
<div className="food-items">
  {filteredItems.map(item => (
    <FoodCard key={item.id} item={item} />
  ))}
</div>
<Footer/>
</div>
 )

}

export default Home;