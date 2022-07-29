import { v4 as uuidv4 } from 'uuid';

const url = 'https://covid-19.dataflowkit.com/v1';

const GET_DATA = 'REDUX/GETDATA';

export default function dataReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}

function getData() {
  return async (dispatch) => {
    const response = await fetch(url);
    const data1 = await response.json();
    const data = [];
    data1.forEach((item) => {
      data.push(
        {
          id: uuidv4(),
          'Active Cases_text': item['Active Cases_text'] ? item['Active Cases_text'] : 'No active cases reported',
          Country_text: item.Country_text,
          'Last Update': item['Last Update'] ? item['Last Update'] : 'Update overdue',
          'New Cases_text': item['New Cases_text'] ? item['New Cases_text'] : '0',
          'New Deaths_text': item['New Deaths_text'] ? item['New Deaths_text'] : '0',
          'Total Cases_text': item['Total Cases_text'],
          'Total Deaths_text': item['Total Deaths_text'],
          'Total Recovered_text': item['Total Recovered_text'],
        },
      );
    });
    dispatch({
      type: GET_DATA,
      payload: data,
    });
  };
}

export { getData };
