import React from 'react';
import { useQuery, gql } from '@apollo/client';


interface MyState {
    data: object
}

interface IPage{
    users:[IUser],
}
interface IUser{
    id: number,
name: String,
about:String
}

function Caller() {


    const query = gql`
        query {
            Page(page: 1,perPage:2) {
             users{
                 id,
              name,
            about
                    }
            }
          }
      `;


    const { loading,data, error ,refetch} = useQuery(query);
    if (loading) return <p>Loading...</p>

    // if (error) return <p>Error: {error.message}</p>
    return(<div>
        <ul>
        {data.Page.users.map((user:IUser) => (
            
                <li key={user.id}><span>{user.name}: 
                {user.about}
                </span></li>
            
        ))
    }
        </ul>
        <button onClick={()=>refetch()} >refetch!</button>
        </div>
    )

}


export default Caller;