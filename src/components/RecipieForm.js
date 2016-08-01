/**
 * Created by rahul on 29/7/16.
 */

import React from 'react';


var Recipie  = React.createClass({
    getInitialState  : function(){
        console.log(this.props)
        return null
    },
    render(){
        return (
            <div>
                <h2>
                    {this.props.title}
                </h2>
                <p>
                    {this.props.content}
                </p>
            </div>
        )
    }

})


export default class RecipieForm extends React.Component{
    render(){
        var Recipies = this.props.data.map(function(recipie,index){
            return (
                <Recipie key={index} title={recipie.title} content={recipie.content}/>
            )
        })
        return (
            <div>
                {Recipies }

            </div>
        )
    }

}
