const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Search Result</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.car_make}</td>
              <td>{item.animal_scientific}</td>
              <td>{item.car_model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;