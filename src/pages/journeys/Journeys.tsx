import "./Journeys.scss";
import {gql, useMutation, useQuery} from "@apollo/client";
import {Journey} from "../../gql/graphql";
import React, {useEffect, useState} from "react";

enum Status {
    ALL = 'ALL',
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED'
}

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

const DELETE_JOURNEY_MUTATION = gql`
    mutation DeleteFromJourneyCollection($filter: JourneyFilter!, $atMost: Int!) {
        deleteFromJourneyCollection(filter: $UUIDFilter, atMost: $atMost) {
           id
        }
    }
`;


const ADD_DATA_MUTATION = gql`
   mutation InsertIntoJourneyCollection($objects: [JourneyInsertInput!]!) {
        insertIntojourneyCollection(objects: $objects) {     
            created_at
            from_address
            to_address
            fare
            inbound
            traveller_info {
            id
            }

    }
    }
`;

export default function Journeys() {
    const {data: journeysInfoResult} = useQuery(journeysInfoQuery);
    const [deleteFromjourneyCollection] = useMutation(DELETE_JOURNEY_MUTATION);
    const [insertIntojourneyCollection] = useMutation(ADD_DATA_MUTATION);
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('')
    const [filteredJourneyData, setFilteredJourneyData] = useState([] as Journey[]);
    const [newJourneyData, setNewJourneyData] = useState({
        from_address: '',
        to_address: '',
        fare: '0',
        inbound: true,
        status: Status.PENDING,
        created_at: '2021-09-01T00:00:00.000Z',
        traveller_info: {
            id: 'e39d35ab-ecca-483d-908e-7ce22987ae92',
        }
    });
    const changeSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value)

    const journeysData = journeysInfoResult?.journeyCollection?.edges?.map((journey: {
        node: Journey
    }) => journey.node) ?? [];

    useEffect(() => {
            let filtered: Journey[] = [];
            if (search) {
                filtered = journeysData.filter((journey: Journey) => journey.traveller_info.first_name.toLowerCase().includes(search.toLowerCase()) || journey.traveller_info.last_name.toLowerCase().includes(search.toLowerCase())
                );
            }
            if (sort === Status.PENDING || sort === Status.COMPLETED) {
                filtered = journeysData.filter((journey: Journey) => journey.status === sort);
            }

            setFilteredJourneyData(filtered);
        },
        [sort, search]
    )
    const removeJourney = (id: string) => {
        deleteFromjourneyCollection({
            variables: {
                filter: {id},
                atMost: 1
            }
        })
        //TODO this is not a real deletion, just a mock
        console.log('delete', id)
    }

    //TODO would be nice to extract this type
    type journeyInfo = {
        from_address: string,
        to_address: string,
        traveller_info: {
            id: string,
        }
    }
    const addJourney = (newJourneyData: journeyInfo) => {
        insertIntojourneyCollection({variables: {objects: [newJourneyData]}})
        //TODO this is not a real adding, just a mock
        console.log('add', newJourneyData)
    }

    return (
        <div className="content">

            {/*//TODO this could be a distinct filter component*/}
            <div className="filtration">
                <p className="greeting">Search</p>
                <p>Status</p>
                <select name='status' onChange={changeSorting} value={sort}>
                    <option value={Status.ALL}>{Status.ALL}</option>
                    <option value={Status.PENDING}>{Status.PENDING}</option>
                    <option value={Status.COMPLETED}>{Status.COMPLETED}</option>
                </select>
                <label>Find by name</label>
                <input className='input' value={search} onChange={handleChange} id="name" name={search} type={search}/>
            </div>

            {/*//TODO this could be a distinct list component*/}
            <div className="journeys">
                <p className="greeting">Journeys</p>
                {(filteredJourneyData.length > 0 ? filteredJourneyData : journeysData).map((journey: Journey) => {
                    return (
                        <div className="journey" key={journey.id}>
                            <div className="journey__detail">
                                <span>from</span>
                                <p className={`${journey.inbound ? 'text' : 'inbound_text'}`}>{journey.from_address}</p>
                            </div>
                            <div className="journey__detail">
                                <span>to</span>
                                <p className='text'> {journey.to_address}</p>
                            </div>

                            <div className="journey__detail">
                                <span>Status:</span>
                                <p className='text'> {journey.status}</p>
                            </div>
                            <div
                                className="journey__detail">
                                <span>Traveler:</span>
                                <p className='text'>{journey.traveller_info.first_name} {journey.traveller_info.last_name}</p>
                            </div>
                            {journey.status === Status.COMPLETED ?
                                <button className='btn' onClick={() => removeJourney(journey.id)}>Remove</button>
                                : null}
                        </div>
                    )
                })
                }
            </div>

            {/*//TODO this could be a distinct add journey component*/}
            <div className="main-form">
                <p className="greeting">Add new journey</p>
                <form
                    className="form"
                    onSubmit={e => {
                        e.preventDefault();
                        addJourney(newJourneyData)
                    }}
                >
                    <label htmlFor="from_address">Add start address:</label>
                    <input className='input' name='from_address' value={newJourneyData.from_address}
                           onChange={(e) => setNewJourneyData({...newJourneyData, from_address: e.target.value})}/>
                    <label htmlFor="to_address">Add end address:</label>
                    <input className='input' name='to_address' value={newJourneyData.to_address}
                           onChange={(e) => setNewJourneyData({...newJourneyData, to_address: e.target.value})}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
