import React from "react";
import styled from "styled-components";

const SearchBar = styled.div`
  padding: .2rem;
  border: 2px solid #bdbdbd;
  background-color: #efefef;

  & > input {
    width: 16rem;
    height: 1.2rem;
    padding: .2rem;
    border: 0;
    background-color: transparent;
    font-size: .8rem;
    line-height: .8rem;
  }

  & > button {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: .2rem;
    padding: .1rem;
    border: 0;
    background-color: transparent;
    font-size: .8rem;
    line-height: 1rem;
    cursor: pointer;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  
    transition: background-color .1s ease;
    -webkit-transition: background-color .1s ease;
  }

  & > button:hover {
    background-color: rgba(0,0,0,.2);
  }

  & > button > i {
    width: 1rem;
    height: 1rem;
    font-size: .8rem;
    line-height: 1rem;
  }
`;

class SearchBarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    this.setState({ value: evt.target.value });
    console.log(this.state.value);
  }

  render() {
    return (
      <form>
        <SearchBar>
          <input type="text" onChange={this.onChange} placeholder={this.props.children} />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </SearchBar>
      </form>
    );
  }
}

export default SearchBarForm;
