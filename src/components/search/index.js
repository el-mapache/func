import React from 'react';
import Button from '../button';
import Loading from '../composables/Loading';
import './search.css';


const LoadingButton = Loading(Button);

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.update = this.update.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    this.props.onSearch(this.state.value);
  }

  update(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { value } = this.state;
    const { onSearch, isLoading } = this.props;

    return (
      <div>
        <label htmlFor="search" className="block">
          Enter the name of a pokémon!
        </label>
        <input
          type="text"
          name="search"
          value={value}
          onInput={this.update}/>
        <LoadingButton
          type="submit"
          className="btn inline"
          isLoading={isLoading}
          disabled={isLoading}
          onClick={this.onSearch}
        >
          Search
        </LoadingButton>
      </div>
    );
  }
}

export default Search;
