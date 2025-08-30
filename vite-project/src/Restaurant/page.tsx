import Navbars from '../HomePage/Navbar';
import RestaurantHero from './RestaurantHero';
import RestaurantFooter from './RestaurantFooter';

const Restaurant = () => {
  return (
    <main className='bg-primary'>
      <Navbars />
      <RestaurantHero />
      <RestaurantFooter />
    </main>
  );
};

export default Restaurant;
