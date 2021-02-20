import React, { Component } from 'react'
import './Converter.css'


export default class Converter extends Component{

    constructor(props){
        super(props);

        this.state = {
            currencyA_value:"",
            currencyB_value:0,
        }
        this.convert = this.convert.bind(this)
    }

    convert(){
        let de_para = `${this.props.currencyA}_${this.props.currencyB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=c944102725bb5a6309c9`;
        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[de_para];
            let currencyB_value = (parseFloat(this.state.currencyA_value) * cotacao).toFixed(2)
            this.setState({currencyB_value});
        })
        console.log(parseFloat(this.state.currencyB_value));
    }

    render(){
        return(
            <div className="converter">
                <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
                <input type="text" onChange={(event)=>{this.setState({currencyA_value:event.target.value})}}></input>
                <button className="button" type="button" onClick={this.convert}>Convert</button>
                <h2>{this.state.currencyB_value}</h2>
            </div>
        )
    }


}