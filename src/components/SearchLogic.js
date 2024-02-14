// import React, { useState } from "react";
// import { SearchBar } from "./SearchBar";
// import { pokedata as data } from "./data";
// import "./App.css";

// export class Searchlogic extends Component {
//     static propTypes = {
  
//     }
//     state
  
//     render() {
//     async componentDidMount(){
//         let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b0d0bef5a0fc4232a57e8860aef19519&page=${1}`
//         let data= await fetch(url)
//         let parsedData= await data.json()
//         this.setState({articles:parsedData.articles,totalResults: parsedData.totalResults
        
//         })}
//   const [filteredData, setFilteredData] = this.useState(data);

//   return (
//     <div className="container">
//       <SearchBar 
//          data={data} 
//          setFilteredData={setFilteredData} 
//       />
//       <div className="pokedex">
//         {filteredData.map((pokemon) => (
//           <div className="pokemon" key={pokemon.id}>
//             <div>{pokemon.name}</div>
//             <div>{pokemon.type}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

