import { useEffect, useState } from 'react';
import styles from './MyGame.module.css';

export default function MyGame() {
     let [myboolean,setMyboolean]= useState(true);
   
    let mybox = []; 
    for(let i=0;i<9; i++){
        mybox.push(i);
    }
    
    function myfunc(e) {
        setMyboolean(!myboolean)
        if(myboolean == true)
       {
         e.target.innerHTML= `<img src="/cross.png" alt="" />`;
       }
       else {
        e.target.innerHTML= `<img src="/circle.png" alt="" />`;
       } 
    }

    useEffect(()=> {
        
        try {
            let j = document.querySelectorAll('img');
        console.log(j[0].getAttribute('src'));
        let a=j[0].getAttribute('src');
        let b=j[1].getAttribute('src');
        let c=j[2].getAttribute('src');
        let d=j[3].getAttribute('src');
        let e=j[4].getAttribute('src');
        let f=j[5].getAttribute('src');
        let g=j[6].getAttribute('src');
        let h=j[7].getAttribute('src');
        let i=j[8].getAttribute('src');

            if(a == '/cross.png' && b =='/cross.png' && c == '/cross.png')     
                {
                    alert(' player one win ');
                } 
             else if(a == '/circle.png' && b =='/circle.png' && c == '/circle.png') 
                    {
                        alert('plyer two win');
                    }
            
                    else if(d == '/cross.png' && e =='/cross.png' && f == '/cross.png')
                    {
                        alert(' player one win ');
                    }
                    else if(d == '/circle.png' && e =='/circle.png' && f == '/circle.png')
                    {
                        alert('plyer two win')
                    } 
                    
                    else if (g == '/cross.png' && h =='/cross.png' && i == '/cross.png'){
                        alert('player one win')
                    } 
                    else if(g == '/circle.png' && h =='/circle.png' && i == '/circle.png')
                        {
                            alert('player two is win')
                        } 
                    
                    
                    else if(a == '/cross.png' && d =='/cross.png' && g == '/cross.png')
                        {
                            alert('player one win')
                        }
                    else if(a == '/circle.png' && d =='/circle.png' && g == '/circle.png')
                            {
                                alert('player two win')
                            }

                    else if(b == '/cross.png' && e =='/cross.png' && h == '/cross.png')
                                {
                                    alert('player one win')
                                }
                    else if(b == '/circle.png' && e =='/circle.png' && h == '/circle.png')
                                    {
                                        alert('player two win')
                                    }

                    else if(c == '/cross.png' && f =='/cross.png' && i == '/cross.png')
                                        {
                                            alert('player one win')
                                        }
                    else if(c == '/circle.png' && f =='/circle.png' && i == '/circle.png')
                                            {
                                                alert('player two win')
                                            }                
           
                    else if (a == '/cross.png' && e =='/cross.png' && i == '/cross.png')
                        {
                            alert('player one is win')
                        }
                    else if (a == '/circle.png' && e =='/circle.png' && i == '/circle.png')
                            {
                                alert('player two is win')
                            }

                    else if (c == '/cross.png' && e =='/cross.png' && g == '/cross.png')
                                {
                                    alert('player one is win')
                                }
                    else if (c == '/circle.png' && e =='/circle.png' && g == '/circle.png')
                                    {
                                        alert('player two is win')
                                    }
                        


                        else {
                alert('match is draw');
            } 
            
        } catch (error) {
            console.log('wating for the result');
        }
    },[myboolean])
       
        
    return (
            <div className='container'>
                <h1 className='text-white m-4'>Here  <span className='text-danger'>"X"</span>  is a <span className='text-danger'>
                    Player One</span> and <span className='text-danger'>"0"</span> is a <span className='text-danger'>Player Two</span></h1>
                <div className={styles.myout}>
                    {mybox.map((my,index)=> {
                  return (
                      <div key={index} id={index} className={styles.my_in} onClick={(e)=>myfunc(e)}> </div>
                  );
              })}
              {/* <h1 className='text-danger'>{myboolean?'yes': 'no'}</h1> */}
          </div>
           {/* <button onClick={ourfunc}>click</button> */}
          </div>    
    );
}