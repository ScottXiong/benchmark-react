import React from 'react';


class Left extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:['美国','加拿大','检查档案','非WMT']
		}
	}
	handleClick(index){
        console.log(index)
	}
	render(){
		return (
           <div className='left'>
              <h3> <i className="fa fa-cog fa-spin"></i>  业务流程</h3>
              {
              	this.state.list.map((value,index)=><h5 key={index} style={{marginLeft:'40px',fontSize:'18px',color:'#ccc',lineHeight:'0px',marginTop:'1px',padding:'3px'}}
              		onClick={(index)=>{this.handleClick()}} >{value}{index}</h5>)
              }
             
           </div>
	    )
	}
}

export default Left;