import React,{Component} from 'react'
import {GetRandom} from './GetRandom'

export class List extends Component{
    render(){
        
        function GetList() {
                var tab=[];
               
              
                for(var i=0;i<10;i++){
                    tab.push(<li><GetRandom /></li>) 
                }
                return (
                    <>
                    <ul>
                    {tab}
                    </ul> 
                    </>
              
                  );

  
    
 }   
 
         return(<>
          
             <GetList />
           
             </>
         )
     }

}