import "./Journeys.scss";
import {gql, useMutation, useQuery} from "@apollo/client";
import {Journey} from "../../gql/graphql";
import React, {useEffect, useState} from "react";


const journeysInfoQuery = gql`
{
    journeyCollection {
      edges {
        node {
          inbound
          status
          from_address
          to_address
          id
          traveller_info {
            first_name
            last_name
          }
        }
      }
    }
  }
`;

//
// const DELETE_ITEM_MUTATION = gql`
//   mutation deleteFromjourneyCollection(){
//     id: UUID
//     }
// `;

const ADD_DATA_MUTATION = gql`
    mutation insertIntojourneyCollection($type: journeyInput!) {
      id: UUID
created_at
from_address
to_address
fare
inbound
traveller_info
status
    }
`;

export default function Journeys() {
    const {data: journeysInfoResult} = useQuery(journeysInfoQuery);
    // const [deleteFromjourneyCollection] = useMutation(DELETE_ITEM_MUTATION);
    const [insertIntojourneyCollection] = useMutation(ADD_DATA_MUTATION);
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('')
    const [filteredJourneyData, setFilteredJourneyData] = useState([]);
    const [from_address, setFrom_address] = useState('');
    const [to_address, setTo_address] = useState('');
    const [traveller_name, setTraveller_name] = useState('');
    const changeSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value)

    const journeysData = journeysInfoResult?.journeyCollection?.edges?.map((journey: {
        node: Journey
    }) => journey.node) ?? [];

    useEffect(() => {
            let filtered = journeysData;
            if (search) {
                filtered = filtered.filter((journey: Journey) =>
                    journey.traveller_info.first_name.toLowerCase().includes(search) || journey.traveller_info.last_name.toLowerCase().includes(search)
                );
            }
            if (sort === 'PENDING' || sort === 'COMPLETED') {
                filtered = filtered.filter((journey: Journey) => journey.status === sort);
            }

            setFilteredJourneyData(filtered);
        },
        [sort, search, journeysData]
    )
    const removeJourney = (id: string) => {
        console.log('delete', id)
    }
    const addJourney = (from_address: string,
                        to_address: string, traveller_name: string) => {
        console.log('add', from_address, to_address, traveller_name)
    }

    return (
        <div className="content">

            <div className="filtration">
                <p className="greeting">Search</p>
                <p>Status</p>
                <select name='status' onChange={changeSorting} value={sort}>
                    <option value='ALL'>ALL</option>
                    <option value='PENDING'>PENDING</option>
                    <option value='COMPLETED'>COMPLETED</option>
                </select>
                <label>Find by name</label>
                <input className='input' value={search} onChange={handleChange} id="name" name={search} type={search}/>
            </div>

            <div className="journeys">
                <p className="greeting">Journeys</p>
                {filteredJourneyData.map((journey: Journey) => {
                    return (
                        <div className="journey" key={journey.id}>

                            <div className="journey__from_address">
                                <span>From</span>
                                <p> {journey.from_address}</p>
                            </div>
                            <div className="journey__inbound">{String(journey.inbound)}</div>

                            <div className="journey__to_address">
                                <span>to</span>
                                <p>  {journey.to_address}</p>
                            </div>

                            <div className="journey__status">
                                <span>status:</span>
                                <p>  {journey.status}</p>
                            </div>
                            <div
                                className="journey__traveller_info">{journey.traveller_info.first_name} {journey.traveller_info.last_name}</div>
                            {journey.status === 'COMPLETED' ?
                                <button onClick={() => removeJourney(journey.id)}>Remove</button>
                                : null}
                        </div>
                    )
                })
                }
            </div>


            <div className="main-form">
                <p className="greeting">Add new journey</p>
                <form
                    className="form"
                    onSubmit={e => {
                        e.preventDefault();
                        addJourney(from_address, to_address, traveller_name)
                    }}
                >
                    <label htmlFor="from_address">Add start address:</label>
                    <input className='input' name='from_address' value={from_address}
                           onChange={(e) => setFrom_address(e.target.value)}/>
                    <label htmlFor="to_address">Add end address:</label>
                    <input className='input' name='to_address' value={to_address}
                           onChange={(e) => setTo_address(e.target.value)}/>
                    <label htmlFor="name">Add traveller name:</label>
                    <input className='input' name='traveller_name' value={traveller_name}
                           onChange={(e) => setTraveller_name(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
