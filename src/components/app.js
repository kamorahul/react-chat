import React from 'react';
import RecipieForm from './RecipieForm'
import RecipieList from './RecipieList'


var dataForm = [{title:"the first Item" ,content:"the content of the first item"},
                    {title:"the second Item" ,content:"the content of the second item"}]


export default class App extends React.Component {
  render(){
    return (
        <div>
     <RecipieForm data={dataForm} />
     <RecipieList/>
            </div>
    )
  }
}
