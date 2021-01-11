import React,{Component} from 'react'


export class GetRandom extends Component{
    render(){
     
       function RenderIntgers() {

        var random=Math.floor(Math.random() * 100)

      return (
      <>
        <h4>{random}</h4>
      </>

    );
}   

        return(<>
         
            <RenderIntgers />
          
            </>
        )
    }

}