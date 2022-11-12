import Cards from './../../components/Cards/Cards.jsx';
import FilterCat from '../../components/FilterCategory/filtCat';
import FilterUsed from '../../components/FilterUsed/FilterUsed';

//Dummy components
// const Filter1 = () => <h1>Filtro por categoria</h1>
// const Filter2 = () => <h1>Filtro por nuevo o usado</h1>

function Home() {
  return (
    <div>            
      <FilterCat />
      <FilterUsed />
      <Cards />
    </div>  
  )
}

export default Home;