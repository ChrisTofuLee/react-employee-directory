import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span className="remove" id={props.id} onClick={props.onDelete}>𝘅</span>
    </div>
  );
}

export default FriendCard;




import React, { Component, Fragment } from "react";
import axios from "axios";

import Card from "../components/Card";
import Header from "../components/Header";
import Result from "../components/Result";

class ToFriendOrNot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      friends: 0,
      showResult: false,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchRandomImage();
  }

  handleThumbsUp = () => {
    const result = 1 === Math.floor(Math.random() * 2) + 1;

    this.fetchRandomImage();

    if (result) {
      this.setState({
        showResult: true,
        friends: this.state.friends + 1,
      });
    } else {
      this.setState({
        showResult: false,
      });
    }
  };

  handleThumbsDown = () => {
    this.fetchRandomImage();
    this.setState({
      showResult: false,
    });
  };

  fetchRandomImage = async () => {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/randomx"
      );

      if (data.message) {
        this.setState({
          imageUrl: data.message,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    const { imageUrl, friends, showResult, loading, error } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>Oops</h1>;
    }

    return (
      <Fragment>
        <Card
          imageUrl={imageUrl}
          onThumbsUp={this.handleThumbsUp}
          onThumbsDown={this.handleThumbsDown}
        />
        <Header title={`Made friends with ${friends} pups so far!`} />
        {showResult ? <Result text="Yay! That Pup Liked You Too!!!" /> : null}
      </Fragment>
    );
  }
}

export default ToFriendOrNot;
