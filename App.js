
class Table extends React.Component {
    render() {
      return (
        <table>
            <tr>
                <th>{this.props.name}</th>
              </tr>
        </table>
      );
    }
  }
  
  function addElement() {
    ReactDOM.render(
      <Table name='Apeksha'/>,
      document.getElementsByClassName('root')
    );
  }
  
